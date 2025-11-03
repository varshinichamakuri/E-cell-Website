export type Member = {
  name: string
  role: string
  image?: {
    src: string
    width: number
    height: number
  }
  linkedin?: string
}

export const coordinators: Member[] = [
  { name: 'Aarav Sharma', role: 'Overall Coordinator', image: { src: 'public/images/aaravsharma.jpg', width: 648, height: 864 }, linkedin: 'https://www.linkedin.com' },
]

export const students: Member[] = [
  { name: 'Rohan Gupta', role: 'Design', image: { src: 'public/images/rohangupta.jpg', width: 648, height: 864 }, linkedin: 'https://www.linkedin.com' },
  { name: 'Neha Verma', role: 'Outreach', image: { src: 'public/images/nehaverma.jpg', width: 648, height: 864 }, linkedin: 'https://www.linkedin.com' },
  { name: 'Kunal Mehta', role: 'Logistics', image: { src: 'public/images/kunalmehta.jpg', width: 648, height: 864 }, linkedin: 'https://www.linkedin.com' },
  { name: 'Simran Kaur', role: 'Sponsorship', image: { src: 'public/images/simrankaur.jpg', width: 648, height: 864 }, linkedin: 'https://www.linkedin.com' },
  { name: 'Aditya Rao', role: 'Tech', image: { src: 'public/images/adityarao.jpg', width: 648, height: 864 }, linkedin: 'https://www.linkedin.com' },
  { name: 'Priya Nair', role: 'Content', image: { src: 'public/images/priyanair.jpg', width: 648, height: 864 }, linkedin: 'https://www.linkedin.com' },
  { name: 'Yash Jain', role: 'PR', image: { src: 'public/images/yashjain.jpg', width: 648, height: 864 }, linkedin: 'https://www.linkedin.com' },
  { name: 'Ananya Das', role: 'Ops', image: { src: 'public/images/ananyadas.jpg', width: 648, height: 864 }, linkedin: 'https://www.linkedin.com' },
]
