import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { FaInstagram, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa'
import Home from './pages/Home.tsx'
import Team from './pages/Team.tsx'
import Events from './pages/Events.tsx'
import EventDetail from './pages/EventDetail.tsx'
import Blogs from './pages/Blogs.tsx'
import BlogDetail from './pages/BlogDetail.tsx'
import Collaborate from './pages/Collaborate.tsx'
import Register from './pages/Register.tsx'
import Gallery from './pages/Gallery.tsx'
import Preloader from './components/Preloader.tsx'

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  // useLocation will be resolved at render time inside BrowserRouter
  const location = useLocation()
  const isActive = location.pathname === to
  return (
    <Link
      to={to}
      className={`relative py-2 text-white transition-colors duration-200 hover:text-white/90 ${isActive ? 'text-white' : 'text-white/80'}`}>
      {children}
      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-200 ease-in-out ${isActive ? 'scale-x-100' : 'scale-x-0'}`} />
    </Link>
  )
}

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Allow previewing different preloader variants via URL query, e.g. ?preloader=zoom or ?preloader=assemble
  const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null
  const previewVariant = params?.get('preloader') as ('pulse' | 'zoom' | 'assemble') | null

  return (
    <BrowserRouter>
      {/* Preloader overlays the entire app until it finishes */}
  {showPreloader && <Preloader onFinish={() => setShowPreloader(false)} variant={previewVariant ?? 'pulse'} />}

  <header className="fixed top-0 left-0 right-0 z-[60] shadow-md" style={{ backgroundColor: 'var(--ecell-primary)' }}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo */}
            <Link to="/" className="flex items-center">
              <img src="/e-cell-logo.png" alt="E-Cell Logo" className="h-10 w-auto" />
              <span className="ml-3 text-white font-oswald text-xl">E-Cell</span>
            </Link>

            {/* Center: links (desktop) */}
            <div className="hidden md:flex items-center justify-center flex-1 px-8 space-x-8">
              <NavLink to="/">HOME</NavLink>
              <NavLink to="/events">EVENTS</NavLink>
              <NavLink to="/blogs">BLOGS</NavLink>
              <NavLink to="/gallery">GALLERY</NavLink>
              <NavLink to="/register">REGISTER</NavLink>
              <NavLink to="/collaborate">COLLABORATE</NavLink>
              <NavLink to="/team">OUR TEAM</NavLink>
            </div>

            {/* Right: social icons (desktop) */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/90 transition-colors duration-200">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/90 transition-colors duration-200">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="mailto:contact@ecell.com" className="text-white hover:text-white/90 transition-colors duration-200">
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>

            {/* Mobile hamburger */}
            <button onClick={() => setIsMenuOpen((s) => !s)} className="md:hidden p-2 text-white/90 hover:text-white transition-colors duration-200">
              {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden transition-all duration-200 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="flex flex-col px-2 py-3 space-y-1">
              <NavLink to="/">HOME</NavLink>
              <NavLink to="/events">EVENTS</NavLink>
              <NavLink to="/blogs">BLOGS</NavLink>
              <NavLink to="/gallery">GALLERY</NavLink>
              <NavLink to="/register">REGISTER</NavLink>
              <NavLink to="/collaborate">COLLABORATE</NavLink>
              <NavLink to="/team">OUR TEAM</NavLink>
            </div>
            <div className="flex items-center justify-start px-3 py-3 border-t border-white/10 space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/90 transition-colors duration-200">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/90 transition-colors duration-200">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="mailto:contact@ecell.com" className="text-white hover:text-white/90 transition-colors duration-200">
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
          </div>
        </nav>
      </header>
      {/* Main app fades in smoothly once preloader is removed */}
      <div className={`transition-opacity duration-700 ${showPreloader ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
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
      </div>
    </BrowserRouter>
  )
}


