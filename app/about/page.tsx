"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Target, CheckCircle, BookOpen, Users, Heart } from "lucide-react"
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

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="About Us" 
        subtitle="Discover our commitment to providing world-class international education that fosters critical thinking and cultural integrity."
      />

      {/* Welcome Section */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-bold text-3xl text-navy mb-8 tracking-tight uppercase">
              Welcome to Al Shomoukh International School
            </h2>
            <div className="text-lg text-navy/70 leading-[1.8] space-y-6 font-medium">
              <p>
                It is my pleasure to welcome you to one of the finest educational institutions in the region. Choosing the right school for your child is one of the most important decisions a parent can make.
              </p>
              <p>
                At Al Shomoukh International School, we are proud to serve over 900 students and their families. We remain deeply committed to ensuring that every student receives exceptional care, high-quality education, and the support needed to thrive.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-ivory/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16">
          <FadeIn x={-40}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gold/10 rounded-none border-l-4 border-gold">
                <Target className="w-8 h-8 text-gold" />
              </div>
              <h2 className="font-bold text-2xl text-navy tracking-tight uppercase">Vision</h2>
            </div>
            <p className="text-lg text-navy/70 leading-[1.8] font-medium italic">
              To be a community of lifelong learners who demonstrate the knowledge, skills, and values required for productive global citizenship.
            </p>
          </FadeIn>

          <FadeIn x={40} delay={0.2}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gold/10 rounded-none border-l-4 border-gold">
                <CheckCircle className="w-8 h-8 text-gold" />
              </div>
              <h2 className="font-bold text-2xl text-navy tracking-tight uppercase">Mission</h2>
            </div>
            <div className="text-lg text-navy/70 leading-[1.8] font-medium space-y-4">
              <p>At Al Shomoukh International School, we are a community of learners. We RISE:</p>
              <ul className="space-y-4">
                <li className="flex gap-3"><span className="text-gold font-bold uppercase tracking-wider min-w-[100px]">Respect</span> – We encourage kindness, understanding, and tolerance for others and ourselves.</li>
                <li className="flex gap-3"><span className="text-gold font-bold uppercase tracking-wider min-w-[100px]">Integrity</span> – Honesty and responsibility are at the heart of who we are.</li>
                <li className="flex gap-3"><span className="text-gold font-bold uppercase tracking-wider min-w-[100px]">Success</span> – We nurture the holistic development of every member of our community.</li>
                <li className="flex gap-3"><span className="text-gold font-bold uppercase tracking-wider min-w-[100px]">Excellence</span> – We maintain high expectations, support exploration, and promote critical thinking.</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gold/10 rounded-none border-l-4 border-gold">
                <BookOpen className="w-8 h-8 text-gold" />
              </div>
              <h2 className="font-bold text-3xl text-navy tracking-tight uppercase">Our Story</h2>
            </div>
            <div className="text-lg text-navy/70 leading-[1.8] space-y-6 font-medium">
              <p>
                Al Shomoukh International School is a homegrown educational brand and the lifelong vision of its founder, Honourable Sheikh Salim bin Hamood Al Hashmi.
              </p>
              <p>
                The school was established by Global Education Services (GES) to provide premium education based on the UK National Curriculum for both Omani and international students.
              </p>
              <p>
                Since its launch in 2015, the school has been committed to combining the warmth of a close-knit community with the highest standards of international education. Today, Al Shomoukh International School provides quality education from Kindergarten to Grade 12, welcoming students from around the world.
              </p>
              <p>
                Our leadership team is made up of experienced international educators and administrators who share a passion for excellence in teaching and learning.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Community & Giving Back */}
      <section className="py-24 bg-navy text-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none overflow-hidden">
          <div className="text-[20vw] font-bold text-gold translate-x-1/2">SIS</div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-20 relative z-10">
          <FadeIn x={-30}>
            <div className="flex items-center gap-4 mb-8">
              <Users className="w-10 h-10 text-gold" />
              <h2 className="font-bold text-2xl tracking-tight uppercase">Community Engagement</h2>
            </div>
            <p className="text-lg text-ivory/80 leading-[1.8] mb-8 font-medium">
              The Al Shomoukh International School Community Impact Statement reflects our strong relationship with Oman, our home for many years.
            </p>
            <p className="text-lg text-ivory/80 leading-[1.8] mb-8 font-medium">
              Our training programmes provide valuable opportunities for both the local and international community. Our qualified and professional staff are always pleased to share their knowledge and experience.
            </p>
            <p className="text-gold font-bold tracking-widest uppercase text-xs">Contact us at: info@alshomoukh.com</p>
          </FadeIn>

          <FadeIn x={30} delay={0.2}>
            <div className="flex items-center gap-4 mb-8">
              <Heart className="w-10 h-10 text-gold" />
              <h2 className="font-bold text-2xl tracking-tight uppercase">Giving Back</h2>
            </div>
            <p className="text-lg text-ivory/80 leading-[1.8] mb-8 font-medium">
              Giving back to the community plays an essential role in shaping compassionate, socially responsible young people. We believe that educating students about environmental and social responsibility empowers them to make a positive difference in the world.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Diverse Team */}
      <section className="py-32 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn>
            <h2 className="font-bold text-3xl text-navy mb-8 tracking-tight uppercase">
              Our Diverse Team
            </h2>
            <p className="text-lg text-navy/70 leading-[1.8] font-medium italic">
              Our staff represent a wide range of international backgrounds, contributing to a rich and globally minded school culture.
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
