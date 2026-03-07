import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Veta — Познай себя глубже',
  description: 'Помогаем раскрыть твои сильные стороны, понять других и строить гармоничные отношения через персонализированные инсайты.',
  generator: 'v0.app',
  keywords: ['астрология', 'натальная карта', 'оракул', 'самопознание', 'отношения', 'Telegram Mini App'],
  authors: [{ name: 'Veta' }],
  openGraph: {
    title: 'Veta — Познай себя глубже',
    description: 'Помогаем раскрыть твои сильные стороны, понять других и строить гармоничные отношения через персонализированные инсайты.',
    type: 'website',
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veta — Познай себя глубже',
    description: 'Помогаем раскрыть твои сильные стороны, понять других и строить гармоничные отношения через персонализированные инсайты.',
  },
}

export const viewport: Viewport = {
  themeColor: '#F5F3F8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
