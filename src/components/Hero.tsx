import { motion } from 'framer-motion'
import React from 'react'

function Typing({ lines, speed = 80, pause = 900 }: { lines: string[]; speed?: number; pause?: number }) {
  const [display, setDisplay] = React.useState('')
  const [lineIdx, setLineIdx] = React.useState(0)
  const [charIdx, setCharIdx] = React.useState(0)
  const [deleting, setDeleting] = React.useState(false)

  React.useEffect(() => {
    let timeout: any
    const current = lines[lineIdx]

    if (!deleting) {
      if (charIdx <= current.length) {
        timeout = setTimeout(() => setCharIdx((c) => c + 1), speed)
        setDisplay(current.slice(0, charIdx))
      } else {
        // pause then start deleting
        timeout = setTimeout(() => setDeleting(true), pause)
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 1.5)
        setDisplay(current.slice(0, charIdx))
      } else {
        // move to next line
        setDeleting(false)
        setLineIdx((i) => (i + 1) % lines.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [charIdx, deleting, lineIdx, lines, speed, pause])

  return (
    <span aria-live="polite" className="inline-block">
      {display}
      <span className="inline-block ml-1 w-1 align-middle bg-white animate-pulse" style={{ height: '1.15em' }} />
    </span>
  )
}

export default function Hero() {
  const lines = [
    'We empower student founders to build startups.',
    'Workshops, mentorship and seed-stage support.',
    'Join our community and launch your idea.'
  ]

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Centered animated text */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-3xl font-extrabold tracking-tight text-white"
          >
            <Typing lines={lines} />
          </motion.h1>
        </div>
      </div>
    </section>
  )
}


