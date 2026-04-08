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

export default function TermsPage() {
  const sections = [
    {
      title: "1. Website Usage",
      content: "Welcome to the Al Shomoukh International School website. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions of use. If you disagree with any part of these terms, please do not use our website."
    },
    {
      title: "2. Intellectual Property",
      content: "All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Al Shomoukh International School and is protected by international copyright laws. Any unauthorized use of the content is strictly prohibited."
    },
    {
      title: "3. Acceptable Use",
      content: "You may not use this website in any way that causes or may cause damage to the website or impairment of the availability or accessibility of the website; or in any way which is unlawful, illegal, fraudulent, or harmful."
    },
    {
      title: "4. Disclaimer",
      content: "The information contained on this website is for general information purposes only. While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information."
    },
    {
      title: "5. Limitation of Liability",
      content: "Al Shomoukh International School will not be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website."
    },
    {
      title: "6. Governing Law",
      content: "These terms and conditions are governed by and construed in accordance with the laws of the Sultanate of Oman. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of Oman."
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="Terms & Conditions" 
        subtitle="Governing the use of our digital platforms and your interaction with Al Shomoukh International School's online services."
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
