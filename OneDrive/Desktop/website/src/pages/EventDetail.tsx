import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { events } from '../data/events'

export default function EventDetail() {
  const { id } = useParams()
  const event = events.find(e => e.id === id)
  if (!event) {
    return (
      <div className="min-h-screen bg-[#081a33] text-white grid place-items-center">
        <div>
          <p className="text-white/80">Event not found.</p>
          <Link to="/events" className="text-orange-300">Back to Events</Link>
        </div>
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-[#081a33] text-white">
      <section className="max-w-5xl mx-auto px-4 pt-28 pb-12">
        <Link to="/events" className="text-orange-300">← All Events</Link>
        <div className="mt-4 grid md:grid-cols-2 gap-6 items-start">
          <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} src={event.image} alt="cover" className="w-full rounded-xl border border-white/10" />
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold">{event.title}</h1>
            <div className="mt-2 text-sm text-white/80">{event.date}</div>
            <p className="mt-4 text-white/90">{event.description}</p>
            {event.speakers && event.speakers.length > 0 && (
              <div className="mt-6">
                <h3 className="font-semibold">Speakers</h3>
                <ul className="mt-2 grid grid-cols-2 gap-3">
                  {event.speakers.map((s, i) => (
                    <li key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-blue-500" />
                      <span>{s.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mt-6">
              <a href="#" className="text-orange-300 hover:text-orange-200">View event gallery →</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


