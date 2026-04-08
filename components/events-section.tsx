"use client"

import { useRef } from "react"
import { Calendar, ArrowRight, Rss } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const events = [
  {
    day: "02",
    month: "APR",
    year: "2026",
    title: "School Community Engagement Day",
    type: "Community Event"
  },
  {
    day: "13",
    month: "APR",
    year: "2026",
    title: "Parent-Teacher Consultation",
    type: "Academic"
  },
  {
    day: "25",
    month: "APR",
    year: "2026",
    title: "Annual Sports Achievement Awards",
    type: "Student Life"
  },
]

export function EventsSection() {
  const containerRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-white overflow-hidden"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Header & Sidebar */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="text-gold font-bold tracking-[0.3em] uppercase text-[9px]">
                Calendar of Events
              </span>
              <div className="h-[1px] w-12 bg-gold/30" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-3xl lg:text-4xl text-navy leading-[1.2] mb-10 tracking-tight font-bold uppercase"
            >
              Life at <br />
              <span className="text-gold">Al Shomoukh</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[11px] md:text-xs text-navy/60 leading-relaxed mb-12 font-medium max-w-xl"
            >
              Immerse yourself in our vibrant academic and social calendar. From prestigious ceremonies to community gatherings.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-8 bg-navy text-white relative group overflow-hidden"
            >
              <h4 className="text-sm mb-4 font-bold uppercase text-gold">The Weekly Chronicle</h4>
              <p className="text-[10px] text-ivory/60 mb-8 font-medium leading-relaxed">Subscribe to our digital bulletin for exclusive school updates.</p>
              <Button className="w-full bg-gold text-white hover:bg-gold/90 h-12 rounded-none text-[9px] font-bold tracking-[0.2em] uppercase transition-all">
                Subscribe
              </Button>
            </motion.div>
          </div>

          {/* Events List */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex flex-col sm:flex-row gap-6 p-8 bg-white hover:bg-ivory-dark transition-colors duration-500 border border-navy/5"
                >
                  {/* Styled Date Block */}
                  <div className="flex flex-col items-center justify-center min-w-[70px] h-[70px] bg-navy text-white transition-all duration-500 shrink-0">
                    <span className="text-xl font-bold text-gold">{event.day}</span>
                    <span className="text-[8px] font-bold tracking-[0.3em] uppercase opacity-60">{event.month}</span>
                  </div>

                  {/* Event Details */}
                  <div className="flex-grow flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[8px] font-bold tracking-[0.2em] text-gold uppercase">
                        {event.type}
                      </span>
                    </div>
                    <h3 className="text-base md:text-lg text-navy leading-tight group-hover:text-gold transition-colors mb-1 font-bold uppercase">
                      {event.title}
                    </h3>
                  </div>

                  {/* Arrow CTA */}
                  <div className="flex items-center sm:justify-end">
                    <div className="w-10 h-10 rounded-full border border-navy/10 flex items-center justify-center text-navy group-hover:bg-gold group-hover:text-white group-hover:border-gold transition-all duration-500">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Actions */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex justify-center lg:justify-start"
            >
              <Button variant="ghost" className="text-navy hover:text-gold text-[9px] font-bold tracking-[0.2em] uppercase group flex items-center gap-2">
                All Calendar
                <Calendar className="h-3 w-3" />
              </Button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

