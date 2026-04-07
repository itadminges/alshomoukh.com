"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

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

    const elements = sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20 text-[#0B3B5B]">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            <div className="reveal-left opacity-0 transition-all duration-700 delay-100 mb-8">
              <span className="text-secondary font-bold tracking-[0.3em] uppercase text-[12px] md:text-[14px]">
                Welcome to Al Shomoukh
              </span>
            </div>
            
            <h2 className="reveal opacity-0 transition-all duration-700 delay-200 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-10 tracking-tight text-balance">
              Building a Foundation for <span className="text-secondary italic">Excellence</span>
            </h2>

            <p className="reveal opacity-0 transition-all duration-700 delay-300 text-[16px] md:text-[18px] text-[#0B3B5B]/70 leading-[1.8] mb-10 font-medium max-w-2xl">
              At Al Shomoukh International School, we provide a nurturing environment where excellence meets inspiration. Our holistic approach to education combines rigorous academic standards with a focus on personal growth, ensuring every student is prepared to lead and succeed in an ever-changing world.
            </p>

            <div className="reveal opacity-0 transition-all duration-700 delay-400 grid sm:grid-cols-2 gap-6 mb-12">
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group">
                <div className="shrink-0 w-10 h-10 bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[15px] mb-1">Global Standards</h4>
                  <p className="text-[13px] text-primary/60 font-medium">Cambridge & International curricula adapted for global success.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group">
                <div className="shrink-0 w-10 h-10 bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[15px] mb-1">Holistic Growth</h4>
                  <p className="text-[13px] text-primary/60 font-medium">Focusing on academic, social, emotional, and physical development.</p>
                </div>
              </div>
            </div>

            <div className="reveal opacity-0 transition-all duration-700 delay-500">
              <Button className="bg-primary text-white hover:bg-primary/90 h-14 px-12 text-[14px] font-bold tracking-widest uppercase rounded-none transition-all shadow-lg hover:shadow-xl">
                Learn More About Us
              </Button>
            </div>
          </div>

          {/* Right: Image Interaction */}
          <div className="order-1 lg:order-2 relative h-[400px] md:h-[600px] w-full">
            <div className="reveal-right opacity-0 transition-all duration-1000 delay-200 aspect-square relative z-10 overflow-hidden shadow-strong">
              <Image 
                src="/school_building_premium.png" 
                alt="Campus Excellence" 
                fill 
                className="object-cover transform hover:scale-105 transition-transform duration-1000"
              />
            </div>
            
            {/* Design Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 -z-10 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 border-[20px] border-secondary/5 -z-10" />
            
            {/* Stats Overlay */}
            <div className="reveal opacity-0 transition-all duration-700 delay-600 absolute bottom-10 left-10 z-20 bg-primary p-8 text-white shadow-strong min-w-[200px]">
              <div className="text-4xl font-serif font-bold mb-1">15+</div>
              <div className="text-[12px] uppercase tracking-widest font-bold text-white/70">Years of Heritage</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

