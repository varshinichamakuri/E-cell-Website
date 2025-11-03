import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { events } from '../data/events'

export default function EventDetail() {
  const { id } = useParams()
  const event = events.find(e => e.id === id)
  if (!event) {
    return (
      <div className="min-h-screen bg-white text-black grid place-items-center">
        <div>
          <p className="text-gray-700">Event not found.</p>
          <Link to="/events" className="text-ecell">Back to Events</Link>
        </div>
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-white text-black">
      <section className="max-w-5xl mx-auto px-4 pt-28 pb-12">
        <Link to="/events" className="text-ecell-muted">← All Events</Link>
        <div className="mt-4 grid md:grid-cols-2 gap-6 items-start">
          <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} src={event.image} alt="cover" className="w-full rounded-xl border border-gray-100" />
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold">{event.title}</h1>
            <div className="mt-2 text-sm text-gray-700">{event.date}</div>
            <p className="mt-4 text-gray-800">{event.description}</p>
            {event.speakers && event.speakers.length > 0 && (
              <div className="mt-6">
                <h3 className="font-semibold">Speakers</h3>
                <ul className="mt-2 grid grid-cols-2 gap-3">
                  {event.speakers.map((s, i) => (
                    <li key={i} className="flex items-center gap-3 card-light border border-gray-100 rounded-lg p-3">
                      <div className="w-10 h-10 rounded-full gradient-ecell-avatar" />
                      <span>{s.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mt-6">
              <a href="#" className="text-ecell hover:text-ecell-muted">View event gallery →</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


