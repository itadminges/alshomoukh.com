"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const programs = [
  {
    title: "Kindergarten",
    description: "Foundation Stage Curriculum - Ages 3-4",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=80",
    color: "from-amber-400/20 to-orange-400/20",
  },
  {
    title: "Primary School",
    description: "Key Stage 1 & 2 - Grades 1-6",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80",
    color: "from-blue-400/20 to-cyan-400/20",
  },
  {
    title: "Lower Secondary",
    description: "Key Stage 3 - Grades 7-8",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop&q=80",
    color: "from-emerald-400/20 to-teal-400/20",
  },
  {
    title: "Upper Secondary",
    description: "IGCSE & IAL - Grades 9-12",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=80",
    color: "from-violet-400/20 to-purple-400/20",
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
      className="relative py-20 md:py-28 bg-white overflow-hidden"
    >
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="reveal opacity-0 translate-y-4 transition-all duration-500 delay-100 font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-primary tracking-tight uppercase">
            Academic Programs
          </h2>
          <div className="reveal opacity-0 scale-x-0 transition-all duration-500 delay-200 mt-5 flex justify-center">
            <div className="w-12 h-0.5 bg-secondary" />
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {programs.map((program, index) => (
            <Link
              key={program.title}
              href="#"
              className={`reveal opacity-0 translate-y-4 transition-all duration-500 group`}
              style={{ transitionDelay: `${200 + index * 75}ms` }}
            >
              <article className="relative h-full overflow-hidden transition-all duration-300 hover:-translate-y-1">
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                {/* Content - Overlay on image */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-semibold text-white text-base md:text-lg mb-1">
                    {program.title}
                  </h3>
                  <span className="text-secondary text-xs font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* See All Button */}
        <div className="reveal opacity-0 translate-y-4 transition-all duration-500 delay-500 flex justify-center">
          <Button
            variant="outline"
            className="group border-primary/30 text-primary hover:bg-primary hover:text-white hover:border-primary h-11 px-8 text-sm font-medium tracking-wider uppercase transition-all duration-200"
          >
            See All
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Button>
        </div>
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) scaleX(1) !important;
        }
      `}</style>
    </section>
  )
}
