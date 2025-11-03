import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, parseISO } from 'date-fns'
import { events as allEvents } from '../data/events'
import type { EventItem } from '../data/events'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export default function EventsPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null)
  
  const days = useMemo(() => {
    const start = startOfMonth(currentDate)
    const end = endOfMonth(currentDate)
    return eachDayOfInterval({ start, end })
  }, [currentDate])

  const eventsByDate = useMemo(() => {
    return allEvents.reduce((acc, event) => {
      const date = format(parseISO(event.date), 'yyyy-MM-dd')
      acc[date] = event
      return acc
    }, {} as Record<string, EventItem>)
  }, [])

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1))
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1))

  return (
  <div className="min-h-screen bg-white text-black">
      <AnimatePresence mode="wait">
        {selectedEvent ? (
          <EventDetailView 
            event={selectedEvent} 
            onBack={() => setSelectedEvent(null)} 
          />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-3xl mx-auto px-4 py-12"
          >
            {/* Calendar Header */}
            <div className="relative max-w-5xl mx-auto px-4 pt-28 pb-16 text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                className="text-4xl sm:text-6xl font-bold"
              >
                Events Calendar
              </motion.h1>
              <div className="flex items-center gap-4">
                <button 
                  onClick={prevMonth}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <ChevronLeftIcon className="w-6 h-6" />
                </button>
                <h2 className="text-xl font-medium min-w-[140px] text-center">
                  {format(currentDate, 'MMMM yyyy')}
                </h2>
                <button 
                  onClick={nextMonth}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <ChevronRightIcon className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="card-light rounded-3xl p-6 border border-gray-100 max-w-xl mx-auto">
              <div className="grid grid-cols-7 gap-1 mb-4">
                {weekDays.map(day => (
                  <div key={day} className="text-center text-sm font-medium text-gray-500 py-1">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {days.map(day => {
                  const dateStr = format(day, 'yyyy-MM-dd')
                  const event = eventsByDate[dateStr]
                  const isToday = isSameDay(day, new Date())

                  return (
                    <motion.button
                      key={dateStr}
                      onClick={() => event && setSelectedEvent(event)}
                      whileHover={event ? { scale: 1.05, y: -2 } : {}}
                      className={`relative p-2 min-h-[64px] rounded-xl border border-transparent overflow-hidden
                        ${event ? 'cursor-pointer hover:border-white/20' : 'cursor-default'}
                        ${isToday ? 'bg-white/6' : ''}
                      `}
                    >
                      <span className={`
                        text-sm ${isToday ? 'text-ecell-muted' : 'text-gray-500'}
                      `}>
                        {format(day, 'd')}
                      </span>
                      {event && (
                        <div className="mt-1 relative z-10">
                          <div className="absolute inset-0 rounded-xl radial-ecell-weak opacity-80 blur-sm" />
                          <div className="relative px-1">
                            <p className="relative text-xs font-semibold text-black truncate">
                              {event.title}
                            </p>
                            <p className="relative text-[10px] text-gray-700 mt-0.5">
 
                              {event.time}
                            </p>
                          </div>
                        </div>
                      )}
                    </motion.button>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function EventDetailView({ event, onBack }: { event: EventItem; onBack: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="min-h-screen p-6 md:p-12"
    >
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
      >
        <ChevronLeftIcon className="w-5 h-5" />
        Back to Calendar
      </button>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{event.title}</h1>
          
          <div className="flex flex-wrap gap-4 text-white/80 mb-8">
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-ecell" />
              {format(parseISO(event.date), 'MMMM d, yyyy')}
            </p>
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              {event.time}
            </p>
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet-400" />
              {event.location}
            </p>
          </div>

          <p className="text-lg text-white/90 mb-8">{event.description}</p>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Highlights</h3>
              <ul className="space-y-3">
                {event.highlights.map((highlight, i) => (
                    <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-ecell" />
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </div>

            {event.speakers && event.speakers.length > 0 && (
              <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-4">Speakers</h3>
                <div className="space-y-4">
                  {event.speakers.map((speaker, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-lg font-medium">
                        {speaker.name[0]}
                      </div>
                      <div>
                        <p className="font-medium">{speaker.name}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {event.images && (
            <div className="grid gap-4 md:grid-cols-2">
              {event.images.map((image, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="aspect-video rounded-2xl overflow-hidden"
                >
                  <img 
                    src={image} 
                    alt={`${event.title} - ${i + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}