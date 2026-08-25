"use client"

import { Check } from "lucide-react"
import { AcademicSubPageLayout } from "@/components/academic-subpage-layout"
import { Scroll3DCard } from "@/components/scroll-3d"

export default function KindergartenPage() {
  const primeAreas = [
    {
      title: "Communication & Language",
      desc: "Developing rich vocabulary, active listening, comprehension, and confident verbal expression in English and Arabic.",
      tag: "Prime Area 01"
    },
    {
      title: "Personal, Social & Emotional Development",
      desc: "Fostering emotional self-regulation, empathy, positive self-esteem, collaboration, and respectful friendships.",
      tag: "Prime Area 02"
    },
    {
      title: "Physical Development",
      desc: "Refining gross and fine motor skills, spatial awareness, pencil grip, agility, and healthy lifestyle habits.",
      tag: "Prime Area 03"
    },
  ]

  const specificAreas = [
    {
      title: "Literacy & Phonics",
      desc: "Systematic synthetic phonics, interactive storytelling, print awareness, and early emergent writing.",
      tag: "Specific Area 01"
    },
    {
      title: "Mathematics & Problem Solving",
      desc: "Hands-on number sense, pattern recognition, counting, shape identification, and spatial reasoning.",
      tag: "Specific Area 02"
    },
    {
      title: "Understanding the World",
      desc: "Scientific curiosity, nature exploration, technological awareness, community, and cultural discovery.",
      tag: "Specific Area 03"
    },
    {
      title: "Expressive Arts & Design",
      desc: "Creative exploration through paint, role-play, musical rhythm, dance, and imaginative crafting.",
      tag: "Specific Area 04"
    },
  ]

  const customEyfsSection = (
    <section className="py-24 md:py-36 bg-[#FDFCF7] border-y border-navy/5 relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
        
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-[11px]">
              EYFS Learning Architecture
            </span>
            <div className="h-[1px] w-8 bg-gold/30" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.1] mb-6 tracking-tight font-bold uppercase font-heading">
            The 7 Areas of <span className="text-gold">Learning & Development</span>
          </h2>
          <p className="text-navy/70 text-sm md:text-base leading-relaxed font-medium">
            The British Early Years Foundation Stage framework is structured around three prime areas and four specific areas that empower children to thrive holistically.
          </p>
        </div>

        {/* 3 Prime Areas */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-navy font-bold uppercase tracking-wider text-xs md:text-sm bg-gold/20 px-3.5 py-1">
              3 Prime Areas
            </span>
            <span className="text-navy/50 text-xs font-semibold">
              Foundational for all future learning and relationships
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {primeAreas.map((area, idx) => (
              <Scroll3DCard key={idx} index={idx}>
                <div className="bg-navy text-white p-8 md:p-10 h-full flex flex-col justify-between shadow-strong">
                  <div>
                    <span className="text-gold font-bold text-[10px] uppercase tracking-widest block mb-4">
                      {area.tag}
                    </span>
                    <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-3 font-heading">
                      {area.title}
                    </h3>
                    <p className="text-ivory/80 text-xs md:text-sm leading-relaxed font-medium">
                      {area.desc}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-wider">
                    <Check className="w-4 h-4 shrink-0" /> Core Foundation
                  </div>
                </div>
              </Scroll3DCard>
            ))}
          </div>
        </div>

        {/* 4 Specific Areas */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-navy font-bold uppercase tracking-wider text-xs md:text-sm bg-white px-3.5 py-1 border border-navy/10">
              4 Specific Areas
            </span>
            <span className="text-navy/50 text-xs font-semibold">
              Strengthening and applying the prime skills in structured contexts
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specificAreas.map((area, idx) => (
              <Scroll3DCard key={idx} index={idx}>
                <div className="bg-white p-8 border border-navy/5 h-full flex flex-col justify-between hover:border-gold/40 transition-colors duration-500 shadow-sm">
                  <div>
                    <span className="text-gold font-bold text-[10px] uppercase tracking-widest block mb-4">
                      {area.tag}
                    </span>
                    <h3 className="text-lg text-navy font-bold uppercase tracking-tight mb-2 font-heading">
                      {area.title}
                    </h3>
                    <p className="text-navy/70 text-xs md:text-sm leading-relaxed font-medium">
                      {area.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-navy/5 text-gold font-bold text-[10px] uppercase tracking-widest">
                    Applied Learning
                  </div>
                </div>
              </Scroll3DCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  )

  return (
    <AcademicSubPageLayout
      title="Early Years Foundation Stage (EYFS)"
      subtitle="A nurturing, play-based British framework that provides children aged 3–5 with the strongest possible foundation for lifelong learning."
      heroImage="/images/final/kindergarten-story.webp"
      cardTitle="Kindergarten (EYFS)"
      cardSubtitle="Ages 3–5 • Nursery (FS1) & KG (FS2)"
      cardImage="/images/final/kindergarten-learning.webp"
      intro={[
        "At Al Shomoukh International Private School, our Kindergarten Department follows the Early Years Foundation Stage (EYFS) Curriculum, a world-renowned British framework that provides children aged 3–5 with the strongest possible foundation for lifelong learning.",
        "The EYFS curriculum recognises that young children learn best through purposeful play, exploration, and meaningful experiences, fostering confidence, curiosity, creativity, and independence in a safe, nurturing, and stimulating environment.",
        "Every learning experience is carefully designed to support each child's individual development while preparing them for a successful transition into Primary education.",
        "Our experienced Early Years teachers create warm, inclusive, and inspiring classrooms where every child feels valued, supported, and encouraged to thrive through continuous observation and strong partnerships with parents.",
      ]}
      highlights={[
        {
          title: "Play-Based",
          description: "Inquiry & purposeful exploration",
        },
        {
          title: "7 EYFS Areas",
          description: "Prime & specific learning domains",
        },
        {
          title: "Nurturing Care",
          description: "Warm & stimulating classrooms",
        },
        {
          title: "Parent Partner",
          description: "Continuous observation & growth",
        },
      ]}
      customSections={customEyfsSection}
      featuresSubtitle="Early Years Excellence"
      featuresHeading="Why Families Choose Our Kindergarten"
      features={[
        {
          title: "Purposeful Play & Inquiry",
          badge: "Discovery",
          description: "Hands-on, multi-sensory experiences that spark imagination, critical thinking, and problem-solving.",
        },
        {
          title: "Nurturing Environment",
          badge: "Wellbeing",
          description: "Safe, welcoming, and beautifully equipped learning spaces designed for joyful early exploration.",
        },
        {
          title: "Personalised Assessment",
          badge: "Tracking",
          description: "Continuous formative observations ensuring every child receives tailored developmental support.",
        },
        {
          title: "Parent Partnership",
          badge: "Collaboration",
          description: "Close, regular communication with families to celebrate milestones and build shared trust.",
        },
      ]}
      subjectsHeading="Kindergarten Core Learning Experiences"
      subjects={[
        "Early Phonics & Guided Reading",
        "Early Numeracy & Math Concepts",
        "Sensory & Scientific Discovery",
        "Bilingual Storytelling & Arabic",
        "Fine & Gross Motor Development",
        "Music, Rhythm & Movement",
        "Visual Arts & Creative Expression",
        "Social & Emotional Readiness",
      ]}
      pathwayHeading="Early Years Progression"
      pathwaySubtitle="Step-by-Step Growth"
      pathway={[
        {
          label: "Ages 3–4",
          title: "Nursery / FS1",
          description: "Settling in, developing social relationships, communication, sensory play, and early confidence.",
          highlights: ["Language Expansion", "Social Interaction", "Fine Motor Play"],
        },
        {
          label: "Ages 4–5",
          title: "Kindergarten / FS2",
          description: "Structured phonics, numeracy concepts, inquiry investigations, and independent problem-solving.",
          highlights: ["Phonics Mastery", "Counting & Shapes", "Inquiry Projects"],
        },
        {
          label: "Ages 5–6",
          title: "Transition to Primary (Grade 1)",
          description: "Confident step into Pearson Edexcel iPrimary with established literacy, numeracy, and classroom independence.",
          highlights: ["iPrimary Bridge", "Classroom Independence", "Lifelong Love of Learning"],
        },
      ]}
      quote={{
        text: "Young children learn best through purposeful play, exploration, and meaningful experiences in a safe, nurturing, and stimulating environment.",
        author: "Early Years Department",
      }}
      nextLink={{
        href: "/primary-school",
        label: "Primary School (Grades 1–6)",
        description: "Discover how Pearson Edexcel iPrimary builds upon early foundations with academic rigour and inquiry.",
      }}
    />
  )
}
