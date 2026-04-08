"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { School, CheckCircle2, BookOpen, Globe, Microscope, Calculator, Palette, Music, Cpu, Activity } from "lucide-react"
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

export default function LowerSecondaryPage() {
  const subjects = [
    { name: "English", icon: BookOpen },
    { name: "Mathematics", icon: Calculator },
    { name: "Science", icon: Microscope },
    { name: "Information Technology", icon: Cpu },
    { name: "Physical Education", icon: Activity },
    { name: "Art & Design", icon: Palette },
    { name: "Music", icon: Music },
    { name: "French", icon: Globe },
    { name: "Social Studies", icon: Globe }
  ]

  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="Lower Secondary" 
        subtitle="Bridging the gap between primary and upper secondary with a rigorous, balanced, and inspiring academic programme."
      />

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-bold text-3xl text-navy mb-8 tracking-tight uppercase border-l-4 border-gold pl-6">
              Our Philosophy
            </h2>
            <p className="text-lg text-navy/70 leading-[1.8] font-medium mb-12 italic">
              The Lower Secondary programme at Al Shomoukh International School is designed to foster greater academic independence and prepare students for success in their future IGCSE and A Level studies.
            </p>
          </FadeIn>

          <FadeIn>
            <h3 className="font-bold text-2xl text-navy mb-8 uppercase tracking-widest text-center">
              Pearson Edexcel Curriculum
            </h3>
            <p className="text-navy/60 text-center mb-16 font-medium">
              A comprehensive framework that develops deeper understanding across core and foundation subjects.
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-24">
            {subjects.map((subject, i) => (
              <FadeIn key={i} y={20} delay={0.05 * i}>
                <div className="bg-ivory/20 p-6 border border-navy/5 flex flex-col items-center text-center group hover:bg-navy hover:text-white transition-all duration-500">
                  <div className="p-3 bg-navy/5 rounded-none mb-4 group-hover:bg-gold/20 transition-colors">
                    <subject.icon className="w-6 h-6 text-navy group-hover:text-gold transition-colors" />
                  </div>
                  <span className="font-bold text-xs uppercase tracking-widest leading-tight">{subject.name}</span>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="bg-ivory/30 p-12 border-t-4 border-gold shadow-sm">
              <h3 className="flex gap-4 items-center font-bold text-2xl mb-8 tracking-tight uppercase text-navy">
                <School className="w-10 h-10 text-gold" />
                Additional Studies
              </h3>
              <div className="space-y-6">
                <p className="text-lg text-navy/80 leading-[1.8] font-medium">
                  In accordance with local educational requirements and to foster cultural integrity, we provide mandated courses in:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["Arabic Language", "Islamic Studies", "Omani Social Studies"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-navy font-bold uppercase tracking-tight text-sm">
                      <CheckCircle2 className="w-5 h-5 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Preparation Callout */}
      <section className="py-24 bg-navy text-white text-center">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold uppercase tracking-tight mb-6">Preparing for Excellence</h2>
            <p className="text-lg text-ivory/80 leading-relaxed font-medium mb-12">
              Our Lower Secondary curriculum serves as the crucial foundation for the IGCSE years, ensuring every student has the skills and knowledge to excel in their chosen academic pathways.
            </p>
            <div className="inline-block px-10 py-4 border border-gold text-gold font-bold uppercase tracking-widest text-xs">
              Pathway to IGCSE
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
