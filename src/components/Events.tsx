import { motion } from 'framer-motion'

const sampleEvents = [
  { name: 'Startup Ideation Sprint', date: 'Nov 5, 2025', note: '48-hour hack + mentorship' },
  { name: 'Founder Fireside', date: 'Nov 18, 2025', note: 'AMA with alumni founders' },
  { name: 'Pitch Night', date: 'Dec 2, 2025', note: 'Pitch to investors and mentors' },
]

export default function Events() {
  return (
    <section id="events" className="relative bg-ecell py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-5xl font-bold text-white mb-2">Upcoming Events</motion.h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleEvents.map((e, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * idx }} className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm p-5 hover:shadow-lg">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg text-white font-semibold">{e.name}</h3>
                <span className="text-sm text-white font-medium px-3 py-1 rounded-full bg-white/20">{e.date}</span>
              </div>
              <p className="mt-3 text-white text-base">{e.note}</p>
              <button className="mt-4 text-base text-white hover:text-white/80">Details</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


