import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gallerySections } from '../data/gallery'

type EventCardProps = {
  event: import('../data/gallery').GalleryEvent
  onOpen: (startIdx?: number) => void
}

function EventCard({ event, onOpen }: EventCardProps) {
  // internal carousel index
  const [index, setIndex] = useState(0)
  const [hovered, setHovered] = useState(false)

  // auto-cycle when hovered
  useEffect(() => {
    if (!hovered) return
    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % event.photos.length)
    }, 1800)
    return () => clearInterval(t)
  }, [hovered, event.photos.length])

  return (
    <button
      onClick={() => onOpen(index)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden rounded-xl border border-gray-100"
      aria-label={`${event.title} — open`}
    >
      <div className="aspect-[4/3] w-full relative">
        {event.photos.map((ph, i) => (
          <img
            key={i}
            src={ph.src}
            alt={ph.alt || event.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{ transitionTimingFunction: 'cubic-bezier(.2,.9,.25,1)' }}
            aria-hidden={i === index ? 'false' : 'true'}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-400" />
      <div className="absolute inset-0 flex items-center justify-center px-3">
        <h3 className="text-white text-lg sm:text-xl font-bold drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] transform transition-transform duration-400 group-hover:scale-105 text-center">
          {event.title}
        </h3>
      </div>
    </button>
  )
}

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<{
    open: boolean
    sec?: number
    ev?: number
    idx?: number
  }>({ open: false })

  // open a particular event (secIndex, eventIndex) and start at photo idx
  const open = (secIndex: number, eventIndex: number, idx = 0) => {
    setLightbox({ open: true, sec: secIndex, ev: eventIndex, idx })
  }
  const close = () => setLightbox({ open: false })
  const next = () => {
    if (lightbox.sec == null || lightbox.ev == null || lightbox.idx == null) return
    const photos = gallerySections[lightbox.sec].events[lightbox.ev].photos
    const newIdx = (lightbox.idx + 1) % photos.length
    setLightbox({ open: true, sec: lightbox.sec, ev: lightbox.ev, idx: newIdx })
  }
  const prev = () => {
    if (lightbox.sec == null || lightbox.ev == null || lightbox.idx == null) return
    const photos = gallerySections[lightbox.sec].events[lightbox.ev].photos
    const newIdx = (lightbox.idx - 1 + photos.length) % photos.length
    setLightbox({ open: true, sec: lightbox.sec, ev: lightbox.ev, idx: newIdx })
  }

  return (
  <div className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <motion.div aria-hidden className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1, backgroundPosition: ['0% 50%', '100% 50%'] }} transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse' }} style={{
          backgroundImage: 'radial-gradient(600px 300px at 20% 20%, rgba(22,63,77,.06), transparent 60%), radial-gradient(600px 300px at 80% 10%, rgba(22,63,77,.04), transparent 60%)',
          backgroundSize: '160% 100%'
        }} />
        <div className="relative max-w-6xl mx-auto px-4 pt-28 pb-12 text-center">
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl sm:text-6xl font-extrabold">Gallery</motion.h1>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 pb-24">
        <div className="relative my-8">
          <div className="h-px gradient-ecell-line" />
        </div>
        {gallerySections.map((section, sIndex) => (
          <section key={section.id} className="mt-10">
            {/* Year marker */}
            <div className="sticky top-16 z-10 text-ecell-muted text-sm mb-3">{section.title}</div>
            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-3xl font-bold">
              {section.id}
            </motion.h2>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {section.events.map((ev, evIdx) => (
                <EventCard
                  key={evIdx}
                  event={ev}
                  onOpen={(idx = 0) => open(sIndex, evIdx, idx)}
                />
              ))}
            </motion.div>
          </section>
        ))}
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox.open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm grid place-items-center px-4"
            aria-modal="true"
            role="dialog"
          >
            <div className="absolute inset-0" onClick={close} />

            <div className="relative z-10 max-w-4xl w-full">
              {/* slider area */}
              <div className="relative w-full">
                <motion.img
                  key={`${lightbox.sec}-${lightbox.ev}-${lightbox.idx}`}
                  src={gallerySections[lightbox.sec ?? 0]?.events[lightbox.ev ?? 0]?.photos[lightbox.idx ?? 0]?.src}
                  alt={gallerySections[lightbox.sec ?? 0]?.events[lightbox.ev ?? 0]?.photos[lightbox.idx ?? 0]?.alt || 'photo'}
                  className="w-full rounded-xl shadow-xl object-contain max-h-[75vh] mx-auto"
                  initial={{ scale: 0.98, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.98, opacity: 0 }}
                  transition={{ duration: 0.36 }}
                />

                {/* prev/next arrows */}
                <button aria-label="Previous" onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 m-2">
                  ‹
                </button>
                <button aria-label="Next" onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 m-2">
                  ›
                </button>

                {/* close button */}
                <button aria-label="Close" onClick={close} className="absolute right-3 top-3 bg-white/10 hover:bg-white/20 text-white rounded-full p-2">
                  ✕
                </button>
              </div>

              {/* caption + controls */}
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-white/90">{gallerySections[lightbox.sec ?? 0]?.events[lightbox.ev ?? 0]?.photos[lightbox.idx ?? 0]?.alt || ''}</div>
                <div className="flex gap-2">
                  <button onClick={prev} className="rounded-full bg-white/10 border border-white/20 px-4 py-2 hover:bg-white/15 text-white">Prev</button>
                  <button onClick={next} className="rounded-full bg-white/10 border border-white/20 px-4 py-2 hover:bg-white/15 text-white">Next</button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


