"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useEffect, useRef } from "react"
import { BookMarked, GraduationCap, School, Layers } from "lucide-react"

export default function AcademicsPage() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-white" ref={sectionRef}>
      <Navbar />

      {/* Hero Header */}
      <section className="bg-primary py-32 mt-[76px] relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center relative z-10">
          <h1 className="reveal opacity-0 translate-y-8 transition-all duration-700 font-bold text-5xl md:text-6xl text-white tracking-tight uppercase mb-8">
            Academic Curriculum
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="reveal opacity-0 translate-y-4 transition-all duration-500 text-lg text-primary/70 leading-[1.8] space-y-6 font-medium text-center">
            <p>
              Al Shomoukh International School follows the UK National Curriculum, while also ensuring compliance with the requirements of the Ministry of Education in Oman.
            </p>
            <p>
              Students are prepared for internationally recognized qualifications, including <span className="text-secondary font-bold">Pearson Edexcel IGCSE</span> and <span className="text-secondary font-bold">Pearson Edexcel International A Levels</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Grid of Stages */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Kindergarten */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-white p-10 border border-border/50 h-full">
            <div className="p-3 bg-secondary/10 w-fit mb-8">
              <Layers className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-bold text-2xl text-primary mb-6 uppercase tracking-tight">Kindergarten</h3>
            <p className="text-primary/70 leading-[1.6] mb-8 font-medium">Foundation Stage – Play-based and nurturing environment for young learners.</p>
          </div>

          {/* Primary */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 bg-white p-10 border border-border/50 h-full">
            <div className="p-3 bg-secondary/10 w-fit mb-8">
              <BookMarked className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-bold text-2xl text-primary mb-6 uppercase tracking-tight">Primary School</h3>
            <p className="text-primary/70 leading-[1.6] mb-8 font-medium">Key Stages 1 & 2 – Strong foundation in literacy, numeracy, and creativity.</p>
          </div>

          {/* Lower Secondary */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 bg-white p-10 border border-border/50 h-full">
            <div className="p-3 bg-secondary/10 w-fit mb-8">
              <School className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-bold text-2xl text-primary mb-6 uppercase tracking-tight">Lower Secondary</h3>
            <p className="text-primary/70 leading-[1.6] mb-8 font-medium">Key Stage 3 – Balanced curriculum for advanced academic pathways.</p>
          </div>

          {/* Upper Secondary */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-300 bg-white p-10 border border-border/50 h-full">
            <div className="p-3 bg-secondary/10 w-fit mb-8">
              <GraduationCap className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-bold text-2xl text-primary mb-6 uppercase tracking-tight">Upper Secondary</h3>
            <p className="text-primary/70 leading-[1.6] mb-8 font-medium">Grades 9–12 – Edexcel IGCSE, International A Levels, and future university success.</p>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translate(0) !important;
        }
      `}</style>
    </main>
  )
}
