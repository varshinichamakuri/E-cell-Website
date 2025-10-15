import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gallerySections } from '../data/gallery'

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<{ open: boolean; src?: string; idx?: number; sec?: number }>({ open: false })

  const open = (secIndex: number, idx: number) => {
    const src = gallerySections[secIndex].photos[idx].src
    setLightbox({ open: true, src, idx, sec: secIndex })
  }
  const close = () => setLightbox({ open: false })
  const next = () => {
    if (lightbox.sec == null || lightbox.idx == null) return
    const photos = gallerySections[lightbox.sec].photos
    const newIdx = (lightbox.idx + 1) % photos.length
    setLightbox({ open: true, sec: lightbox.sec, idx: newIdx, src: photos[newIdx].src })
  }
  const prev = () => {
    if (lightbox.sec == null || lightbox.idx == null) return
    const photos = gallerySections[lightbox.sec].photos
    const newIdx = (lightbox.idx - 1 + photos.length) % photos.length
    setLightbox({ open: true, sec: lightbox.sec, idx: newIdx, src: photos[newIdx].src })
  }

  return (
    <div className="min-h-screen bg-[#081a33] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <motion.div aria-hidden className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1, backgroundPosition: ['0% 50%', '100% 50%'] }} transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse' }} style={{
          backgroundImage: 'radial-gradient(600px 300px at 20% 20%, rgba(251,146,60,.18), transparent 60%), radial-gradient(600px 300px at 80% 10%, rgba(59,130,246,.18), transparent 60%)',
          backgroundSize: '160% 100%'
        }} />
        <div className="relative max-w-6xl mx-auto px-4 pt-28 pb-12 text-center">
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl sm:text-6xl font-extrabold">Gallery</motion.h1>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 pb-24">
        <div className="relative my-8">
          <div className="h-px bg-gradient-to-r from-transparent via-orange-400/60 to-transparent" />
        </div>
        {gallerySections.map((section, sIndex) => (
          <section key={section.id} className="mt-10">
            {/* Year marker */}
            <div className="sticky top-16 z-10 text-orange-300 text-sm mb-3">{section.title}</div>
            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-3xl font-bold">
              {section.id}
            </motion.h2>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {section.photos.map((p, idx) => (
                <button key={idx} onClick={() => open(sIndex, idx)} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
                  <motion.img src={p.src} alt={p.alt || 'photo'} className="aspect-[4/3] w-full object-cover" whileHover={{ scale: 1.05 }} />
                </button>
              ))}
            </motion.div>
          </section>
        ))}
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox.open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/80 grid place-items-center">
            <div className="absolute inset-0" onClick={close} />
            <div className="relative z-10 max-w-5xl w-full px-4">
              <img src={lightbox.src} alt="full" className="w-full rounded-xl border border-white/10" />
              <div className="mt-4 flex items-center justify-between">
                <button onClick={prev} className="rounded-full bg-white/10 border border-white/20 px-4 py-2 hover:bg-white/15">Prev</button>
                <button onClick={close} className="rounded-full bg-orange-500 text-white px-4 py-2 hover:bg-orange-400">Close</button>
                <button onClick={next} className="rounded-full bg-white/10 border border-white/20 px-4 py-2 hover:bg-white/15">Next</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


