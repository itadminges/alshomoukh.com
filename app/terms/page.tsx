"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useEffect, useRef } from "react"

export default function TermsPage() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
      })
    }, { threshold: 0.1 })
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-white" ref={sectionRef}>
      <Navbar />
      <section className="bg-primary py-32 mt-[76px] relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center relative z-10">
          <h1 className="reveal opacity-0 translate-y-8 transition-all duration-700 font-bold text-5xl md:text-6xl text-white tracking-tight uppercase">
            Terms & Conditions
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-lg text-primary/70 leading-[1.8] font-medium space-y-12">
            <div>
                <h2 className="font-bold text-3xl text-primary mb-6 uppercase tracking-tight">1. Website Usage</h2>
                <p>Welcome to the Al Shomoukh International School website. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions of use. If you disagree with any part of these terms, please do not use our website.</p>
            </div>
            <div>
                <h2 className="font-bold text-3xl text-primary mb-6 uppercase tracking-tight">2. Intellectual Property</h2>
                <p>All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Al Shomoukh International School and is protected by international copyright laws. Any unauthorized use of the content is strictly prohibited.</p>
            </div>
            <div>
                <h2 className="font-bold text-3xl text-primary mb-6 uppercase tracking-tight">3. Acceptable Use</h2>
                <p>You may not use this website in any way that causes or may cause damage to the website or impairment of the availability or accessibility of the website; or in any way which is unlawful, illegal, fraudulent, or harmful.</p>
            </div>
            <div>
                <h2 className="font-bold text-3xl text-primary mb-6 uppercase tracking-tight">4. Disclaimer</h2>
                <p>The information contained on this website is for general information purposes only. While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information.</p>
            </div>
            <div>
                <h2 className="font-bold text-3xl text-primary mb-6 uppercase tracking-tight">5. Limitation of Liability</h2>
                <p>Al Shomoukh International School will not be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.</p>
            </div>
            <div>
                <h2 className="font-bold text-3xl text-primary mb-6 uppercase tracking-tight">6. Governing Law</h2>
                <p>These terms and conditions are governed by and construed in accordance with the laws of the Sultanate of Oman. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of Oman.</p>
            </div>
        </div>
      </section>
      <Footer />
      <style jsx>{`
        .animate-in { opacity: 1 !important; transform: translate(0) !important; }
      `}</style>
    </main>
  )
}
