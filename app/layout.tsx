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

import { SCHOOL_SCHEMA_JSON_LD } from '@/lib/school-info'

export const metadata: Metadata = {
  title: {
    default: 'Al Shomoukh International Private School',
    template: '%s | Al Shomoukh International Private School',
  },
  description: 'Providing a world-class British and Omani education that empowers students to lead with integrity, innovate with passion, and succeed with purpose.',
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
  openGraph: {
    title: 'Al Shomoukh International Private School',
    description: 'Providing a world-class British and Omani education that empowers students to lead with integrity, innovate with passion, and succeed with purpose.',
    type: 'website',
    locale: 'en_OM',
    siteName: 'Al Shomoukh International Private School',
  }
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHOOL_SCHEMA_JSON_LD) }}
        />
      </head>
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
