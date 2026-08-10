import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import localFont from 'next/font/local'
import './globals.css'

const inter = localFont({
  src: '../public/Font/helvetica-world-regular.ttf',
  variable: '--font-inter',
  display: 'swap',
})

const poppins = localFont({
  src: [
    {
      path: '../public/Font/HelveticaNeue-MediumCond.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/Font/HelveticaNeue-BoldCond.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-poppins',
  display: 'swap',
})

const cormorant = localFont({
  src: [
    {
      path: '../public/Font/Helvetica-Oblique.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/Font/Helvetica-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Al Shomoukh International Private School',
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
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${cormorant.variable}`}>
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
