import { Link as ScrollLink, Element, scroller } from 'react-scroll'
import { motion } from 'framer-motion'
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import Hero from '../components/Hero'
import Events from '../components/Events'
import Aim from '../components/Aim'
import About from '../components/About'
import Gallery from '../components/Gallery'
import Timeline from '../components/Timeline'
import Contact from '../components/Contact'

export default function Home() {
  const scrollToTop = () => {
    scroller.scrollTo('hero', { smooth: true, duration: 600, offset: 0 })
  }

  return (
    <div className="min-h-screen bg-[#081a33] text-white">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <button onClick={scrollToTop} className="font-semibold tracking-wide text-white/90 hover:text-white">E-Cell</button>
          <nav className="hidden sm:flex gap-6 text-sm">
            {[
              { to: 'events', label: 'Events' },
              { to: 'aim', label: 'Aim' },
              { to: 'about', label: 'About' },
              { to: 'gallery', label: 'Gallery' },
              { to: 'timeline', label: 'Timeline' },
              { to: 'contact', label: 'Contact' },
            ].map((item) => (
              <ScrollLink key={item.to} to={item.to} smooth duration={600} offset={-72} className="cursor-pointer text-white/80 hover:text-white">
                {item.label}
              </ScrollLink>
            ))}
          </nav>
          <div className="flex gap-3 text-lg">
            <a href="#contact" className="text-white/80 hover:text-white" aria-label="Instagram"><FaInstagram /></a>
            <a href="#contact" className="text-white/80 hover:text-white" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#contact" className="text-white/80 hover:text-white" aria-label="Email"><FaEnvelope /></a>
          </div>
        </div>
      </header>

      <main>
        <Element name="hero"><Hero /></Element>
        <Element name="events"><Events /></Element>
        <Element name="aim"><Aim /></Element>
        <Element name="about"><About /></Element>
        <Element name="gallery"><Gallery /></Element>
        <Element name="timeline"><Timeline /></Element>
        <Element name="contact"><Contact /></Element>
      </main>

      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={scrollToTop} className="fixed bottom-5 right-5 z-40 rounded-full bg-orange-500 text-white px-4 py-2 shadow-lg shadow-orange-500/30 hover:bg-orange-400">
        Top
      </motion.button>
    </div>
  )
}


