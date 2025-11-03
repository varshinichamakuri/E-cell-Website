import { motion } from 'framer-motion'

export default function About() {
  return (
  <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold">
          About E-Cell
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-6 text-gray-800">
         E-Cell, GRIET is a student body run by the students of GRIET.It was established in the year 2019.Since then E-Cell has inspired many students of GRIET to consider Entrepreneurship as a career option.To develop an ecosystem conductive students to explore new avenues through innovation and develop products and services which are useful to the society.
        </motion.p>
      </div>
    </section>
  )
}


