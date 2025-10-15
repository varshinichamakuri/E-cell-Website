import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { events as allEvents } from '../data/events'
import type { EventItem } from '../data/events'

const tabs = [
  { key: 'upcoming', label: 'Upcoming' },
  { key: 'ongoing', label: 'Ongoing' },
  { key: 'past', label: 'Past' },
] as const

export default function EventsPage() {
  const [active, setActive] = useState<typeof tabs[number]['key']>('upcoming')
  const filtered = useMemo(() => allEvents.filter(e => e.status === active), [active])

  return (
    <div className="min-h-screen bg-[#081a33] text-white">
      {/* Hero with subtle motion gradient */}
      <section className="relative overflow-hidden">
        <motion.div
          aria-hidden
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, backgroundPosition: ['0% 50%', '100% 50%'] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundImage:
              'radial-gradient(600px 300px at 20% 20%, rgba(251,146,60,.18), transparent 60%), radial-gradient(600px 300px at 80% 10%, rgba(59,130,246,.18), transparent 60%)',
            backgroundSize: '160% 100%',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 pt-28 pb-16 text-center">
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl sm:text-6xl font-extrabold">
            Our Events
          </motion.h1>
          <p className="mt-3 text-white/85 max-w-2xl mx-auto">Modern, minimal, and energetic — explore what’s happening at E-Cell.</p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 pb-24">
        {/* Tabs */}
        <div className="flex items-center justify-center gap-2 rounded-full bg-white/10 border border-white/10 p-1 w-fit mx-auto">
          {tabs.map(t => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`px-4 py-2 rounded-full text-sm transition ${active === t.key ? 'bg-orange-500 text-white' : 'text-white/80 hover:text-white'}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((e) => (
              <EventCard key={e.id} item={e} />
            ))}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}

function EventCard({ item }: { item: EventItem }) {
  return (
    <motion.div whileHover={{ y: -6, scale: 1.01 }} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
      <div className="aspect-video overflow-hidden">
        <motion.img src={item.image} alt="event" className="w-full h-full object-cover" whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} />
      </div>
      <div className="p-5">
        <div className="flex items-baseline justify-between">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <span className="text-xs text-orange-300 bg-orange-500/20 px-2 py-1 rounded-full">{item.date}</span>
        </div>
        <p className="mt-2 text-white/80 text-sm">{item.summary}</p>
        <div className="mt-4 flex gap-3">
          <Link to={`/events/${item.id}`} className="text-sm text-orange-300 hover:text-orange-200">View Details</Link>
        </div>
      </div>
    </motion.div>
  )
}


