"use client"

import { useEffect, useRef } from "react"
import { Calendar, ArrowRight, Rss } from "lucide-react"
import { Button } from "@/components/ui/button"

const events = [
  {
    day: "02",
    month: "APR",
    year: "2026",
    title: "School Community Engagement Day",
    type: "Community Event"
  },
  {
    day: "13",
    month: "APR",
    year: "2026",
    title: "Parent-Teacher Consultation",
    type: "Academic"
  },
  {
    day: "25",
    month: "APR",
    year: "2026",
    title: "Annual Sports Achievement Awards",
    type: "Student Life"
  },
]

export function EventsSection() {
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
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Header & Sidebar */}
          <div className="lg:col-span-4">
            <div className="reveal-left opacity-0 transition-all duration-700 delay-100 flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-secondary" />
              <span className="text-secondary font-bold tracking-[0.3em] uppercase text-[12px] md:text-[14px]">
                Stay Informed
              </span>
            </div>
            
            <h2 className="reveal opacity-0 transition-all duration-700 delay-200 font-serif text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.1] mb-8 tracking-tight">
              Latest <span className="text-secondary italic">News</span> & Upcoming Events
            </h2>
            
            <p className="reveal opacity-0 transition-all duration-700 delay-300 text-[16px] md:text-[18px] text-primary/70 leading-[1.8] mb-10 font-medium">
              Keep up to date with the vibrant life at Al Shomoukh International School. From academic milestones to community celebrations.
            </p>

            <div className="reveal opacity-0 transition-all duration-700 delay-400 p-8 border border-border/50 bg-[#FDFCF9] relative group">
              <h4 className="font-serif text-xl mb-4 text-primary font-bold">Never miss an update</h4>
              <p className="text-[14px] text-primary/60 mb-6 font-medium leading-relaxed">Subscribe to our newsletter and receive the latest stories directly in your inbox.</p>
              <Button className="w-full bg-primary text-white hover:bg-primary/90 h-14 rounded-none text-[13px] font-extrabold tracking-widest uppercase">
                Join our Circle
              </Button>
              <Rss className="absolute -top-4 -right-4 h-12 w-12 text-secondary/10 group-hover:text-secondary/20 transition-colors" />
            </div>
          </div>

          {/* Events List */}
          <div className="lg:col-span-8">
            <div className="space-y-6">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="reveal opacity-0 transition-all duration-700 flex flex-col sm:flex-row gap-6 p-8 bg-white shadow-premium hover:shadow-strong transition-all duration-500 group border-l-4 border-transparent hover:border-secondary"
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  {/* Styled Date Block */}
                  <div className="flex flex-col items-center justify-center min-w-[100px] h-[100px] border-2 border-primary/10 group-hover:border-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500 shrink-0">
                    <span className="text-3xl font-serif font-bold">{event.day}</span>
                    <span className="text-[11px] font-extrabold tracking-[0.2em] opacity-70">{event.month}</span>
                  </div>

                  {/* Event Details */}
                  <div className="flex-grow flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-extrabold tracking-[0.2em] text-secondary uppercase bg-secondary/10 px-2 py-1">
                        {event.type}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-primary leading-tight hover:text-secondary transition-colors cursor-pointer mb-2 font-bold tracking-tight">
                      {event.title}
                    </h3>
                  </div>

                  {/* Arrow CTA */}
                  <div className="flex items-center sm:justify-end">
                    <div className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center text-primary group-hover:border-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="reveal opacity-0 transition-all duration-700 delay-500 mt-12 flex justify-center lg:justify-start">
              <Button variant="ghost" className="text-primary hover:text-secondary text-[13px] font-extrabold tracking-[0.2em] uppercase group flex items-center gap-3">
                View Full Academic Calendar
                <Calendar className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

