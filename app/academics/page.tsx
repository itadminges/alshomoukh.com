"use client"

import { 
  BookOpen, 
  ArrowRight,
  ChevronRight
} from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Scroll3DReveal, Scroll3DCard } from "@/components/scroll-3d"
import { SectionSpirals } from "@/components/decorative-spirals"
import { AcademicTabs } from "@/components/academic-tabs"
import Link from "next/link"
import Image from "next/image"

export default function AcademicsPage() {
  const stages = [
    { 
      title: "Kindergarten", 
      division: "Early Years (EYFS)",
      badge: "Ages 3–5",
      desc: "Nurturing curiosity, confidence, and joyful inquiry through British EYFS standards and purposeful play.",
      highlights: ["7 Areas of Learning", "Early Phonics", "Nurturing Spaces"],
      link: "/kindergarten",
      image: "/images/final/kindergarten-story.webp"
    },
    { 
      title: "Primary School", 
      division: "Pearson iPrimary",
      badge: "Grades 1–6",
      desc: "Building strong academic foundations in core subjects with internationally benchmarked assessments.",
      highlights: ["iPrimary Framework", "Inquiry Science", "Bilingual Mastery"],
      link: "/primary-school",
      image: "/images/final/primary-classroom.webp"
    },
    { 
      title: "Lower Secondary",
      division: "Pearson iLowerSecondary",
      badge: "Grades 7–8",
      desc: "Fostering analytical thinking, subject specialization, and seamless preparation for International GCSEs.",
      highlights: ["Specialist Labs", "Critical Thinking", "IGCSE Readiness"],
      link: "/lower-secondary",
      image: "/images/final/computer-lab.webp"
    },
    { 
      title: "Upper Secondary", 
      division: "IGCSE, IAL & BTEC",
      badge: "Grades 9–12",
      desc: "Multiple academic and vocational pathways supporting progression to higher education and future careers.",
      highlights: ["International GCSE & IAL", "BTEC Diploma", "Omani GED"],
      link: "/upper-secondary",
      image: "/images/final/upper-secondary-class.webp"
    },
    { 
      title: "Learning Support", 
      division: "Inclusive Education",
      badge: "All Grades",
      desc: "Empowering every learner through tailored interventions, multi-tiered support, and neurodiversity care.",
      highlights: ["3-Tier Model", "Individual IEPs", "Parent Partnership"],
      link: "/learning-support",
      image: "/images/final/teacher-support.webp"
    }
  ]

  const stats = [
    { value: "Ages 3–18", label: "Complete Spectrum", sub: "Nursery through Grade 12" },
    { value: "KG–12", label: "Learning Journey", sub: "Early Years through Upper Secondary" },
    { value: "British", label: "Academic Framework", sub: "Pearson Edexcel programmes" },
    { value: "IGCSE–IAL", label: "Senior Qualifications", sub: "Academic and vocational options" },
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
      description: "Advanced specialisation supporting applications to higher education and progression into future careers."
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
        backgroundImage="/images/final/primary-project.webp"
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
                    British & Omani Pathways
                  </span>
                  <div className="h-[1px] w-12 bg-gold/30" />
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.12] mb-8 tracking-tight text-navy font-bold uppercase font-heading">
                  Academic Framework & Excellence
                </h2>

                <div className="space-y-4 text-navy/70 text-sm md:text-base leading-relaxed font-medium mb-8 max-w-xl">
                  <p>
                    At Al Shomoukh International Private School, our academic framework provides a structured pathway from the Early Years Foundation Stage through Pearson Edexcel iPrimary, iLowerSecondary, International GCSE, International A Level, BTEC, and the Omani Bilingual Curriculum.
                  </p>
                  <p>
                    Our programmes combine high academic standards, international perspectives, Ministry of Education requirements, and a strong commitment to student wellbeing, character, leadership, and lifelong learning.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/curriculum"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-gold text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-navy transition-all duration-300 shadow-sm"
                  >
                    <BookOpen className="w-4 h-4" /> Explore Curriculum
                  </Link>
                  <Link
                    href="/upper-secondary"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-navy border border-navy/15 text-xs font-bold uppercase tracking-[0.2em] hover:border-gold hover:text-navy transition-all duration-300"
                  >
                    <span>Senior Pathways</span>
                    <ArrowRight className="w-4 h-4 text-gold" />
                  </Link>
                </div>
              </div>
            </Scroll3DReveal>

            {/* Right Column: Photography with Floating Accents */}
            <Scroll3DReveal rotateAmount={12} depth={40} className="relative">
              <div className="relative z-10 aspect-[4/3] overflow-hidden shadow-strong">
                <Image
                  src="/images/final/primary-boys.webp"
                  alt="Al Shomoukh students in a primary classroom"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-8 -left-8 w-40 h-40 border border-navy/5 -z-0" />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-ivory -z-0" />
            </Scroll3DReveal>

          </div>
        </div>
      </section>

      {/* Highlights / Stats Band (Matching Home Page StatsSection) */}
      <section className="relative py-16 bg-white overflow-hidden border-y border-navy/5 scroll-3d-scene">
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, idx) => (
              <Scroll3DReveal
                key={idx}
                rotateAmount={10 + idx * 2}
                depth={20}
                className="flex flex-col items-start"
              >
                <div className="text-2xl md:text-3xl lg:text-4xl text-navy font-bold tracking-tight mb-1 font-heading">
                  <span>{stat.value}</span>
                </div>
                <p className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-navy/50 leading-relaxed">
                  {stat.label}
                </p>
              </Scroll3DReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Stages Grid (Matching AcademicPrograms on Home Page) */}
      <section className="py-24 md:py-36 bg-[#FDFCF7] border-y border-navy/5 relative overflow-hidden">
        <SectionSpirals variant="light" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-gold font-bold tracking-[0.3em] uppercase text-[11px]">
                Educational Stages
              </span>
              <div className="h-[1px] w-8 bg-gold/30" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.1] mb-6 tracking-tight font-bold uppercase font-heading">
              Explore Our <span className="text-gold">Learning Stages</span>
            </h2>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed font-medium">
              Select a stage to explore curriculum details, subject offerings, assessment structures, and developmental outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {stages.map((stage, index) => (
              <Scroll3DCard key={stage.title} index={index}>
                <Link href={stage.link} className="group block h-full">
                  <article className="relative bg-white border border-navy/5 hover:border-gold/40 transition-colors duration-500 pb-8 h-full flex flex-col justify-between shadow-sm">
                    <div>
                      <div className="relative aspect-[4/3] overflow-hidden mb-6">
                        <Image
                          src={stage.image}
                          alt={stage.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-0.5 text-[8px] font-bold tracking-widest text-navy uppercase">
                          {stage.badge}
                        </div>
                      </div>

                      <div className="px-6">
                        <h3 className="text-xl text-navy mb-2 font-bold tracking-tight uppercase group-hover:text-gold transition-colors font-heading">
                          {stage.title}
                        </h3>
                        <p className="text-[11px] font-bold text-gold uppercase tracking-wider mb-3">
                          {stage.division}
                        </p>
                        <p className="text-xs text-navy/70 leading-relaxed font-medium mb-4 line-clamp-3">
                          {stage.desc}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 pt-4 border-t border-navy/5 flex items-center justify-between text-gold font-bold text-[9px] tracking-widest uppercase">
                      <span>Explore Stage</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </article>
                </Link>
              </Scroll3DCard>
            ))}
          </div>

        </div>
      </section>

      {/* Learning Journey Roadmap */}
      <section className="py-24 md:py-36 bg-white relative overflow-hidden">
        <SectionSpirals variant="light" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-gold font-bold tracking-[0.3em] uppercase text-[11px]">
                Educational Trajectory
              </span>
              <div className="h-[1px] w-8 bg-gold/30" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.1] mb-6 tracking-tight font-bold uppercase font-heading">
              The Al Shomoukh <span className="text-gold">Learning Journey</span>
            </h2>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed font-medium">
              A structured roadmap providing clear progression from early childhood to higher education and career readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {roadmapSteps.map((step, idx) => (
              <Scroll3DCard key={idx} index={idx}>
                <div className="bg-ivory-dark/30 hover:bg-ivory-dark/60 p-7 h-full flex flex-col justify-between transition-colors duration-500">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gold font-bold text-xs uppercase tracking-widest">
                        Step 0{idx + 1}
                      </span>
                      <span className="text-[9px] font-bold text-navy/70 bg-white px-2 py-0.5">
                        {step.grade}
                      </span>
                    </div>
                    <h3 className="font-bold text-base text-navy uppercase tracking-tight mb-2 font-heading">
                      {step.title}
                    </h3>
                    <p className="text-xs text-navy/70 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-navy/10 text-[9px] font-bold text-gold uppercase tracking-wider">
                    {step.stage} Phase
                  </div>
                </div>
              </Scroll3DCard>
            ))}
          </div>

        </div>
      </section>

      {/* Core Academic Pillars (Dark Band Theme) */}
      <section className="py-24 md:py-36 bg-navy text-white relative overflow-hidden">
        <SectionSpirals variant="dark" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-gold font-bold tracking-[0.3em] uppercase text-[11px]">
                Excellence & Rigour
              </span>
              <div className="h-[1px] w-8 bg-gold/50" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight font-heading mb-4">
              Our Academic <span className="text-gold">Pillars</span>
            </h2>
            <p className="text-ivory/80 text-sm md:text-base font-medium">
              Guiding principles that define teaching and learning at Al Shomoukh International Private School.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {pillars.map((pillar, pIdx) => (
              <Scroll3DReveal key={pIdx} rotateAmount={8 + pIdx * 2} depth={20}>
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
                    Core Standard
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

      {/* Navigation CTA */}
      <section className="py-20 md:py-28 bg-[#FAFAFA] border-t border-navy/5">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          <Link
            href="/curriculum"
            className="group flex flex-col md:flex-row md:items-center md:justify-between gap-8 bg-white border border-navy/10 shadow-strong p-8 md:p-14 hover:border-gold/60 transition-all duration-500"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">Join Our Community</span>
                <div className="h-[1px] w-6 bg-gold/40" />
              </div>
              <h2 className="text-2xl md:text-4xl text-navy font-bold uppercase tracking-tight mb-2 group-hover:text-gold transition-colors font-heading">
                Experience Academic Excellence Firsthand
              </h2>
              <p className="text-navy/70 font-medium text-sm md:text-base leading-relaxed max-w-xl">
                Explore our full curriculum, arrange a campus visit, or learn more about admissions and pathway options.
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
