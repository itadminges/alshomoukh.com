"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, ShieldCheck, Globe, Star, BookOpen, Compass, Award } from "lucide-react"


export function IntroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [-50, 50])

  return (
    <section ref={containerRef} className="pt-24 md:pt-40 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 aspect-[4/5] overflow-hidden shadow-strong"
            >
              <motion.div style={{ y: imageY }} className="absolute inset-x-0 -inset-y-20">
                <Image 
                  src="/school_building_premium.png" 
                  alt="Al Shomoukh Campus" 
                  fill 
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
            
            {/* Artistic Decoration */}
            <div className="absolute -top-12 -left-12 w-48 h-48 border border-navy/5 -z-0" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-ivory -z-0" />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-10 -right-10 z-20 bg-navy p-10 text-white shadow-strong"
            >
              <p className="text-4xl mb-1 text-gold">27+</p>
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/60">Years of Excellence</p>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">
                  Academic Legacy
                </span>
                <div className="h-[1px] w-12 bg-gold/30" />
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] mb-10 tracking-tight text-navy font-bold">
                Crafting the <br />
                <span className="text-gold">Future Leaders</span> <br />
                of Tomorrow
              </h2>

              <p className="text-navy/70 text-sm md:text-base leading-relaxed mb-12 font-medium max-w-xl">
                Founded on the principles of academic rigor and cultural sensitivity, Al Shomoukh International School offers a transformative education that transcends boundaries.
              </p>

              <div className="space-y-6 mb-12">
                {[
                  "British National Curriculum (EYFS to A-Level)",
                  "Global Citizenship & Local Values Integration",
                  "State-of-the-Art Science and Arts Facilities"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center">
                      <Check className="h-3 w-3 text-gold" />
                    </div>
                    <span className="text-navy/80 text-sm font-bold tracking-wide">{item}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-navy text-white hover:bg-navy/90 h-16 px-12 text-xs font-bold tracking-[0.2em] uppercase rounded-none transition-all group overflow-hidden relative">
                <span className="relative z-10">Our Philosophy</span>
                <motion.div 
                  className="absolute inset-0 bg-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
                />
              </Button>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}
