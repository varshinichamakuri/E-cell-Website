import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { events } from '../data/events'
type Form = {
  name: string
  email: string
  department: string
  year: string
  eventId: string
}
const initial: Form = { name: '', email: '', department: '', year: '', eventId: '' }
export default function RegisterPage() {
  const [values, setValues] = useState<Form>(initial)
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [success, setSuccess] = useState(false)

  const set = (k: keyof Form, v: string) => setValues(prev => ({ ...prev, [k]: v }))
  const mark = (k: keyof Form) => setTouched(prev => ({ ...prev, [k]: true }))

  const emailValid = useMemo(() => /.+@.+\..+/.test(values.email), [values.email])
  const required = (v: string) => v.trim().length > 0
  const canSubmit = required(values.name) && emailValid && required(values.department) && required(values.year) && required(values.eventId)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTouched({ name: true, email: true, department: true, year: true, eventId: true })
    if (!canSubmit) return
    // Simulate success
    setTimeout(() => setSuccess(true), 300)
  }

  if (success) return <Success />

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Banner */}
      <section className="relative overflow-hidden">
        <motion.div aria-hidden className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1, backgroundPosition: ['0% 50%', '100% 50%'] }} transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse' }} style={{
          backgroundImage: 'radial-gradient(600px 300px at 20% 20%, rgba(251,146,60,.18), transparent 60%), radial-gradient(600px 300px at 80% 10%, rgba(251,146,60,.12), transparent 60%)',
          backgroundSize: '160% 100%'
        }} />
        <div className="relative max-w-6xl mx-auto px-4 pt-28 pb-12 text-center">
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl sm:text-6xl font-extrabold">Event Registration</motion.h1>
          <p className="mt-3 text-white/85">Secure your spot for upcoming E-Cell events.</p>
        </div>
      </section>
  <main className="max-w-xl mx-auto px-4 pb-24">
        <form onSubmit={onSubmit} className="mt-6 space-y-5">
          <FloatingInput id="name" label="Name" value={values.name} onChange={v => set('name', v)} onBlur={() => mark('name')} error={touched.name && !required(values.name) ? 'Required' : ''} />
          <FloatingInput id="email" label="Email" type="email" value={values.email} onChange={v => set('email', v)} onBlur={() => mark('email')} error={touched.email && !emailValid ? 'Enter a valid email' : ''} />
          <FloatingInput id="department" label="Department" value={values.department} onChange={v => set('department', v)} onBlur={() => mark('department')} error={touched.department && !required(values.department) ? 'Required' : ''} />
          <FloatingInput id="year" label="Year" value={values.year} onChange={v => set('year', v)} onBlur={() => mark('year')} error={touched.year && !required(values.year) ? 'Required' : ''} />
          <div className="relative">
            <select value={values.eventId} onChange={e => set('eventId', e.target.value)} onBlur={() => mark('eventId')} className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 outline-none focus:border-ecell appearance-none">
              <option value="">Select Event</option>
              {events.map(ev => (
                <option key={ev.id} value={ev.id}>{ev.title}</option>
              ))}
            </select>
            {touched.eventId && !required(values.eventId) && <FieldError text="Select an event" />}
          </div>

          <button disabled={!canSubmit} type="submit" className="w-full rounded-full bg-ecell disabled:bg-ecell-40 text-white px-6 py-3 shadow-lg shadow-ecell-30 hover:bg-ecell transition">
            Register
          </button>
        </form>
      </main>
    </div>
  )
}

function FloatingInput({ id, label, value, onChange, onBlur, type = 'text', error }: { id: string; label: string; value: string; onChange: (v: string) => void; onBlur: () => void; type?: string; error?: string }) {
  return (
    <div className="relative">
      <input id={id} name={id} value={value} onChange={(e) => onChange(e.target.value)} onBlur={onBlur} type={type} placeholder=" " className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 outline-none focus:border-ecell peer" />
      <label htmlFor={id} className="absolute left-3 top-1/2 -translate-y-1/2 px-1 text-gray-600 pointer-events-none transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-ecell peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm bg-white">
        {label}
      </label>
      {error ? <FieldError text={error} /> : null}
    </div>
  )
}
function FieldError({ text }: { text: string }) {
  return <div className="mt-1 text-xs text-red-300">{text}</div>
}
function Success() {
  return (
    <div className="min-h-screen bg-white text-black grid place-items-center px-4">
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 150, damping: 12 }} className="text-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.1 }} className="mx-auto w-16 h-16 rounded-full bg-green-500 grid place-items-center text-2xl">✓</motion.div>
        <h1 className="mt-4 text-3xl font-extrabold">Registration Successful</h1>
        <p className="mt-2 text-white/80">Thank you for registering. We’ll be in touch soon!</p>
        <a href="/events" className="inline-block mt-6 rounded-full bg-ecell text-white px-6 py-3 hover:bg-ecell">Back to Events</a>
      </motion.div>
    </div>
  )
}


