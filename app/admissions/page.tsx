"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Quote, CheckCircle, Info, CreditCard } from "lucide-react"

export default function AdmissionsPage() {
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

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-white" ref={sectionRef}>
      <Navbar />

      {/* Hero Header */}
      <section className="bg-primary py-32 mt-[76px] relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center relative z-10">
          <h1 className="reveal opacity-0 translate-y-8 transition-all duration-700 font-bold text-5xl md:text-6xl text-white tracking-tight uppercase mb-8">
            Admissions
          </h1>
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 max-w-3xl mx-auto flex flex-col items-center">
            <Quote className="w-10 h-10 text-secondary mb-4 opacity-50" />
            <p className="text-xl md:text-2xl text-white italic font-medium leading-[1.6]">
              "Hold fast to dreams, for if dreams die, life is a broken-winged bird that cannot fly."
            </p>
            <p className="mt-4 text-secondary font-bold tracking-widest uppercase text-sm">
              — Langston Hughes
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="reveal opacity-0 translate-y-4 transition-all duration-500 text-lg text-primary/70 leading-[1.8] space-y-6 font-medium">
            <p>
              Thank you for considering Al Shomoukh International School and entrusting us with your child’s education.
            </p>
            <p>
              We understand that choosing the right school is one of the most important decisions a family can make. Al Shomoukh International School is a leading international school in Muscat, Sultanate of Oman, dedicated to providing a high-quality educational experience.
            </p>
            <p>
              We aim to make our admissions process as clear and seamless as possible by providing all the information you need to make the right choice.
            </p>
          </div>
        </div>
      </section>

      {/* Process Grid */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Start Journey */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-white p-10 border border-border/50 h-full">
            <div className="p-3 bg-secondary/10 w-fit mb-8">
              <CheckCircle className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-bold text-2xl text-primary mb-6 uppercase tracking-tight">Start Your Journey</h3>
            <p className="text-primary/70 leading-[1.6] mb-8 font-medium">
              Once a student is accepted after the entrance assessment, parents may proceed with the enrolment requirements.
            </p>
          </div>

          {/* Application */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 bg-white p-10 border border-border/50 h-full">
            <div className="p-3 bg-secondary/10 w-fit mb-8">
              <Info className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-bold text-2xl text-primary mb-6 uppercase tracking-tight">Application Process</h3>
            <p className="text-primary/70 leading-[1.6] mb-8 font-medium">
              To apply, please download and complete the Enrolment Form. For further information, contact us at: <span className="text-secondary font-bold">admission@alshomoukh.com</span>
            </p>
            <Button className="w-full bg-secondary text-white hover:bg-secondary/90 transition-all uppercase tracking-widest font-bold text-xs">
              Book a Tour
            </Button>
          </div>

          {/* Fees */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 bg-white p-10 border border-border/50 h-full">
            <div className="p-3 bg-secondary/10 w-fit mb-8">
              <CreditCard className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-bold text-2xl text-primary mb-6 uppercase tracking-tight">Fees</h3>
            <p className="text-primary/70 leading-[1.6] mb-8 font-medium">
              Admission is confirmed only after payment is made according to the fee schedule. A seat is not secured until payment has been received.
            </p>
            <div className="mt-4 p-4 bg-secondary/5 border-l-4 border-secondary">
              <p className="text-xs font-bold text-secondary uppercase tracking-widest">Sibling Discount</p>
              <p className="text-sm font-medium text-primary mt-1">Younger siblings may be eligible for a 10% tuition fee discount.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="reveal opacity-0 translate-y-4 transition-all duration-500 font-bold text-3xl text-primary mb-12 tracking-tight uppercase text-center">
            Frequently Asked Questions
          </h2>
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200">
            <Accordion type="single" collapsible className="w-full border-t">
              <AccordionItem value="item-1" className="border-b">
                <AccordionTrigger className="text-lg font-bold text-primary hover:text-secondary text-left py-6">
                  What is the academic level criteria that must be met to admit my child to S.I.S?
                </AccordionTrigger>
                <AccordionContent className="text-primary/70 text-lg leading-relaxed pb-6">
                  Students are assessed according to age-appropriate academic expectations and school placement requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b">
                <AccordionTrigger className="text-lg font-bold text-primary hover:text-secondary text-left py-6">
                  What is the age criteria for accepting students in KG1, KG2, and Grade 1?
                </AccordionTrigger>
                <AccordionContent className="text-primary/70 text-lg leading-relaxed pb-6">
                  <ul className="space-y-4 mt-2">
                    <li><span className="font-bold text-primary">KG1:</span> Students must be 3 years old by June of the enrolling academic year.</li>
                    <li><span className="font-bold text-primary">KG2:</span> Students must be 4 years old by June of the enrolling academic year.</li>
                    <li><span className="font-bold text-primary">Grade 1:</span> Students must be 5 years old by June of the enrolling academic year.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b">
                <AccordionTrigger className="text-lg font-bold text-primary hover:text-secondary text-left py-6">
                  My child is not toilet-trained, but their age is suitable for KG1. Can I still complete the enrolment process?
                </AccordionTrigger>
                <AccordionContent className="text-primary/70 text-lg leading-relaxed pb-6">
                  Please contact the Admissions Office to discuss individual readiness requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b">
                <AccordionTrigger className="text-lg font-bold text-primary hover:text-secondary text-left py-6">
                  Can a child with special educational needs be enrolled at S.I.S?
                </AccordionTrigger>
                <AccordionContent className="text-primary/70 text-lg leading-relaxed pb-6">
                  Please contact the school directly so our team can review the child’s needs and discuss available support.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-b">
                <AccordionTrigger className="text-lg font-bold text-primary hover:text-secondary text-left py-6">
                  What is the class size?
                </AccordionTrigger>
                <AccordionContent className="text-primary/70 text-lg leading-relaxed pb-6">
                  Class sizes vary by grade level and are designed to support effective teaching and learning.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-b">
                <AccordionTrigger className="text-lg font-bold text-primary hover:text-secondary text-left py-6">
                  Can I meet the teachers?
                </AccordionTrigger>
                <AccordionContent className="text-primary/70 text-lg leading-relaxed pb-6">
                  Yes, parents may meet teachers during scheduled school visits, orientation sessions, and parent meetings.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border-b">
                <AccordionTrigger className="text-lg font-bold text-primary hover:text-secondary text-left py-6">
                  What curriculum do you follow in the Primary School?
                </AccordionTrigger>
                <AccordionContent className="text-primary/70 text-lg leading-relaxed pb-6">
                  The school follows the UK National Curriculum, adapted to meet both international standards and local requirements.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translate(0) !important;
        }
      `}</style>
    </main>
  )
}
