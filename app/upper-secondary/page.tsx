"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { GraduationCap, Award, Building, BookMarked, ArrowRight } from "lucide-react"

export default function UpperSecondaryPage() {
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
            Upper Secondary
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="reveal opacity-0 translate-y-4 transition-all duration-500 font-bold text-3xl text-primary mb-8 tracking-tight uppercase">
            Edexcel International GCSE (IGCSE) – Grades 9 & 10
          </h2>
          <p className="reveal opacity-0 translate-y-4 transition-all duration-500 delay-200 text-lg text-primary/70 leading-[1.8] font-medium mb-12">
            At Al Shomoukh International School, we offer a broad range of IGCSE subjects to suit the needs, interests, and abilities of our students. The school follows the Pearson Edexcel IGCSE curriculum.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="reveal opacity-0 -translate-x-4 transition-all duration-700 delay-300">
                <h4 className="flex gap-3 items-center font-bold text-xl text-primary mb-6 uppercase tracking-wider">
                    <Award className="w-5 h-5 text-secondary" /> Core Subjects
                </h4>
                <ul className="space-y-4 font-medium text-primary/70">
                    <li>- Mathematics</li>
                    <li>- English Language</li>
                    <li>- Triple Science (Biology, Physics, and Chemistry)</li>
                </ul>
            </div>
            <div className="reveal opacity-0 translate-x-4 transition-all duration-700 delay-400">
                <h4 className="flex gap-3 items-center font-bold text-xl text-primary mb-6 uppercase tracking-wider">
                    <BookMarked className="w-5 h-5 text-secondary" /> Additional Subjects
                </h4>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 font-medium text-primary/70">
                    <div>- Geography</div>
                    <div>- History</div>
                    <div>- English Literature</div>
                    <div>- Business Studies</div>
                    <div>- Applied ICT</div>
                    <div>- Physical Education</div>
                    <div>- Art</div>
                    <div>- Arabic</div>
                </div>
            </div>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-500 mb-20">
            <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 transition-all uppercase tracking-[0.2em] font-bold text-xs rounded-none h-14 px-10">
                View IGCSE Curriculum
                <ArrowRight className="ml-3 w-4 h-4" />
            </Button>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-[#F8F9FA] p-12 border border-border/50 mb-20 text-center">
            <GraduationCap className="mx-auto w-12 h-12 text-secondary mb-6" />
            <h3 className="font-bold text-2xl text-primary mb-6 tracking-tight uppercase">
                Edexcel International Advanced Levels (IAL) – Grades 11 & 12
            </h3>
            <p className="text-lg text-primary/70 leading-[1.6] mb-8 font-medium">Subjects may include: Mathematics, English Language, Economics, Physics, Chemistry, Biology.</p>
            <Button variant="outline" className="border-secondary/30 text-secondary hover:bg-secondary hover:text-white transition-all uppercase tracking-[0.2em] font-bold text-xs rounded-none h-12 px-8">
                View International A Levels Curriculum
            </Button>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-primary p-12 text-white">
            <div className="flex gap-6 items-center">
                <Building className="w-12 h-12 text-secondary shrink-0" />
                <div>
                    <h3 className="font-bold text-2xl mb-4 tracking-tight uppercase">Omani General Education Diploma (GED) – Grades 11 & 12</h3>
                    <p className="text-white/70 leading-[1.8] font-medium">Students may also have the option to study for the GED, subject to eligibility and school guidance.</p>
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
