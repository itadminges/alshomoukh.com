"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Magnetic } from "@/components/magnetic"

export function HeroSection() {
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

    const elements = sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax-like feel */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Al Shomoukh International School Campus"
          fill
          className="object-cover scale-105 animate-pulse-slow"
          priority
        />
        {/* Multilayered Overlays */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] px-6 md:px-10 lg:px-20 pt-20">
        <div className="max-w-4xl">
          {/* Tagline */}
          <div className="reveal-left opacity-0 transition-all duration-700 delay-100 flex items-center gap-3 mb-6">
            <span className="w-12 h-[2px] bg-secondary" />
            <span className="text-secondary font-bold tracking-[0.3em] uppercase text-[12px] md:text-[14px]">
              Excellence in Education
            </span>
          </div>

          {/* Main Title */}
          <h1 className="reveal opacity-0 text-white font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-10 tracking-tight">
            Nurturing <span className="text-secondary italic">Potential</span>, <br />
            Inspiring <span className="relative">
              Success
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span>
          </h1>

          {/* Subtext */}
          <p className="reveal opacity-0 transition-all duration-700 delay-300 text-white/80 text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed mb-12 font-light tracking-wide">
            Empowering the next generation of global citizens through a holistic academic journey in a nurturing international environment.
          </p>
          {/* CTAs */}
          <div className="reveal opacity-0 transition-all duration-700 delay-500 flex flex-wrap gap-4 md:gap-6">
            <Magnetic>
              <Button 
                size="lg" 
                className="bg-secondary text-white hover:bg-secondary/90 rounded-none px-10 h-14 text-[14px] font-bold tracking-widest uppercase flex items-center gap-3 transition-transform"
              >
                Start Admission <ArrowRight className="h-4 w-4" />
              </Button>
            </Magnetic>
            <Magnetic>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20 rounded-none px-10 h-14 text-[14px] font-bold tracking-widest uppercase transition-transform"
              >
                Discover SIS
              </Button>
            </Magnetic>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 text-white/60 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Discover More</span>
        <ChevronDown className="h-5 w-5" />
      </div>
    </section>
  )
}

