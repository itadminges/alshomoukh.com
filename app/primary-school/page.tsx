"use client"

import { 
  CheckCircle2, 
  Award
} from "lucide-react"
import { AcademicSubPageLayout } from "@/components/academic-subpage-layout"
import { Scroll3DReveal } from "@/components/scroll-3d"

export default function PrimaryPage() {
  const primaryDivisions = [
    {
      level: "Lower Primary",
      grades: "Grades 1–3 (Ages 5–8)",
      desc: "Consolidating core reading fluency, numerical problem solving, scientific curiosity, and collaborative learning habits in a supportive environment.",
      points: [
        "Structured reading schemes and guided comprehension",
        "Concrete-Pictorial-Abstract mathematics approach",
        "Hands-on science investigations and outdoor learning",
        "Bilingual Arabic and Islamic Studies integration"
      ]
    },
    {
      level: "Upper Primary",
      grades: "Grades 4–6 (Ages 8–11)",
      desc: "Deepening critical reasoning, independent research, abstract mathematical thinking, and seamless preparation for Lower Secondary.",
      points: [
        "Advanced essay writing and public speaking skills",
        "Applied science laboratories and digital computing projects",
        "Pearson Edexcel iPrimary internationally benchmarked tests",
        "Leadership roles, global citizenship, and sports teams"
      ]
    }
  ]

  const customPrimarySection = (
    <section className="py-20 md:py-28 bg-[#FDFCF7] relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-gold/40" />
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">
              Academic Framework
            </span>
            <div className="h-[1px] w-8 bg-gold/40" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy font-bold uppercase tracking-tight font-heading">
            Primary Stage <span className="text-gold">Progression Structure</span>
          </h2>
          <p className="text-navy/70 text-sm md:text-base font-medium mt-4">
            Our Pearson Edexcel iPrimary curriculum provides a progressive, two-tier learning structure designed to build mastery from foundational literacy to independent analytical inquiry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {primaryDivisions.map((div, idx) => (
            <Scroll3DReveal key={idx} rotateAmount={10 + idx * 2} depth={28}>
              <div className="bg-white p-8 md:p-10 border border-navy/10 shadow-strong h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-gold font-bold text-xs uppercase tracking-widest">
                      {div.level}
                    </span>
                    <span className="text-xs font-bold px-3 py-1 bg-ivory border border-navy/10 text-navy">
                      {div.grades}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl text-navy font-bold uppercase tracking-tight mb-4 font-heading">
                    {div.level} Development
                  </h3>

                  <p className="text-navy/75 text-sm md:text-base leading-relaxed font-medium mb-6">
                    {div.desc}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-navy/10">
                    {div.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm font-semibold text-navy/85">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-navy/10 text-gold font-bold text-[10px] uppercase tracking-widest">
                  Pearson Edexcel Standards
                </div>
              </div>
            </Scroll3DReveal>
          ))}
        </div>

        {/* Assessment Banner */}
        <Scroll3DReveal rotateAmount={8} depth={28}>
          <div className="bg-navy text-white p-8 md:p-10 border border-gold/30 shadow-strong flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <span className="text-gold font-bold text-xs uppercase tracking-widest block mb-2">
                International Benchmarking
              </span>
              <h4 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white mb-2 font-heading">
                Pearson Edexcel iPrimary Assessments
              </h4>
              <p className="text-ivory/80 text-xs md:text-sm max-w-2xl font-medium leading-relaxed">
                Yearly progress monitoring through Pearson Progress Tests and end-of-stage iPrimary Achievement Tests providing globally certified evaluation of pupil attainment.
              </p>
            </div>
            <div className="shrink-0">
              <span className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 border border-white/20 text-gold text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4" /> Global Benchmark
              </span>
            </div>
          </div>
        </Scroll3DReveal>

      </div>
    </section>
  )

  return (
    <AcademicSubPageLayout
      title="Primary Curriculum (Grades 1–6)"
      subtitle="A world-class British international programme combining high academic standards with inquiry, creativity, bilingual proficiency, and character."
      cardTitle="PEARSON EDEXCEL iPRIMARY"
      cardSubtitle="Grades 1–6 • Ages 5–11"
      cardImage="/academics_premium.png"
      intro={[
        "At Al Shomoukh International Private School, our Primary Department follows the Pearson Edexcel iPrimary Curriculum, a world-class British international programme that provides a strong academic foundation while nurturing curiosity, creativity, confidence, and a lifelong love of learning.",
        "Designed for children aged 5–11, the curriculum combines high academic standards with an international perspective, preparing pupils for a seamless progression to iLowerSecondary, International GCSEs, and beyond.",
        "The programme is written with international learners in mind and supports the development of English language proficiency alongside academic excellence.",
        "Our curriculum offers a broad and balanced education across English, Mathematics, Science, Computing, Global Citizenship, Art, Music, Physical Education, French and Arabic and Islamic Studies in accordance with the requirements of the Ministry of Education.",
      ]}
      highlights={[
        {
          title: "UK iPrimary",
          description: "Pearson Edexcel accredited British framework",
        },
        {
          title: "Bilingual STEM",
          description: "English instruction & Arabic language fluency",
        },
        {
          title: "Achievement Tests",
          description: "Internationally benchmarked external examinations",
        },
        {
          title: "Whole Child",
          description: "Character development, leadership & wellbeing",
        },
      ]}
      customSections={customPrimarySection}
      featuresSubtitle="Primary Strengths"
      featuresHeading="Hallmarks of Our Primary Education"
      features={[
        {
          title: "British Academic Excellence",
          badge: "Pearson iPrimary",
          description: "Rigorous standards in English, Mathematics, and Science underpinned by the UK National Curriculum.",
        },
        {
          title: "Inquiry-Based Learning",
          badge: "STEM & Discovery",
          description: "Hands-on scientific investigations, mathematical modeling, and real-world problem-solving.",
        },
        {
          title: "Bilingual Mastery",
          badge: "Cultural Identity",
          description: "High-standard English instruction complemented by rich Arabic, Islamic Studies, and Omani heritage.",
        },
        {
          title: "Whole-Child Development",
          badge: "Character & Care",
          description: "Equal emphasis on emotional wellbeing, integrity, social leadership, sports, and creative arts.",
        },
      ]}
      subjectsHeading="Primary Core & Specialist Subject Spectrum"
      subjects={[
        "English Language & Literature",
        "Mathematics & Problem Solving",
        "Science & Scientific Inquiry",
        "Computing & Digital Literacy",
        "Global Citizenship & Ethics",
        "Art & Visual Design",
        "Music & Performing Arts",
        "Physical Education & Health",
        "French as a Foreign Language",
        "Arabic Language (MoE Curriculum)",
        "Islamic Studies (MoE Curriculum)",
        "Omani Social Studies (MoE Curriculum)",
      ]}
      pathwayHeading="Primary Progression Journey"
      pathwaySubtitle="Structured Growth"
      pathway={[
        {
          label: "Grades 1–2",
          title: "Key Stage 1 Foundations",
          description: "Solidifying phonics, reading fluency, early mathematical reasoning, and social collaboration.",
          highlights: ["Phonics Fluency", "Number Bonds", "Sensory Science"],
        },
        {
          label: "Grades 3–4",
          title: "Middle Primary Development",
          description: "Advancing comprehension, multiplication, scientific experiments, computing, and creative arts.",
          highlights: ["Applied Mathematics", "Inquiry Projects", "Digital Literacy"],
        },
        {
          label: "Grades 5–6",
          title: "Upper Primary Mastery",
          description: "Synthesizing complex concepts, independent research, and seamless transition to iLowerSecondary.",
          highlights: ["Pearson Progress Tests", "Leadership Roles", "Secondary Preparation"],
        },
      ]}
      quote={{
        text: "At the heart of our Primary Curriculum is our commitment to educating the whole child—fostering respect, responsibility, integrity, empathy, and perseverance.",
        author: "Primary Academic Leadership",
      }}
      nextLink={{
        href: "/lower-secondary",
        label: "Lower Secondary (Grades 7–8)",
        description: "Explore how Pearson Edexcel iLowerSecondary bridges students into advanced academic rigour and secondary mastery.",
      }}
    />
  )
}
