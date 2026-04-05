"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

export function IntroSection() {
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
      className="relative py-20 md:py-28 bg-background overflow-hidden"
    >
      <div className="relative mx-auto max-w-3xl px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h2 className="reveal opacity-0 translate-y-4 transition-all duration-500 delay-100 font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-primary leading-tight tracking-tight">
          Welcome to Al Shomoukh International School
        </h2>

        {/* Decorative Line */}
        <div className="reveal opacity-0 scale-x-0 transition-all duration-500 delay-200 mt-6 flex justify-center">
          <div className="w-12 h-0.5 bg-secondary" />
        </div>

        {/* Description */}
        <p className="reveal opacity-0 translate-y-4 transition-all duration-500 delay-300 mt-8 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          As parents, selecting a school for your child is one of the most important decisions you will ever make. At Al Shomoukh International School, we open our doors to over 900 students and their families, remaining steadfast and deeply committed to ensuring that every day, every student receives the extraordinary care that is our hallmark.
        </p>

        {/* CTA Button */}
        <div className="reveal opacity-0 translate-y-4 transition-all duration-500 delay-400 mt-10">
          <Button
            size="lg"
            className="group bg-secondary text-white hover:bg-secondary/95 h-12 px-8 text-sm font-semibold tracking-wider uppercase transition-all duration-200 hover:shadow-lg"
          >
            Get Started
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
