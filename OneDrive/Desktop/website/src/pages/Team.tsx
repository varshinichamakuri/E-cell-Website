import { motion } from 'framer-motion'

type Member = {
  name: string
  role: string
  image?: string
}

const coordinators: Member[] = [
  { name: 'Aarav Sharma', role: 'Overall Coordinator' },
  { name: 'Ishita Patel', role: 'Co-Coordinator' },
]

const students: Member[] = [
  { name: 'Rohan Gupta', role: 'Design' },
  { name: 'Neha Verma', role: 'Outreach' },
  { name: 'Kunal Mehta', role: 'Logistics' },
  { name: 'Simran Kaur', role: 'Sponsorship' },
  { name: 'Aditya Rao', role: 'Tech' },
  { name: 'Priya Nair', role: 'Content' },
  { name: 'Yash Jain', role: 'PR' },
  { name: 'Ananya Das', role: 'Ops' },
]

function Divider() {
  return (
    <div className="relative my-12">
      <div className="h-px bg-gradient-to-r from-transparent via-orange-400/60 to-transparent" />
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-gradient-to-r from-orange-400/40 via-white/80 to-orange-400/40 blur" />
    </div>
  )
}

function Card({ member, glow = false }: { member: Member; glow?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className={`relative rounded-2xl border border-white/10 p-5 bg-white/5 backdrop-blur ${
        glow ? 'hover:shadow-[0_0_40px_-10px_#fb923c]' : ''
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-blue-500" />
        <div>
          <div className="text-lg font-semibold">{member.name}</div>
          <div className="text-white/70 text-sm">{member.role}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Team() {
  return (
    <div className="min-h-screen bg-[#081a33] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_-10%,rgba(251,146,60,0.2),transparent_60%),radial-gradient(800px_400px_at_90%_0%,rgba(59,130,246,0.2),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto px-4 pt-28 pb-20 text-center">
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl sm:text-6xl font-extrabold">
            Meet Our Team
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-4 text-white/90 max-w-2xl mx-auto">
            The coordinators and student body powering Create • Inspire • Aspire.
          </motion.p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 pb-24">
        <Divider />

        {/* Coordinators */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold">Coordinators</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {coordinators.map((m, i) => (
              <motion.div key={i} whileHover={{ rotateY: 6 }} className="[transform-style:preserve-3d]">
                <Card member={m} glow />
              </motion.div>
            ))}
          </div>
        </section>

        <Divider />

        {/* Student Body */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold">Student Body</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {students.map((m, i) => (
              <Card key={i} member={m} />
            ))}
          </div>
        </section>

        <Divider />

        <section className="text-center text-sm text-white/70 mt-6">Last updated {new Date().getFullYear()}</section>
      </main>
    </div>
  )
}


