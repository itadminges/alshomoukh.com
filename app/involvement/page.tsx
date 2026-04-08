"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Users, GraduationCap, School, Heart, CheckCircle2 } from "lucide-react"
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

export default function InvolvementPage() {
  const involvement = [
    { title: "Parent-Teacher Association", icon: Users, desc: "A collaborative bridge between home and school life." },
    { title: "Alumni Network", icon: Heart, desc: "Staying connected with our global community of graduates." },
    { title: "Student Council", icon: GraduationCap, desc: "Empowering student voices and developing leadership skills." },
  ]

  const universities = [
    "Cambridge University", "Stanford University", "Harvard University", "Yale University",
    "Imperial College London", "Sultan Qaboos University", "Georgetown University", "The University of Liverpool"
  ]

  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="Get Involved" 
        subtitle="Building a vibrant and supportive school community through active partnership and shared vision."
      />

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center mb-20">
          <FadeIn>
            <h2 className="text-gold font-bold tracking-[0.4em] uppercase text-[11px] mb-6">Our Community</h2>
            <p className="text-xl md:text-2xl text-navy leading-[1.8] font-medium italic">
              We believe in building a strong school ecosystem through active participation and meaningful engagement from all stakeholders.
            </p>
          </FadeIn>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {involvement.map((item, i) => (
              <FadeIn key={i} y={40} delay={0.1 * i}>
                <div className="bg-white p-10 border border-navy/5 shadow-sm hover:shadow-md transition-all group text-center h-full">
                  <div className="p-4 bg-navy text-gold w-fit mb-8 mx-auto transition-colors group-hover:bg-gold group-hover:text-white">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-lg text-navy uppercase tracking-tight mb-4 group-hover:text-gold transition-colors">{item.title}</h4>
                  <p className="text-navy/60 text-sm font-medium leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="bg-navy p-16 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight uppercase">University Destinations</h2>
                <p className="text-gold font-bold tracking-[0.3em] uppercase text-xs">Global Academic Excellence</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                {universities.map((uni, i) => (
                  <FadeIn key={i} y={20} delay={0.05 * i}>
                    <div className="flex flex-col items-center text-center group/item p-6 border border-white/5 hover:border-gold/30 transition-colors">
                      <div className="p-3 bg-white/5 text-gold mb-6 group-hover/item:scale-110 transition-transform">
                        <School className="w-6 h-6" />
                      </div>
                      <p className="font-bold text-[10px] tracking-widest uppercase leading-loose text-ivory/80 group-hover/item:text-white transition-colors">{uni}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <div className="mt-20 pt-12 border-t border-white/10 text-center">
                <p className="text-ivory/60 text-sm font-medium italic">
                  Our graduates are accepted into the world's most prestigious institutions, reflecting the high academic standards at SIS.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
