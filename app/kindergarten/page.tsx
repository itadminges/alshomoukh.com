"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Sparkles, Heart, Puzzle, CheckCircle2 } from "lucide-react"
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

export default function KindergartenPage() {
  const learningAreas = [
    "Personal, Social and Emotional Development",
    "Communication and Language",
    "Physical Development",
    "Literacy",
    "Mathematics",
    "Understanding the World",
    "Expressive Arts and Design"
  ]

  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="Kindergarten" 
        subtitle="A nurturing foundation where curiosity meets discovery, shaping the early years of lifelong learners."
        quote={{
          text: "If a child can’t learn the way we teach, maybe we should teach the way they learn.",
          author: "Ignacio Estrada"
        }}
      />

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-bold text-3xl text-navy mb-8 tracking-tight uppercase">
              The Early Years Foundation Stage (EYFS)
            </h2>
            <p className="text-lg text-navy/70 leading-[1.8] font-medium mb-12 italic">
              Al Shomoukh International School follows the Early Years Foundation Stage (EYFS) framework, adapted to meet the needs of each individual child. In KG1 and KG2, the integrated programme covers the seven key areas of learning and development:
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {learningAreas.map((area, i) => (
              <FadeIn key={i} x={-20} delay={0.05 * i}>
                <div className="flex gap-4 items-center bg-ivory/20 p-6 border-l-4 border-gold group hover:bg-gold/5 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-navy font-bold text-base uppercase tracking-tight">{area}</span>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <h3 className="font-bold text-2xl text-navy mb-12 uppercase tracking-widest text-center">
              Characteristics of Effective Learning
            </h3>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Playing and Exploring", icon: Sparkles, desc: "Engagement through curiosity and finding out about the world." },
              { title: "Active Learning", icon: Heart, desc: "Motivation to keep on trying and enjoying achievements." },
              { title: "Critical Thinking", icon: Puzzle, desc: "Thinking of ideas and making links between them." }
            ].map((item, i) => (
              <FadeIn key={i} y={40} delay={0.1 * i}>
                <div className="bg-white p-10 border border-navy/5 shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow h-full">
                  <div className="p-4 bg-navy text-gold rounded-none mb-6 transition-colors group-hover:bg-gold group-hover:text-white">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-lg text-navy uppercase tracking-tight mb-4">{item.title}</h4>
                  <p className="text-navy/60 text-sm font-medium leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Play-Based Learning Callout */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="text-[30vw] font-bold text-gold -translate-x-1/4 -translate-y-1/4">PLAY</div>
        </div>
        <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8">Nurturing Through Play</h2>
            <p className="text-lg text-ivory/80 leading-relaxed font-medium mb-10">
              Our kindergarten environment is carefully designed to encourage exploration, creativity, and social interaction, ensuring every child feels safe, valued, and inspired.
            </p>
            <div className="h-1 w-20 bg-gold mx-auto"></div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
