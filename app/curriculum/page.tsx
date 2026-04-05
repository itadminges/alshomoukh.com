"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useEffect, useRef } from "react"
import { BookMarked, GraduationCap, School, CheckSquare } from "lucide-react"

export default function CurriculumPage() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
      })
    }, { threshold: 0.1 })
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-white" ref={sectionRef}>
      <Navbar />
      <section className="bg-primary py-32 mt-[76px] relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center relative z-10">
          <h1 className="reveal opacity-0 translate-y-8 transition-all duration-700 font-bold text-5xl md:text-6xl text-white tracking-tight uppercase">
            Curriculum
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="reveal opacity-0 translate-y-4 transition-all duration-500 text-lg text-primary/70 leading-[1.8] space-y-6 font-medium text-center mb-16">
            <p>
              Our curriculum is based on the National Curriculum for England, which provides a broad, balanced, and stimulating program of study.
            </p>
            <p>
              It is designed to prepare students for the demands of the 21st century while respecting and integrating Omani cultural values and Ministry of Education requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: "Broad & Balanced", description: "Covering a wide range of subjects to ensure holistic development.", icon: BookMarked },
              { title: "Internationally Recognized", description: "Preparing students for IGCSE and International A Levels.", icon: GraduationCap },
              { title: "Culturally Responsive", description: "Integrating local Omani values and requirements.", icon: School },
              { title: "Student Centered", description: "Focusing on individual learning styles and needs.", icon: CheckSquare },
            ].map((item, i) => (
              <div key={i} className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-[#F8F9FA] p-10 border border-border/50" style={{ transitionDelay: `${200 + i * 100}ms` }}>
                <item.icon className="w-10 h-10 text-secondary mb-6" />
                <h3 className="font-bold text-2xl text-primary mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-primary/70 font-medium leading-[1.6]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <style jsx>{`
        .animate-in { opacity: 1 !important; transform: translate(0) !important; }
      `}</style>
    </main>
  )
}
