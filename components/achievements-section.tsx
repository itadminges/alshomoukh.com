'use client'

import { useEffect, useRef } from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Mohammed Al Mahrooqi',
    grade: 'Grade 10B',
    achievement: 'Marked for excellence in participation in morning assembly and Quranic recitation.',
  },
  {
    name: 'Hayder Al Yassiri',
    grade: 'Grade 12A',
    achievement: 'Achieved highest Chemistry grade in GCC for IAS results and served as Student Council President.',
  },
  {
    name: 'Lina Al Ashqar',
    grade: 'Grade 12B',
    achievement: 'Contributed to school winning Arabic Social Studies Ministry Project award.',
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
      className="relative py-20 md:py-28 bg-white overflow-hidden"
    >
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="reveal opacity-0 translate-y-4 transition-all duration-500 delay-100 font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-primary tracking-tight uppercase">
            Student Excellence
          </h2>
          <div className="reveal opacity-0 scale-x-0 transition-all duration-500 delay-200 mt-5 flex justify-center">
            <div className="w-12 h-0.5 bg-secondary" />
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`reveal opacity-0 translate-y-4 transition-all duration-500 group`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="relative p-6 rounded-lg bg-muted/60 border border-border/50 transition-all duration-300 hover:border-secondary/50 hover:bg-white hover:shadow-lg h-full">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Achievement */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {testimonial.achievement}
                </p>

                {/* Footer */}
                <div className="pt-4 border-t border-border/50">
                  <p className="font-semibold text-primary text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-secondary font-medium tracking-wider uppercase">
                    {testimonial.grade}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  )
}
