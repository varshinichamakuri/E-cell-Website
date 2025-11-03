import { FaLightbulb, FaUsers, FaTrophy, FaRegClock } from 'react-icons/fa'
import { useRef, useEffect, useState } from 'react'

function CountUp({ to, duration = 1200, trigger }: { to: number; duration?: number; trigger: boolean }) {
  const [value, setValue] = useState(0)
  const startRef = useRef<number | null>(null)

  useEffect(() => {
    if (!trigger) return
    let raf = 0
    const tick = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp
      const elapsed = timestamp - startRef.current
      const progress = Math.min(1, elapsed / duration)
      setValue(Math.floor(progress * to))
      if (progress < 1) raf = requestAnimationFrame(tick)
      else setValue(to)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [to, duration, trigger])

  return <span>{value}</span>
}

export default function History() {
  const stats = [
    { icon: FaLightbulb, value: 29, label: 'Start-Ups have incubated in our college' },
    { icon: FaUsers, value: 45, label: "Students and Faculty combined are associated with E-Cell in it's venture to nurture Entrepreneurs." },
    { icon: FaRegClock, value: 4, label: 'Years of experience in running Entrepreneurship Development Cell' },
    { icon: FaTrophy, value: 10, label: 'Awards have been awarded to us for various activities.' },
  ]

  const containerRef = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      })
    }, { threshold: 0.2 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section className="py-24 bg-white" id="history" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-black mb-4">E-Cell's History in GRIET</h2>
        <p className="text-gray-700 max-w-3xl mb-10">
          E-Cell was first started by our Dean EDC, Mrs. Indira who is continuously working to provide entrepreneurs with facilities in college itself so that they grow in their venture from a young age and gain experience in their field.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {stats.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={i} className="flex items-start gap-4">
                <div className="text-4xl text-ecell mt-1">
                  <Icon />
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-black"><CountUp to={s.value} duration={900 + i * 200} trigger={inView} /></div>
                  <div className="mt-1 text-gray-700">{s.label}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
