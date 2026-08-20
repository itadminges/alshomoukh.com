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
  const handleEnquiry = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = String(form.get("subject") || "General enquiry")
    const body = [
      `Name: ${String(form.get("name") || "")}`,
      `Email: ${String(form.get("email") || "")}`,
      `Phone: ${String(form.get("phone") || "")}`,
      "",
      String(form.get("message") || ""),
    ].join("\n")

    window.location.href = `mailto:info@alshomoukh.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

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
              <form className="space-y-6" onSubmit={handleEnquiry}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input name="name" aria-label="Full name" required autoComplete="name" placeholder="Full Name" className="border-navy/10 h-12 rounded-none focus:border-gold transition-colors" />
                  <Input name="email" aria-label="Email address" required autoComplete="email" placeholder="Email Address" type="email" className="border-navy/10 h-12 rounded-none focus:border-gold transition-colors" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input name="phone" aria-label="Phone number" autoComplete="tel" placeholder="Phone Number" className="border-navy/10 h-12 rounded-none focus:border-gold transition-colors" />
                  <Input name="subject" aria-label="Subject" required placeholder="Subject" className="border-navy/10 h-12 rounded-none focus:border-gold transition-colors" />
                </div>
                <Textarea name="message" aria-label="Message" required placeholder="Message" className="border-navy/10 min-h-[150px] rounded-none focus:border-gold transition-colors" />
                <Button type="submit" className="bg-gold text-white hover:bg-gold/90 w-full h-14 uppercase tracking-[0.25em] font-bold rounded-none flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-gold/20">
                  <Send className="w-4 h-4" />
                  Prepare Email
                </Button>
                <p className="text-xs font-medium leading-relaxed text-navy/55">
                  This button opens your email application with the enquiry prepared. The message is sent only after you review and send it there.
                </p>
              </form>
            </div>
          </FadeIn>

          {/* Info Column */}
          <FadeIn x={40} delay={0.2}>
            <div className="space-y-12 h-full flex flex-col justify-center">
              <h2 className="font-bold text-3xl text-navy mb-4 tracking-tight uppercase">Get in Touch</h2>
              <p className="text-navy/80 text-base leading-[1.8] font-medium mb-4">
                We encourage you to visit the school and take a tour around as this is the best way to get a true insight of Al Shomoukh International Private School.
              </p>
              <p className="text-navy/80 text-base leading-[1.8] font-medium mb-10 bg-ivory/50 p-6 border-l-4 border-gold shadow-sm">
                Please send an email to <a href="mailto:admission@alshomoukh.com" className="text-gold font-bold hover:underline">admission@alshomoukh.com</a> or call <a href="tel:+96824284771" className="text-gold font-bold hover:underline">+968 24 284771</a> to discuss convenient dates and times for your visit (Sunday – Thursday).
              </p>
              
              <div className="space-y-10">
                <div className="flex gap-6 items-start group">
                  <div className="p-4 bg-navy text-gold rounded-none transition-colors group-hover:bg-gold group-hover:text-white">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-xl uppercase mb-2 tracking-tight">Call Us</h4>
                    <p className="text-navy/70 font-medium">
                      <a href="tel:+96824284771" className="hover:text-gold transition-colors">+968 24 284771</a>
                    </p>
                    <p className="text-navy/70 font-bold text-gold">Sunday – Thursday: 7:30 AM – 3:30 PM</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="p-4 bg-navy text-gold rounded-none transition-colors group-hover:bg-gold group-hover:text-white">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-xl uppercase mb-2 tracking-tight">Email Us</h4>
                    <p className="text-navy/70 font-medium">
                      <a href="mailto:admission@alshomoukh.com" className="hover:text-gold transition-colors">admission@alshomoukh.com</a> (Admissions)
                    </p>
                    <p className="text-navy/70 font-medium">
                      <a href="mailto:info@alshomoukh.com" className="hover:text-gold transition-colors">info@alshomoukh.com</a> (General Inquiries)
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="p-4 bg-navy text-gold rounded-none transition-colors group-hover:bg-gold group-hover:text-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-xl uppercase mb-2 tracking-tight">Our Location</h4>
                    <p className="text-navy/70 font-medium max-w-[350px] leading-relaxed">
                      Al Shomoukh International Private School<br />
                      Road 106, Way 208, Building 323<br />
                      Hay Al Hail, Al Jadeed Al Hail South<br />
                      P.O. Box 1756, PC: 111, Airport Heights<br />
                      Muscat, Sultanate of Oman
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4997.835920105378!2d58.22425847533191!3d23.620108478759505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8de5b4dda92199%3A0xd6218124d8f78b32!2sAl%20Shomoukh%20International%20Private%20School!5e1!3m2!1sen!2som!4v1785906801032!5m2!1sen!2som" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </section>
    </main>
  )
}
