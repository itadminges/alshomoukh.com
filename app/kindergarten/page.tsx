"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useEffect, useRef } from "react"
import { Sparkles, Quote, Heart, Puzzle } from "lucide-react"

export default function KindergartenPage() {
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
            Kindergarten
          </h1>
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 max-w-3xl mx-auto flex flex-col items-center">
            <Quote className="w-10 h-10 text-secondary mb-4 opacity-50" />
            <p className="text-xl md:text-2xl text-white italic font-medium leading-[1.6]">
              "If a child can’t learn the way we teach, maybe we should teach the way they learn."
            </p>
            <p className="mt-4 text-secondary font-bold tracking-widest uppercase text-sm">— Ignacio Estrada</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="reveal opacity-0 translate-y-4 transition-all duration-500 font-bold text-3xl text-primary mb-8 tracking-tight uppercase">
            The Early Years Foundation Stage (EYFS)
          </h2>
          <p className="reveal opacity-0 translate-y-4 transition-all duration-500 delay-200 text-lg text-primary/70 leading-[1.8] font-medium mb-12">
            Al Shomoukh International School follows the Early Years Foundation Stage (EYFS) framework, adapted to meet the needs of each individual child. In KG1 and KG2, the integrated programme covers the seven areas of learning and development:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {[
              "Personal, Social and Emotional Development",
              "Communication and Language",
              "Physical Development",
              "Literacy",
              "Mathematics",
              "Understanding the World",
              "Expressive Arts and Design"
            ].map((area, i) => (
              <div key={i} className="reveal opacity-0 translate-x-4 transition-all duration-500 flex gap-4 items-center" style={{ transitionDelay: `${300 + i * 50}ms` }}>
                <Heart className="w-6 h-6 text-secondary shrink-0" />
                <span className="text-primary font-bold text-lg">{area}</span>
              </div>
            ))}
          </div>

          <h3 className="reveal opacity-0 translate-y-4 transition-all duration-500 font-bold text-2xl text-primary mb-8 uppercase tracking-wider">
            Characteristics of Effective Learning
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Playing and Exploring", icon: Sparkles },
              { title: "Active Learning", icon: Heart },
              { title: "Creating and Thinking Critically", icon: Puzzle }
            ].map((item, i) => (
              <div key={i} className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-[#F8F9FA] p-8 border border-border/50 flex flex-col items-center text-center" style={{ transitionDelay: `${500 + i * 100}ms` }}>
                <item.icon className="w-10 h-10 text-secondary mb-4" />
                <h4 className="font-bold text-lg text-primary uppercase">{item.title}</h4>
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
