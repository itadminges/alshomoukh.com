"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Mohammed Al Mahrooqi",
    grade: "Class of 2024",
    achievement: "Recognized for his outstanding participation and eloquent recitation of the Holy Quran.",
    image: "https://www.alshomoukh.com:443/uploads/aboutstudents/20200805160235-2020-08-05aboutstudents160234.jpg",
    category: "Spiritual Leadership"
  },
  {
    name: "Lina Al Ashqar",
    grade: "Senior Graduate",
    achievement: "Led the school to victory in the Arabic Social Studies Ministry Project.",
    image: "https://www.alshomoukh.com:443/uploads/aboutstudents/20200805155758-2020-08-05aboutstudents155757.jpg",
    category: "Academic Excellence"
  },
  {
    name: "Hayder Al Yassiri",
    grade: "Executive Council",
    achievement: "Achieved the highest Chemistry Grade in the GCC and served as Student Council President.",
    image: "https://www.alshomoukh.com:443/uploads/aboutstudents/20200805155505-2020-08-05aboutstudents155504.jpg",
    category: "Scientific Innovation"
  },
]

export function AchievementsSection() {
  const containerRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-navy text-white overflow-hidden"
    >
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-gold font-bold tracking-[0.3em] uppercase text-[9px]">
                Student Spotlights
              </span>
              <div className="h-[1px] w-8 bg-gold/30" />
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl leading-[1.2] tracking-tight font-bold uppercase">
              Voices of <br />
              <span className="text-gold">Achievement</span>
            </h2>
          </div>
          
          <p className="text-ivory/60 text-xs max-w-xs leading-relaxed mb-1">
            Celebrating the scholars who define the spirit and legacy of Al Shomoukh International.
          </p>
        </div>

        {/* Spotlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {testimonials.map((student, index) => (
            <motion.div
              key={student.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Image Card */}
              <div className="relative w-full max-w-[220px] aspect-[4/5] overflow-hidden mb-8 border border-white/5">
                <Image
                  src={student.image}
                  alt={student.name}
                  fill
                  className="object-cover transition-transform duration-1000 opacity-90 group-hover:opacity-100"
                />
                
                {/* Category Tag */}
                <div className="absolute top-4 left-4 bg-gold px-3 py-1 text-[8px] font-bold tracking-[0.2em] uppercase">
                  {student.category}
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl mb-1 font-bold tracking-tight uppercase group-hover:text-gold transition-colors">
                  {student.name}
                </h3>
                <p className="text-gold font-bold text-[8px] tracking-[0.3em] uppercase mb-4 opacity-60">
                  {student.grade}
                </p>
                
                <p className="text-ivory/70 text-[11px] leading-relaxed font-medium line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                  {student.achievement}
                </p>
                
                <div className="mt-6 flex items-center gap-1.5 opacity-40">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-2 w-2 fill-gold text-gold" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

