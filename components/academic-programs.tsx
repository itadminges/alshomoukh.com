"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, GraduationCap, Microscope, Puzzle } from "lucide-react"
import { motion } from "framer-motion"

const programs = [
  {
    title: "Kindergarten",
    division: "Early Years",
    description: "Nurturing curiosity through physical, social, and emotional discovery.",
    image: "/kindergarten_premium.png",
    href: "/kindergarten"
  },
  {
    title: "Primary School",
    division: "Key Stage 1 & 2",
    description: "Forging strong academic foundations through inquiry-based learning.",
    image: "/academics_premium.png",
    href: "/primary-school"
  },
  {
    title: "Lower Secondary",
    division: "Key Stage 3",
    description: "Developing critical thinking and independence in specialized subjects.",
    image: "https://www.alshomoukh.com:443/uploads/curriculum/20200805164402-2020-08-05curriculum164359.jpg",
    href: "/lower-secondary"
  },
  {
    title: "Upper Secondary",
    division: "Key Stage 4 & 5",
    description: "Rigorous preparation for IGCSE and A-Level examinations.",
    image: "https://www.alshomoukh.com:443/uploads/curriculum/20200805144412-2020-08-05curriculum144407.jpg",
    href: "/upper-secondary"
  },
]

export function AcademicPrograms() {
  const containerRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={containerRef}
      id="academics"
      className="relative pb-24 bg-white overflow-hidden"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
        
        {/* Section Header */}
        <div className="max-w-xl mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6 pt-[20px]"
          >
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-[11px]">
              Our Educational Journey
            </span>
            <div className="h-[1px] w-8 bg-gold/30" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.1] mb-8 tracking-tight font-bold uppercase font-heading"
          >
            Pathway to <span className="text-gold">Global Leadership</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-navy/70 leading-relaxed font-medium max-w-2xl"
          >
            A comprehensive educational journey designed to challenge and inspire from nursery to university graduation.
          </motion.p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Link href={program.href} className="group block">
                <article className="relative bg-ivory-dark/30 hover:bg-ivory-dark transition-colors duration-500 pb-10">
                  <div className="relative aspect-[4/5] overflow-hidden mb-8">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 text-[8px] font-bold tracking-widest text-navy uppercase">
                      {program.division}
                    </div>
                  </div>

                  <div className="px-6">
                    <h3 className="text-2xl text-navy mb-4 font-bold tracking-tight uppercase group-hover:text-gold transition-colors font-heading">
                      {program.title}
                    </h3>
                    <p className="text-[13px] text-navy/70 leading-relaxed mb-6 font-medium line-clamp-2">
                      {program.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-gold font-bold text-[9px] tracking-widest uppercase">
                      <span>Explore</span>
                      <ArrowRight className="h-2 w-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
