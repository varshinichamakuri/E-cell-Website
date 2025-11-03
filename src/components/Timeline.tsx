import { motion } from 'framer-motion'
import { FaRocket, FaUsers, FaAward, FaLightbulb } from 'react-icons/fa'

const items = [
  { year: '2025', title: 'E-Cell Reboot', icon: FaRocket },
  { year: '2024', title: '250+ Members', icon: FaUsers },
  { year: '2023', title: 'National Pitch Finalists', icon: FaAward },
  { year: '2022', title: 'Innovation Grants', icon: FaLightbulb },
  { year: '2021', title: 'Innovation Grants', icon: FaLightbulb },
  { year: '2020', title: 'Innovation Grants', icon: FaLightbulb },
]

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold">Our Journey</h2>
        <div className="mt-10 relative">
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-white/20" />
          <ul className="space-y-10">
            {items.map((item, idx) => {
              const Icon = item.icon
              return (
                <li key={idx} className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="sm:flex sm:items-center sm:gap-8"
                  >
                    <div className="ml-2 sm:ml-0 sm:w-1/2 sm:text-right">
                      <div className="text-ecell-muted font-semibold">{item.year}</div>
                    </div>
                    <div className="relative flex items-center gap-3 sm:gap-4">
                      <span className="absolute -left-3 sm:left-1/2 sm:-translate-x-1/2 w-6 h-6 rounded-full bg-ecell shadow-lg shadow-ecell-30 grid place-items-center text-white">
                        <Icon className="text-xs" />
                      </span>
                    </div>
                    <div className="mt-2 sm:mt-0 sm:w-1/2">
                      <div className="text-lg font-semibold">{item.title}</div>
                    </div>
                  </motion.div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}


