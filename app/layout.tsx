import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
// Fonts are loaded in globals.css from the public/Font directory

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
import { CustomCursor } from "@/components/custom-cursor"
import { ScrollProgress } from "@/components/scroll-progress"
import { BackToTop } from "@/components/back-to-top"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-background text-foreground flex flex-col min-h-screen">
        <SmoothScroll>
          <ScrollProgress />
          <CustomCursor />
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
