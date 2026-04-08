"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, Users, Link as LinkIcon, GraduationCap } from "lucide-react"
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

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="Careers" 
        subtitle="Join a community of dedicated educators and professionals shaping the future of global leaders."
        quote={{
          text: "If opportunity doesn’t knock, build a door.",
          author: "Milton Berle"
        }}
      />

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-bold text-3xl text-navy mb-8 tracking-tight uppercase">
              Working at Al Shomoukh International School
            </h2>
            <p className="text-lg text-navy/70 leading-[1.8] font-medium mb-12 italic">
              Join a passionate and diverse team dedicated to educational excellence, innovation, and student success. We believe our staff are our greatest asset in providing a world-class education.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 text-center md:text-left">
            {[
              { title: "Leadership Roles", icon: Users, desc: "Shape the strategic direction and academic excellence of our school." },
              { title: "Teaching Positions", icon: GraduationCap, desc: "Inspire the next generation with your expertise and passion for learning." },
              { title: "Administrative Staff", icon: Briefcase, desc: "Support the vital operations that keep our school running smoothly." },
              { title: "HR Resources", icon: LinkIcon, desc: "Access essential forms and resources for current and prospective staff." },
            ].map((item, i) => (
              <FadeIn key={i} y={40} delay={0.1 * i}>
                <div className="bg-white p-10 border border-navy/5 shadow-sm hover:shadow-md transition-shadow group h-full">
                  <div className="p-4 bg-navy text-gold w-fit mb-8 mx-auto md:mx-0 transition-colors group-hover:bg-gold group-hover:text-white">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-xl text-navy uppercase tracking-tight mb-4">{item.title}</h4>
                  <p className="text-navy/60 font-medium text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="bg-navy p-12 text-white text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>
              <h3 className="font-bold text-2xl mb-6 tracking-tight uppercase">Contact Human Resources</h3>
              <p className="text-lg text-ivory/70 leading-[1.8] font-medium mb-8">
                For any career-related enquiries or to submit your CV for future consideration, please contact:
              </p>
              <div className="inline-block px-8 py-4 border border-gold/30 gold-glow">
                <span className="text-gold font-bold tracking-[0.2em] uppercase">hr@alshomoukh.com</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
