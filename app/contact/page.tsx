"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send } from "lucide-react"
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

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="Contact Us" 
        subtitle="We are here to help. Reach out to us for any enquiries or to schedule a visit to our campus."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Form Column */}
          <FadeIn x={-40}>
            <div className="bg-white p-10 border border-navy/5 shadow-sm">
              <h2 className="font-bold text-3xl text-navy mb-8 tracking-tight uppercase">General Enquiry</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input placeholder="Full Name" className="border-navy/10 h-12 rounded-none focus:border-gold transition-colors" />
                  <Input placeholder="Email Address" type="email" className="border-navy/10 h-12 rounded-none focus:border-gold transition-colors" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input placeholder="Phone Number" className="border-navy/10 h-12 rounded-none focus:border-gold transition-colors" />
                  <Input placeholder="Subject" className="border-navy/10 h-12 rounded-none focus:border-gold transition-colors" />
                </div>
                <Textarea placeholder="Message" className="border-navy/10 min-h-[150px] rounded-none focus:border-gold transition-colors" />
                <Button className="bg-gold text-white hover:bg-gold/90 w-full h-14 uppercase tracking-[0.25em] font-bold rounded-none flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-gold/20">
                  <Send className="w-4 h-4" />
                  Submit Enquiry
                </Button>
              </form>
            </div>
          </FadeIn>

          {/* Info Column */}
          <FadeIn x={40} delay={0.2}>
            <div className="space-y-12 h-full flex flex-col justify-center">
              <h2 className="font-bold text-3xl text-navy mb-4 tracking-tight uppercase">Get in Touch</h2>
              <p className="text-navy/60 font-medium mb-12">
                Whether you're a prospective parent, a community member, or looking for career opportunities, we'd love to hear from you.
              </p>
              
              <div className="space-y-10">
                <div className="flex gap-6 items-start group">
                  <div className="p-4 bg-navy text-gold rounded-none transition-colors group-hover:bg-gold group-hover:text-white">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-xl uppercase mb-2 tracking-tight">Call Us</h4>
                    <p className="text-navy/70 font-medium">+968 2452 7000</p>
                    <p className="text-navy/70 font-bold text-gold">Available 7:30 AM - 3:30 PM</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="p-4 bg-navy text-gold rounded-none transition-colors group-hover:bg-gold group-hover:text-white">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-xl uppercase mb-2 tracking-tight">Email Us</h4>
                    <p className="text-navy/70 font-medium">info@alshomoukh.com</p>
                    <p className="text-navy/70 font-medium">admission@alshomoukh.com</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="p-4 bg-navy text-gold rounded-none transition-colors group-hover:bg-gold group-hover:text-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-xl uppercase mb-2 tracking-tight">Our Location</h4>
                    <p className="text-navy/70 font-medium max-w-[350px] leading-relaxed">
                      Al Shomoukh International School<br />
                      Al Mouj, Muscat<br />
                      Sultanate of Oman
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-ivory grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.5441113!2d58.2690!3d23.6191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM3JzA4LjgiTiA1OMKwMTYnMDguNCJF!5e0!3m2!1sen!2som!4v1620000000000!5m2!1sen!2som" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
        />
      </section>
    </main>
  )
}
