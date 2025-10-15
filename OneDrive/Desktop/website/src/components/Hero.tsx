import { motion } from 'framer-motion'

const words = ['Create', '•', 'Inspire', '•', 'Aspire']

export default function Hero() {
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
      <div className="absolute inset-0 bg-black/40" />

      {/* Centered animated text */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
          >
            {words.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={w === '•' ? 'text-orange-400 mx-2 inline-block' : 'inline-block'}
              >
                {w}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-6 text-white/90 max-w-2xl mx-auto"
          >
            Entrepreneurship Cell — where ideas ignite and leaders take flight.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <a href="#events" className="rounded-full bg-orange-500 text-white px-6 py-3 shadow-lg shadow-orange-500/30 hover:bg-orange-400">Explore Events</a>
            <a href="#about" className="rounded-full border border-white/30 text-white px-6 py-3 hover:bg-white/10">Learn More</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


