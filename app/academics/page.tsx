"use client"

import { BookMarked, GraduationCap, School, Layers, ChevronRight } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Scroll3DReveal } from "@/components/scroll-3d"
import { SectionSpirals } from "@/components/decorative-spirals"
import Link from "next/link"

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
    <main className="min-h-screen bg-white overflow-hidden scroll-3d-scene">
      <PageHero 
        title="Academic Excellence" 
        subtitle="Empowering students through the British Curriculum, fostering global minds in a local context."
      />

      {/* Intro Section */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <SectionSpirals variant="light" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20 text-center">
          <div className="max-w-4xl mx-auto">
            <Scroll3DReveal rotateAmount={12} depth={35}>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-[1px] w-8 bg-gold/30" />
                <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">
                  Academic Framework
                </span>
                <div className="h-[1px] w-8 bg-gold/30" />
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy font-bold uppercase tracking-tight mb-8">
                World-Class <span className="text-gold">Standards</span>
              </h2>

              <div className="bg-ivory/40 p-8 md:p-12 border-l-4 border-gold shadow-strong space-y-6 text-navy/80 text-base md:text-xl leading-[1.8] font-medium">
                <p>
                  Al Shomoukh International Private School follows the British Curriculum, while also ensuring compliance with the requirements of the Ministry of Education in Oman.
                </p>
                <p>
                  Students are prepared for internationally recognized qualifications, including <span className="text-gold font-bold">Pearson Edexcel IGCSE</span> and <span className="text-gold font-bold">Pearson Edexcel International A Levels</span>.
                </p>
              </div>
            </Scroll3DReveal>
          </div>
        </div>
      </section>

      {/* Grid of Stages */}
      <section className="py-24 md:py-32 bg-ivory/30 border-y border-navy/5 relative overflow-hidden">
        <SectionSpirals variant="light" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-gold/30" />
              <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">Educational Stages</span>
              <div className="h-[1px] w-8 bg-gold/30" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy font-bold uppercase tracking-tight">
              Learning <span className="text-gold">Pathways</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stages.map((stage, i) => (
              <Scroll3DReveal key={i} rotateAmount={14 + i * 2} depth={30 + i * 8}>
                <Link href={stage.link} className="block group h-full">
                  <div className="bg-white p-8 md:p-10 border border-navy/5 shadow-strong hover:border-gold/40 transition-all duration-500 h-full flex flex-col justify-between group-hover:-translate-y-2 relative">
                    <div>
                      <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-8 group-hover:bg-gold group-hover:text-white transition-colors duration-500">
                        <stage.icon className="w-7 h-7" />
                      </div>
                      <h3 className="font-bold text-xl text-navy mb-4 uppercase tracking-tight group-hover:text-gold transition-colors">{stage.title}</h3>
                      <p className="text-navy/70 leading-relaxed font-medium text-sm mb-8">
                        {stage.desc}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-gold font-bold text-[10px] uppercase tracking-widest group-hover:gap-4 transition-all pt-4 border-t border-navy/5">
                      Explore Stage <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </Scroll3DReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Highlight */}
      <section className="py-24 md:py-32 bg-navy text-white relative overflow-hidden">
        <SectionSpirals variant="dark" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20 text-center">
          <div className="max-w-4xl mx-auto">
            <Scroll3DReveal rotateAmount={10} depth={35}>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-[1px] w-8 bg-gold/50" />
                <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">Excellence & Rigor</span>
                <div className="h-[1px] w-8 bg-gold/50" />
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-8">
                Guided by the <span className="text-gold">British Curriculum</span>
              </h2>

              <p className="text-lg md:text-xl text-ivory/80 leading-relaxed max-w-3xl mx-auto font-medium mb-12">
                Our academic programme is designed to challenge students, foster independent thinking, and prepare them for success in leading universities worldwide.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-16">
                {[
                  { label: "Accreditation", value: "Pearson Edexcel" },
                  { label: "Assessment", value: "International Standards" },
                  { label: "Outcome", value: "Global Leadership" }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 p-6 border border-white/10">
                    <p className="text-gold font-bold tracking-widest uppercase text-xs mb-2">{item.label}</p>
                    <p className="text-lg md:text-xl font-bold uppercase tracking-tight text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </Scroll3DReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
