export type GallerySection = {
  id: string
  title: string // e.g., 2025 or event name
  photos: { src: string; alt?: string }[]
}

export const gallerySections: GallerySection[] = [
  {
    id: '2025',
    title: '2025',
    photos: [
      { src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop', alt: 'Workshop' },
      { src: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop', alt: 'Pitch' },
      { src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop', alt: 'Talk' },
      { src: 'https://images.unsplash.com/photo-1529336953121-a0fb76ee2a5a?q=80&w=1200&auto=format&fit=crop', alt: 'Team' },
    ],
  },
  {
    id: '2024',
    title: '2024',
    photos: [
      { src: 'https://images.unsplash.com/photo-1551292831-023188e78222?q=80&w=1200&auto=format&fit=crop' },
      { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop' },
      { src: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1200&auto=format&fit=crop' },
      { src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1200&auto=format&fit=crop' },
    ],
  },
]


