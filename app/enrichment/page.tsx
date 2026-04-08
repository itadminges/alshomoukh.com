"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Sparkles, Palette, Activity, Globe, FlaskConical, Laptop, Languages, Plane, Music, Trophy } from "lucide-react"
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

export default function EnrichmentPage() {
  const programmes = [
    { title: "Science Lab", icon: FlaskConical, desc: "Hands-on exploration in modern laboratory facilities." },
    { title: "Digital Innovation", icon: Laptop, desc: "Developing 21st-century skills through cutting-edge technology." },
    { title: "Modern Languages", icon: Languages, desc: "Fostering global communication and cultural understanding." },
    { title: "Sports & Athletics", icon: Activity, desc: "Building teamwork and physical excellence across disciplines." },
    { title: "Global Expeditions", icon: Plane, desc: "Educational travel that broadens horizons and applies learning." },
    { title: "Creative Arts", icon: Palette, desc: "Unlocking artistic potential through diverse media and expression." },
    { title: "Performing Arts", icon: Music, desc: "Cultivating talent in music, drama, and performance." },
    { title: "Student Leadership", icon: Trophy, desc: "Empowering students through the Student Council and peer support." }
  ]

  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="Enrichment" 
        subtitle="Beyond the classroom: providing opportunities for every student to discover their passions and develop new talents."
      />

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center mb-20">
          <FadeIn>
            <h2 className="text-gold font-bold tracking-[0.4em] uppercase text-[11px] mb-6">Holistic Development</h2>
            <p className="text-xl md:text-2xl text-navy leading-[1.8] font-medium italic">
              At Al Shomoukh International School, enrichment is an essential part of the student journey, fostering creativity, confidence, and lifelong leadership.
            </p>
          </FadeIn>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programmes.map((item, i) => (
              <FadeIn key={i} y={40} delay={0.05 * i}>
                <div className="bg-white p-10 border border-navy/5 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center group h-full hover:-translate-y-2">
                  <div className="p-4 bg-navy/5 text-navy rounded-none mb-6 transition-all group-hover:bg-gold group-hover:text-white group-hover:scale-110">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-lg text-navy uppercase tracking-tight mb-4 group-hover:text-gold transition-colors">{item.title}</h4>
                  <p className="text-navy/60 text-sm font-medium leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Festival Callout */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
          <Sparkles className="w-[40vw] h-[40vw] text-gold translate-x-1/4 -translate-y-1/4" />
        </div>
        <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
          <FadeIn>
            <h3 className="text-3xl font-bold uppercase tracking-tight mb-8">Celebrations & Festival Days</h3>
            <p className="text-lg text-ivory/80 leading-relaxed font-medium mb-10">
              From National Day to International Day, our campus comes alive with vibrant celebrations that honor our heritage and embrace our global community.
            </p>
            <div className="h-0.5 w-24 bg-gold mx-auto"></div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
