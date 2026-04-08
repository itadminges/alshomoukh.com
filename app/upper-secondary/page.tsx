"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { GraduationCap, Award, Building, BookMarked, ArrowRight, CheckCircle2 } from "lucide-react"
import { PageHero } from "@/components/page-hero"

const FadeIn = ({ children, delay = 0, x = 0, y = 30 }: { children: React.ReactNode, delay?: number, x?: number, y?: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function UpperSecondaryPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="Upper Secondary" 
        subtitle="Advanced academic pathways designed to prepare students for global higher education and professional success."
      />

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-bold text-3xl text-navy mb-8 tracking-tight uppercase border-l-4 border-gold pl-6">
              Edexcel International GCSE (IGCSE)
            </h2>
            <p className="text-gold font-bold tracking-widest uppercase text-xs mb-4">Grades 9 & 10</p>
            <p className="text-lg text-navy/70 leading-[1.8] font-medium mb-12 italic">
              At Al Shomoukh International School, we offer a broad range of IGCSE subjects to suit the needs, interests, and abilities of our students. The school follows the prestigious Pearson Edexcel IGCSE curriculum.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <FadeIn x={-30} delay={0.2}>
              <div className="bg-navy p-10 text-white h-full relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>
                <h4 className="flex gap-3 items-center font-bold text-xl mb-8 uppercase tracking-wider relative z-10">
                  <Award className="w-6 h-6 text-gold" /> Core Subjects
                </h4>
                <ul className="space-y-4 font-medium text-ivory/70 relative z-10">
                  {["Mathematics", "English Language", "Triple Science (Biology, Physics, Chemistry)"].map((sub, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn x={30} delay={0.3}>
              <div className="bg-ivory/30 p-10 border border-navy/5 h-full group">
                <h4 className="flex gap-3 items-center font-bold text-xl text-navy mb-8 uppercase tracking-wider">
                  <BookMarked className="w-6 h-6 text-gold" /> Additional Options
                </h4>
                <div className="grid grid-cols-1 gap-y-3 font-medium text-navy/70">
                  {[
                    "Geography & History", 
                    "English Literature", 
                    "Business Studies", 
                    "Applied ICT", 
                    "Physical Education & Art", 
                    "Arabic Language"
                  ].map((sub, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full shrink-0"></div>
                      {sub}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="mb-32 text-center">
              <Button size="lg" className="bg-gold text-white hover:bg-gold/90 transition-all uppercase tracking-[0.25em] font-bold text-[10px] rounded-none h-14 px-12 shadow-lg hover:shadow-gold/20">
                  View IGCSE Prospectus
                  <ArrowRight className="ml-3 w-4 h-4" />
              </Button>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="bg-white p-12 border-t-8 border-navy shadow-sm mb-20 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-navy/5 -translate-y-1/2 translate-x-1/2 rotate-45"></div>
              <GraduationCap className="mx-auto w-16 h-16 text-gold mb-8" />
              <h3 className="font-bold text-2xl text-navy mb-4 tracking-tight uppercase">
                International Advanced Levels (IAL)
              </h3>
              <p className="text-gold font-bold tracking-widest uppercase text-xs mb-8">Grades 11 & 12</p>
              
              <div className="max-w-2xl mx-auto mb-12">
                <p className="text-lg text-navy/70 leading-relaxed font-medium mb-6">
                  Specialized pathways including Mathematics, Economics, Physics, Chemistry, and Biology, providing a direct route to top-tier global universities.
                </p>
                <div className="h-px w-20 bg-gold/30 mx-auto"></div>
              </div>

              <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white transition-all uppercase tracking-[0.2em] font-bold text-[10px] rounded-none h-12 px-10">
                  Explore A-Level Pathways
              </Button>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="bg-navy p-12 text-white relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gold"></div>
              <div className="flex flex-col md:flex-row gap-10 items-center relative z-10">
                <div className="p-5 bg-gold/10 text-gold rounded-full border border-gold/20 shrink-0">
                  <Building className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-4 tracking-tight uppercase">General Education Diploma (GED)</h3>
                  <p className="text-gold font-bold tracking-widest uppercase text-xs mb-4">Ministry of Education Pathway</p>
                  <p className="text-ivory/70 leading-[1.8] font-medium text-sm">
                    In addition to international qualifications, eligible students may opt for the Omani General Education Diploma under school guidance and Ministry regulations.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
