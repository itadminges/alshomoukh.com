"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Heart, Users, Activity, ShieldCheck, Target, Sparkles } from "lucide-react"
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

export default function LearningSupportPage() {
  const strategies = [
    "Individual learning strategies",
    "Tailored classroom support",
    "Targeted literacy & numeracy intervention",
    "Continuous academic monitoring",
    "Strong parent-teacher collaboration"
  ]

  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="Learning Support" 
        subtitle="Ensuring every student has the tools, guidance, and environment they need to reach their full potential."
      />

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-20">
              <div className="w-20 h-20 bg-ivory rounded-full flex items-center justify-center mx-auto mb-8 border border-gold/20 shadow-sm relative group overflow-hidden">
                <div className="absolute inset-0 bg-gold/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
                <Heart className="w-10 h-10 text-gold relative z-10" />
              </div>
              <h2 className="text-gold font-bold tracking-[0.4em] uppercase text-[11px] mb-6">Our Commitment</h2>
              <p className="text-xl md:text-2xl text-navy leading-[1.8] font-medium italic">
                At Al Shomoukh International School, we embrace neurodiversity and are committed to supporting students with diverse learning requirements through a personalized approach.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="bg-ivory/20 p-12 border border-navy/5 shadow-sm mb-20 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-gold"></div>
              <h3 className="font-bold text-2xl text-navy mb-8 tracking-tight uppercase text-center md:text-left">
                A Collaborative <span className="text-gold">Framework</span>
              </h3>
              <p className="text-lg text-navy/70 leading-[1.8] font-medium mb-12">
                Our Learning Support team works hand-in-hand with subject teachers and parents to create an inclusive environment where academic barriers are identified and addressed early.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {strategies.map((item, i) => (
                  <FadeIn key={i} x={-20} delay={0.05 * i}>
                    <div className="flex gap-4 items-center">
                      <span className="text-navy font-bold text-sm uppercase tracking-tight">{item}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Empowerment", icon: ShieldCheck, desc: "Building student confidence and self-advocacy skills." },
              { title: "Achievement", icon: Target, desc: "Setting clear milestones for academic and personal growth." },
              { title: "Inspiration", icon: Sparkles, desc: "Unlocking unique strengths and specialized talents." }
            ].map((feature, i) => (
              <FadeIn key={i} y={40} delay={0.1 * i}>
                <div className="bg-white p-8 border border-navy/5 text-center group hover:bg-navy hover:text-white transition-all duration-500">
                  <feature.icon className="w-8 h-8 text-gold mx-auto mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-navy uppercase tracking-widest text-xs mb-4 group-hover:text-gold">{feature.title}</h4>
                  <p className="text-navy/60 text-[13px] font-medium leading-relaxed group-hover:text-ivory/70">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Holistic Callout */}
      <section className="py-24 bg-navy text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none flex items-center justify-center">
          <Heart className="w-[60vw] h-[60vw] text-gold" />
        </div>
        <div className="mx-auto max-w-4xl px-6 relative z-10">
          <FadeIn>
            <h2 className="text-3xl font-bold uppercase tracking-tight mb-8 italic">"Every child learns differently, and every child can succeed."</h2>
            <div className="h-1 w-20 bg-gold mx-auto"></div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
