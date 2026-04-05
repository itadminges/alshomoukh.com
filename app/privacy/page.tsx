"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useEffect, useRef } from "react"

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-lg text-primary/70 leading-[1.8] font-medium space-y-12">
            <div>
                <h2 className="font-bold text-3xl text-primary mb-6 uppercase tracking-tight">1. Information Collection</h2>
                <p>At Al Shomoukh International School, we are committed to protecting the privacy of our students, parents, and website visitors. We collect personal information when you submit an enquiry through our contact form, admissions portal, or other online applications.</p>
            </div>
            <div>
                <h2 className="font-bold text-3xl text-primary mb-6 uppercase tracking-tight">2. Use of Information</h2>
                <p>The information collected is used solely for the purposeful business of the school, such as responding to enquiries, processing admissions, and communicating school updates. We do not sell or lease your personal information to third parties.</p>
            </div>
            <div>
                <h2 className="font-bold text-3xl text-primary mb-6 uppercase tracking-tight">3. Data Security</h2>
                <p>We implement a variety of security measures to maintain the safety of your personal information. Your data is stored securely and is only accessible by authorized personnel with a legitimate need to use the information.</p>
            </div>
            <div>
                <h2 className="font-bold text-3xl text-primary mb-6 uppercase tracking-tight">4. Cookies & Analytics</h2>
                <p>Our website uses cookies to enhance the user experience and analyze website traffic. This information is used on an aggregated basis and does not identify individual users.</p>
            </div>
            <div>
                <h2 className="font-bold text-3xl text-primary mb-6 uppercase tracking-tight">5. User Rights</h2>
                <p>You have the right to request access to the personal information we hold about you, to request corrections, or to request that we delete your information from our records.</p>
            </div>
            <div>
                <h2 className="font-bold text-3xl text-primary mb-6 uppercase tracking-tight">6. Contact Us</h2>
                <p>If you have any questions or concerns about our privacy policy, please contact us at <span className="text-secondary font-bold">privacy@alshomoukh.com</span>.</p>
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
