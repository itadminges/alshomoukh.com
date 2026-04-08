"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { BookMarked, GraduationCap, School, CheckSquare, Globe, Target } from "lucide-react"
import { PageHero } from "@/components/page-hero"

const FadeIn = ({ children, delay = 0, x = 0, y = 30 }: { children: React.ReactNode, delay?: number, x?: number, y?: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function CurriculumPage() {
  const features = [
    { title: "Broad & Balanced", description: "Covering a wide range of subjects to ensure holistic development.", icon: BookMarked },
    { title: "Internationally Recognized", description: "Preparing students for IGCSE and International A Levels.", icon: GraduationCap },
    { title: "Culturally Responsive", description: "Integrating local Omani values and MOE requirements.", icon: School },
    { title: "Student Centered", description: "Focusing on individual learning styles and unique needs.", icon: CheckSquare },
  ]

  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="Our Curriculum" 
        subtitle="A world-class educational framework that blends British excellence with Omani cultural heritage."
      />

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-lg text-navy/70 leading-[1.8] space-y-6 font-medium text-center mb-20 italic">
              <p>
                Our curriculum is based on the National Curriculum for England, which provides a broad, balanced, and stimulating program of study.
              </p>
              <p>
                It is designed to prepare students for the demands of the 21st century while respecting and integrating Omani cultural values and Ministry of Education requirements.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {features.map((item, i) => (
              <FadeIn key={i} y={40} delay={0.1 * i}>
                <div className="bg-white p-10 border border-navy/5 shadow-sm hover:shadow-md transition-all group h-full">
                  <div className="p-4 bg-navy text-gold w-fit mb-8 transition-colors group-hover:bg-gold group-hover:text-white">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-xl text-navy mb-4 uppercase tracking-tight group-hover:text-gold transition-colors">{item.title}</h3>
                  <p className="text-navy/60 font-medium leading-relaxed text-sm">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Global Citizenship Section */}
      <section className="py-24 bg-navy text-white relative">
        <div className="mx-auto max-w-5xl px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn x={-40}>
            <h2 className="text-gold font-bold tracking-[0.4em] uppercase text-[11px] mb-6">Educational Vision</h2>
            <h3 className="text-3xl font-bold uppercase tracking-tight mb-8">Preparing Future Global Citizens</h3>
            <p className="text-lg text-ivory/80 leading-relaxed font-medium mb-8">
              We go beyond academics to instill values of leadership, empathy, and social responsibility. Our students are equipped to thrive in a globalized world while remaining rooted in their local heritage.
            </p>
            <div className="flex gap-10">
              <div className="text-center">
                <Globe className="w-10 h-10 text-gold mx-auto mb-4" />
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">Global Path</p>
              </div>
              <div className="text-center">
                <Target className="w-10 h-10 text-gold mx-auto mb-4" />
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">Local Excellence</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn x={40} delay={0.2}>
            <div className="relative aspect-square border border-gold/20 p-4">
              <div className="absolute inset-0 bg-gold/5 animate-pulse"></div>
              <div className="relative z-10 w-full h-full border border-gold/10 flex items-center justify-center">
                <span className="text-gold font-bold tracking-[0.5em] uppercase text-4xl opacity-20">SIS</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
