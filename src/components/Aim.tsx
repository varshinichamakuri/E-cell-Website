import { motion } from 'framer-motion'

export default function Aim() {
  return (
    <section id="aim" className="py-24">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl sm:text-5xl font-extrabold">
          Our Aim
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-6 text-lg text-gray-800">
          To cultivate entrepreneurial spirit, empower student founders, and create a vibrant ecosystem of innovation on campus.We aim to create awareness among students about Entrepreneurship and Startup culture,hrough various events such as E-Summit, E-Talks, Ideathon, WorkShops and many such events.
        </motion.p>
      </div>
    </section>
  )
}


