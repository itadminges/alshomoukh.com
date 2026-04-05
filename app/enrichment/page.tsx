"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useEffect, useRef } from "react"
import { Sparkles, Palette, Activity, Globe, FlaskConical, Laptop, Languages, Plane } from "lucide-react"

export default function EnrichmentPage() {
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
            Enrichment Programmes
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center mb-16">
          <p className="reveal opacity-0 translate-y-4 transition-all duration-500 text-xl md:text-2xl text-primary/80 leading-[1.8] font-medium">
            At Al Shomoukh International School, enrichment is an essential part of the student experience. Our programmes encourage creativity, teamwork, confidence, and personal growth.
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Science Lab", icon: FlaskConical },
              { title: "ICT", icon: Laptop },
              { title: "Languages", icon: Languages },
              { title: "PE & Sports", icon: Activity },
              { title: "Educational Trips", icon: Plane },
              { title: "Art", icon: Palette },
              { title: "Festival Days", icon: Sparkles },
              { title: "Extra-Curricular Activities", icon: Globe },
            ].map((item, i) => (
              <div key={i} className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-[#F8F9FA] p-10 border border-border/50 flex flex-col items-center text-center" style={{ transitionDelay: `${200 + i * 50}ms` }}>
                <item.icon className="w-10 h-10 text-secondary mb-6" />
                <h4 className="font-bold text-lg text-primary uppercase tracking-tight">{item.title}</h4>
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
