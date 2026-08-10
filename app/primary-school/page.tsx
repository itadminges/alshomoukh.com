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

export default function PrimaryPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="Primary School" 
        subtitle="Nurturing young minds through a balanced and engaging curriculum that builds a solid foundation for future success."
      />

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-bold text-3xl text-navy mb-8 tracking-tight uppercase">
              Primary Curriculum
            </h2>
            <div className="text-lg text-navy/70 leading-[1.8] font-medium mb-12 italic space-y-6">
              <p>
                At Al Shomoukh International Private School, our Primary Department follows the Pearson Edexcel iPrimary Curriculum, a world-class British international programme that provides a strong academic foundation while nurturing curiosity, creativity, confidence, and a lifelong love of learning. Designed for children aged 5–11, the curriculum combines high academic standards with an international perspective, preparing pupils for a seamless progression to iLowerSecondary, International GCSEs, and beyond. The programme is written with international learners in mind and supports the development of English language proficiency alongside academic excellence.
              </p>
              <p>
                Our curriculum offers a broad and balanced education across English, Mathematics, Science, Computing, Global Citizenship, Art, Music, Physical Education, French and Arabic and Islamic Studies in accordance with the requirements of the Ministry of Education.
              </p>
              <p>
                Through engaging, inquiry-based learning experiences, pupils develop critical thinking, creativity, collaboration, communication, and problem-solving skills that prepare them for success in an ever-changing global society. Learning is carefully structured to build knowledge progressively, enabling every child to develop confidence, independence, and resilience.
              </p>
              <p>
                Teaching is enriched through innovative learning technologies, practical investigations, collaborative projects, and real-world applications that encourage pupils to become active participants in their own learning. Continuous formative assessment, together with internationally benchmarked assessments, allows teachers to monitor progress closely, personalise learning, and ensure every pupil reaches their full potential.
              </p>
              <p>
                At the heart of our Primary Curriculum is our commitment to educating the whole child. Alongside academic achievement, we place equal importance on character development, wellbeing, leadership, and global citizenship. Through a supportive and inclusive learning environment, pupils are encouraged to demonstrate respect, responsibility, integrity, empathy, and perseverance, empowering them to become confident, compassionate, and responsible global citizens ready to thrive in the future.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
