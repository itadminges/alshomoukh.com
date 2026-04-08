"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { BookMarked, GraduationCap, School, Layers, ChevronRight } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import Link from "next/link"

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

export default function AcademicsPage() {
  const stages = [
    { 
      title: "Kindergarten", 
      icon: Layers, 
      desc: "Foundation Stage – Play-based and nurturing environment for young learners.",
      link: "/kindergarten"
    },
    { 
      title: "Primary School", 
      icon: BookMarked, 
      desc: "Key Stages 1 & 2 – Strong foundation in literacy, numeracy, and creativity.",
      link: "/primary-school"
    },
    { 
      title: "Lower Secondary", 
      icon: School, 
      desc: "Key Stage 3 – Balanced curriculum for advanced academic pathways.",
      link: "/lower-secondary"
    },
    { 
      title: "Upper Secondary", 
      icon: GraduationCap, 
      desc: "Grades 9–12 – Edexcel IGCSE, International A Levels, and future success.",
      link: "/upper-secondary"
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="Academic Excellence" 
        subtitle="Empowering students through the UK National Curriculum, fostering global minds in a local context."
      />

      {/* Intro Section */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-lg text-navy/70 leading-[1.8] space-y-6 font-medium text-center">
              <p>
                Al Shomoukh International School follows the UK National Curriculum, while also ensuring compliance with the requirements of the Ministry of Education in Oman.
              </p>
              <p>
                Students are prepared for internationally recognized qualifications, including <span className="text-gold font-bold">Pearson Edexcel IGCSE</span> and <span className="text-gold font-bold">Pearson Edexcel International A Levels</span>.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Grid of Stages */}
      <section className="py-24 bg-ivory/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stages.map((stage, i) => (
            <FadeIn key={i} y={40} delay={0.1 * i}>
              <Link href={stage.link} className="block group h-full">
                <div className="bg-white p-10 border border-navy/5 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col group-hover:-translate-y-2">
                  <div className="p-4 bg-navy text-gold w-fit mb-8 transition-colors group-hover:bg-gold group-hover:text-white">
                    <stage.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-xl text-navy mb-6 uppercase tracking-tight group-hover:text-gold transition-colors">{stage.title}</h3>
                  <p className="text-navy/60 leading-relaxed mb-8 font-medium text-sm flex-grow">
                    {stage.desc}
                  </p>
                  <div className="flex items-center gap-2 text-gold font-bold text-[10px] uppercase tracking-widest group-hover:gap-4 transition-all">
                    Explore Stage <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Curriculum Highlight */}
      <section className="py-32 bg-navy text-white relative">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <FadeIn>
            <h2 className="text-gold font-bold tracking-[0.4em] uppercase text-[11px] mb-6">World-Class Standards</h2>
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8">Guided by the UK National Curriculum</h3>
            <p className="text-lg text-ivory/80 leading-relaxed max-w-3xl mx-auto font-medium mb-12">
              Our academic programme is designed to challenge students, foster independent thinking, and prepare them for success in leading universities worldwide.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-16">
              {[
                { label: "Accreditation", value: "Pearson Edexcel" },
                { label: "Assessment", value: "International Standards" },
                { label: "Outcome", value: "Global Leadership" }
              ].map((item, i) => (
                <div key={i}>
                  <p className="text-gold font-bold tracking-widest uppercase text-xs mb-2">{item.label}</p>
                  <p className="text-xl font-bold uppercase tracking-tight">{item.value}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
