"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Globe, Users, Lightbulb, Trophy, Target } from "lucide-react"

const strengths = [
  {
    icon: ShieldCheck,
    title: "Academic Excellence",
    description: "Curriculum designed to meet global standards with rigorous academic inquiry."
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Preparing students to be responsible global citizens in a diverse world."
  },
  {
    icon: Users,
    title: "Supportive Community",
    description: "A nurturing environment where every student is known, valued, and inspired."
  },
  {
    icon: Lightbulb,
    title: "Inquiry-Based Learning",
    description: "Encouraging curiosity and critical thinking through hands-on exploration."
  },
  {
    icon: Trophy,
    title: "Proven Results",
    description: "Consistent success in international examinations and university placements."
  },
  {
    icon: Target,
    title: "Holistic Development",
    description: "Balancing academic rigor with arts, athletics, and social-emotional growth."
  }
]

export function CommunitySection() {
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

    const elements = sectionRef.current?.querySelectorAll(".reveal, .reveal-up")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#F8F9FA] -skew-y-3 origin-top-left -z-10" />

      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Header & Main Info */}
          <div className="lg:col-span-5 sticky top-32">
            <div className="reveal-left opacity-0 transition-all duration-700 delay-100 flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-secondary" />
              <span className="text-secondary font-bold tracking-[0.3em] uppercase text-[12px] md:text-[14px]">
                Why Choose Us
              </span>
            </div>
            
            <h2 className="reveal opacity-0 transition-all duration-700 delay-200 font-serif text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.1] mb-8 tracking-tight">
              A Legacy of <span className="text-secondary italic">Excellence</span> & Innovation
            </h2>
            
            <p className="reveal opacity-0 transition-all duration-700 delay-300 text-[16px] md:text-[18px] text-primary/70 leading-[1.8] mb-10 font-medium max-w-xl">
              Al Shomoukh International School stands as a beacon of academic distinction. We combine traditional values with modern pedagogical approaches to create a uniquely powerful learning experience.
            </p>

            <div className="reveal opacity-0 transition-all duration-700 delay-400">
              <Button className="bg-primary text-white hover:bg-primary/90 h-14 px-12 text-[13px] font-extrabold tracking-widest uppercase rounded-none transition-all shadow-lg hover:shadow-xl group">
                Discover Our Story
                <Globe className="ml-3 h-4 w-4 transition-transform group-hover:rotate-12" />
              </Button>
            </div>
          </div>

          {/* Strengths Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 md:gap-8">
            {strengths.map((item, index) => (
              <div 
                key={item.title}
                className="reveal opacity-0 transition-all duration-700 p-8 bg-white shadow-premium hover:shadow-strong transition-all duration-500 border-l-4 border-transparent hover:border-secondary group"
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-muted/50 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="font-serif text-xl text-primary mb-3 font-bold tracking-tight group-hover:text-secondary transition-colors">
                  {item.title}
                </h3>
                <p className="text-[14px] text-primary/60 leading-[1.7] font-medium">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

