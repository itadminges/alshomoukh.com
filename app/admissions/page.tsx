"use client"

import { BookOpen, FileText, CheckSquare, Award, UserPlus, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { Scroll3DReveal } from "@/components/scroll-3d"
import { SectionSpirals } from "@/components/decorative-spirals"
import { Button } from "@/components/ui/button"

export default function AdmissionsPage() {
  const steps = [
    { num: "01", title: "Inquiry", desc: "Discover our curriculum, learn about our programmes, and arrange a visit to experience our campus.", icon: BookOpen },
    { num: "02", title: "Application", desc: "Complete the online application and submit the required documents to begin the admissions process.", icon: FileText },
    { num: "03", title: "Assessment", desc: "Participate in a student assessment and family meeting designed to understand your child’s learning needs.", icon: CheckSquare },
    { num: "04", title: "Offer", desc: "Receive an admission decision and offer of placement following the assessment process.", icon: Award },
    { num: "05", title: "Enrollment", desc: "Complete the registration process and take the first step in becoming part of the Al Shomoukh community.", icon: UserPlus },
  ]

  return (
    <main className="min-h-screen bg-white overflow-hidden scroll-3d-scene">
      {/* Hero Section matching Home/About brand system */}
      <PageHero 
        title="Admissions" 
        subtitle="Begin Your Child’s Journey Towards Excellence."
      />

      {/* Intro Overview Section */}
      <section className="py-20 bg-ivory/30 border-b border-navy/5 relative overflow-hidden">
        <SectionSpirals variant="light" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20 text-center">
          <div className="max-w-3xl mx-auto">
            <Scroll3DReveal rotateAmount={10} depth={30}>
              <p className="text-navy/80 text-base md:text-xl leading-[1.8] font-medium">
                At Al Shomoukh International Private School, every student is encouraged to discover their potential through a journey of academic achievement, personal growth, and global opportunity. Our admissions process is designed to be clear, supportive, and welcoming, ensuring that every family feels confident from the very first step.
              </p>
            </Scroll3DReveal>
          </div>
        </div>
      </section>

      {/* Welcome Section - Two Column */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <SectionSpirals variant="light" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <Scroll3DReveal rotateAmount={14} depth={45}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">
                  Welcome Message
                </span>
                <div className="h-[1px] w-12 bg-gold/30" />
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.15] mb-8 tracking-tight font-bold uppercase">
                Choosing the Right <br />
                <span className="text-gold">School Begins Here</span>
              </h2>
              
              <div className="text-navy/80 leading-[1.8] space-y-6 mb-8 text-base md:text-lg font-medium">
                <p>
                  Thank you for considering Al Shomoukh International Private School as your child’s educational partner. We understand that selecting the right school is a significant decision, and we are committed to providing families with the guidance, information, and support they need throughout the admissions journey.
                </p>
                <p>
                  Located in the heart of Muscat, Sultanate of Oman, Al Shomoukh International Private School offers a high-quality international education built on academic excellence, strong values, and a commitment to every student’s success.
                </p>
              </div>

              <div className="bg-ivory/40 p-6 md:p-8 border-l-4 border-gold shadow-strong">
                <p className="text-lg md:text-xl text-navy font-serif italic leading-[1.6]">
                  "Our admissions team is dedicated to making the enrolment process clear, welcoming, and seamless, guiding your family every step of the way with care, transparency, and confidence."
                </p>
              </div>
            </Scroll3DReveal>

            <Scroll3DReveal rotateAmount={18} depth={60}>
              <div className="relative aspect-[4/5] w-full max-w-lg mx-auto lg:ml-auto shadow-strong overflow-hidden border border-navy/10">
                <Image 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1470&auto=format&fit=crop"
                  alt="Students learning together"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Scroll3DReveal>
          </div>
        </div>
      </section>

      {/* Admissions Journey Stepper */}
      <section className="py-24 md:py-32 bg-ivory/30 border-y border-navy/5 relative overflow-hidden">
        <SectionSpirals variant="light" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-gold/30" />
              <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">
                Admissions Process
              </span>
              <div className="h-[1px] w-8 bg-gold/30" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.1] tracking-tight mb-4 font-bold uppercase">
              Your Journey to <span className="text-gold">Al Shomoukh</span>
            </h2>
            <p className="text-gold font-bold text-xs md:text-sm uppercase tracking-[0.2em]">
              A Simple Path to Joining Our Community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <Scroll3DReveal key={step.num} rotateAmount={12 + idx * 2} depth={30 + idx * 8}>
                <div className="bg-white p-8 shadow-strong border border-navy/5 h-full flex flex-col justify-between group hover:border-gold/40 transition-colors duration-500 relative">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-500">
                        <step.icon className="w-6 h-6 stroke-[1.5]" />
                      </div>
                      <span className="text-gold text-xs font-bold tracking-[0.25em] uppercase">
                        {step.num}
                      </span>
                    </div>

                    <h3 className="text-navy font-bold text-xl mb-3 tracking-tight uppercase">
                      {step.title}
                    </h3>
                    <p className="text-navy/70 text-sm leading-[1.7] font-medium">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Scroll3DReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-24 md:py-32 bg-navy text-white relative overflow-hidden">
        <SectionSpirals variant="dark" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20 text-center">
          <div className="max-w-3xl mx-auto">
            <Scroll3DReveal rotateAmount={10} depth={35}>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-[1px] w-8 bg-gold/50" />
                <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">
                  Next Steps
                </span>
                <div className="h-[1px] w-8 bg-gold/50" />
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight mb-4 uppercase">
                Ready to <span className="text-gold">Begin?</span>
              </h2>

              <h3 className="text-gold font-bold text-sm md:text-base uppercase tracking-[0.25em] mb-8">
                Start Your Child’s Journey Today
              </h3>

              <p className="text-ivory/80 text-base md:text-xl leading-[1.7] mb-12 font-medium">
                Our admissions team is ready to guide your family through the next steps and help you begin an exciting educational journey at Al Shomoukh International Private School.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/contact">
                  <Button className="bg-gold text-white hover:bg-gold/90 h-14 px-10 text-[11px] font-bold tracking-[0.25em] uppercase rounded-none transition-all shadow-lg hover:shadow-gold/20">
                    Apply Now
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button className="bg-transparent border border-white/60 text-white hover:bg-white hover:text-navy h-14 px-10 text-[11px] font-bold tracking-[0.25em] uppercase rounded-none transition-all">
                    Contact Admissions
                  </Button>
                </Link>
              </div>
            </Scroll3DReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
