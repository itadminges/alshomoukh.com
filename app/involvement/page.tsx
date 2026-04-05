"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useEffect, useRef } from "react"
import { Users, GraduationCap, School, Heart } from "lucide-react"

export default function InvolvementPage() {
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
            Get Involved
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center mb-16">
          <p className="reveal opacity-0 translate-y-4 transition-all duration-500 text-xl font-medium text-primary/70 leading-[1.8]">
            We believe in building a strong school community through active participation and meaningful engagement.
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {[
              { title: "Parent-Teacher Association (PTA)", icon: Users },
              { title: "Alumni Network", icon: Heart },
              { title: "Student Council", icon: GraduationCap },
            ].map((item, i) => (
              <div key={i} className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-[#F8F9FA] p-10 border border-border/50 flex flex-col items-center text-center" style={{ transitionDelay: `${200 + i * 100}ms` }}>
                <item.icon className="w-10 h-10 text-secondary mb-6" />
                <h4 className="font-bold text-lg text-primary uppercase tracking-tight leading-[1.4]">{item.title}</h4>
              </div>
            ))}
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-primary p-16 text-white text-center">
            <h2 className="font-bold text-3xl mb-12 tracking-tight uppercase">University Destinations</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
              {[
                "Cambridge University", "Stanford University", "Harvard University", "Yale University",
                "Imperial College London", "Sultan Qaboos University", "Georgetown University", "The University of Liverpool"
              ].map((uni, i) => (
                <div key={i} className="flex flex-col items-center gap-4">
                  <div className="p-3 bg-secondary/10 text-secondary">
                    <School className="w-6 h-6" />
                  </div>
                  <p className="font-bold text-sm tracking-widest uppercase">{uni}</p>
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
