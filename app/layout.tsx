import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})


export const metadata: Metadata = {
  title: 'Al Shomoukh International School',
  description: 'Empowering the next generation of global citizens through excellence in education',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/favicon-16x16.png',
        type: 'image/png',
        sizes: '16x16',
      },
      {
        url: '/favicon-32x32.png',
        type: 'image/png',
        sizes: '32x32',
      },
    ],
    apple: '/apple-touch-icon.png',
  },
}

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SmoothScroll } from "@/components/smooth-scroll"
import { ScrollProgress } from "@/components/scroll-progress"
import { BackToTop } from "@/components/back-to-top"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground flex flex-col min-h-screen">
        <SmoothScroll>
          <ScrollProgress />
          <BackToTop />
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}
