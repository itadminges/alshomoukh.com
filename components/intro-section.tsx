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
      className="relative py-24 bg-white overflow-hidden"
    >
      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h2 className="reveal opacity-0 translate-y-4 transition-all duration-500 delay-100 font-bold text-3xl md:text-3xl text-[#0B3B5B] leading-[1.2] tracking-tight mb-8">
          Join our global community of learners
        </h2>

        {/* Description */}
        <p className="reveal opacity-0 translate-y-4 transition-all duration-500 delay-300 text-[15px] md:text-[16px] text-[#0B3B5B]/70 leading-[1.8] max-w-3xl mx-auto font-medium">
          At Al Shomoukh International School, we provide a nurturing environment where excellence meets inspiration. Our holistic approach to education combines rigorous academic standards with a focus on personal growth, ensuring every student is prepared to lead and succeed in an ever-changing world. Discover a place where potential is realized and lifelong friendships are forged.
        </p>

        {/* CTA Button */}
        <div className="reveal opacity-0 translate-y-4 transition-all duration-500 delay-400 mt-12">
          <Button
            className="bg-secondary text-white hover:bg-secondary/90 h-10 px-10 text-[12px] font-bold tracking-widest uppercase rounded-none transition-all duration-200"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  )
}
