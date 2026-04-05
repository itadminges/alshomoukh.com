"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

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
      { threshold: 0.2 }
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-muted/50 overflow-hidden"
    >
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="reveal opacity-0 translate-y-4 transition-all duration-500 font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-primary tracking-tight uppercase">
            A Truly International Community
          </h2>
          <div className="reveal opacity-0 scale-x-0 transition-all duration-500 delay-100 mt-5 flex justify-center">
            <div className="w-12 h-0.5 bg-secondary" />
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="reveal opacity-0 -translate-x-8 transition-all duration-500 delay-200">
            <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80"
                alt="International community"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="reveal opacity-0 translate-x-8 transition-all duration-500 delay-300">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-primary mb-5">
              Students from 50+ Nationalities
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Our diverse community creates a truly international learning environment. With students from over 50 countries including the USA, UK, Canada, Germany, India, Pakistan, Egypt, and many more, we foster cultural understanding and global perspectives every day.
            </p>

            {/* Buttons */}
            <div className="flex gap-3 flex-wrap">
              <Button className="group bg-secondary text-white hover:bg-secondary/95 h-11 px-6 text-sm font-semibold tracking-wider uppercase transition-all duration-200">
                Learn More
              </Button>
              <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary hover:text-white h-11 px-6 text-sm font-medium tracking-wider uppercase transition-all duration-200">
                Book a Tour
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateX(0) scaleX(1) !important;
        }
      `}</style>
    </section>
  )
}
