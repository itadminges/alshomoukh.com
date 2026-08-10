"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
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

export default function LowerSecondaryPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="iLowerSecondary"
        subtitle="Bridging the gap between primary and upper secondary with a rigorous, balanced, and inspiring academic programme."
      />

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-bold text-3xl text-navy mb-8 tracking-tight uppercase border-l-4 border-gold pl-6">
              Pearson Edexcel iLowerSecondary Curriculum
            </h2>
            <div className="text-lg text-navy/70 leading-[1.8] font-medium mb-12 italic space-y-6">
              <p>
                At Al Shomoukh International Private School, students in Grades 7 and 8 follow the Pearson Edexcel iLowerSecondary Curriculum, an internationally recognised British programme designed for learners aged 11–14. The curriculum provides a seamless transition from iPrimary and prepares students for the academic rigour of Pearson Edexcel International GCSE qualifications in Grades 9 and 10. Built upon the latest UK National Curriculum and adapted for international learners, the programme develops deep subject knowledge, critical thinking, creativity, and independent learning while supporting students whose first language is not English.
              </p>
              <p>
                Our iLowerSecondary curriculum offers a broad and balanced education through English, Mathematics, Science, Computing, Global Citizenship, Physical Education, Art, Music, French and Arabic and Islamic Studies in accordance with the requirements of the Ministry of Education. Learning experiences are designed to challenge students academically while encouraging enquiry, collaboration, communication, problem-solving, and innovation. As students progress through Grades 7 and 8, they develop the confidence, resilience, and analytical skills required for future academic success and lifelong learning.
              </p>
              <p>
                Teaching is supported by high-quality Pearson resources, inquiry-based learning, practical investigations, collaborative projects, and the purposeful integration of educational technology. Regular formative assessments, together with Pearson Progress Tests and internationally benchmarked Achievement Tests, enable teachers to monitor student progress, personalise learning, and ensure every learner is well prepared for the transition into International GCSE courses.
              </p>
              <p>
                Alongside academic excellence, our iLowerSecondary programme places a strong emphasis on developing well-rounded young people. Through leadership opportunities, global citizenship, wellbeing initiatives, and character education, students are encouraged to become responsible, respectful, compassionate, and confident individuals who are prepared to contribute positively to their local and global communities. By fostering intellectual curiosity, resilience, and a growth mindset, we equip every learner with the knowledge, skills, and values needed to thrive in an increasingly interconnected world.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
