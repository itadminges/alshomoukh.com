"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useEffect, useRef } from "react"
import { School, BookOpen, CheckCircle } from "lucide-react"

export default function LowerSecondaryPage() {
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
            Lower Secondary
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="reveal opacity-0 translate-y-4 transition-all duration-500 font-bold text-3xl text-primary mb-8 tracking-tight uppercase">
            Our Philosophy
          </h2>
          <p className="reveal opacity-0 translate-y-4 transition-all duration-500 delay-200 text-lg text-primary/70 leading-[1.8] font-medium mb-12">
            The Lower Secondary programme at Al Shomoukh International School is designed to prepare students for greater academic independence and success in future secondary studies.
          </p>

          <h3 className="reveal opacity-0 translate-y-4 transition-all duration-500 font-bold text-2xl text-primary mb-8 uppercase tracking-wider">
            Pearson Edexcel Curriculum
          </h3>
          <p className="reveal opacity-0 translate-y-4 transition-all duration-500 delay-300 text-lg text-primary/70 leading-[1.6] mb-12">
            Students study a broad and balanced curriculum including:
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              "English", "Mathematics", "Science (Biology, Physics, and Chemistry)", 
              "Information Technology", "Physical Education", "Art", 
              "Music", "French", "Social Studies"
            ].map((subject, i) => (
              <div key={i} className="reveal opacity-0 translate-x-4 transition-all duration-500 flex gap-4 items-center" style={{ transitionDelay: `${400 + i * 50}ms` }}>
                <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-primary font-medium">{subject}</span>
              </div>
            ))}
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-[#F8F9FA] p-12 border border-border/50">
            <h3 className="flex gap-4 items-center font-bold text-2xl mb-8 tracking-tight uppercase text-primary">
                <School className="w-10 h-10 text-secondary" />
                Additional Studies
            </h3>
            <p className="text-lg text-primary/80 leading-[1.8] font-medium">
              Arabic, Islamic Studies, and Social Studies in Arabic are also available in accordance with local educational requirements.
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
