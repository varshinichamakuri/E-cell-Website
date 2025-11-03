export type EventItem = {
  id: string
  title: string
  date: string
  time: string
  location: string
  status: 'upcoming' | 'ongoing' | 'past'
  image: string
  images?: string[]
  summary: string
  description: string
  highlights: string[]
  speakers?: { name: string; photo?: string }[]
}

export const events: EventItem[] = [
  {
    id: 'startup-pitch-fest',
    title: 'Startup Pitch Fest',
    date: '2025-11-12',
    time: '10:00 AM - 4:00 PM',
    location: 'Auditorium Hall, GRIET',
    status: 'upcoming',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop'
    ],
    summary: 'A platform for student entrepreneurs to pitch their startup ideas.',
    description: 'A platform for student entrepreneurs to pitch their startup ideas to investors and mentors.',
    highlights: ['Top 10 teams pitching', 'Expert mentors', 'Networking opportunities'],
    speakers: [
      { name: 'Arjun Mehta' },
      { name: 'Sara Kapoor' },
    ],
  },
  {
    id: 'women-in-innovation',
    title: 'Women in Innovation',
    date: '2025-11-25',
    time: '2:00 PM - 5:00 PM',
    location: 'Seminar Hall B',
    status: 'upcoming',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?q=80&w=1200&auto=format&fit=crop'
    ],
    summary: 'An inspiring session featuring women entrepreneurs.',
    description: 'An inspiring session featuring women entrepreneurs sharing their journeys and insights.',
    highlights: ['Guest speakers', 'Interactive Q&A', 'Panel discussion'],
    speakers: [
      { name: 'Sara Kapoor' },
    ],
  },
  {
    id: 'ideation-sprint',
    title: 'Ideation Sprint',
    date: '2025-12-05',
    time: '9:00 AM - 6:00 PM',
    location: 'Innovation Hub',
    status: 'upcoming',
    image: 'https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?q=80&w=1200&auto=format&fit=crop'
    ],
    summary: '48-hour hack + mentorship to validate ideas.',
    description: 'Teams explore problem statements, build quick prototypes, and pitch on day 2. Mentors across product, design, and GTM support.',
    highlights: ['Intensive workshops', 'Mentorship sessions', 'Prototype building'],
  },
]


