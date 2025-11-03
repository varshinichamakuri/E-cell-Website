import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { blogs as allBlogs } from '../data/blogs'
import type { BlogItem } from '../data/blogs'

const tagOptions = ['All'] as const

export default function BlogsPage() {
  const [tag, setTag] = useState<typeof tagOptions[number]>('All')
  const filtered = useMemo(
    () => (tag === 'All' ? allBlogs : allBlogs.filter(b => b.tags.includes(tag))),
    [tag]
  )

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header with animated overlay */}
      <section className="relative overflow-hidden">
        <motion.div aria-hidden className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1, backgroundPosition: ['0% 50%', '100% 50%'] }} transition={{ duration: 14, repeat: Infinity, repeatType: 'reverse' }} style={{
          backgroundImage: 'radial-gradient(600px 300px at 10% 20%, rgba(251,146,60,.18), transparent 60%), radial-gradient(600px 300px at 90% 0%, rgba(251,146,60,.12), transparent 60%)',
          backgroundSize: '160% 100%'
        }} />
        <div className="relative max-w-6xl mx-auto px-4 pt-28 pb-16 text-center">
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl sm:text-6xl font-extrabold">
            Blogs & Stories
          </motion.h1>
          <p className="mt-3 text-gray-700 max-w-2xl mx-auto">Ideas, recaps, and perspectives from the E-Cell community.</p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 pb-24">
        {/* Filter bar */}
        <div className="flex items-center justify-center gap-2 rounded-full bg-white/10 border border-white/10 p-1 w-fit mx-auto">
          {tagOptions.map(option => (
            <button key={option} onClick={() => setTag(option)} className={`px-4 py-2 rounded-full text-sm transition ${tag === option ? 'bg-ecell text-white' : 'text-white/80 hover:text-white'}`}>
              {option}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div key={tag} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }} className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(b => (
              <BlogCard key={b.id} item={b} />
            ))}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}

function BlogCard({ item }: { item: BlogItem }) {
  return (
    <motion.div whileHover={{ y: -6, scale: 1.01 }} className="rounded-2xl overflow-hidden border border-gray-100 card-light">
      <div className="aspect-video overflow-hidden">
        <motion.img src={item.image} alt="blog" className="w-full h-full object-cover" whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} />
      </div>
      <div className="p-5">
        <div className="text-xs text-gray-600">By {item.author} • {item.date}</div>
        <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
        <p className="mt-2 text-gray-700 text-sm">{item.preview}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {item.tags.map(t => (
            <span key={t} className="text-[11px] text-ecell bg-ecell-20 px-2 py-1 rounded-full">{t}</span>
          ))}
        </div>
        <div className="mt-4">
          <Link to={`/blogs/${item.id}`} className="text-sm text-ecell hover:text-ecell-muted">Read More</Link>
        </div>
      </div>
    </motion.div>
  )
}


