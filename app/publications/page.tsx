"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FileText, Book, Calendar, Mail, Download, ArrowRight, BookOpen } from "lucide-react"
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

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="Publications" 
        subtitle="Exploring our school's journey through newsletters, yearbooks, and academic reports."
      />

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Newsletter Section */}
            <FadeIn x={-40}>
                <div className="group">
                  <h2 className="flex gap-4 items-center font-bold text-3xl text-navy mb-8 tracking-tight uppercase">
                      <Mail className="w-8 h-8 text-gold" /> Newsletters
                  </h2>
                  <p className="text-lg text-navy/70 leading-[1.8] font-medium mb-12 italic">
                      Stay updated with school highlights, student achievements, upcoming events, and important announcements.
                  </p>
                  
                  <div className="bg-ivory/20 p-10 border border-navy/5 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gold/5 -translate-y-1/2 translate-x-1/2 rotate-45"></div>
                    <div className="flex items-center justify-between mb-6">
                      <p className="text-gold font-bold text-[10px] uppercase tracking-[0.3em]">Latest Issue</p>
                      <Calendar className="w-4 h-4 text-navy/20" />
                    </div>
                    <h4 className="text-2xl font-bold text-navy mb-4 tracking-tight uppercase">The Secret of Perfecting</h4>
                    <p className="text-navy/40 font-bold text-xs uppercase tracking-widest mb-8">March 2026 Edition</p>
                    
                    <button className="flex items-center gap-3 text-navy font-bold text-[10px] uppercase tracking-[0.3em] group/btn">
                      Download PDF <Download className="w-4 h-4 text-gold group-hover/btn:translate-y-1 transition-transform" />
                    </button>
                  </div>
                  
                  <div className="mt-8">
                    <button className="text-navy/40 hover:text-gold font-bold text-[10px] uppercase tracking-[0.3em] flex items-center gap-2 transition-colors">
                      View Archive <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
            </FadeIn>

            {/* Yearbook Section */}
            <FadeIn x={40} delay={0.2}>
                <div className="group">
                  <h2 className="flex gap-4 items-center font-bold text-3xl text-navy mb-8 tracking-tight uppercase">
                      <BookOpen className="w-8 h-8 text-gold" /> Yearbooks
                  </h2>
                  <p className="text-lg text-navy/70 leading-[1.8] font-medium mb-12 italic">
                      A celebration of our students' journey, exploring memories, milestones, and collective achievements across the year.
                  </p>
                  
                  <div className="bg-navy p-10 text-white relative overflow-hidden h-[240px] flex flex-col items-center justify-center text-center">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&auto=format&fit=crop&q=80')] bg-cover bg-center grayscale"></div>
                    <div className="relative z-10">
                      <Book className="w-12 h-12 text-gold/30 mx-auto mb-6" />
                      <p className="font-bold text-ivory/40 tracking-[0.3em] uppercase text-xs">Yearbook 2025/26</p>
                      <p className="font-medium text-ivory/20 text-[11px] mt-2 italic uppercase">Coming Soon</p>
                    </div>
                  </div>
                  
                  <div className="mt-12 p-6 border-l-2 border-gold bg-ivory/10">
                    <p className="text-navy/60 text-sm font-medium leading-relaxed">
                      Our annual yearbook is a cherished publication that captures the spirit and diversity of Al Shomoukh International School.
                    </p>
                  </div>
                </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  )
}
