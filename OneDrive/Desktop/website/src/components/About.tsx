import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 bg-white/5">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold">
          About E-Cell
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-6 text-white/90">
          Founded in 20XX, the Entrepreneurship Cell was created to enable students to explore startups, collaborate with mentors, and transform bold ideas into impactful ventures. We host workshops, hackathons, and pitch events throughout the year. (Placeholder content.)
        </motion.p>
      </div>
    </section>
  )
}


