import { Analytics } from '@vercel/analytics/next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const display = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-display', weight: ['400', '500', '600'] })
const ui = DM_Sans({ subsets: ['latin'], variable: '--font-ui', weight: ['400', '500', '600'] })

export const metadata: Metadata = {
  title: 'Serein — Kitchen & table',
  description: 'Seasonal cooking, considered simply. Order from Serein.',
  generator: 'v0.app',
  manifest: '/manifest.webmanifest',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f6f5f0',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${display.variable} ${ui.variable}`}>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
