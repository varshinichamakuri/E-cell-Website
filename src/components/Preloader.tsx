import { useEffect, useRef } from 'react'
import './Preloader.css'

type Props = {
  onFinish?: () => void
  logoSrc?: string
  variant?: 'pulse' | 'zoom' | 'assemble'
}

export default function Preloader({ onFinish, logoSrc = '/e-cell-logo.png', variant = 'pulse' }: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const taglineRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const intro = rootRef.current
    const tagline = taglineRef.current
    if (!intro || !tagline) {
      onFinish?.()
      return
    }

    const totalHold = 3600
    const fadeOutDuration = 700
    const charStagger = 60

    // split tagline into spans
    const text = tagline.textContent || ''
    tagline.innerHTML = ''
    const frag = document.createDocumentFragment()
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement('span')
      span.className = 'tag-char'
      span.textContent = text[i]
      frag.appendChild(span)
    }
    tagline.appendChild(frag)

    // timeline: play -> show tagline -> pulse -> exit zoom
    const timers: number[] = []
    timers.push(window.setTimeout(() => intro.classList.add('play'), 60))

    timers.push(window.setTimeout(() => {
      intro.classList.add('tag-shown')
      const chars = tagline.querySelectorAll<HTMLElement>('.tag-char')
      chars.forEach((ch, i) => {
        timers.push(window.setTimeout(() => ch.classList.add('in'), i * charStagger))
      })
    }, 850))

    timers.push(window.setTimeout(() => {
      intro.classList.add('pulse')
      timers.push(window.setTimeout(() => intro.classList.remove('pulse'), 520))
    }, 1450))

    timers.push(window.setTimeout(() => {
      // exit: zoom + fade the preloader, then call onFinish when fully gone
      // apply a page zoom-out class to the app root for a smooth transition
      const appRoot = document.getElementById('root')
      if (appRoot) appRoot.classList.add('preloader-zoom-out')

      intro.classList.add('exit')
      timers.push(window.setTimeout(() => {
        intro.classList.add('hidden')
        // remove zoom-out after the final callback to restore normal layout
        timers.push(window.setTimeout(() => {
          if (appRoot) appRoot.classList.remove('preloader-zoom-out')
          onFinish?.()
        }, fadeOutDuration + 20))
      }, 120))
    }, totalHold))

    return () => {
      timers.forEach((t) => clearTimeout(t))
      // ensure zoom-out class removed if the component unmounts early
      const appRoot = document.getElementById('root')
      if (appRoot) appRoot.classList.remove('preloader-zoom-out')
    }
  }, [onFinish])

  return (
    <div ref={rootRef} className={`preloader-white ${variant ? `variant-${variant}` : ''}`} aria-hidden="false">
      <div className="intro-inner">
        <div className="logo-wrap" aria-hidden="true">
          <div className="logo-bg" aria-hidden="true">
            <img className="logo" src={logoSrc} alt="E-Cell GRIET" />
            <img className="logo-reflection" src={logoSrc} alt="" aria-hidden="true" />
            <span className="logo-glow" aria-hidden="true" />
          </div>
        </div>
        <div className="tagline" ref={taglineRef}>Create. Inspire. Aspire.</div>
      </div>
    </div>
  )
}
