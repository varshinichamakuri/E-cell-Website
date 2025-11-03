export type GalleryEvent = {
  title: string
  photos: { src: string; alt?: string }[]
}

export type GallerySection = {
  id: string
  title: string
  events: GalleryEvent[]
}

export const gallerySections: GallerySection[] = [
  {
    id: '2025',
    title: '2025',
    events: [
      {
        title: 'Workshop',
        photos: [
          { src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop', alt: 'Workshop - group' },
          { src: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1200&auto=format&fit=crop', alt: 'Workshop - speaker' },
        ],
      },
      {
        title: 'Pitch',
        photos: [
          { src: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop', alt: 'Pitch session' },
          { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop', alt: 'Pitch crowd' },
        ],
      },
      {
        title: 'Talk',
        photos: [
          { src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop', alt: 'Talk stage' },
          { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop', alt: 'Talk audience' },
        ],
      },
      {
        title: 'Team',
        photos: [
          { src: 'https://images.unsplash.com/photo-1529336953121-a0fb76ee2a5a?q=80&w=1200&auto=format&fit=crop', alt: 'Team' },
        ],
      },
    ],
  },
  {
    id: '2024',
    title: '2024',
    events: [
      { title: 'Portraits', photos: [{ src: 'https://images.unsplash.com/photo-1551292831-023188e78222?q=80&w=1200&auto=format&fit=crop', alt: 'Portrait' }] },
      { title: 'Office', photos: [{ src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop', alt: 'Office' }] },
      { title: 'Design', photos: [{ src: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1200&auto=format&fit=crop', alt: 'Design' }] },
      { title: 'Coding', photos: [{ src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1200&auto=format&fit=crop', alt: 'Coding' }] },
    ],
  },
]


