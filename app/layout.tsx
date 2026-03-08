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
    icon: '/favicon.ico',
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
