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

export default function KindergartenPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="Kindergarten" 
        subtitle="A nurturing foundation where curiosity meets discovery, shaping the early years of lifelong learners."
        quote={{
          text: "Tell me and I forget, teach me and I may remember, involve me and I learn.",
          author: "Benjamin Franklin"
        }}
      />

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-bold text-3xl text-navy mb-8 tracking-tight uppercase">
              Early Years Foundation Stage (EYFS)
            </h2>
            <div className="text-lg text-navy/70 leading-[1.8] font-medium mb-12 italic space-y-6">
              <p>
                At Al Shomoukh International Private School, our Kindergarten Department follows the Early Years Foundation Stage (EYFS) Curriculum, a world-renowned British framework that provides children aged 3–5 with the strongest possible foundation for lifelong learning. The EYFS curriculum recognises that young children learn best through purposeful play, exploration, and meaningful experiences, fostering confidence, curiosity, creativity, and independence in a safe, nurturing, and stimulating environment. Every learning experience is carefully designed to support each child&apos;s individual development while preparing them for a successful transition into Primary education. The EYFS framework is built around seven interconnected areas of learning and development, ensuring that every child develops academically, socially, emotionally, and physically.
              </p>
              <p>
                Our Kindergarten curriculum provides a rich and engaging programme centred on the three prime areas of learning—Communication and Language, Personal, Social and Emotional Development, and Physical Development—which form the foundation for children&apos;s future success. These are complemented by the four specific areas of learning: Literacy, Mathematics, Understanding the World, and Expressive Arts and Design. Through carefully planned play-based learning, inquiry, storytelling, outdoor exploration, creative activities, and practical experiences, children develop essential early literacy and numeracy skills while building confidence, resilience, problem-solving abilities, collaboration, and a genuine love of learning.
              </p>
              <p>
                Our experienced Early Years teachers create warm, inclusive, and inspiring classrooms where every child feels valued, supported, and encouraged to thrive. Learning is personalised through continuous observation, formative assessment, and strong partnerships with parents, enabling teachers to celebrate progress and respond to each child&apos;s individual needs and interests. This child-centred approach ensures that every learner develops the knowledge, skills, and confidence needed for a successful transition into the Primary curriculum.
              </p>
              <p>
                Beyond academic development, our EYFS programme places equal importance on nurturing children&apos;s wellbeing, character, and personal growth. We encourage every child to develop independence, kindness, respect, resilience, and a sense of responsibility while fostering curiosity about the world around them. By combining outstanding early years practice with a caring and supportive environment, we inspire confident, happy, and capable learners who are well prepared for the next stage of their educational journey and equipped with the foundations for lifelong success.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
