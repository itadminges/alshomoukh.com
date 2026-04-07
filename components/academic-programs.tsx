"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, GraduationCap, Microscope, Puzzle } from "lucide-react"

const programs = [
  {
    title: "Kindergarten",
    division: "Early Years Foundation",
    description: "Focusing on physical, social, and emotional development in a nurturing environment.",
    image: "/kindergarten_premium.png",
    href: "/kindergarten",
    icon: Puzzle
  },
  {
    title: "Primary School",
    division: "Key Stage 1 & 2",
    description: "Building strong foundations in core subjects with a focus on holistic inquiry-based learning.",
    image: "/academics_premium.png",
    href: "/primary-school",
    icon: BookOpen
  },
  {
    title: "Lower Secondary",
    division: "Key Stage 3",
    description: "Transitioning to more specialized subjects while fostering independence and critical thinking.",
    image: "https://www.alshomoukh.com:443/uploads/curriculum/20200805164402-2020-08-05curriculum164359.jpg",
    href: "/lower-secondary",
    icon: Microscope
  },
  {
    title: "Upper Secondary",
    division: "Key Stage 4 & 5",
    description: "Preparing students for international Edexcel examinations and higher education pathways.",
    image: "https://www.alshomoukh.com:443/uploads/curriculum/20200805144412-2020-08-05curriculum144407.jpg",
    href: "/upper-secondary",
    icon: GraduationCap
  },
]

export function AcademicPrograms() {
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
      id="academics"
      className="relative py-24 md:py-32 bg-[#FDFCF9] overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#0B3B5B]/5 blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/5 blur-[100px] -z-10" />

      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="reveal opacity-0 transition-all duration-700 delay-100 flex items-center gap-3 mb-6">
            <span className="w-12 h-[2px] bg-secondary" />
            <span className="text-secondary font-bold tracking-[0.3em] uppercase text-[12px] md:text-[14px]">
              Our Divisions
            </span>
          </div>
          
          <h2 className="reveal opacity-0 transition-all duration-700 delay-200 font-serif text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.1] mb-8 tracking-tight">
            Academic <span className="text-secondary italic">Excellence</span> Across All Levels
          </h2>
          
          <p className="reveal opacity-0 transition-all duration-700 delay-300 text-[16px] md:text-[18px] text-primary/70 leading-[1.8] font-medium max-w-2xl">
            From the earliest steps in learning to advanced pre-university preparation, our academic programs are designed to inspire curiosity and cultivate lifelong success.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {programs.map((program, index) => (
            <Link
              key={program.title}
              href={program.href}
              className="reveal opacity-0 transition-all duration-700 group block"
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <article className="relative bg-white h-full shadow-premium hover:shadow-strong transition-all duration-500 overflow-hidden group-hover:-translate-y-2 flex flex-col">
                {/* Image Container with Label */}
                <div className="relative aspect-[4/5] overflow-hidden shrink-0">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Divisional Tag */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-extrabold tracking-widest text-primary uppercase z-10">
                    {program.division}
                  </div>

                  {/* Icon Overlay (On Hover) */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-16 h-16 bg-secondary text-white flex items-center justify-center rounded-full transform scale-50 group-hover:scale-100 transition-transform duration-500 delay-100">
                      <program.icon className="h-8 w-8" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow border-b-4 border-transparent group-hover:border-secondary transition-all">
                  <h3 className="font-serif text-2xl text-primary mb-4 tracking-tight group-hover:text-secondary transition-colors leading-tight">
                    {program.title}
                  </h3>
                  <p className="text-[14px] text-primary/60 leading-[1.8] mb-8 font-medium">
                    {program.description}
                  </p>
                  
                  <div className="mt-auto flex items-center gap-3 text-secondary font-bold text-[12px] tracking-widest uppercase transition-all duration-300">
                    <span className="relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-secondary after:transform after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:origin-left">
                      Learn More
                    </span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Global CTA */}
        <div className="reveal opacity-0 transition-all duration-700 delay-600 flex flex-col md:flex-row items-center justify-between gap-8 p-10 bg-primary text-white relative overflow-hidden">
          <div className="relative z-10 text-center md:text-left">
            <h3 className="font-serif text-2xl md:text-3xl mb-2 italic">Curious about our curriculum?</h3>
            <p className="text-white/70 text-[15px] font-medium">Discover how we integrate international excellence with local values.</p>
          </div>
          <Button
            variant="outline"
            className="relative z-10 bg-transparent border-white/30 text-white hover:bg-white hover:text-primary h-14 px-12 text-[13px] font-extrabold tracking-widest uppercase rounded-none transition-all duration-500"
          >
            Explore Curriculum
          </Button>
          {/* Decorative design in CTA box */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 -z-0" />
        </div>
      </div>
    </section>
  )
}
