"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useEffect, useRef } from "react"
import { BookMarked, GraduationCap, School, BookOpen } from "lucide-react"

export default function PrimaryPage() {
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
          <h1 className="reveal opacity-0 translate-y-8 transition-all duration-700 font-bold text-5xl md:text-6xl text-white tracking-tight uppercase mb-8">
            Primary School
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="reveal opacity-0 translate-y-4 transition-all duration-500 font-bold text-3xl text-primary mb-8 tracking-tight uppercase">
            Primary Curriculum
          </h2>
          <p className="reveal opacity-0 translate-y-4 transition-all duration-500 delay-200 text-lg text-primary/70 leading-[1.8] font-medium mb-12">
            The Primary School programme at Al Shomoukh International School is designed to build strong academic foundations and promote curiosity, creativity, and confidence in learners.
          </p>

          <h3 className="reveal opacity-0 translate-y-4 transition-all duration-500 font-bold text-2xl text-primary mb-8 uppercase tracking-wider">
            Key Stages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              { title: "Key Stage 1", icon: School },
              { title: "Lower Key Stage 2", icon: BookMarked },
              { title: "Upper Key Stage 2 (Grades 3-6)", icon: GraduationCap }
            ].map((item, i) => (
              <div key={i} className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-[#F8F9FA] p-10 border border-border/50 flex flex-col items-center text-center" style={{ transitionDelay: `${300 + i * 100}ms` }}>
                <item.icon className="w-10 h-10 text-secondary mb-4" />
                <h4 className="font-bold text-lg text-primary uppercase">{item.title}</h4>
              </div>
            ))}
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-primary p-12 text-white">
            <h3 className="flex gap-4 items-center font-bold text-3xl mb-8 tracking-tight uppercase">
                <BookOpen className="w-10 h-10 text-secondary" />
                Reading Scheme
            </h3>
            <p className="text-xl text-white/80 leading-[1.8] font-medium">
              Our reading programme supports literacy development, comprehension, fluency, and a lifelong love of reading.
            </p>
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
