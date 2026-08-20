"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { PageHero } from "@/components/page-hero"

const FadeIn = ({ children, delay = 0, y = 30 }: { children: React.ReactNode, delay?: number, y?: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function PrivacyPage() {
  const sections = [
    {
      title: "1. Information Collection",
      content: "The website does not directly store messages entered into the enquiry or tour forms; those forms prepare an email in your own email application. Personal information may be provided separately when you email the school or use the external Parent Portal."
    },
    {
      title: "2. Use of Information",
      content: "Information you choose to send to the school may be used to respond to enquiries, support admissions, arrange visits, and provide requested school information. Information submitted through an external service is also subject to that service's privacy terms."
    },
    {
      title: "3. Data Security",
      content: "Please avoid sending sensitive information through ordinary email unless requested by an authorized school representative. For questions about how school records are handled, contact the school directly."
    },
    {
      title: "4. Cookies & Analytics",
      content: "The website uses Vercel Analytics to understand aggregate website usage and may use essential browser storage required for site operation. External services, including maps and the Parent Portal, may apply their own cookies or analytics policies."
    },
    {
      title: "5. User Rights",
      content: "You may contact the school to ask about access, correction, or deletion of personal information, subject to applicable law and school record-retention requirements."
    },
    {
      title: "6. Contact Us",
      content: "For privacy questions, contact the school at info@alshomoukh.com or call +968 24 284771."
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="Privacy Policy" 
        subtitle="Our commitment to safeguarding your personal information and maintaining the highest standards of data protection."
      />

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-20">
            {sections.map((section, i) => (
              <FadeIn key={i} delay={0.05 * i}>
                <div className="group">
                  <h2 className="font-bold text-2xl text-navy mb-6 uppercase tracking-tight group-hover:text-gold transition-colors duration-300 border-l-2 border-gold pl-6">
                    {section.title}
                  </h2>
                  <p className="text-navy/70 leading-[1.8] font-medium text-lg pl-6">
                    {section.content}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
