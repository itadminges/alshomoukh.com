"use client"

import { 
  Check, 
  CheckCircle2, 
  ArrowRight
} from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Scroll3DReveal } from "@/components/scroll-3d"
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
      />
      <AcademicTabs />

      {/* Main Feature Card Section */}
      <section className="py-16 md:py-24 bg-[#FAFAFA] relative overflow-hidden">
        <SectionSpirals variant="light" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          
          <Scroll3DReveal rotateAmount={8} depth={30}>
            <div className="bg-white border border-navy/10 shadow-strong p-8 md:p-12 lg:p-14 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 md:gap-14 items-center">
                
                {/* Left Column */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-[1px] w-8 bg-gold/50" />
                    <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">
                      Inclusion & Neurodiversity
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl lg:text-4xl text-navy font-bold uppercase tracking-tight font-heading leading-tight">
                    LEARNING SUPPORT & INCLUSION
                  </h2>
                  <p className="text-gold font-bold text-lg md:text-xl uppercase tracking-tight mt-1 font-heading">
                    (ALL GRADES • NURSERY TO GRADE 12)
                  </p>

                  <div className="w-14 h-1 bg-gold my-5" />

                  <div className="space-y-4 text-navy/75 text-sm md:text-base leading-[1.85] font-medium">
                    <p>
                      At Al Shomoukh International Private School, we believe that every child learns differently, and every child can succeed. Our Learning Support programme provides the guidance, resources, and personalised strategies needed to help students achieve their full potential.
                    </p>
                    <p>
                      Working as a multidisciplinary team alongside classroom teachers, school leaders, and families, our specialists cultivate an atmosphere of belonging, academic confidence, and personal resilience.
                    </p>
                  </div>
                </div>

                {/* Right Column: Photography Card */}
                <div className="relative aspect-[16/10] md:aspect-[4/3] w-full overflow-hidden shadow-strong border border-navy/10">
                  <Image
                    src="/academics_premium.png"
                    alt="Learning Support"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
                </div>

              </div>
            </div>
          </Scroll3DReveal>

          {/* Bottom 4-Column Highlights Strip */}
          <Scroll3DReveal rotateAmount={6} depth={20}>
            <div className="bg-white border border-navy/10 shadow-strong p-6 md:p-8 mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {[
                  { title: "All Grades", desc: "Nursery through Grade 12" },
                  { title: "3-Tier Model", desc: "Universal to specialist care" },
                  { title: "1:1 IEPs", desc: "Personalised education plans" },
                  { title: "Parent Partner", desc: "Close family collaboration" },
                ].map((item, idx) => (
                  <div key={idx} className="border-l-2 border-gold pl-5 py-1">
                    <h4 className="text-base md:text-lg font-bold text-navy uppercase tracking-tight font-heading">
                      {item.title}
                    </h4>
                    <p className="text-xs text-navy/70 font-medium leading-relaxed mt-1">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Scroll3DReveal>

        </div>
      </section>

      {/* 3-Tier Multi-Level Support Model */}
      <section className="py-24 md:py-32 bg-[#FDFCF7] border-y border-navy/5 relative overflow-hidden">
        <SectionSpirals variant="light" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-gold/40" />
              <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">
                Multi-Tiered Support System
              </span>
              <div className="h-[1px] w-8 bg-gold/40" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy font-bold uppercase tracking-tight font-heading">
              Our 3-Tier <span className="text-gold">Support Model</span>
            </h2>
            <p className="text-navy/70 text-sm md:text-base font-medium mt-4">
              A graduated framework ensuring that support is tailored to each student’s specific learning profile and developmental stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tieredModel.map((item, idx) => (
              <Scroll3DReveal key={idx} rotateAmount={10 + idx * 2} depth={28}>
                <div className="bg-white p-8 md:p-10 border border-navy/10 shadow-strong h-full flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-500">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gold font-bold text-xs uppercase tracking-widest">
                        {item.tier}
                      </span>
                      <span className="text-[10px] font-bold px-2.5 py-0.5 bg-ivory border border-navy/10 text-navy">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold uppercase tracking-tight text-navy mb-3 font-heading">
                      {item.title}
                    </h3>

                    <p className="text-navy/75 text-xs md:text-sm leading-relaxed font-medium mb-6">
                      {item.desc}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-navy/10">
                      {item.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                          <span className="text-xs text-navy/85 font-semibold leading-relaxed">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-navy/10 text-gold font-bold text-[10px] uppercase tracking-widest">
                    Graduated Care
                  </div>
                </div>
              </Scroll3DReveal>
            ))}
          </div>

        </div>
      </section>

      {/* Support Areas Grid */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <SectionSpirals variant="light" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-gold/40" />
              <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">
                Comprehensive Provision
              </span>
              <div className="h-[1px] w-8 bg-gold/40" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy font-bold uppercase tracking-tight font-heading">
              Core Areas of <span className="text-gold">Learning Support</span>
            </h2>
            <p className="text-navy/70 text-sm md:text-base font-medium mt-4">
              Delivering targeted interventions across academic, organizational, sensory, and emotional domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {supportAreas.map((area, idx) => (
              <Scroll3DReveal key={idx} rotateAmount={10 + idx * 2} depth={28}>
                <div className="bg-ivory/40 p-8 border border-navy/10 shadow-strong h-full flex flex-col justify-between hover:border-gold/60 transition-all duration-300">
                  <div>
                    <span className="text-gold font-bold text-xs uppercase tracking-widest block mb-3">
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
              </Scroll3DReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 4-Step Collaborative Process */}
      <section className="py-24 md:py-32 bg-navy text-white relative overflow-hidden">
        <SectionSpirals variant="dark" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-gold/50" />
              <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">
                Collaborative Approach
              </span>
              <div className="h-[1px] w-8 bg-gold/50" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight font-heading">
              Our Step-by-Step <span className="text-gold">Support Process</span>
            </h2>
            <p className="text-ivory/80 text-sm md:text-base font-medium mt-4">
              How our SENCO and academic specialists identify, plan, and review support in partnership with families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {processSteps.map((step, idx) => (
              <Scroll3DReveal key={idx} rotateAmount={10 + idx * 2} depth={28}>
                <div className="bg-white/5 border border-white/10 p-8 h-full flex flex-col justify-between hover:bg-white/10 transition-colors duration-300">
                  <div>
                    <span className="text-gold font-bold text-2xl md:text-3xl uppercase tracking-tight font-heading block mb-4">
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

      {/* Navigation to Academics Overview */}
      <section className="py-20 bg-[#FAFAFA] border-t border-navy/10 relative overflow-hidden">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          <div className="bg-white border border-navy/10 shadow-premium p-8 md:p-12 lg:p-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">Parent Partnership</span>
                <div className="h-[1px] w-6 bg-gold/40" />
              </div>
              <h2 className="text-2xl md:text-3xl text-navy font-bold uppercase tracking-tight mb-3 font-heading">
                We Are Here to Support Your Child's Journey
              </h2>
              <p className="text-navy/70 text-sm md:text-base font-medium leading-relaxed">
                If you have questions regarding your child’s learning profile, accommodations, or wish to schedule a consultation with our SENCO, our team is readily available.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                href="/academics"
                className="inline-flex items-center gap-2 px-7 py-4 bg-navy text-gold text-xs font-bold uppercase tracking-wider hover:bg-gold hover:text-navy transition-all duration-300 shadow-md"
              >
                <span>Academic Overview</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
