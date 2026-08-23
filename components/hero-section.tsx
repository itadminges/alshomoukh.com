"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SectionSpirals } from "@/components/decorative-spirals"

export function HeroSection() {
  return (
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden bg-navy"
      >
        <SectionSpirals variant="hero" />
        {/* Background Media Layer */}
        <div className="absolute inset-0 z-0 origin-center">
          <Image
            src="/images/final/kindergarten-story.webp"
            alt="Al Shomoukh kindergarten students learning together during story time"
            fill
            sizes="100vw"
            className="object-cover object-center scale-105"
            priority
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 w-full mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <div>
              {/* Trust Indicator */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-[1px] w-6 bg-gold/50" />
                <span className="text-gold font-bold tracking-[0.4em] uppercase text-[11px]">
                  Established 2015
                </span>
                <div className="h-[1px] w-6 bg-gold/50" />
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-7xl text-white leading-[1.1] mb-8 tracking-tight uppercase font-bold text-balance">
                Where Ambition Meets <br />
                <span className="inline-block text-gold">
                  Global Excellence
                </span>
              </h1>
              <p className="text-sm md:text-base text-ivory/90 max-w-xl mx-auto mb-10 leading-relaxed font-medium">
                Empowering students through a world-class international education that inspires critical thinking, nurtures cultural identity, and prepares confident leaders for a changing world.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/admissions">
                  <Button className="bg-gold text-white hover:bg-gold/90 h-14 px-10 text-[11px] font-bold tracking-[0.25em] uppercase rounded-none transition-all shadow-lg hover:shadow-gold/20">
                    Begin Admissions
                  </Button>
                </Link>

              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Strip */}
        <div className="absolute bottom-10 left-0 w-full z-10 hidden lg:block">
          <div className="mx-auto max-w-[1440px] px-20">
            <div className="flex justify-between items-center py-6 border-t border-white/10">
              {[
                { label: "Local Requirements", value: "Ministry of Education" },
                { label: "Curriculum", value: "Pearson Edexcel" },
                { label: "Student Journey", value: "Ages 3–18" }
              ].map((item, i) => (
                <div key={i} className="text-left">
                  <p className="text-[8px] font-bold text-gold uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-[10px] text-white/80 font-bold uppercase tracking-wider">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}
