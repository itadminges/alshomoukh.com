"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useEffect, useRef } from "react"
import { Quote, Briefcase, Users, Link as LinkIcon } from "lucide-react"

export default function CareersPage() {
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

      <section className="bg-primary py-32 mt-[76px] relative overflow-hidden text-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center relative z-10">
          <h1 className="reveal opacity-0 translate-y-8 transition-all duration-700 font-bold text-5xl md:text-6xl text-white tracking-tight uppercase mb-8">
            Careers
          </h1>
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 max-w-3xl mx-auto flex flex-col items-center">
            <Quote className="w-10 h-10 text-secondary mb-4 opacity-50" />
            <p className="text-xl md:text-2xl text-white italic font-medium leading-[1.6]">
              "If opportunity doesn’t knock, build a door."
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="reveal opacity-0 translate-y-4 transition-all duration-500 font-bold text-3xl text-primary mb-8 tracking-tight uppercase">
            Working at Al Shomoukh International School
          </h2>
          <p className="reveal opacity-0 translate-y-4 transition-all duration-500 delay-200 text-lg text-primary/70 leading-[1.8] font-medium mb-12">
            Join a passionate and diverse team dedicated to educational excellence, innovation, and student success.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {[
              { title: "Leadership Opportunities", icon: Users },
              { title: "Teaching Opportunities", icon: Briefcase },
              { title: "Staff Opportunities", icon: Users },
              { title: "HR Forms & Resources", icon: LinkIcon },
            ].map((item, i) => (
              <div key={i} className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-[#F8F9FA] p-10 border border-border/50 flex gap-6 items-center" style={{ transitionDelay: `${300 + i * 100}ms` }}>
                <div className="p-3 bg-secondary/10 text-secondary">
                  <item.icon className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-xl text-primary uppercase tracking-tight">{item.title}</h4>
              </div>
            ))}
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-primary p-12 text-white text-center">
            <h3 className="font-bold text-2xl mb-6 tracking-tight uppercase">Contact Human Resources</h3>
            <p className="text-lg text-white/70 leading-[1.8] font-medium mb-8">
              For any career-related enquiries, please contact <span className="text-secondary font-bold">hr@alshomoukh.com</span>
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
