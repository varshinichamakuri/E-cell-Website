import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  const socials = [
    { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com' },
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: FaEnvelope, label: 'Email', href: 'mailto:ecell@example.com' },
  ]
  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">Contact</h2>
        <p className="mt-4 text-white/80">Connect with us on social media.</p>
        <div className="mt-8 flex items-center justify-center gap-6">
          {socials.map((s, idx) => {
            const Icon = s.icon
            return (
              <a key={idx} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="group relative">
                <span className="absolute -inset-3 rounded-full bg-orange-500/25 blur opacity-0 group-hover:opacity-100 transition" />
                <span className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/10 text-white text-2xl group-hover:scale-105 transition-transform">
                  <Icon />
                </span>
              </a>
            )
          })}
        </div>
        <p className="mt-8 text-xs text-white/60">© {new Date().getFullYear()} E-Cell. All rights reserved.</p>
      </div>
    </section>
  )
}


