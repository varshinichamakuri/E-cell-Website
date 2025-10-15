export type BlogItem = {
  id: string
  title: string
  image: string
  author: string
  date: string
  tags: string[]
  preview: string
  content: string
}

export const blogs: BlogItem[] = [
  {
    id: 'startup-playbook',
    title: 'The Campus Startup Playbook',
    image: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&w=1200&auto=format&fit=crop',
    author: 'E-Cell Editorial',
    date: 'Sep 28, 2025',
    tags: ['Startup', 'Innovation'],
    preview: 'From problem to pitch: a no-nonsense guide to launching at college.',
    content: 'Long-form content placeholder. Share founder stories, lessons, and actionable frameworks for students...'
  },
  {
    id: 'event-recap-ideation',
    title: 'Ideation Sprint — Recap',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop',
    author: 'Team E-Cell',
    date: 'Oct 15, 2025',
    tags: ['Events'],
    preview: 'Highlights from a 48-hour sprint: prototypes, pivots, and pitches.',
    content: 'Detailed recap of the sprint, mentor insights, and winning ideas...'
  },
  {
    id: 'innovators-mindset',
    title: 'The Innovator’s Mindset',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
    author: 'Guest Column',
    date: 'Aug 7, 2025',
    tags: ['Innovation'],
    preview: 'Think like a builder: curiosity, bias to action, and resilience.',
    content: 'Opinion essay on cultivating a mindset that ships...'
  }
]


