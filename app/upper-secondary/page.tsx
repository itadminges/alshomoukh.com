"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { GraduationCap, Award, Building, BookMarked, ArrowRight } from "lucide-react"
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

export default function UpperSecondaryPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="Upper Secondary" 
        subtitle="Advanced academic pathways designed to prepare students for global higher education and professional success."
      />

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-bold text-3xl text-navy mb-8 tracking-tight uppercase border-l-4 border-gold pl-6">
              Edexcel International GCSE (IGCSE)
            </h2>
            <p className="text-gold font-bold tracking-widest uppercase text-xs mb-4">Grades 9 & 10</p>
            <p className="text-lg text-navy/70 leading-[1.8] font-medium mb-12 italic">
              At Al Shomoukh International Private School we provide a very broad range of IGCSE subjects to suit the needs and abilities of our students. The school follows the Pearson’s IGCSE Edexcel curriculum. All courses follow the Edexcel IGCSE Pearson’s Curriculum and includes: The Core Curriculum subjects are Mathematics, English Language, A Triple Science (Biology, Physics & Chemistry).
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <FadeIn x={-30} delay={0.2}>
              <div className="bg-navy p-10 text-white h-full relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>
                <h4 className="flex gap-3 items-center font-bold text-xl mb-8 uppercase tracking-wider relative z-10">
                  <Award className="w-6 h-6 text-gold" /> Core Subjects
                </h4>
                <ul className="space-y-4 font-medium text-ivory/70 relative z-10">
                  {["Mathematics", "English Language", "Triple Science (Biology, Physics, Chemistry)"].map((sub, i) => (
                    <li key={i} className="flex items-center gap-3">
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn x={30} delay={0.3}>
              <div className="bg-ivory/30 p-10 border border-navy/5 h-full group">
                <h4 className="flex gap-3 items-center font-bold text-xl text-navy mb-8 uppercase tracking-wider">
                  <BookMarked className="w-6 h-6 text-gold" /> Additional Options
                </h4>
                <div className="grid grid-cols-1 gap-y-3 font-medium text-navy/70">
                  {[
                    "Economics", 
                    "Global Citizenship", 
                    "English Literature", 
                    "Business Studies", 
                    "Applied ICT", 
                    "Physical Education",
                    "Art",
                    "Arabic Language"
                  ].map((sub, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full shrink-0"></div>
                      {sub}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="mb-32 text-center">
              <p className="text-navy/70 mb-4 font-medium text-sm">For further information related to the Edexcel IGCSE Curriculum, please click on the link below:</p>
              <Button size="lg" asChild className="bg-gold text-white hover:bg-gold/90 transition-all uppercase tracking-[0.25em] font-bold text-[10px] rounded-none h-14 px-12 shadow-lg hover:shadow-gold/20">
                  <a href="https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses-and-edexcel-certificates.html" target="_blank" rel="noopener noreferrer">
                    Pearson Edexcel IGCSE <ArrowRight className="ml-3 w-4 h-4" />
                  </a>
              </Button>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="bg-white p-12 border-t-8 border-navy shadow-sm mb-20 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-navy/5 -translate-y-1/2 translate-x-1/2 rotate-45"></div>
              <GraduationCap className="mx-auto w-16 h-16 text-gold mb-8" />
              <h3 className="font-bold text-2xl text-navy mb-4 tracking-tight uppercase">
                International Advanced Levels (IAL)
              </h3>
              <p className="text-gold font-bold tracking-widest uppercase text-xs mb-8">Grades 11 & 12</p>
              
              <div className="max-w-2xl mx-auto mb-12">
                <p className="text-lg text-navy/70 leading-relaxed font-medium mb-6">
                  At Al Shomoukh International Private School we provide a very broad range of A-Levels subjects to suit the needs and abilities of our students. The school follows the Pearson’s IA-Levels Edexcel Curriculum.
                </p>
                <div className="text-left text-navy/70 text-sm font-medium mb-6 max-w-md mx-auto">
                  <p className="mb-2 font-bold text-navy">Students are expected to select at least four subjects (AS Levels) from:</p>
                  <ul className="list-disc pl-5 mb-4 grid grid-cols-2 gap-2">
                    <li>Mathematics</li><li>English language</li><li>English Literature</li><li>Business Studies</li><li>Economics</li><li>Physics</li><li>Chemistry</li><li>Biology</li><li>Applied ICT</li>
                  </ul>
                  <p className="text-xs italic text-center text-navy/60">Please note – Students should pass at least 3 subjects from the 4 subjects selected in Grade 11 to progress to Grade 12.</p>
                </div>
                <div className="h-px w-20 bg-gold/30 mx-auto mb-8"></div>
              </div>

              <p className="text-navy/70 mb-4 font-medium text-sm">For further information related to the Edexcel IAL Curriculum, please click on the link below:</p>
              <Button variant="outline" asChild className="border-navy text-navy hover:bg-navy hover:text-white transition-all uppercase tracking-[0.2em] font-bold text-[10px] rounded-none h-12 px-10">
                  <a href="https://qualifications.pearson.com/en/qualifications/edexcel-international-advanced-levels.html" target="_blank" rel="noopener noreferrer">
                    Edexcel IAL Curriculum
                  </a>
              </Button>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="bg-navy p-12 text-white relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gold"></div>
              <div className="flex flex-col md:flex-row gap-10 items-center relative z-10">
                <div className="p-5 bg-gold/10 text-gold rounded-full border border-gold/20 shrink-0">
                  <Building className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-4 tracking-tight uppercase">Omani General Education Diploma (GED)</h3>
                  <p className="text-gold font-bold tracking-widest uppercase text-xs mb-4">Grades 11 & 12</p>
                  <div className="text-ivory/70 leading-[1.8] font-medium text-sm space-y-4">
                    <p>
                      Oman’s General Education Diploma (GED) is available to students in Grade 11 & 12 and is equivalent to the International A-Levels program. The curriculum is developed and monitored by the Ministry of Education. The Omani GED curriculum at Al Shomoukh International Private School inspires students to be compelling individuals who are curious about all areas of learning. Our highly qualified specialist teachers will provide students with the skills, competencies and knowledge to be confident individuals who will continue pursuing their further education. Al Shomoukh International Private School students have an option to study for the GED from Grade 10.
                    </p>
                    <p>
                      <strong>Grade 10 Core:</strong> Mathematics, English, Triple Science (Biology, Physics & Chemistry), ICT, Physical Education, Music and Art. Compulsory for Arabic speaking learners: Arabic, Islamic and Arabic Social Studies.
                    </p>
                    <p>
                      <strong>Grade 11 & 12 Core:</strong> Mathematics, English, Science (Biology, physics & Chemistry) – students must select at least one science. Options: ICT, Physical Education, Music, Art, Business. Compulsory for Arabic speaking learners: Arabic, Islamic and Arabic Social Studies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
