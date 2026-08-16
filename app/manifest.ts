import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Serein — Afaq Ahmad',
    short_name: 'Serein',
    description: 'Serein restaurant ordering experience crafted by Afaq Ahmad.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f6f5f0',
    theme_color: '#65705d',
  }
}
