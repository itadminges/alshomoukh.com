"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { BookMarked, GraduationCap, School, BookOpen, Search, Lightbulb, Heart } from "lucide-react"
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

export default function PrimaryPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="Primary School" 
        subtitle="Nurturing young minds through a balanced and engaging curriculum that builds a solid foundation for future success."
      />

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-bold text-3xl text-navy mb-8 tracking-tight uppercase">
              Primary Curriculum
            </h2>
            <p className="text-lg text-navy/70 leading-[1.8] font-medium mb-12 italic">
              The Primary School programme at Al Shomoukh International School is designed to build strong academic foundations and promote curiosity, creativity, and confidence in every learner.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              { title: "Inquiry", icon: Search, desc: "Encouraging students to ask questions and explore the world." },
              { title: "Creativity", icon: Lightbulb, desc: "Fostering innovative thinking and artistic expression." },
              { title: "Care", icon: Heart, desc: "Building a supportive environment for social-emotional growth." }
            ].map((item, i) => (
              <FadeIn key={i} y={20} delay={0.1 * i}>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-ivory border border-gold/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold transition-colors duration-500">
                    <item.icon className="w-6 h-6 text-gold group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="font-bold text-navy uppercase tracking-widest text-xs mb-3">{item.title}</h4>
                  <p className="text-navy/60 text-[13px] font-medium leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <h3 className="font-bold text-2xl text-navy mb-12 uppercase tracking-[0.2em] text-center border-b border-navy/5 pb-8">
              Key Stages
            </h3>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              { title: "Key Stage 1", icon: School, stage: "Grades 1-2" },
              { title: "Lower Key Stage 2", icon: BookMarked, stage: "Grades 3-4" },
              { title: "Upper Key Stage 2", icon: GraduationCap, stage: "Grades 5-6" }
            ].map((item, i) => (
              <FadeIn key={i} y={40} delay={0.1 * i}>
                <div className="bg-white p-10 border border-navy/5 shadow-sm text-center h-full group hover:shadow-md transition-all">
                  <div className="p-4 bg-navy text-gold w-fit mb-6 mx-auto transition-colors group-hover:bg-gold group-hover:text-white">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-lg text-navy uppercase tracking-tight mb-2">{item.title}</h4>
                  <p className="text-gold font-bold text-xs uppercase tracking-widest">{item.stage}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="bg-navy p-12 text-white relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 -translate-y-1/2 translate-x-1/2 rotate-45 group-hover:bg-gold/20 transition-colors"></div>
              <h3 className="flex gap-4 items-center font-bold text-3xl mb-8 tracking-tight uppercase relative z-10">
                <BookOpen className="w-10 h-10 text-gold" />
                Reading <span className="text-gold">Scheme</span>
              </h3>
              <p className="text-lg text-ivory/80 leading-[1.8] font-medium relative z-10">
                Our reading programme is central to the curriculum, supporting literacy development, comprehension, fluency, and a lifelong love of reading. We use internationally recognized schemes to ensure every child progresses at their own pace.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
