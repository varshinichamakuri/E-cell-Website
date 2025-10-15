import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Team from './pages/Team.tsx'
import Events from './pages/Events.tsx'
import EventDetail from './pages/EventDetail.tsx'
import Blogs from './pages/Blogs.tsx'
import BlogDetail from './pages/BlogDetail.tsx'
import Collaborate from './pages/Collaborate.tsx'
import Register from './pages/Register.tsx'
import Gallery from './pages/Gallery.tsx'

export default function App() {
  return (
    <BrowserRouter>
      <div className="fixed top-3 left-1/2 -translate-x-1/2 z-[60]">
        <nav className="rounded-full bg-white/10 border border-white/10 backdrop-blur px-4 py-2 text-sm text-white flex gap-4">
          <Link to="/" className="hover:text-orange-300">Home</Link>
          <Link to="/events" className="hover:text-orange-300">Events</Link>
          <Link to="/blogs" className="hover:text-orange-300">Blogs</Link>
          <Link to="/gallery" className="hover:text-orange-300">Gallery</Link>
          <Link to="/register" className="hover:text-orange-300">Register</Link>
          <Link to="/collaborate" className="hover:text-orange-300">Collaborate</Link>
          <Link to="/team" className="hover:text-orange-300">Our Team</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/register" element={<Register />} />
        <Route path="/collaborate" element={<Collaborate />} />
      </Routes>
    </BrowserRouter>
  )
}


