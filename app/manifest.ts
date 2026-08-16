import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Serein — Kitchen & table',
    short_name: 'Serein',
    description: 'Seasonal cooking, considered simply.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f6f5f0',
    theme_color: '#65705d',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }],
  }
}
