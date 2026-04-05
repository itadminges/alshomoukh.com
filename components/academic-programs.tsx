"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const programs = [
  {
    title: "Kindergarten",
    description: "Early Years Foundation Stage (EYFS) - A nurturing and play-based learning environment for young learners.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80",
    href: "/kindergarten"
  },
  {
    title: "Primary School",
    description: "Key Stages 1 & 2 | Grades 1–6 - A strong academic foundation focused on literacy, numeracy, creativity, and personal development.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=80",
    href: "/primary-school"
  },
  {
    title: "Lower Secondary",
    description: "Key Stage 3 | Grades 7–8 - A balanced curriculum designed to prepare students for advanced academic pathways.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80",
    href: "/lower-secondary"
  },
  {
    title: "Upper Secondary",
    description: "Edexcel International | Grades 9–12 - Preparing students for IGCSE, International A Levels, and future university success.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=80",
    href: "/upper-secondary"
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

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="academics"
      className="relative py-24 bg-white overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="reveal opacity-0 translate-y-4 transition-all duration-500 delay-100 font-bold text-3xl md:text-3xl text-primary tracking-widest uppercase">
            Academic Programs
          </h2>
          <div className="reveal opacity-0 scale-x-0 transition-all duration-500 delay-200 mt-6 flex justify-center">
            <div className="w-24 h-[1px] bg-secondary" />
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-20">
          {programs.map((program, index) => (
            <Link
              key={program.title}
              href={program.href}
              className="reveal opacity-0 translate-y-8 transition-all duration-700 group block"
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <article className="flex flex-col h-full">
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden mb-6">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-bold text-primary text-xl mb-3 tracking-tight">
                    {program.title}
                  </h3>
                  <p className="text-[14px] text-primary/70 leading-[1.6] mb-6 font-medium line-clamp-3">
                    {program.description}
                  </p>
                  <div className="flex items-center gap-2 text-secondary font-bold text-[11px] tracking-widest uppercase group-hover:gap-4 transition-all duration-300">
                    View
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* See All Button */}
        <div className="reveal opacity-0 translate-y-4 transition-all duration-500 delay-500 flex justify-center">
          <Button
            variant="outline"
            className="group border-primary/20 text-primary hover:bg-primary hover:text-white h-11 px-10 text-[12px] font-bold tracking-widest uppercase rounded-none transition-all duration-200"
          >
            See All
            <ArrowRight className="ml-3 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
