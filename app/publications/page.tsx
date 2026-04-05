"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useEffect, useRef } from "react"
import { FileText, Book, Calendar, Mail } from "lucide-react"

export default function PublicationsPage() {
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
            Publications
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="reveal opacity-0 -translate-x-8 transition-all duration-700">
                <h2 className="flex gap-4 items-center font-bold text-3xl text-primary mb-8 tracking-tight uppercase">
                    <Mail className="w-8 h-8 text-secondary" /> Newsletter
                </h2>
                <p className="text-lg text-primary/70 leading-[1.8] font-medium mb-12">
                    Stay updated with school highlights, student achievements, events, and important announcements.
                </p>
                <div className="bg-[#F8F9FA] p-8 border border-border/50">
                    <p className="text-secondary font-bold text-xs uppercase tracking-[0.2em] mb-2">Featured Newsletter</p>
                    <h4 className="text-2xl font-bold text-primary mb-4 tracking-tight">The Secret of Perfecting</h4>
                    <p className="text-primary/60 font-medium mb-6">10 March 2019</p>
                </div>
            </div>

            <div className="reveal opacity-0 translate-x-8 transition-all duration-700 delay-100">
                <h2 className="flex gap-4 items-center font-bold text-3xl text-primary mb-8 tracking-tight uppercase">
                    <Book className="w-8 h-8 text-secondary" /> Yearbook
                </h2>
                <p className="text-lg text-primary/70 leading-[1.8] font-medium mb-12">
                    Explore memories, milestones, and achievements from the academic year.
                </p>
                <div className="bg-[#F8F9FA] p-8 border border-border/50 flex flex-col items-center justify-center text-center py-20 grayscale opacity-50">
                   <p className="font-bold text-primary/50 tracking-widest uppercase text-sm">No Files Uploaded Yet</p>
                </div>
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
