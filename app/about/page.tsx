"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useEffect, useRef } from "react"
import { CheckCircle, Target, BookOpen, Users, Heart } from "lucide-react"

export default function AboutPage() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-white" ref={sectionRef}>
      <Navbar />

      {/* Hero Header */}
      <section className="bg-primary py-32 mt-[76px]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
          <h1 className="reveal opacity-0 translate-y-8 transition-all duration-700 font-bold text-5xl md:text-6xl text-white tracking-tight uppercase">
            About Us
          </h1>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="reveal opacity-0 translate-y-4 transition-all duration-500 font-bold text-3xl text-primary mb-8 tracking-tight">
            Welcome to Al Shomoukh International School
          </h2>
          <div className="reveal opacity-0 translate-y-4 transition-all duration-500 delay-200 text-lg text-primary/70 leading-[1.8] space-y-6 font-medium">
            <p>
              It is my pleasure to welcome you to one of the finest educational institutions in the region. Choosing the right school for your child is one of the most important decisions a parent can make.
            </p>
            <p>
              At Al Shomoukh International School, we are proud to serve over 900 students and their families. We remain deeply committed to ensuring that every student receives exceptional care, high-quality education, and the support needed to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="reveal opacity-0 -translate-x-8 transition-all duration-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-secondary/10 rounded-none">
                <Target className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="font-bold text-3xl text-primary tracking-tight">Vision</h2>
            </div>
            <p className="text-lg text-primary/70 leading-[1.8] font-medium">
              To be a community of lifelong learners who demonstrate the knowledge, skills, and values required for productive global citizenship.
            </p>
          </div>

          <div className="reveal opacity-0 translate-x-8 transition-all duration-700 delay-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-secondary/10 rounded-none">
                <CheckCircle className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="font-bold text-3xl text-primary tracking-tight">Mission</h2>
            </div>
            <div className="text-lg text-primary/70 leading-[1.8] font-medium space-y-4">
              <p>At Al Shomoukh International School, we are a community of learners. We RISE:</p>
              <ul className="space-y-4">
                <li className="flex gap-3"><span className="text-secondary font-bold">Respect</span> – We encourage kindness, understanding, and tolerance for others and ourselves.</li>
                <li className="flex gap-3"><span className="text-secondary font-bold">Integrity</span> – Honesty and responsibility are at the heart of who we are.</li>
                <li className="flex gap-3"><span className="text-secondary font-bold">Success</span> – We nurture the holistic development of every member of our community.</li>
                <li className="flex gap-3"><span className="text-secondary font-bold">Excellence</span> – We maintain high expectations, support exploration, and promote critical thinking.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-secondary/10 rounded-none">
                <BookOpen className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="font-bold text-4xl text-primary tracking-tight uppercase">Our Story</h2>
            </div>
            <div className="text-lg text-primary/70 leading-[1.8] space-y-6 font-medium">
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
          </div>
        </div>
      </section>

      {/* Community & Giving Back */}
      <section className="py-24 bg-primary text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="reveal opacity-0 -translate-x-8 transition-all duration-700">
            <div className="flex items-center gap-4 mb-8">
              <Users className="w-10 h-10 text-secondary" />
              <h2 className="font-bold text-3xl tracking-tight uppercase">Community Engagement</h2>
            </div>
            <p className="text-lg text-white/80 leading-[1.8] mb-8 font-medium">
              The Al Shomoukh International School Community Impact Statement reflects our strong relationship with Oman, our home for many years.
            </p>
            <p className="text-lg text-white/80 leading-[1.8] mb-8 font-medium">
              Our training programmes provide valuable opportunities for both the local and international community. Our qualified and professional staff are always pleased to share their knowledge and experience.
            </p>
            <p className="text-secondary font-bold">Contact us at: info@alshomoukh.com</p>
          </div>

          <div className="reveal opacity-0 translate-x-8 transition-all duration-700 delay-100">
            <div className="flex items-center gap-4 mb-8">
              <Heart className="w-10 h-10 text-secondary" />
              <h2 className="font-bold text-3xl tracking-tight uppercase">Giving Back</h2>
            </div>
            <p className="text-lg text-white/80 leading-[1.8] mb-8 font-medium">
              Giving back to the community plays an essential role in shaping compassionate, socially responsible young people. We believe that educating students about environmental and social responsibility empowers them to make a positive difference in the world.
            </p>
          </div>
        </div>
      </section>

      {/* Diverse Team */}
      <section className="py-24 mb-20 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="reveal opacity-0 translate-y-4 transition-all duration-500 font-bold text-3xl text-primary mb-8 tracking-tight uppercase">
            Our Diverse Team
          </h2>
          <p className="reveal opacity-0 translate-y-4 transition-all duration-500 delay-200 text-lg text-primary/70 leading-[1.8] font-medium">
            Our staff represent a wide range of international backgrounds, contributing to a rich and globally minded school culture.
          </p>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translate(0) !important;
        }
      `}</style>
    </main>
  )
}
