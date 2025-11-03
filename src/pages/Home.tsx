import { Link as ScrollLink, Element, scroller } from 'react-scroll'
import { motion } from 'framer-motion'
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import Hero from '../components/Hero'
import Events from '../components/Events'
import Aim from '../components/Aim'
import About from '../components/About'
import History from '../components/History'
import Gallery from '../components/Gallery'
import Timeline from '../components/Timeline'
import Contact from '../components/Contact'
import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'

type SectionRevealProps = {
  children: ReactNode
  name: string
}

function SectionReveal({ children, name }: SectionRevealProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const node = containerRef.current
    if (!node) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            node.classList.add('in')
            obs.unobserve(node)
          }
        })
      },
      { threshold: 0.12 }
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  return (
    <Element name={name}>
      <motion.section
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.6, ease: [0.2, 0.9, 0.25, 1] }}
        className="will-change-transform"
      >
        <div ref={containerRef} className="reveal-children">
          {children}
        </div>
      </motion.section>
    </Element>
  )
}

export default function Home() {
  const scrollToTop = () => {
    scroller.scrollTo('hero', { smooth: true, duration: 600, offset: 0 })
  }

  return (
    <div className="min-h-screen bg-white text-black">
  <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center">
          <div className="flex items-center gap-3 min-w-[240px]">
            <img src="/e-cell-logo.png" alt="E-Cell Logo" className="h-18 w-12 object-contain bg-white p-1" />
            <button onClick={scrollToTop} className="font-bold font-oswald tracking-wide text-3xl text-black hover:text-ecell">E-Cell</button>
          </div>
          <nav className="hidden sm:flex flex-1 justify-center gap-8 text-base font-medium">
            {[
              { to: 'events', label: 'Events' },
              { to: 'aim', label: 'Aim' },
              { to: 'about', label: 'About' },
              { to: 'gallery', label: 'Gallery' },
              { to: 'timeline', label: 'Timeline' },
              { to: 'contact', label: 'Contact' },
            ].map((item) => (
              <ScrollLink key={item.to} to={item.to} smooth duration={600} offset={-72} className="cursor-pointer text-black hover:text-ecell">
                {item.label}
              </ScrollLink>
            ))}
          </nav>
          <div className="flex gap-5 min-w-[240px] justify-end text-2xl">
            <a href="#contact" className="text-black hover:text-ecell transition-colors" aria-label="Instagram"><FaInstagram /></a>
            <a href="#contact" className="text-black hover:text-ecell transition-colors" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#contact" className="text-black hover:text-ecell transition-colors" aria-label="Email"><FaEnvelope /></a>
          </div>
        </div>
      </header>

      {/* SectionReveal: fade + slide-up on enter. We exclude Hero/video to keep it stable. */}
      <main>
        <Element name="hero"><Hero /></Element>

        {/* reusable reveal wrapper - subtle, Apple-like easing */}
        <SectionReveal name="about"><About /></SectionReveal>
        <SectionReveal name="aim"><Aim /></SectionReveal>
        <SectionReveal name="history"><History /></SectionReveal>
        <SectionReveal name="events"><Events /></SectionReveal>
        <SectionReveal name="timeline"><Timeline /></SectionReveal>
        <SectionReveal name="gallery"><Gallery /></SectionReveal>
        <SectionReveal name="contact"><Contact /></SectionReveal>
      </main>

      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={scrollToTop} className="fixed bottom-5 right-5 z-40 rounded-full bg-ecell text-white px-4 py-2 shadow-lg shadow-ecell-30 hover:bg-ecell-40">
        Top
      </motion.button>
    </div>
  )
}


