"use client"

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-[85vh] flex items-center justify-center overflow-hidden mt-[76px]"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Al Shomoukh International School"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex cursor-default select-none items-center justify-center w-full h-full">
        <div className="text-center max-w-5xl px-6">
          <h1 className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 font-sans text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-8 tracking-tight drop-shadow-2xl flex flex-wrap justify-center items-center gap-x-4">
            <span>Find Your</span>
            <span className="bg-secondary px-6 py-2 inline-block">Future</span>
            <span>Today!</span>
          </h1>
          <p className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-400 text-lg md:text-2xl font-medium text-white/95 tracking-wide mt-8 max-w-3xl mx-auto drop-shadow-lg">
            Empowering the next generation of global citizens
          </p>
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-600 mt-12">
            <button className="bg-secondary text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-secondary/90 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
