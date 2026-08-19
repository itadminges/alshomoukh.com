"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SectionSpirals } from "@/components/decorative-spirals"

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const bgRotateX = useTransform(scrollYProgress, [0, 1], [0, 14])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const contentRotateX = useTransform(scrollYProgress, [0, 0.75], [0, -18])
  const contentZ = useTransform(scrollYProgress, [0, 0.75], [0, -120])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section 
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-navy scroll-3d-scene-deep"
    >
      <SectionSpirals variant="hero" />
      {/* Background Media Layer */}
      <motion.div 
        style={{ y: y1, rotateX: bgRotateX, scale: bgScale, transformStyle: "preserve-3d" }}
        className="absolute inset-0 z-0 origin-center"
      >
        <Image
          src="/hero-bg.png"
          alt="Al Shomoukh Campus"
          fill
          sizes="100vw"
          className="object-cover scale-105"
          priority
        />
        {/* Multi-layer High-contrast Dark Overlay for maximum text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/70 to-navy/90" />
        <div className="absolute inset-0 bg-black/25" />
      </motion.div>

      {/* Content Layer */}
      <div className="relative z-10 w-full mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            style={{ rotateX: contentRotateX, translateZ: contentZ, opacity: contentOpacity, transformStyle: "preserve-3d" }}
          >
            {/* Trust Indicator - High Contrast Badge */}
            <div className="inline-flex items-center justify-center gap-3 mb-6 px-5 py-2 rounded-full bg-navy/90 border border-gold/50 shadow-lg backdrop-blur-md">
              <div className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-gold-light font-extrabold tracking-[0.35em] uppercase text-[11px] md:text-[12px]">
                Established 2015
              </span>
              <div className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl md:text-5xl lg:text-7xl text-white leading-[1.1] mb-8 tracking-tight uppercase font-bold text-balance drop-shadow-md">
              Where Ambition Meets <br />
              <span className="text-[#E8C589] font-extrabold drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
                Global Excellence
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm md:text-base text-ivory/95 max-w-xl mx-auto mb-10 leading-relaxed font-medium drop-shadow-sm">
              Empowering students through a world-class international education that inspires critical thinking, nurtures cultural identity, and prepares confident leaders for a changing world.
            </p>

            {/* CTA Button */}
            <div className="flex items-center justify-center">
              <Link href="/admissions">
                <Button className="bg-gold text-white hover:bg-gold-light hover:text-navy h-14 px-12 text-[11px] font-extrabold tracking-[0.25em] uppercase rounded-none transition-all shadow-xl hover:shadow-gold/30">
                  Begin Admissions
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Trust Strip */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-0 w-full z-10 hidden lg:block"
      >
        <div className="mx-auto max-w-[1440px] px-20">
          <div className="flex justify-between items-center py-6 border-t border-white/15">
            {[
              { label: "Accredited by", value: "Ministry of Education" },
              { label: "Curriculum", value: "Pearson Edexcel & BTEC" },
              { label: "Community", value: "45+ Nationalities" }
            ].map((item, i) => (
              <div key={i} className="text-left">
                <p className="text-[9px] font-bold text-gold-light uppercase tracking-widest mb-1 drop-shadow-sm">{item.label}</p>
                <p className="text-[11px] text-white font-bold uppercase tracking-wider drop-shadow-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
