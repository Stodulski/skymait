import type React from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import { ThemeProvider } from '@/src/components/theme-provider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', 'sans-serif']
})

const orbitron = Orbitron({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-orbitron',
  preload: true,
  fallback: ['system-ui', 'sans-serif']
})

export const metadata: Metadata = {
  title: 'Skyma IT - Desarrollo Web',
  description: 'Agencia de desarrollo web que transforma ideas en experiencias digitales extraordinarias',
  keywords: ['desarrollo web', 'diseño web', 'e-commerce', 'SEO', 'sitios web', 'aplicaciones web', 'landing pages'],
  authors: [{ name: 'Skyma IT' }],
  creator: 'Skyma IT',
  generator: 'Next.js',
  metadataBase: new URL('https://skymait.com'),
  openGraph: {
    title: 'Skyma IT - Desarrollo Web',
    description: 'Agencia de desarrollo web que transforma ideas en experiencias digitales extraordinarias',
    url: 'https://skymait.com',
    siteName: 'Skyma IT',
    images: [
      {
        url: 'https://skymait.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Skyma IT - Desarrollo Web Futurista'
      }
    ],
    locale: 'es_ES',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skyma IT - Desarrollo Web',
    description: 'Agencia de desarrollo web que transforma ideas en experiencias digitales extraordinarias',
    images: ['https://skymait.com/twitter-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export const viewport: Viewport = {
  themeColor: '#0F0F0F',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  colorScheme: 'dark'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${orbitron.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
