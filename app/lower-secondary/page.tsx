"use client"

import { 
  Award
} from "lucide-react"
import { AcademicSubPageLayout } from "@/components/academic-subpage-layout"
import { Scroll3DReveal, Scroll3DCard } from "@/components/scroll-3d"

export default function LowerSecondaryPage() {
  const transitionPillars = [
    {
      title: "Subject Specialist Faculty",
      desc: "Students learn directly from experienced subject specialists in dedicated science laboratories, ICT suites, and arts studios.",
      tag: "Pillar 01"
    },
    {
      title: "Laboratory & Practical Inquiry",
      desc: "Structured scientific investigation across Biology, Chemistry, and Physics fostering experimental design and rigorous hypothesis testing.",
      tag: "Pillar 02"
    },
    {
      title: "Analytical & Critical Thinking",
      desc: "Emphasis on essay construction, mathematical proof, data analysis, ethical debate, and independent research projects.",
      tag: "Pillar 03"
    },
    {
      title: "IGCSE Pathway Guidance",
      desc: "Individualised academic profiling and subject counseling ensuring confident selection of Grade 9 International GCSE options.",
      tag: "Pillar 04"
    },
  ]

  const customLowerSecondarySection = (
    <section className="py-24 md:py-36 bg-[#FDFCF7] border-y border-navy/5 relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
        
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-[11px]">
              Secondary Transition
            </span>
            <div className="h-[1px] w-8 bg-gold/30" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.1] mb-6 tracking-tight font-bold uppercase font-heading">
            Bridging to <span className="text-gold">Academic Mastery</span>
          </h2>
          <p className="text-navy/70 text-sm md:text-base leading-relaxed font-medium">
            Grades 7 and 8 serve as the essential bridge from primary foundations to the rigorous requirements of Pearson Edexcel International GCSEs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {transitionPillars.map((pillar, idx) => (
            <Scroll3DCard key={idx} index={idx}>
              <div className="bg-white p-8 border border-navy/5 h-full flex flex-col justify-between hover:border-gold/40 transition-colors duration-500 shadow-sm">
                <div>
                  <span className="text-gold font-bold text-xs uppercase tracking-widest block mb-4">
                    {pillar.tag}
                  </span>
                  <h3 className="text-xl text-navy font-bold uppercase tracking-tight mb-2 font-heading">
                    {pillar.title}
                  </h3>
                  <p className="text-navy/70 text-xs md:text-sm leading-relaxed font-medium">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-navy/5 text-gold font-bold text-[10px] uppercase tracking-widest">
                  Grades 7–8 Standard
                </div>
              </div>
            </Scroll3DCard>
          ))}
        </div>

        {/* Pearson Achievement Tests Banner */}
        <Scroll3DReveal rotateAmount={6} depth={20}>
          <div className="bg-navy text-white p-8 md:p-12 shadow-strong flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <span className="text-gold font-bold text-xs uppercase tracking-widest block mb-2">
                External Benchmarking
              </span>
              <h4 className="text-2xl font-bold uppercase tracking-tight text-white mb-2 font-heading">
                Pearson Edexcel iLowerSecondary Achievement Tests
              </h4>
              <p className="text-ivory/80 text-xs md:text-sm max-w-2xl font-medium leading-relaxed">
                Year-end Pearson Progress Tests and end-of-stage iLowerSecondary Achievement Tests provide internationally certified attainment data, validating student readiness for IGCSE courses.
              </p>
            </div>
            <div className="shrink-0">
              <span className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 border border-white/20 text-gold text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4" /> UK Validated
              </span>
            </div>
          </div>
        </Scroll3DReveal>

      </div>
    </section>
  )

  return (
    <AcademicSubPageLayout
      title="iLowerSecondary (Grades 7–8)"
      subtitle="An internationally recognised British programme designed for learners aged 11–14, developing deep subject knowledge, critical thinking, and seamless preparation for International GCSEs."
      heroImage="/images/final/computer-lab.webp"
      cardTitle="Pearson Edexcel iLowerSecondary"
      cardSubtitle="Grades 7–8 • Ages 11–14"
      cardImage="/images/final/learning-support.webp"
      intro={[
        "At Al Shomoukh International Private School, students in Grades 7 and 8 follow the Pearson Edexcel iLowerSecondary Curriculum, an internationally recognised British programme designed for learners aged 11–14.",
        "The curriculum provides a seamless transition from iPrimary and prepares students for the academic rigour of Pearson Edexcel International GCSE qualifications in Grades 9 and 10.",
        "Built upon the latest UK National Curriculum and adapted for international learners, the programme develops deep subject knowledge, critical thinking, creativity, and independent learning while supporting students whose first language is not English.",
        "Teaching is delivered in specialized subject laboratories and facilities by dedicated secondary educators.",
      ]}
      highlights={[
        {
          title: "UK Framework",
          description: "Pearson iLowerSecondary certified curriculum",
        },
        {
          title: "Specialist Labs",
          description: "Dedicated Biology, Chemistry, Physics facilities",
        },
        {
          title: "Critical Thinking",
          description: "Structured inquiry & analytical problem solving",
        },
        {
          title: "IGCSE Ready",
          description: "Seamless preparation for Grade 9 option pathways",
        },
      ]}
      customSections={customLowerSecondarySection}
      featuresSubtitle="Lower Secondary Pillars"
      featuresHeading="Key Strengths of Our Lower Secondary Stage"
      features={[
        {
          title: "Seamless Curriculum Bridge",
          badge: "Progression",
          description: "Building directly upon iPrimary knowledge while introducing secondary-level study skills and depth.",
        },
        {
          title: "Specialist Science & Labs",
          badge: "Investigation",
          description: "Applied experimentation in Biology, Chemistry, and Physics within fully equipped science laboratories.",
        },
        {
          title: "Analytical Problem Solving",
          badge: "Reasoning",
          description: "Encouraging structured inquiry, computational logic, data analysis, and articulate essay writing.",
        },
        {
          title: "IGCSE Options Preparation",
          badge: "Future Pathways",
          description: "Personalised mentoring and career insight to help students choose optimal Grade 9 subject pathways.",
        },
      ]}
      subjectsHeading="Lower Secondary Subject Spectrum"
      subjects={[
        "English Language & Literature",
        "Mathematics (Algebra & Geometry)",
        "Science (Biology, Chemistry, Physics)",
        "Computing & Information Technology",
        "Global Citizenship & Humanities",
        "French as a Foreign Language",
        "Visual Art & Design",
        "Music & Performance Arts",
        "Physical Education & Sports",
        "Arabic Language (MoE Curriculum)",
        "Islamic Studies (MoE Curriculum)",
        "Omani Social Studies (MoE Curriculum)",
      ]}
      pathwayHeading="Lower Secondary Trajectory"
      pathwaySubtitle="Progression Steps"
      pathway={[
        {
          label: "Grade 7",
          title: "Transition & Discovery",
          description: "Adapting to specialist faculty, rotating schedules, laboratory safety, and structured note-taking.",
          highlights: ["Specialist Classes", "Laboratory Skills", "Study Habits"],
        },
        {
          label: "Grade 8",
          title: "Deepening Rigour & Options",
          description: "Mastering complex curriculum objectives, completing Pearson Achievement Tests, and choosing IGCSE options.",
          highlights: ["Pearson Achievement Tests", "Subject Electives", "IGCSE Profiling"],
        },
        {
          label: "Grades 9–10",
          title: "International GCSE Entry",
          description: "Entering Upper Secondary with strong confidence and established academic habits.",
          highlights: ["External Board Exams", "Specialised Pathways", "Pre-University Trajectory"],
        },
      ]}
      quote={{
        text: "By fostering intellectual curiosity, resilience, and a growth mindset, we equip every learner with the knowledge, skills, and values needed to thrive in an increasingly interconnected world.",
        author: "Lower Secondary Academic Leadership",
      }}
      nextLink={{
        href: "/upper-secondary",
        label: "Upper Secondary & Pre-University (Grades 9–12)",
        description: "Discover our 4 pathways: International GCSE, IAL, Pearson BTEC Extended Diploma, and Omani Bilingual Curriculum.",
      }}
    />
  )
}
