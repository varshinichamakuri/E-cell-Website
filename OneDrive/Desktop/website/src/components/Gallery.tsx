import { motion } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold">Gallery</h2>
      </div>
      {/* Horizontal scroll strip */}
      <div className="mt-8 overflow-x-auto">
        <div className="flex gap-4 px-4 sm:px-8">
          {images.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt="E-Cell gallery"
              className="h-48 sm:h-64 md:h-72 rounded-xl object-cover select-none pointer-events-none"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}


