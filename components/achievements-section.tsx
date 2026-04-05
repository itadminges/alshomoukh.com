"use client"

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Mohammed Al Mahrooqi',
    grade: 'Grade 10B',
    achievement: 'Mohammed has lately been marked for his participation in the morning assembly and his recitation of the Holy Quran.',
    image: 'https://www.alshomoukh.com:443/uploads/aboutstudents/20200805160235-2020-08-05aboutstudents160234.jpg'
  },
  {
    name: 'Lina Al Ashqar',
    grade: 'Grade 12B',
    achievement: 'Lina has contributed to the school winning in the Arabic Social Studies Ministry Project.',
    image: 'https://www.alshomoukh.com:443/uploads/aboutstudents/20200805155758-2020-08-05aboutstudents155757.jpg'
  },
  {
    name: 'Hayder Al Yassiri',
    grade: 'Grade 12A',
    achievement: 'Hayder has achieved the highest Chemistry Grade in the GCC for IAS results, highest academic achievement at IGCSE on record at SIS and has been the Student Council President since 2018.',
    image: 'https://www.alshomoukh.com:443/uploads/aboutstudents/20200805155505-2020-08-05aboutstudents155504.jpg'
  },
]

export function AchievementsSection() {
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
      { threshold: 0.2 }
    )

    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-white overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="reveal opacity-0 translate-y-4 transition-all duration-500 delay-100 font-bold text-3xl md:text-3xl text-primary tracking-widest uppercase">
            About Our Students
          </h2>
          <div className="reveal opacity-0 scale-x-0 transition-all duration-500 delay-200 mt-6 flex justify-center">
            <div className="w-24 h-[1px] bg-secondary" />
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="reveal opacity-0 translate-y-8 transition-all duration-700 flex flex-col items-center text-center"
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="relative w-48 h-48 mb-8 group">
                {/* Decorative Circles */}
                <div className="absolute inset-[-10px] rounded-full border border-secondary/20 animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-[-5px] rounded-full border border-primary/10 animate-[spin_15s_linear_infinite_reverse]" />
                
                {/* Image */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="max-w-xs">
                <h3 className="font-bold text-primary text-xl mb-1">{testimonial.name}</h3>
                <p className="text-secondary font-bold text-[12px] tracking-widest uppercase mb-4">{testimonial.grade}</p>
                <div className="w-8 h-[1px] bg-secondary/30 mx-auto mb-4" />
                <p className="text-[#0B3B5B]/70 text-sm leading-relaxed italic">
                  &ldquo;{testimonial.achievement}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
