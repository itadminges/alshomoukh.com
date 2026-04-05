"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

import { HelpCircle } from "lucide-react"

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
      className="relative py-24 bg-[#F8F9FA] overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="reveal opacity-0 translate-y-4 transition-all duration-500 font-bold text-3xl md:text-3xl text-primary tracking-widest uppercase">
            Our International Community
          </h2>
          <div className="reveal opacity-0 scale-x-0 transition-all duration-500 delay-100 mt-6 flex justify-center">
            <div className="w-24 h-[1px] bg-secondary" />
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="reveal opacity-0 -translate-x-8 transition-all duration-700 delay-200">
            <div className="relative overflow-hidden aspect-[4/3] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80"
                alt="International Students"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="reveal opacity-0 translate-x-8 transition-all duration-700 delay-300">
            <h3 className="font-bold text-4xl md:text-5xl text-primary mb-8 tracking-tight">
              A diverse & inclusive environment
            </h3>
            <p className="text-[15px] md:text-[16px] text-primary/70 leading-[1.8] mb-10 font-medium">
              Students at Al Shomoukh International School come from diverse cultural and national backgrounds, creating a rich and inclusive learning environment where global citizenship is celebrated every day.
            </p>

            {/* Buttons */}
            <div className="flex gap-6 flex-wrap">
              <Button className="bg-secondary text-white hover:bg-secondary/90 h-10 px-8 text-[12px] font-bold tracking-widest uppercase rounded-none transition-all duration-200">
                Join Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
