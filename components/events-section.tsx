"use client"

import { useEffect, useRef } from "react"
import { Calendar } from "lucide-react"

const events = [
  {
    date: "April 2, 2026",
    title: "School Community Engagement Day",
  },
  {
    date: "April 13, 2026",
    title: "Parent-Teacher Meeting",
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
        <div className="text-center mb-16">
          <h2 className="reveal opacity-0 translate-y-4 transition-all duration-500 font-bold text-3xl md:text-3xl text-primary tracking-widest uppercase">
            Upcoming Events
          </h2>
          <div className="reveal opacity-0 scale-x-0 transition-all duration-500 delay-100 mt-6 flex justify-center">
            <div className="w-24 h-[1px] bg-secondary" />
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {events.map((event, index) => (
            <div
              key={index}
              className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-white p-8 border border-border/50 flex gap-6 items-start hover:shadow-lg transition-shadow duration-300"
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="bg-secondary/10 p-3 rounded-none">
                <Calendar className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-secondary font-bold text-[13px] tracking-widest uppercase mb-2">
                  {event.date}
                </p>
                <h3 className="text-xl font-bold text-primary tracking-tight">
                  {event.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
