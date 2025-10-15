export type EventItem = {
  id: string
  title: string
  date: string
  status: 'upcoming' | 'ongoing' | 'past'
  image: string
  summary: string
  description: string
  speakers?: { name: string; photo?: string }[]
}

export const events: EventItem[] = [
  {
    id: 'pitch-night-2025',
    title: 'Pitch Night 2025',
    date: 'Dec 2, 2025',
    status: 'upcoming',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    summary: 'Student founders pitch to investors and mentors.',
    description: 'An evening dedicated to student startups. Shortlisted teams pitch to a jury of investors and operators. Workshops in the afternoon followed by networking.',
    speakers: [
      { name: 'Arjun Mehta' },
      { name: 'Sara Kapoor' },
    ],
  },
  {
    id: 'fireside-ama',
    title: 'Founder Fireside AMA',
    date: 'Nov 18, 2025',
    status: 'ongoing',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop',
    summary: 'Ask-Me-Anything with alumni founders.',
    description: 'Candid founder stories, learnings from scaling, and audience Q&A. Networking chai after the session.',
  },
  {
    id: 'ideation-sprint',
    title: 'Ideation Sprint',
    date: 'Oct 10–12, 2025',
    status: 'past',
    image: 'https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?q=80&w=1200&auto=format&fit=crop',
    summary: '48-hour hack + mentorship to validate ideas.',
    description: 'Teams explored problem statements, built quick prototypes, and pitched on day 2. Mentors across product, design, and GTM supported.',
  },
]


