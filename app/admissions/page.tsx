"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Info, CreditCard } from "lucide-react"
import { PageHero } from "@/components/page-hero"

const FadeIn = ({ children, delay = 0, x = 0, y = 30 }: { children: React.ReactNode, delay?: number, x?: number, y?: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="Admissions" 
        subtitle="Embark on an educational journey that empowers your child with excellence and global vision."
        quote={{
          text: "Hold fast to dreams, for if dreams die, life is a broken-winged bird that cannot fly.",
          author: "Langston Hughes"
        }}
      />

      {/* Intro Section */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-lg text-navy/70 leading-[1.8] space-y-6 font-medium">
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
          </FadeIn>
        </div>
      </section>

      {/* Process Grid */}
      <section className="py-24 bg-ivory/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Start Journey */}
          <FadeIn y={40}>
            <div className="bg-white p-10 border-t-4 border-gold shadow-sm h-full group hover:shadow-md transition-shadow">
              <div className="p-3 bg-gold/10 w-fit mb-8">
                <CheckCircle className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-bold text-xl text-navy mb-6 uppercase tracking-tight">Start Your Journey</h3>
              <p className="text-navy/70 leading-[1.6] mb-8 font-medium">
                Once a student is accepted after the entrance assessment, parents may proceed with the enrolment requirements.
              </p>
            </div>
          </FadeIn>

          {/* Application */}
          <FadeIn y={40} delay={0.1}>
            <div className="bg-white p-10 border-t-4 border-navy shadow-sm h-full group hover:shadow-md transition-shadow">
              <div className="p-3 bg-navy/10 w-fit mb-8">
                <Info className="w-8 h-8 text-navy" />
              </div>
              <h3 className="font-bold text-xl text-navy mb-6 uppercase tracking-tight">Application Process</h3>
              <p className="text-navy/70 leading-[1.6] mb-8 font-medium">
                To apply, please download and complete the Enrolment Form. For further information, contact us at: <span className="text-gold font-bold">admission@alshomoukh.com</span>
              </p>
              <Button className="w-full bg-gold text-white hover:bg-gold/90 transition-all uppercase tracking-[0.2em] font-bold text-[10px] rounded-none h-12">
                Book a Tour
              </Button>
            </div>
          </FadeIn>

          {/* Fees */}
          <FadeIn y={40} delay={0.2}>
            <div className="bg-white p-10 border-t-4 border-gold shadow-sm h-full group hover:shadow-md transition-shadow">
              <div className="p-3 bg-gold/10 w-fit mb-8">
                <CreditCard className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-bold text-xl text-navy mb-6 uppercase tracking-tight">Fees</h3>
              <p className="text-navy/70 leading-[1.6] mb-8 font-medium">
                Admission is confirmed only after payment is made according to the fee schedule. A seat is not secured until payment has been received.
              </p>
              <div className="mt-4 p-4 bg-gold/5 border-l-4 border-gold">
                <p className="text-[10px] font-bold text-gold uppercase tracking-widest">Sibling Discount</p>
                <p className="text-sm font-medium text-navy mt-1">Younger siblings may be eligible for a 10% tuition fee discount.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn>
            <h2 className="font-bold text-3xl text-navy mb-12 tracking-tight uppercase text-center">
              Frequently Asked Questions
            </h2>
            <div className="border-t border-navy/10">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    q: "What is the academic level criteria that must be met to admit my child to S.I.S?",
                    a: "Students are assessed according to age-appropriate academic expectations and school placement requirements."
                  },
                  {
                    q: "What is the age criteria for accepting students in KG1, KG2, and Grade 1?",
                    a: (
                      <ul className="space-y-4 mt-2">
                        <li><span className="font-bold text-navy">KG1:</span> Students must be 3 years old by June of the enrolling academic year.</li>
                        <li><span className="font-bold text-navy">KG2:</span> Students must be 4 years old by June of the enrolling academic year.</li>
                        <li><span className="font-bold text-navy">Grade 1:</span> Students must be 5 years old by June of the enrolling academic year.</li>
                      </ul>
                    )
                  },
                  {
                    q: "My child is not toilet-trained, but their age is suitable for KG1. Can I still complete the enrolment process?",
                    a: "Please contact the Admissions Office to discuss individual readiness requirements."
                  },
                  {
                    q: "Can a child with special educational needs be enrolled at S.I.S?",
                    a: "Please contact the school directly so our team can review the child’s needs and discuss available support."
                  },
                  {
                    q: "What is the class size?",
                    a: "Class sizes vary by grade level and are designed to support effective teaching and learning."
                  },
                  {
                    q: "Can I meet the teachers?",
                    a: "Yes, parents may meet teachers during scheduled school visits, orientation sessions, and parent meetings."
                  },
                  {
                    q: "What curriculum do you follow in the Primary School?",
                    a: "The school follows the UK National Curriculum, adapted to meet both international standards and local requirements."
                  }
                ].map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b border-navy/10">
                    <AccordionTrigger className="text-base md:text-lg font-bold text-navy hover:text-gold text-left py-6 uppercase tracking-tight">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-navy/70 text-base md:text-lg leading-relaxed pb-6 font-medium">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
