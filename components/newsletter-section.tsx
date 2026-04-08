"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone, Calendar } from "lucide-react"

export function NewsletterSection() {
  const containerRef = useRef<HTMLElement>(null)
  
  return (
    <section 
      ref={containerRef}
      className="relative py-24 bg-white overflow-hidden"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
        <div className="relative bg-navy p-10 lg:p-16 overflow-hidden">
          {/* Background Highlight */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_30%,#C19D76_0%,transparent_70%)] opacity-20 pointer-events-none" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            
            {/* CTA Content */}
            <div className="text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-gold font-bold tracking-[0.3em] uppercase text-[8px]">
                    Admissions Open
                  </span>
                  <div className="h-[1px] w-6 bg-gold/30" />
                </div>
                
                <h2 className="text-xl md:text-2xl lg:text-3xl leading-[1.2] mb-6 font-bold uppercase tracking-tight">
                  Join the Al Shomoukh <br />
                  <span className="text-gold">Learning Community</span>
                </h2>
                
                <p className="text-[10px] md:text-xs text-ivory/60 leading-relaxed mb-10 max-w-sm font-medium">
                  We are now accepting applications for the upcoming academic year. Speak with our team to explore the possibilities.
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                  <Button className="bg-gold text-white hover:bg-gold/90 h-12 px-8 text-[9px] font-bold tracking-[0.2em] uppercase rounded-none transition-all">
                    Apply Now
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-navy h-12 px-8 text-[9px] font-bold tracking-[0.2em] uppercase rounded-none transition-all">
                    Inquiry
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Quick Contact Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Phone, title: "Call Us", detail: "+968 2442 3456" },
                { icon: Mail, title: "Email", detail: "info@alshomoukh.com" },
                { icon: Calendar, title: "Book a Tour", detail: "Monday - Thursday" },
                { icon: Phone, title: "WhatsApp", detail: "+968 9123 4567" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group"
                >
                  <item.icon className="h-3 w-3 text-gold mb-3" />
                  <h4 className="text-[8px] font-bold text-gold uppercase tracking-widest mb-1">{item.title}</h4>
                  <p className="text-[11px] font-bold text-white uppercase">{item.detail}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
