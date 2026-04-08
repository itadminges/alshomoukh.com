"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section 
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-navy"
    >
      {/* Background Media Layer */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/hero-bg.png"
          alt="Al Shomoukh Campus"
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-navy/30" />
      </motion.div>

      {/* Content Layer */}
      <div className="relative z-10 w-full mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Trust Indicator */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-6 bg-gold/50" />
            <span className="text-gold font-bold tracking-[0.4em] uppercase text-[9px]">
              Established 1997
            </span>
            <div className="h-[1px] w-6 bg-gold/50" />
          </div>

          <h1 className="text-2xl md:text-3xl lg:text-4xl text-white leading-[1.2] mb-6 tracking-tight uppercase font-bold">
            Where Ambition Meets <br />
            <span className="text-gold">Global Excellence</span>
          </h1>

          <p className="text-xs md:text-sm text-ivory/80 max-w-lg mx-auto mb-10 leading-relaxed font-medium">
            Empowering students with a world-class international education that fosters critical thinking, cultural integrity, and lifelong leadership.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button className="bg-gold text-white hover:bg-gold/90 h-12 px-8 text-[9px] font-bold tracking-[0.2em] uppercase rounded-none transition-all">
              Begin Admissions
            </Button>
            <button className="flex items-center gap-3 text-white hover:text-gold transition-colors group">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold transition-colors">
                <Play className="h-3 w-3 fill-white" />
              </div>
              <span className="text-[9px] font-bold tracking-[0.2em] uppercase">Experience SIS</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Trust Strip */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-0 w-full z-10 hidden lg:block"
      >
        <div className="mx-auto max-w-[1440px] px-20">
          <div className="flex justify-between items-center py-6 border-t border-white/10">
            {[
              { label: "Accredited by", value: "Ministry of Education" },
              { label: "Curriculum", value: "Pearson Edexcel" },
              { label: "Community", value: "45+ Nationalities" }
            ].map((item, i) => (
              <div key={i} className="text-left">
                <p className="text-[8px] font-bold text-gold uppercase tracking-widest mb-1">{item.label}</p>
                <p className="text-[10px] text-white/80 font-bold uppercase tracking-wider">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
