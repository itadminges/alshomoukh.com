"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MessageSquare, GraduationCap } from "lucide-react"
import Link from "next/link"

export function NewsletterSection() {
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

    const elements = sectionRef.current?.querySelectorAll(".reveal, .reveal-up")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-primary overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[100%] border-[40px] border-white rounded-full translate-x-1/2 -rotate-12" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[80%] border-[20px] border-secondary rounded-full -translate-x-1/2 rotate-12" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20 text-center">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="reveal opacity-0 transition-all duration-700 delay-100 flex flex-col items-center gap-4 mb-8">
            <span className="text-secondary font-bold tracking-[0.4em] uppercase text-[12px] md:text-[14px]">
              Begin Your Journey
            </span>
            <div className="w-12 h-[2px] bg-secondary" />
          </div>
          
          <h2 className="reveal opacity-0 transition-all duration-700 delay-200 font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-10 tracking-tight text-balance">
            Shape Your Future <br /> 
            at <span className="text-secondary italic">Al Shomoukh</span>
          </h2>
          
          <p className="reveal opacity-0 transition-all duration-700 delay-300 text-[18px] md:text-[22px] text-white/80 leading-[1.6] font-light max-w-3xl mx-auto mb-12">
            Admissions are now open for the upcoming academic year. Join our community of global learners and discover a world of possibilities.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Apply Now */}
          <div className="reveal opacity-0 transition-all duration-700 delay-400 bg-white/5 backdrop-blur-lg border border-white/10 p-10 transition-all duration-500">
            <div className="w-16 h-16 bg-secondary text-white flex items-center justify-center rounded-full mb-8 mx-auto">
              <GraduationCap className="h-8 w-8" />
            </div>
            <h3 className="font-serif text-2xl mb-4 text-white">Digital Application</h3>
            <p className="text-white/60 text-[14px] mb-8">Start your child&apos;s educational journey today through our secure online portal.</p>
            <Button className="w-full bg-secondary text-white hover:bg-secondary/90 h-14 rounded-none text-[13px] font-extrabold tracking-widest uppercase">
              Apply Now
            </Button>
          </div>

          {/* Enquire */}
          <div className="reveal opacity-0 transition-all duration-700 delay-500 bg-white/5 backdrop-blur-lg border border-white/10 p-10 transition-all duration-500">
            <div className="w-16 h-16 bg-secondary text-white flex items-center justify-center rounded-full mb-8 mx-auto">
              <MessageSquare className="h-8 w-8" />
            </div>
            <h3 className="font-serif text-2xl mb-4 text-white">Inquire Today</h3>
            <p className="text-white/60 text-[14px] mb-8">Have questions? Our admissions team is here to guide you through every step.</p>
            <Button className="w-full bg-secondary text-white hover:bg-secondary/90 h-14 rounded-none text-[13px] font-extrabold tracking-widest uppercase">
              Enrollment Inquiry
            </Button>
          </div>

          {/* Visit */}
          <div className="reveal opacity-0 transition-all duration-700 delay-600 bg-white/5 backdrop-blur-lg border border-white/10 p-10 transition-all duration-500">
            <div className="w-16 h-16 bg-secondary text-white flex items-center justify-center rounded-full mb-8 mx-auto">
              <Calendar className="h-8 w-8" />
            </div>
            <h3 className="font-serif text-2xl mb-4 text-white">Visit Our Campus</h3>
            <p className="text-white/60 text-[14px] mb-8">Experience our state-of-the-art facilities and meet our dedicated faculty.</p>
            <Button className="w-full bg-secondary text-white hover:bg-secondary/90 h-14 rounded-none text-[13px] font-extrabold tracking-widest uppercase">
              Book a Tour
            </Button>
          </div>
        </div>

        {/* Secondary Contact Info */}
        <div className="reveal opacity-0 transition-all duration-700 delay-700 mt-20 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-8 text-white/60 text-[15px] font-medium">
          <p>Admissions Office: <span className="text-white">+968 2452 7100</span></p>
          <span className="hidden md:block w-px h-4 bg-white/20" />
          <p>Email: <span className="text-white">admissions@alshomoukh.com</span></p>
          <span className="hidden md:block w-px h-4 bg-white/20" />
          <Link href="/contact" className="text-secondary hover:text-white transition-colors flex items-center gap-2">
            Get Directions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

