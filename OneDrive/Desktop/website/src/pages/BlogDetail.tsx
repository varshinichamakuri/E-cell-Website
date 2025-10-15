import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { blogs } from '../data/blogs'

export default function BlogDetail() {
  const { id } = useParams()
  const blog = blogs.find(b => b.id === id)
  if (!blog) {
    return (
      <div className="min-h-screen bg-[#081a33] text-white grid place-items-center">
        <div>
          <p className="text-white/80">Blog not found.</p>
          <Link to="/blogs" className="text-orange-300">Back to Blogs</Link>
        </div>
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-[#081a33] text-white">
      <section className="max-w-5xl mx-auto px-4 pt-28 pb-12">
        <Link to="/blogs" className="text-orange-300">← All Blogs</Link>
        <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold">{blog.title}</h1>
        <div className="mt-1 text-sm text-white/80">By {blog.author} • {blog.date}</div>
        <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} src={blog.image} alt="cover" className="w-full rounded-xl border border-white/10 mt-6" />
        <article className="prose prose-invert max-w-none mt-6">
          <p>{blog.content}</p>
        </article>
      </section>
    </div>
  )
}


