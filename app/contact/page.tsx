"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export default function ContactPage() {
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
            Contact Us
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Form Column */}
          <div className="reveal opacity-0 -translate-x-8 transition-all duration-700">
            <h2 className="font-bold text-3xl text-primary mb-8 tracking-tight uppercase">General Enquiry</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input placeholder="Full Name" className="border-border/50 h-12 rounded-none" />
                <Input placeholder="Email Address" type="email" className="border-border/50 h-12 rounded-none" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input placeholder="Phone Number" className="border-border/50 h-12 rounded-none" />
                <Input placeholder="Subject" className="border-border/50 h-12 rounded-none" />
              </div>
              <Textarea placeholder="Message" className="border-border/50 min-h-[150px] rounded-none" />
              <Button className="bg-secondary text-white hover:bg-secondary/90 w-full h-12 uppercase tracking-widest font-bold rounded-none flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Submit
              </Button>
            </form>
          </div>

          {/* Info Column */}
          <div className="reveal opacity-0 translate-x-8 transition-all duration-700 delay-200">
            <h2 className="font-bold text-3xl text-primary mb-8 tracking-tight uppercase">Contact Information</h2>
            <div className="space-y-12">
              <div className="flex gap-6 items-start">
                <div className="p-3 bg-secondary/10 text-secondary border border-secondary/20">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-xl uppercase mb-2">Call Us</h4>
                  <p className="text-primary/70 font-medium">+968 [Add school number]</p>
                  <p className="text-primary/70 font-medium">+968 [Add mobile number]</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="p-3 bg-secondary/10 text-secondary border border-secondary/20">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-xl uppercase mb-2">Email Us</h4>
                  <p className="text-primary/70 font-medium">info@alshomoukh.com</p>
                  <p className="text-primary/70 font-medium">admission@alshomoukh.com</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="p-3 bg-secondary/10 text-secondary border border-secondary/20">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-xl uppercase mb-2">Our Location</h4>
                  <p className="text-primary/70 font-medium max-w-[300px]">
                    [Add full school address in Muscat, Oman]
                  </p>
                </div>
              </div>
            </div>
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
