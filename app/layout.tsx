import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const display = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-display', weight: ['400', '500', '600'] })
const ui = DM_Sans({ subsets: ['latin'], variable: '--font-ui', weight: ['400', '500', '600'] })

export const metadata: Metadata = {
  title: 'Serein — Afaq Ahmad',
  description: 'Serein restaurant ordering experience crafted by Afaq Ahmad.',
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
      </body>
    </html>
  )
}
