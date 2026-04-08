"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

interface PageHeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  quote?: {
    text: string
    author: string
  }
}

export function PageHero({ title, subtitle, backgroundImage = "/hero-bg.png", quote }: PageHeroProps) {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 150])

  return (
    <section 
      ref={containerRef}
      className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-navy"
    >
      {/* Background Media Layer */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover opacity-40 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/80" />
      </motion.div>

      {/* Content Layer */}
      <div className="relative z-10 w-full mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Trust Indicator */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-6 bg-gold/50" />
            <span className="text-gold font-bold tracking-[0.4em] uppercase text-[10px]">
              Al Shomoukh International School
            </span>
            <div className="h-[1px] w-6 bg-gold/50" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 tracking-tight uppercase font-bold text-balance">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-sm md:text-base text-ivory/80 max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
              {subtitle}
            </p>
          )}

          {quote && (
            <div className="mt-8 max-w-2xl mx-auto flex flex-col items-center">
              <p className="text-lg md:text-xl text-white/90 italic font-medium leading-relaxed">
                "{quote.text}"
              </p>
              <p className="mt-4 text-gold font-bold tracking-widest uppercase text-[10px]">
                — {quote.author}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
