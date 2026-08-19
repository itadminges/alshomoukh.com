"use client"

import { 
  BookOpen, 
  ChevronRight, 
  CheckCircle2, 
  Award, 
  ArrowRight
} from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Scroll3DReveal } from "@/components/scroll-3d"
import { SectionSpirals } from "@/components/decorative-spirals"
import { AcademicTabs } from "@/components/academic-tabs"
import Link from "next/link"
import Image from "next/image"

export default function AcademicsPage() {
  const stages = [
    { 
      title: "Kindergarten", 
      badge: "Ages 3–5 • Nursery & KG",
      framework: "Early Years Foundation Stage (EYFS)",
      desc: "Nurturing curiosity, confidence, and joyful inquiry through British EYFS standards and purposeful play.",
      highlights: ["7 Areas of Learning", "Early Literacy & Phonics", "Nurturing Classrooms"],
      link: "/kindergarten"
    },
    { 
      title: "Primary School", 
      badge: "Grades 1–6 • Ages 5–11",
      framework: "Pearson Edexcel iPrimary",
      desc: "Building strong academic foundations in core subjects with internationally benchmarked assessments.",
      highlights: ["iPrimary Framework", "Inquiry-Led Science", "Bilingual Proficiency"],
      link: "/primary-school"
    },
    { 
      title: "Lower Secondary",
      badge: "Grades 7–8 • Ages 11–14",
      framework: "Pearson Edexcel iLowerSecondary",
      desc: "Fostering analytical thinking, subject specialization, and seamless preparation for International GCSEs.",
      highlights: ["Specialist Teaching", "Lab Investigations", "IGCSE Readiness"],
      link: "/lower-secondary"
    },
    { 
      title: "Upper Secondary", 
      badge: "Grades 9–12 • Ages 14–19",
      framework: "IGCSE, IAL, BTEC & Bilingual GED",
      desc: "Four flexible pathways preparing students for top universities in Oman, the UK, US, and worldwide.",
      highlights: ["International GCSE & IAL", "BTEC Extended Diploma", "Omani GED Pathway"],
      link: "/upper-secondary"
    },
    { 
      title: "Learning Support", 
      badge: "All Stages • Individualised Care",
      framework: "Inclusive Education & SENCO",
      desc: "Empowering every learner through tailored interventions, multi-tiered support, and neurodiversity care.",
      highlights: ["Tiered Support Model", "Personalised IEPs", "Parent Partnership"],
      link: "/learning-support"
    }
  ]

  const stats = [
    { value: "Ages 3–18", label: "Complete Learning Spectrum", sub: "Nursery through Grade 12" },
    { value: "5 Pathways", label: "Tailored Academic Choices", sub: "British & Omani Curricula" },
    { value: "100%", label: "International Recognition", sub: "Pearson Edexcel & MoE Oman" },
    { value: "1:1", label: "Personalised Guidance", sub: "University & Career Counseling" },
  ]

  const roadmapSteps = [
    {
      stage: "Foundation",
      grade: "Ages 3–5",
      title: "Early Years (EYFS)",
      description: "Developing curiosity, motor skills, social confidence, and foundational phonics and numeracy."
    },
    {
      stage: "Primary",
      grade: "Grades 1–6",
      title: "Pearson Edexcel iPrimary",
      description: "Establishing deep conceptual understanding in Mathematics, Sciences, English, and Omani National Subjects."
    },
    {
      stage: "Lower Secondary",
      grade: "Grades 7–8",
      title: "Pearson Edexcel iLowerSecondary",
      description: "Transitioning to subject specialist teachers, laboratory practicals, and structured analytical problem-solving."
    },
    {
      stage: "Upper Secondary",
      grade: "Grades 9–10",
      title: "International GCSE",
      description: "Rigorous international examinations providing world-standard benchmarking across chosen academic disciplines."
    },
    {
      stage: "Pre-University",
      grade: "Grades 11–12",
      title: "IAL • BTEC • Bilingual GED",
      description: "Advanced specialisation leading to direct admissions into premier global and regional universities."
    }
  ]

  const pillars = [
    {
      title: "Academic Rigour & Inquiry",
      description: "Combining the latest UK standards with Pearson Edexcel qualifications to cultivate deep knowledge and critical reasoning."
    },
    {
      title: "Bilingual & Cultural Pride",
      description: "Fostering authentic fluency in English while honoring Arabic language, Islamic studies, and Omani heritage."
    },
    {
      title: "Inclusive & Differentiated",
      description: "Recognising every child's unique pace and strengths through continuous formative assessment and dedicated support."
    },
    {
      title: "Future Leadership & Values",
      description: "Instilling resilience, ethical responsibility, and social leadership to prepare graduates for an interconnected world."
    }
  ]

  return (
    <main className="min-h-screen bg-white overflow-hidden scroll-3d-scene">
      <PageHero 
        title="Academic Excellence" 
        subtitle="Empowering students through world-class British and Omani academic pathways, fostering global minds with deep cultural values."
      />
      <AcademicTabs />

      {/* Main Overview Showcase Card (Sharp Architecture) */}
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
                      Academic Framework
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl lg:text-4xl text-navy font-bold uppercase tracking-tight font-heading leading-tight">
                    ACADEMIC EXCELLENCE
                  </h2>
                  <p className="text-gold font-bold text-lg md:text-xl uppercase tracking-tight mt-1 font-heading">
                    (BRITISH & OMANI BILINGUAL PATHWAYS)
                  </p>

                  <div className="w-14 h-1 bg-gold my-5" />

                  <div className="space-y-4 text-navy/75 text-sm md:text-base leading-[1.85] font-medium">
                    <p>
                      At Al Shomoukh International Private School, our academic framework provides a structured pathway from the Early Years Foundation Stage through Pearson Edexcel iPrimary, iLowerSecondary, International GCSE, International A Level, BTEC, and the Omani Bilingual Curriculum.
                    </p>
                    <p>
                      Our programmes combine high academic standards, international perspectives, Ministry of Education requirements, and a strong commitment to student wellbeing, character, leadership, and lifelong learning.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3.5 pt-4">
                    <Link
                      href="/curriculum"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-gold text-xs font-bold uppercase tracking-wider hover:bg-gold hover:text-navy transition-all duration-300 shadow-sm"
                    >
                      <BookOpen className="w-4 h-4" /> Explore Curriculum
                    </Link>
                    <Link
                      href="/upper-secondary"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-navy border border-navy/15 text-xs font-bold uppercase tracking-wider hover:border-gold/60 transition-all duration-300 shadow-xs"
                    >
                      <span>Senior Pathways</span>
                      <ChevronRight className="w-4 h-4 text-gold" />
                    </Link>
                  </div>
                </div>

                {/* Right Column: Photography Card */}
                <div className="relative aspect-[16/10] md:aspect-[4/3] w-full overflow-hidden shadow-strong border border-navy/10">
                  <Image
                    src="/school_building_premium.png"
                    alt="Al Shomoukh Academic Excellence"
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
                {stats.map((stat, idx) => (
                  <div key={idx} className="border-l-2 border-gold pl-5 py-1">
                    <h4 className="text-base md:text-lg font-bold text-navy uppercase tracking-tight font-heading">
                      {stat.value}
                    </h4>
                    <p className="text-xs text-navy/70 font-medium leading-relaxed mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Scroll3DReveal>

        </div>
      </section>

      {/* Grid of Stages */}
      <section className="py-24 md:py-32 bg-[#FDFCF7] border-y border-navy/5 relative overflow-hidden">
        <SectionSpirals variant="light" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-gold/40" />
              <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">Structured Progression</span>
              <div className="h-[1px] w-8 bg-gold/40" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy font-bold uppercase tracking-tight font-heading">
              Explore Our <span className="text-gold">Educational Stages</span>
            </h2>
            <p className="text-navy/70 text-sm md:text-base font-medium mt-4">
              Select a stage to explore curriculum details, subject offerings, assessment structures, and developmental outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
            {stages.map((stage, i) => (
              <Scroll3DReveal key={i} rotateAmount={10 + i * 2} depth={28}>
                <Link href={stage.link} className="block group h-full">
                  <div className="bg-white p-7 md:p-8 border border-navy/10 shadow-strong hover:border-gold/60 transition-all duration-500 h-full flex flex-col justify-between group-hover:-translate-y-2 relative">
                    <div>
                      {/* Badge */}
                      <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-gold bg-ivory px-2.5 py-1 border border-gold/30 mb-6">
                        {stage.badge}
                      </span>

                      <h3 className="font-bold text-xl text-navy mb-2 uppercase tracking-tight group-hover:text-gold transition-colors font-heading">
                        {stage.title}
                      </h3>

                      <p className="text-[11px] font-bold text-gold uppercase tracking-wider mb-4">
                        {stage.framework}
                      </p>

                      <p className="text-navy/70 leading-relaxed font-medium text-xs md:text-sm mb-6">
                        {stage.desc}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1.5 pt-4 border-t border-navy/5 mb-6">
                        {stage.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2 text-[11px] text-navy/75 font-semibold">
                            <span className="w-1.5 h-1.5 bg-gold shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-gold font-bold text-[10px] uppercase tracking-widest pt-4 border-t border-navy/5 group-hover:text-navy transition-colors">
                      <span>View Stage</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </Scroll3DReveal>
            ))}
          </div>

        </div>
      </section>

      {/* Learning Journey Roadmap */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <SectionSpirals variant="light" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-gold/40" />
              <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">Educational Trajectory</span>
              <div className="h-[1px] w-8 bg-gold/40" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy font-bold uppercase tracking-tight font-heading">
              The Al Shomoukh <span className="text-gold">Learning Journey</span>
            </h2>
            <p className="text-navy/70 text-sm md:text-base font-medium mt-4">
              A structured roadmap providing clear progression from early childhood to global university readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {roadmapSteps.map((step, idx) => (
              <Scroll3DReveal key={idx} rotateAmount={8 + idx * 2} depth={25}>
                <div className="bg-ivory/40 p-6 md:p-7 border border-navy/10 shadow-strong h-full flex flex-col justify-between hover:border-gold/50 transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gold font-bold text-xs uppercase tracking-widest">
                        Step 0{idx + 1}
                      </span>
                      <span className="text-[10px] font-bold text-navy/70 bg-white px-2 py-0.5 border border-navy/10">
                        {step.grade}
                      </span>
                    </div>
                    <h3 className="font-bold text-base md:text-lg text-navy uppercase tracking-tight mb-2 font-heading">
                      {step.title}
                    </h3>
                    <p className="text-xs text-navy/70 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-navy/10 text-[10px] font-bold text-gold uppercase tracking-wider">
                    {step.stage} Phase
                  </div>
                </div>
              </Scroll3DReveal>
            ))}
          </div>

        </div>
      </section>

      {/* Core Academic Pillars */}
      <section className="py-24 md:py-32 bg-navy text-white relative overflow-hidden">
        <SectionSpirals variant="dark" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-gold/50" />
              <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">Excellence & Rigour</span>
              <div className="h-[1px] w-8 bg-gold/50" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight font-heading">
              Our Academic <span className="text-gold">Pillars</span>
            </h2>
            <p className="text-ivory/80 text-sm md:text-base font-medium mt-4">
              Guiding principles that define teaching and learning at Al Shomoukh International Private School.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {pillars.map((pillar, pIdx) => (
              <Scroll3DReveal key={pIdx} rotateAmount={10 + pIdx * 2} depth={28}>
                <div className="bg-white/5 border border-white/10 p-8 h-full flex flex-col justify-between hover:bg-white/10 transition-colors duration-300">
                  <div>
                    <span className="text-gold font-bold text-xs uppercase tracking-widest block mb-4">
                      Pillar 0{pIdx + 1}
                    </span>
                    <h3 className="font-bold text-lg text-white uppercase tracking-tight mb-3 font-heading">
                      {pillar.title}
                    </h3>
                    <p className="text-ivory/75 text-xs md:text-sm leading-relaxed font-medium">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-white/10 text-gold font-bold text-[10px] uppercase tracking-widest">
                    Core Quality Standard
                  </div>
                </div>
              </Scroll3DReveal>
            ))}
          </div>

          {/* Accreditations Banner */}
          <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-white/5 border border-white/10">
              <p className="text-gold font-bold text-xs uppercase tracking-widest mb-1">British International</p>
              <p className="text-base font-bold uppercase text-white">Pearson Edexcel Approved Centre</p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10">
              <p className="text-gold font-bold text-xs uppercase tracking-widest mb-1">Vocational Excellence</p>
              <p className="text-base font-bold uppercase text-white">Pearson BTEC Approved Centre</p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10">
              <p className="text-gold font-bold text-xs uppercase tracking-widest mb-1">National Accreditation</p>
              <p className="text-base font-bold uppercase text-white">Ministry of Education Oman Aligned</p>
            </div>
          </div>

        </div>
      </section>

      {/* Next Step / Admissions CTA */}
      <section className="py-20 bg-[#FAFAFA] border-t border-navy/10 relative overflow-hidden">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          <div className="bg-white border border-navy/10 shadow-premium p-8 md:p-12 lg:p-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">Join Our Community</span>
                <div className="h-[1px] w-8 bg-gold/40" />
              </div>
              <h2 className="text-2xl md:text-4xl text-navy font-bold uppercase tracking-tight mb-3 font-heading">
                Experience Academic Excellence Firsthand
              </h2>
              <p className="text-navy/70 text-sm md:text-base font-medium leading-relaxed">
                Connect with our academic leadership team, tour our state-of-the-art campus, or learn more about our admissions and pathway options.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                href="/curriculum"
                className="inline-flex items-center gap-2 px-7 py-4 bg-navy text-gold text-xs font-bold uppercase tracking-wider hover:bg-gold hover:text-navy transition-all duration-300 shadow-md"
              >
                <span>Curriculum Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
