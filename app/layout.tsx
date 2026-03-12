import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
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
  description:
    'Помогаем раскрыть твои сильные стороны, понять других и строить гармоничные отношения через персонализированные инсайты.',
  generator: 'v0.app',
  keywords: [
    'астрология',
    'натальная карта',
    'оракул',
    'самопознание',
    'отношения',
    'Telegram Mini App',
  ],
  authors: [{ name: 'Veta' }],
  openGraph: {
    title: 'Veta — Познай себя глубже',
    description:
      'Помогаем раскрыть твои сильные стороны, понять других и строить гармоничные отношения через персонализированные инсайты.',
    type: 'website',
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veta — Познай себя глубже',
    description:
      'Помогаем раскрыть твои сильные стороны, понять других и строить гармоничные отношения через персонализированные инсайты.',
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

        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              k=e.createElement(t),a=e.getElementsByTagName(t)[0];
              k.async=1;k.src=r;a.parentNode.insertBefore(k,a)
            })
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(106855911, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });
          `}
        </Script>

        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/106855911"
              alt=""
              style={{ position: 'absolute', left: '-9999px' }}
            />
          </div>
        </noscript>
      </body>
    </html>
  )
}
