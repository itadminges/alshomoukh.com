"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useEffect, useRef } from "react"
import { Heart, Users, Activity, CheckCircle } from "lucide-react"

export default function LearningSupportPage() {
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
            Learning Support
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="reveal opacity-0 translate-y-4 transition-all duration-500 text-center mb-16">
            <Heart className="mx-auto w-12 h-12 text-secondary mb-6" />
            <p className="text-xl md:text-2xl text-primary/80 leading-[1.8] font-medium">
              At Al Shomoukh International School, we are committed to supporting students with diverse learning needs.
            </p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-[#F8F9FA] p-12 border border-border/50 mb-20 text-center">
            <h3 className="font-bold text-2xl text-primary mb-12 tracking-tight uppercase">
              Our Collaborative approach
            </h3>
            <p className="text-lg text-primary/70 leading-[1.8] font-medium mb-12">
                Our Learning Support team works collaboratively with teachers, students, and parents to ensure that every learner has access to the guidance and support they need to succeed academically and personally.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-left max-w-2xl mx-auto">
              {[
                "Individual learning strategies",
                "Classroom support",
                "Targeted interventions",
                "Academic monitoring",
                "Parent collaboration"
              ].map((item, i) => (
                <div key={i} className="reveal opacity-0 translate-x-4 transition-all duration-500 flex gap-4 items-center" style={{ transitionDelay: `${200 + i * 50}ms` }}>
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-primary font-bold text-lg">{item}</span>
                </div>
              ))}
            </div>
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
