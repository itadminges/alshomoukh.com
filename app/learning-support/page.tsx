"use client"

import { 
  Check, 
  ArrowRight
} from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Scroll3DReveal, Scroll3DCard } from "@/components/scroll-3d"
import { SectionSpirals } from "@/components/decorative-spirals"
import { AcademicTabs } from "@/components/academic-tabs"
import Link from "next/link"
import Image from "next/image"

export default function LearningSupportPage() {
  const tieredModel = [
    {
      tier: "Tier 01",
      title: "Universal Inclusive Teaching",
      tag: "All Students",
      desc: "High-quality, differentiated classroom instruction ensuring that every lesson is accessible through multi-sensory techniques, visual aids, and scaffolded tasks.",
      points: [
        "Differentiated lesson planning and adaptive tasks",
        "Multi-sensory learning aids and clear visual structures",
        "Ongoing formative checks and positive classroom climate"
      ]
    },
    {
      tier: "Tier 02",
      title: "Targeted Small-Group Support",
      tag: "Focused Interventions",
      desc: "Structured, evidence-based booster sessions designed to strengthen specific academic areas such as phonics, reading fluency, and foundational math.",
      points: [
        "Small-group literacy and numeracy interventions",
        "Executive functioning and organization coaching",
        "Pre-teaching and post-lesson consolidation"
      ]
    },
    {
      tier: "Tier 03",
      title: "Individualised Specialist Plans (IEPs)",
      tag: "Intensive 1:1 Care",
      desc: "Comprehensive, tailored support plans developed by the SENCO and specialist educators in close partnership with parents and external professionals.",
      points: [
        "Individualised Education Plans (IEPs) with measurable goals",
        "Examination access arrangements and assistive technology",
        "Regular termly review meetings with families and specialists"
      ]
    }
  ]

  const supportAreas = [
    {
      title: "Targeted Literacy & Reading",
      desc: "Phonics intervention, guided comprehension, vocabulary building, and structured writing support.",
      tag: "Area 01"
    },
    {
      title: "Numeracy & Math Consolidation",
      desc: "Concrete-pictorial-abstract methods, number sense reinforcement, and visual problem-solving.",
      tag: "Area 02"
    },
    {
      title: "Executive Functioning & Study Skills",
      desc: "Time management, note-taking strategies, task prioritization, and revision techniques.",
      tag: "Area 03"
    },
    {
      title: "Exam Accommodations & Access",
      desc: "Approved Pearson Edexcel and MoE arrangements including extra time, readers, and scribes.",
      tag: "Area 04"
    },
    {
      title: "Assistive Learning Technologies",
      desc: "Purposeful digital tools, text-to-speech software, and tailored classroom ergonomic adjustments.",
      tag: "Area 05"
    },
    {
      title: "Social-Emotional Wellbeing",
      desc: "Confidence building, emotional self-regulation, empathy, and positive self-advocacy mentorship.",
      tag: "Area 06"
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Identification & Observation",
      desc: "Teachers and parents observe student progress, identify potential barriers, and initiate early screening."
    },
    {
      step: "02",
      title: "Specialist Assessment",
      desc: "The Learning Support team reviews student profiles, diagnostic evidence, and classroom engagement."
    },
    {
      step: "03",
      title: "Tailored IEP Formulation",
      desc: "A personalized action plan with clear, achievable milestones is created in collaboration with the family."
    },
    {
      step: "04",
      title: "Continuous Review & Celebration",
      desc: "Progress is monitored regularly through structured check-ins, celebrating every breakthrough and achievement."
    }
  ]

  return (
    <main className="min-h-screen bg-white overflow-hidden scroll-3d-scene">
      <PageHero 
        title="Learning Support" 
        subtitle="Empowering every student through personalized guidance, targeted interventions, and an unwavering commitment to inclusive education and neurodiversity."
        backgroundImage="/images/final/teacher-support.webp"
      />
      <AcademicTabs />

      {/* Main Editorial Intro Section (Matching Home Page IntroSection) */}
      <section className="pt-20 md:pt-32 pb-16 md:pb-24 bg-white relative overflow-hidden scroll-3d-scene">
        <SectionSpirals variant="light" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left Column */}
            <Scroll3DReveal rotateAmount={8} depth={30}>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-gold font-bold tracking-[0.3em] uppercase text-[11px]">
                    Inclusion & Individual Care
                  </span>
                  <div className="h-[1px] w-12 bg-gold/30" />
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.12] mb-8 tracking-tight text-navy font-bold uppercase font-heading">
                  Learning Support & Inclusion
                </h2>

                <div className="space-y-4 text-navy/70 text-sm md:text-base leading-relaxed font-medium mb-8 max-w-xl">
                  <p>
                    At Al Shomoukh International Private School, we believe that every child learns differently, and every child can succeed. Our Learning Support programme provides the guidance, resources, and personalised strategies needed to help students achieve their full potential.
                  </p>
                  <p>
                    Working as a multidisciplinary team alongside classroom teachers, school leaders, and families, our specialists cultivate an atmosphere of belonging, academic confidence, and personal resilience across Nursery through Grade 12.
                  </p>
                </div>
              </div>
            </Scroll3DReveal>

            {/* Right Column: Photography with Floating Accents */}
            <Scroll3DReveal rotateAmount={12} depth={40} className="relative">
              <div className="relative z-10 aspect-[4/3] overflow-hidden shadow-strong">
                <Image
                  src="/images/final/learning-support.webp"
                  alt="Students receiving focused learning support"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-8 -left-8 w-40 h-40 border border-navy/5 -z-0" />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-ivory -z-0" />
            </Scroll3DReveal>

          </div>
        </div>
      </section>

      {/* Highlights / Stats Band */}
      <section className="relative py-16 bg-white overflow-hidden border-y border-navy/5 scroll-3d-scene">
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { title: "All Grades", desc: "Nursery through Grade 12" },
              { title: "3-Tier Model", desc: "Universal to specialist care" },
              { title: "1:1 IEPs", desc: "Personalised education plans" },
              { title: "Parent Partner", desc: "Close family collaboration" },
            ].map((stat, index) => (
              <Scroll3DReveal
                key={index}
                rotateAmount={10 + index * 2}
                depth={20}
                className="flex flex-col items-start"
              >
                <div className="text-2xl md:text-3xl lg:text-4xl text-navy font-bold tracking-tight mb-1 font-heading">
                  <span>{stat.title}</span>
                </div>
                <p className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-navy/50 leading-relaxed">
                  {stat.desc}
                </p>
              </Scroll3DReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Tier Multi-Level Support Model */}
      <section className="py-24 md:py-36 bg-[#FDFCF7] border-y border-navy/5 relative overflow-hidden">
        <SectionSpirals variant="light" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-gold font-bold tracking-[0.3em] uppercase text-[11px]">
                Multi-Tiered Support System
              </span>
              <div className="h-[1px] w-8 bg-gold/30" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.1] mb-6 tracking-tight font-bold uppercase font-heading">
              Our 3-Tier <span className="text-gold">Support Model</span>
            </h2>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed font-medium">
              A graduated framework ensuring that support is tailored to each student’s specific learning profile and developmental stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tieredModel.map((item, idx) => (
              <Scroll3DCard key={idx} index={idx}>
                <div className="bg-white p-8 md:p-10 border border-navy/5 shadow-sm h-full flex flex-col justify-between hover:border-gold/40 transition-colors duration-500">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-gold font-bold text-xs uppercase tracking-widest">
                        {item.tier}
                      </span>
                      <span className="text-[9px] font-bold px-2 py-0.5 bg-ivory text-navy">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold uppercase tracking-tight text-navy mb-3 font-heading">
                      {item.title}
                    </h3>

                    <p className="text-navy/70 text-xs md:text-sm leading-relaxed font-medium mb-6">
                      {item.desc}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-navy/5">
                      {item.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                          <span className="text-xs text-navy/80 font-semibold leading-relaxed">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-navy/5 text-gold font-bold text-[10px] uppercase tracking-widest">
                    Graduated Care
                  </div>
                </div>
              </Scroll3DCard>
            ))}
          </div>

        </div>
      </section>

      {/* Support Areas Grid */}
      <section className="py-24 md:py-36 bg-white relative overflow-hidden">
        <SectionSpirals variant="light" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-gold font-bold tracking-[0.3em] uppercase text-[11px]">
                Comprehensive Provision
              </span>
              <div className="h-[1px] w-8 bg-gold/30" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.1] mb-6 tracking-tight font-bold uppercase font-heading">
              Core Areas of <span className="text-gold">Learning Support</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {supportAreas.map((area, idx) => (
              <Scroll3DCard key={idx} index={idx}>
                <div className="bg-ivory-dark/30 hover:bg-ivory-dark/60 p-8 h-full flex flex-col justify-between transition-colors duration-500">
                  <div>
                    <span className="text-gold font-bold text-[10px] uppercase tracking-widest block mb-3">
                      {area.tag}
                    </span>
                    <h3 className="text-lg font-bold uppercase tracking-tight text-navy mb-2 font-heading">
                      {area.title}
                    </h3>
                    <p className="text-navy/70 text-xs md:text-sm leading-relaxed font-medium">
                      {area.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-navy/5 text-gold font-bold text-[10px] uppercase tracking-widest">
                    Tailored Strategy
                  </div>
                </div>
              </Scroll3DCard>
            ))}
          </div>

        </div>
      </section>

      {/* 4-Step Collaborative Process (Dark Band Theme) */}
      <section className="py-24 md:py-36 bg-navy text-white relative overflow-hidden">
        <SectionSpirals variant="dark" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-gold font-bold tracking-[0.3em] uppercase text-[11px]">
                Collaborative Approach
              </span>
              <div className="h-[1px] w-8 bg-gold/50" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight font-heading mb-4">
              Our Step-by-Step <span className="text-gold">Support Process</span>
            </h2>
            <p className="text-ivory/80 text-sm md:text-base font-medium">
              How our SENCO and academic specialists identify, plan, and review support in partnership with families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {processSteps.map((step, idx) => (
              <Scroll3DReveal key={idx} rotateAmount={8 + idx * 2} depth={20}>
                <div className="bg-white/5 border border-white/10 p-8 h-full flex flex-col justify-between hover:bg-white/10 transition-colors duration-300">
                  <div>
                    <span className="text-gold font-bold text-3xl uppercase tracking-tight font-heading block mb-4">
                      {step.step}
                    </span>
                    <h3 className="font-bold text-lg text-white uppercase tracking-tight mb-3 font-heading">
                      {step.title}
                    </h3>
                    <p className="text-ivory/75 text-xs md:text-sm leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-white/10 text-gold font-bold text-[10px] uppercase tracking-widest">
                    Step {idx + 1}
                  </div>
                </div>
              </Scroll3DReveal>
            ))}
          </div>

        </div>
      </section>

      {/* Navigation CTA */}
      <section className="py-20 md:py-28 bg-[#FAFAFA] border-t border-navy/5">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          <Link
            href="/academics"
            className="group flex flex-col md:flex-row md:items-center md:justify-between gap-8 bg-white border border-navy/10 shadow-strong p-8 md:p-14 hover:border-gold/60 transition-all duration-500"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">Parent Partnership</span>
                <div className="h-[1px] w-6 bg-gold/40" />
              </div>
              <h2 className="text-2xl md:text-4xl text-navy font-bold uppercase tracking-tight mb-2 group-hover:text-gold transition-colors font-heading">
                Academic Overview & Stages
              </h2>
              <p className="text-navy/70 font-medium text-sm md:text-base leading-relaxed max-w-xl">
                Explore the complete British and Omani educational spectrum from Nursery through Grade 12.
              </p>
            </div>
            <div className="w-16 h-16 bg-navy text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-colors duration-500 shrink-0">
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>
    </main>
  )
}
