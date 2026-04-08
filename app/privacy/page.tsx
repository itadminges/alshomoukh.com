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
      content: "At Al Shomoukh International School, we are committed to protecting the privacy of our students, parents, and website visitors. We collect personal information when you submit an enquiry through our contact form, admissions portal, or other online applications."
    },
    {
      title: "2. Use of Information",
      content: "The information collected is used solely for the purposeful business of the school, such as responding to enquiries, processing admissions, and communicating school updates. We do not sell or lease your personal information to third parties."
    },
    {
      title: "3. Data Security",
      content: "We implement a variety of security measures to maintain the safety of your personal information. Your data is stored securely and is only accessible by authorized personnel with a legitimate need to use the information."
    },
    {
      title: "4. Cookies & Analytics",
      content: "Our website uses cookies to enhance the user experience and analyze website traffic. This information is used on an aggregated basis and does not identify individual users."
    },
    {
      title: "5. User Rights",
      content: "You have the right to request access to the personal information we hold about you, to request corrections, or to request that we delete your information from our records."
    },
    {
      title: "6. Contact Us",
      content: "If you have any questions or concerns about our privacy policy, please contact us at privacy@alshomoukh.com."
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
