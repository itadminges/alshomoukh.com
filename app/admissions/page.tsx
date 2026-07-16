"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { BookOpen, FileText, CheckSquare, Award, UserPlus } from "lucide-react"
import Image from "next/image"

const FadeIn = ({ children, delay = 0, y = 30, className = "" }: { children: React.ReactNode, delay?: number, y?: number, className?: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function AdmissionsPage() {
  const steps = [
    { num: "01", title: "Inquiry", desc: "Learn about our curriculum and schedule a campus visit.", icon: BookOpen },
    { num: "02", title: "Application", desc: "Submit the online application and required documents.", icon: FileText },
    { num: "03", title: "Assessment", desc: "Student assessment and family meeting.", icon: CheckSquare },
    { num: "04", title: "Offer", desc: "Receive an admission offer upon successful evaluation.", icon: Award },
    { num: "05", title: "Enrollment", desc: "Complete registration and become part of our community.", icon: UserPlus },
  ]

  return (
    <main className="min-h-screen bg-editorial-offwhite font-sans selection:bg-editorial-navy selection:text-white pb-0">
      {/* Hero Section */}
      <section className="pt-40 md:pt-52 pb-24 px-6 md:px-12 max-w-[1280px] mx-auto min-h-[70vh] flex flex-col justify-center">
        <FadeIn>
          <div className="mb-6">
            <span className="text-editorial-mutedblue uppercase tracking-[0.4em] text-xs font-bold">
              Admissions
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[88px] text-editorial-navy leading-[1.05] tracking-tight mb-8 max-w-4xl font-light">
            Begin an Extraordinary <br />
            <span className="font-serif italic font-medium pr-4">Learning Journey.</span>
          </h1>
          <p className="text-editorial-slate text-lg md:text-xl leading-[1.7] max-w-[520px] font-medium">
            At Al Shomoukh International Private School, every child begins a journey of academic excellence, personal growth, and global opportunity. Our admissions process is designed to be simple, transparent, and welcoming for every family.
          </p>
        </FadeIn>
      </section>

      {/* Thin Divider */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="h-[1px] w-full bg-black/5" />
      </div>

      {/* Content Section - Two Column */}
      <section className="py-32 px-6 md:px-12 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn>
            <div className="mb-6">
              <span className="text-editorial-mutedblue uppercase tracking-[0.4em] text-[10px] font-bold">
                Welcome
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl text-editorial-navy leading-[1.1] tracking-tight mb-10 font-light">
              Choosing the Right <br className="hidden md:block"/>
              School Begins Here
            </h2>
            
            <div className="text-editorial-slate leading-[1.8] space-y-6 mb-12 text-lg">
              <p>
                Thank you for considering Al Shomoukh International Private School and entrusting us with your child's education. We understand that choosing the right school is one of the most important decisions you'll make for your child's future.
              </p>
              <p>
                Located in the heart of Muscat, Sultanate of Oman, Al Shomoukh International Private School is a leader in providing high-quality education. We strive to make our admissions process as clear and seamless as possible, ensuring you have all the information needed to make the right choice for your child.
              </p>
            </div>

            <div className="pl-6 border-l-2 border-editorial-navy/20 py-2">
              <p className="text-2xl md:text-3xl text-editorial-navy font-serif italic leading-[1.4]">
                "Our admissions team is committed to guiding your family through every step with care, transparency, and confidence."
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative aspect-[4/5] w-full max-w-lg mx-auto lg:ml-auto rounded-[20px] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
              <Image 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1470&auto=format&fit=crop"
                alt="Students learning together"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Admissions Journey Stepper */}
      <section className="py-32 px-6 md:px-12 bg-white/50 border-y border-black/5">
        <div className="max-w-[1280px] mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl text-editorial-navy mb-20 tracking-tight font-light">
              Admissions Journey
            </h2>
          </FadeIn>

          <div className="relative flex flex-col md:flex-row justify-between items-start gap-8 md:gap-4">
            {/* Desktop Connecting Line */}
            <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[1px] bg-editorial-slate/20 -z-10" />
            
            {steps.map((step, idx) => (
              <FadeIn key={step.num} delay={0.1 * idx} y={20} className="w-full md:w-1/5 flex flex-col items-center group relative z-10">
                <div className="w-20 h-20 bg-white rounded-[20px] shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] border border-[#EAEAEA] flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-500 ease-out">
                  <step.icon className="w-6 h-6 text-editorial-mutedblue stroke-[1.5]" />
                </div>
                <span className="text-editorial-gold text-xs font-bold tracking-[0.2em] mb-3">
                  {step.num}
                </span>
                <h3 className="text-editorial-navy font-semibold text-lg mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-editorial-slate text-sm leading-[1.6] max-w-[200px] text-center">
                  {step.desc}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-32 px-6 md:px-12 bg-editorial-navy text-center">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-tight mb-8">
              Ready to Begin?
            </h2>
            <p className="text-white/70 text-xl leading-[1.6] mb-12 font-medium">
              Speak with our admissions team and start your child's educational journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="w-full sm:w-auto px-10 py-5 bg-editorial-gold hover:bg-[#b5955b] text-white text-[13px] font-bold uppercase tracking-[0.2em] rounded-[12px] transition-colors duration-300">
                Apply Now
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/20 hover:bg-white/5 text-white text-[13px] font-bold uppercase tracking-[0.2em] rounded-[12px] transition-colors duration-300">
                Contact Admissions
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
