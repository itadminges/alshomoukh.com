"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const testimonials = [
  {
    name: "Mohammed Al Mahrooqi",
    grade: "Grade 10B",
    achievement: "Recognized for his outstanding participation in the morning assembly and his eloquent recitation of the Holy Quran.",
    image: "https://www.alshomoukh.com:443/uploads/aboutstudents/20200805160235-2020-08-05aboutstudents160234.jpg"
  },
  {
    name: "Lina Al Ashqar",
    grade: "Grade 12B",
    achievement: "Successfully led the school to victory in the prestigious Arabic Social Studies Ministry Project.",
    image: "https://www.alshomoukh.com:443/uploads/aboutstudents/20200805155758-2020-08-05aboutstudents155757.jpg"
  },
  {
    name: "Hayder Al Yassiri",
    grade: "Grade 12A",
    achievement: "Achieved the highest Chemistry Grade in the GCC for IAS, highest academic records at SIS, and served as Student Council President.",
    image: "https://www.alshomoukh.com:443/uploads/aboutstudents/20200805155505-2020-08-05aboutstudents155504.jpg"
  },
]

export function AchievementsSection() {
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
      className="relative py-24 md:py-32 bg-[#FDFCF9] overflow-hidden"
    >
      {/* Background Ornament */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none w-full max-w-4xl">
        <Image src="/SIS Logo-01.png" alt="" width={800} height={800} className="w-full h-auto grayscale" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="reveal opacity-0 transition-all duration-700 delay-100 flex flex-col items-center gap-4 mb-6">
            <span className="text-secondary font-bold tracking-[0.4em] uppercase text-[12px] md:text-[14px]">
              Student Profiles
            </span>
            <div className="w-12 h-[2px] bg-secondary" />
          </div>
          
          <h2 className="reveal opacity-0 transition-all duration-700 delay-200 font-serif text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.1] mb-8 tracking-tight">
            Celebrating Our <span className="text-secondary italic">Scholars</span>
          </h2>
          
          <p className="reveal opacity-0 transition-all duration-700 delay-300 text-[16px] md:text-[18px] text-primary/70 leading-[1.8] font-medium">
            Meet the exceptional young minds who embody the spirit of Al Shomoukh. Their achievements in academics, culture, and leadership inspire our entire community.
          </p>
        </div>

        {/* Spotlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16">
          {testimonials.map((student, index) => (
            <div
              key={student.name}
              className="reveal opacity-0 transition-all duration-700 flex flex-col items-center text-center group"
              style={{ transitionDelay: `${200 + index * 200}ms` }}
            >
              <div className="relative w-56 h-56 mb-10">
                {/* Elegant Decorative Borders */}
                <div className="absolute inset-[-15px] rounded-full border border-secondary/20 scale-95 group-hover:scale-100 group-hover:rotate-45 transition-all duration-700" />
                <div className="absolute inset-[-10px] rounded-full border border-primary/5 group-hover:rotate-[-45deg] transition-all duration-1000" />
                
                {/* Main Image Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-strong z-10">
                  <Image
                    src={student.image}
                    alt={student.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Achievement Badge */}
                <div className="absolute -bottom-4 right-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-500 z-20">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L9 9H1L7 14L4 22L12 17L20 22L17 14L23 9H15L12 1Z"/></svg>
                </div>
              </div>

              <div className="relative">
                <h3 className="font-serif text-2xl text-primary mb-2 tracking-tight group-hover:text-secondary transition-colors">
                  {student.name}
                </h3>
                <p className="text-secondary font-bold text-[11px] tracking-[0.3em] uppercase mb-6 drop-shadow-sm">
                  {student.grade}
                </p>
                
                <div className="w-8 h-[1px] bg-secondary/30 mx-auto mb-6" />
                
                <div className="relative px-4">
                  <span className="absolute -top-4 left-0 text-5xl text-secondary/10 font-serif font-bold h-0 select-none">&ldquo;</span>
                  <p className="text-primary/70 text-[15px] leading-relaxed font-medium italic relative z-10">
                    {student.achievement}
                  </p>
                  <span className="absolute -bottom-4 right-0 text-5xl text-secondary/10 font-serif font-bold h-0 select-none">&rdquo;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

