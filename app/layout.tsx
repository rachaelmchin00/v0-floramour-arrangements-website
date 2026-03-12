import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Floramour Arrangements | Luxury & Events Florist',
  description: 'Floramour Arrangements is a luxury and events florist based in Woodbridge, NJ, serving New Jersey and surrounding areas. Custom floral designs by Rachael Chin.',
  keywords: ['florist', 'luxury flowers', 'event florals', 'Woodbridge NJ', 'New Jersey florist', 'wedding flowers', 'custom arrangements'],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  metadataBase: new URL('https://floramourarrangements.com'),
  openGraph: {
    title: 'Floramour Arrangements | Luxury & Events Florist',
    description: 'Custom floral designs by Rachael Chin. Luxury arrangements, wedding florals, and event designs in Woodbridge, NJ.',
    url: 'https://floramour-arrangements.com',
    type: 'website',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9026-f0svNWkbvj3MjbUxX54Vyg6Thob20h.jpg',
        width: 1200,
        height: 630,
        alt: 'Luxury floral arrangement by Floramour Arrangements',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Floramour Arrangements | Luxury & Events Florist',
    description: 'Custom floral designs by Rachael Chin. Luxury arrangements, wedding florals, and event designs in Woodbridge, NJ.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9026-f0svNWkbvj3MjbUxX54Vyg6Thob20h.jpg'],
  },
}

export const viewport = {
  themeColor: '#FDFBF9',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
