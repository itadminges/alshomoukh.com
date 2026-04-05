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
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-white/5" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex cursor-default select-none items-center justify-center w-full h-full">
        <div className="text-center max-w-5xl px-6">
          <h1 className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 font-sans text-5xl md:text-6xl lg:text-7xl font-bold text-[#0B3B5B] mb-8 tracking-[-0.02em]">
            Welcome to <span className="text-secondary">Al Shomoukh</span> International School
          </h1>
          <p className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-400 text-lg md:text-2xl font-medium text-[#0B3B5B]/80 tracking-wide mt-6 max-w-3xl mx-auto">
            A leading international school in Muscat, Oman, committed to academic excellence, character development, and global citizenship.
          </p>
        </div>
      </div>
    </section>
  )
}
