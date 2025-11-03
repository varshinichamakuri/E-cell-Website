import { motion } from 'framer-motion'
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Collaborate() {
	return (
		<div className="min-h-screen bg-white text-black">
			{/* Hero with animated gradient */}
			<section className="relative overflow-hidden">
				<motion.div
					aria-hidden
					className="absolute inset-0"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, backgroundPosition: ['0% 50%', '100% 50%'] }}
					transition={{ duration: 14, repeat: Infinity, repeatType: 'reverse' }}
					style={{
						backgroundImage:
							'radial-gradient(800px 400px at 15% 10%, rgba(251,146,60,.18), transparent 60%), radial-gradient(800px 400px at 90% 10%, rgba(251,146,60,.12), transparent 60%)',
						backgroundSize: '160% 100%',
					}}
				/>
				<div className="relative max-w-5xl mx-auto px-4 pt-28 pb-16 text-center">
					<motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl sm:text-6xl font-extrabold">
						Connect With Us
					</motion.h1>
					<p className="mt-3 text-white/85 max-w-2xl mx-auto">
						Partner with us to ignite innovation and growth.
					</p>
				</div>
			</section>

			<main className="max-w-6xl mx-auto px-4 pb-24">
				{/* Intro */}
				<section className="text-center">
					<p className="text-white/85 max-w-3xl mx-auto">
						We collaborate with industry, alumni, and campus organizations to host workshops, hackathons, and mentoring sessions. Let’s build together.
					</p>
				</section>

				{/* Divider */}
				<div className="relative my-12">
					<div className="h-px gradient-ecell-line" />
					<div className="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-4 gradient-ecell-decor blur" />
				</div>

				{/* Contact form */}
				<section className="grid md:grid-cols-2 gap-8 items-start">
					<div>
						<h2 className="text-2xl sm:text-3xl font-bold">Get in touch</h2>
						<p className="mt-2 text-white/80">Share a few details and we’ll reach out.</p>
						<form className="mt-6 space-y-5">
							<FloatingInput id="name" label="Name" type="text" />
							<FloatingInput id="email" label="Email" type="email" />
							<FloatingInput id="org" label="Organization" type="text" />
							<FloatingTextarea id="message" label="Message" />
							<button type="submit" className="w-full md:w-auto rounded-full bg-ecell text-white px-6 py-3 shadow-lg shadow-ecell-30 hover:bg-ecell">
								Send Message
							</button>
						</form>
					</div>
				</section>

				{/* Footer */}
				<section className="mt-16 text-center">
					<div className="text-sm text-white/80">ecell@example.com • +91-90000 00000</div>
					<div className="mt-3 flex items-center justify-center gap-4 text-xl">
						<a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white"><FaInstagram /></a>
						<a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white"><FaLinkedin /></a>
						<a href="mailto:ecell@example.com" className="text-white/80 hover:text-white"><FaEnvelope /></a>
					</div>
				</section>
			</main>
		</div>
	)
}

function FloatingInput({ id, label, type = 'text' }: { id: string; label: string; type?: string }) {
	return (
		<div className="relative">
			<input id={id} name={id} type={type} placeholder=" " className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 outline-none focus:border-ecell peer" />
			<label htmlFor={id} className="absolute left-3 top-1/2 -translate-y-1/2 px-1 text-gray-600 pointer-events-none transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-ecell peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm bg-white">
				{label}
			</label>
		</div>
	)
}

function FloatingTextarea({ id, label }: { id: string; label: string }) {
	return (
		<div className="relative">
			<textarea id={id} name={id} placeholder=" " rows={5} className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 outline-none focus:border-ecell peer" />
			<label htmlFor={id} className="absolute left-3 top-4 px-1 text-white/70 pointer-events-none transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-ecell peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm bg-[#0d0e10]">
				{label}
			</label>
		</div>
	)
}
