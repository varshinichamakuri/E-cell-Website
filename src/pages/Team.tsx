import { motion } from 'framer-motion'
import { FaLinkedin } from 'react-icons/fa'
import type { Member } from '../data/team'
import { coordinators, students } from '../data/team'

function Divider() {
  return (
    <div className="relative my-12">
      <div className="h-px gradient-ecell-line" />
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-4 gradient-ecell-decor blur" />
    </div>
  )
}

function TeamCard({ member }: { member: Member }) {
  return (
    <div className="text-left">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -6 }}
        className="relative bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer max-w-sm mx-auto transition-shadow duration-300 hover:shadow-2xl"
      >
        {/* top image */}
        {member.image ? (
          <img 
            src={member.image.src} 
            alt={member.name} 
            className="w-full h-56 object-cover rounded-t-xl"
            width={member.image.width}
            height={member.image.height}
          />
        ) : (
          <div className="w-full h-56 bg-gray-100 grid place-items-center rounded-t-xl">No Image</div>
        )}

        {/* info panel */}
        <div className="bg-white p-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-lg font-oswald font-bold text-black">{member.name}</div>
              <div className="text-sm text-black/60 mt-1">{member.role}</div>
            </div>
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noreferrer" aria-label={`${member.name} LinkedIn`} className="ml-3 text-ecell">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border border-gray-100 shadow-sm hover:scale-105 transition-transform">
                  <FaLinkedin />
                </span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Team() {
  return (
  <div className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 radial-ecell-weak" />
        <div className="relative max-w-6xl mx-auto px-4 pt-28 pb-20 text-center">
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl sm:text-6xl font-extrabold">
            Meet Our Team
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-4 text-gray-700 max-w-2xl mx-auto">
            The coordinators and student body powering Create • Inspire • Aspire.
          </motion.p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 pb-24">
        <Divider />

        {/* Coordinators */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold">Coordinators</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-start">
            {coordinators.map((m, i) => (
              <TeamCard key={i} member={m} />
            ))}
          </div>
        </section>

        <Divider />

        {/* Student Body */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold">Student Body</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-start">
            {students.map((m, i) => (
              <TeamCard key={i} member={m} />
            ))}
          </div>
        </section>

        <Divider />

  <section className="text-center text-sm text-gray-600 mt-6">Last updated {new Date().getFullYear()}</section>
      </main>
    </div>
  )
}


