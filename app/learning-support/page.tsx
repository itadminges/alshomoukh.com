"use client"

import { Heart, ShieldCheck, Target, Sparkles, Check } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Scroll3DReveal } from "@/components/scroll-3d"
import { SectionSpirals } from "@/components/decorative-spirals"

export default function LearningSupportPage() {
  const supportItems = [
    "Individualised learning strategies",
    "Personalised classroom support",
    "Targeted literacy and numeracy interventions",
    "Continuous progress monitoring",
    "Strong collaboration between parents, teachers, and specialists"
  ]

  return (
    <main className="min-h-screen bg-white overflow-hidden scroll-3d-scene">
      <PageHero 
        title="Learning Support" 
        subtitle="Empowering Every Student to Thrive"
      />

      {/* Overview Intro */}
      <section className="py-20 bg-ivory/30 border-b border-navy/5 relative overflow-hidden">
        <SectionSpirals variant="light" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20 text-center">
          <div className="max-w-3xl mx-auto">
            <Scroll3DReveal rotateAmount={10} depth={30}>
              <p className="text-navy/80 text-base md:text-xl leading-[1.8] font-medium">
                At Al Shomoukh International Private School, we believe every student has unique strengths, abilities, and learning needs. Our Learning Support programme provides the guidance, resources, and personalised strategies needed to help students achieve their full potential.
              </p>
            </Scroll3DReveal>
          </div>
        </div>
      </section>

      {/* Our Commitment & Collaborative Approach */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <SectionSpirals variant="light" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Our Commitment */}
            <Scroll3DReveal rotateAmount={12} depth={40}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-gold/20">
                  <Heart className="w-8 h-8 text-gold" />
                </div>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="h-[1px] w-8 bg-gold/30" />
                  <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">Inclusion & Care</span>
                  <div className="h-[1px] w-8 bg-gold/30" />
                </div>
                <h2 className="text-3xl md:text-4xl text-navy font-bold uppercase tracking-tight mb-6">
                  Our <span className="text-gold">Commitment</span>
                </h2>
                <p className="text-lg md:text-xl text-navy/80 leading-[1.8] font-medium italic bg-ivory/40 p-8 border-l-4 border-gold shadow-strong">
                  "We embrace neurodiversity and are committed to creating an inclusive learning environment where every student is valued, supported, and empowered to succeed."
                </p>
              </div>
            </Scroll3DReveal>

            {/* A Collaborative Approach */}
            <Scroll3DReveal rotateAmount={14} depth={45}>
              <div className="bg-white p-8 md:p-12 border border-navy/10 shadow-strong relative overflow-hidden">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">Partnership</span>
                  <div className="h-[1px] w-12 bg-gold/30" />
                </div>
                
                <h3 className="font-bold text-2xl md:text-3xl text-navy mb-6 tracking-tight uppercase">
                  A Collaborative <span className="text-gold">Approach</span>
                </h3>
                <p className="text-base md:text-lg text-navy/80 leading-[1.8] font-medium mb-10">
                  Our Learning Support team works closely with classroom teachers, school leaders, and families to identify individual needs, remove learning barriers, and develop effective strategies that promote academic progress and personal growth.
                </p>
                
                <div className="border-t border-navy/10 pt-8">
                  <h4 className="font-bold text-lg text-navy uppercase tracking-wider mb-6 text-gold">
                    Our Support Includes:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {supportItems.map((item, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 bg-ivory/40 border-l-2 border-gold">
                        <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mt-0.5 shrink-0">
                          <Check className="h-3.5 w-3.5 text-navy font-bold" />
                        </div>
                        <span className="text-navy font-bold text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Scroll3DReveal>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Empowerment", icon: ShieldCheck, desc: "Building student confidence and self-advocacy skills." },
                { title: "Achievement", icon: Target, desc: "Setting clear milestones for academic and personal growth." },
                { title: "Inspiration", icon: Sparkles, desc: "Unlocking unique strengths and specialized talents." }
              ].map((feature, i) => (
                <Scroll3DReveal key={i} rotateAmount={10 + i * 2} depth={30}>
                  <div className="bg-white p-8 border border-navy/5 shadow-strong text-center group hover:bg-navy hover:text-white transition-all duration-500 h-full flex flex-col justify-between">
                    <div>
                      <feature.icon className="w-8 h-8 text-gold mx-auto mb-6 group-hover:scale-110 transition-transform" />
                      <h4 className="font-bold text-navy uppercase tracking-widest text-xs mb-4 group-hover:text-gold">{feature.title}</h4>
                      <p className="text-navy/60 text-[13px] font-medium leading-relaxed group-hover:text-ivory/80">{feature.desc}</p>
                    </div>
                  </div>
                </Scroll3DReveal>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Holistic Quote Callout */}
      <section className="py-24 md:py-32 bg-navy text-white text-center relative overflow-hidden">
        <SectionSpirals variant="dark" />
        <div className="mx-auto max-w-4xl px-6 relative z-10">
          <Scroll3DReveal rotateAmount={10} depth={35}>
            <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight mb-8 italic">
              "Every child learns differently, and every child can succeed."
            </h2>
            <div className="h-1 w-20 bg-gold mx-auto" />
          </Scroll3DReveal>
        </div>
      </section>
    </main>
  )
}
