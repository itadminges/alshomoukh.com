"use client"

import { useRef, useState, useMemo } from "react"
import Link from "next/link"
import { Calendar, ArrowRight, Sparkles, Clock, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Scroll3DCard } from "@/components/scroll-3d"
import { SectionSpirals } from "@/components/decorative-spirals"
import { ACADEMIC_CALENDAR_2026_2027, getUpcomingEvents } from "@/lib/academic-calendar"

type FilterTab = "upcoming" | "term-1" | "term-2" | "term-3" | "all"

export function EventsSection() {
  const containerRef = useRef<HTMLElement>(null)
  const [activeTab, setActiveTab] = useState<FilterTab>("upcoming")

  // Auto-calculated upcoming events (re-computed client-side or on render)
  const displayedEvents = useMemo(() => {
    switch (activeTab) {
      case "upcoming":
        return getUpcomingEvents(4)
      case "term-1":
        return ACADEMIC_CALENDAR_2026_2027.filter(e => e.term === "Term 1")
      case "term-2":
        return ACADEMIC_CALENDAR_2026_2027.filter(e => e.term === "Term 2")
      case "term-3":
        return ACADEMIC_CALENDAR_2026_2027.filter(e => e.term === "Term 3")
      case "all":
      default:
        return ACADEMIC_CALENDAR_2026_2027
    }
  }, [activeTab])

  const tabs: { id: FilterTab; label: string }[] = [
    { id: "upcoming", label: "Upcoming" },
    { id: "term-1", label: "Term 1" },
    { id: "term-2", label: "Term 2" },
    { id: "term-3", label: "Term 3" },
    { id: "all", label: "Full Year" },
  ]

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-white overflow-hidden scroll-3d-scene"
    >
      <SectionSpirals variant="light" />
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Header & Sidebar */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="text-gold font-bold tracking-[0.3em] uppercase text-[9px] flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-gold" />
                Academic Calendar 2026–2027
              </span>
              <div className="h-[1px] w-12 bg-gold/30" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-3xl lg:text-4xl text-navy leading-[1.2] mb-4 tracking-tight font-bold uppercase"
            >
              Life at <br />
              <span className="text-gold">Al Shomoukh</span>
            </motion.h2>

            <p className="text-sm md:text-base text-gold font-bold mb-4">
              Key Dates, Term Schedules & School Milestones
            </p>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[11px] md:text-xs text-navy/70 leading-relaxed mb-8 font-medium max-w-xl"
            >
              Stay synchronized with our comprehensive academic schedule, term commencement dates, revision periods, examination windows, and national holidays throughout the 2026–2027 academic year.
            </motion.p>

            {/* Quick Summary Highlights Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 bg-navy text-white relative group overflow-hidden border border-gold/20 shadow-xl mb-8"
            >
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-gold" />
                <h4 className="text-sm font-bold uppercase text-gold tracking-wider">Academic Year at a Glance</h4>
              </div>
              <ul className="text-[11px] text-ivory/80 space-y-2.5 font-medium mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span><strong>Term 1:</strong> Aug 30, 2026 – Dec 17, 2026</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span><strong>Term 2:</strong> Jan 03, 2027 – Mar 11, 2027</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span><strong>Term 3:</strong> Mar 28, 2027 – Jun 22, 2027</span>
                </li>
              </ul>
              <Link href="/calendar">
                <Button className="w-full bg-gold text-navy hover:bg-white hover:text-navy h-11 rounded-none text-[9px] font-bold tracking-[0.2em] uppercase transition-all shadow-md">
                  View Full Calendar
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Events List & Interactive Filter */}
          <div className="lg:col-span-7">
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 pb-4 mb-6 border-b border-navy/10">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                      isActive
                        ? "bg-navy text-gold shadow-sm"
                        : "bg-ivory/40 text-navy/60 hover:text-navy hover:bg-ivory"
                    }`}
                  >
                    {tab.label}
                    {tab.id === "upcoming" && (
                      <span className="ml-1.5 inline-block w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Event Cards */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {displayedEvents.map((event, index) => (
                  <Scroll3DCard
                    key={event.id}
                    index={index}
                  >
                    <Link 
                      href="/calendar"
                      className="group flex flex-col sm:flex-row gap-6 p-6 md:p-7 bg-white hover:bg-ivory/40 transition-all duration-500 border border-navy/10 hover:border-gold/40 shadow-sm hover:shadow-md block"
                    >
                      {/* Styled Date Block */}
                      <div className="flex flex-col items-center justify-center min-w-[80px] h-[80px] bg-navy text-white transition-all duration-500 shrink-0 border-l-4 border-gold">
                        <span className="text-xl md:text-2xl font-bold text-gold tracking-tight">{event.day}</span>
                        <span className="text-[9px] font-bold tracking-[0.25em] uppercase opacity-75">{event.month}</span>
                        <span className="text-[8px] font-medium opacity-50">{event.year}</span>
                      </div>

                      {/* Event Details */}
                      <div className="flex-grow flex flex-col justify-center">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={`text-[8px] font-bold tracking-[0.2em] uppercase px-2.5 py-0.5 ${
                            event.category === "holiday" 
                              ? "bg-gold/15 text-gold border border-gold/30" 
                              : event.category === "break"
                              ? "bg-navy/10 text-navy"
                              : event.category === "exam" || event.category === "revision"
                              ? "bg-amber-100 text-amber-900 border border-amber-300"
                              : "bg-navy text-white"
                          }`}>
                            {event.type}
                          </span>
                          <span className="text-[8px] font-bold tracking-[0.2em] text-navy/40 uppercase">
                            {event.term}
                          </span>
                        </div>
                        <h3 className="text-base md:text-lg text-navy leading-snug group-hover:text-gold transition-colors font-bold uppercase">
                          {event.title}
                        </h3>
                        {event.description && (
                          <p className="text-[11px] text-navy/60 font-medium line-clamp-1 mt-1">
                            {event.description}
                          </p>
                        )}
                      </div>

                      {/* Arrow CTA */}
                      <div className="flex items-center sm:justify-end shrink-0">
                        <div className="w-10 h-10 rounded-full border border-navy/10 flex items-center justify-center text-navy group-hover:bg-gold group-hover:text-navy group-hover:border-gold transition-all duration-500">
                          <ArrowRight className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    </Link>
                  </Scroll3DCard>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Asterisk note for Islamic/National holidays */}
            <p className="mt-4 text-[10px] text-navy/50 italic">
              Please confirm time-sensitive dates through the Parent Portal. Dates marked with an asterisk are subject to official moon sightings and Sultanate of Oman government announcements.
            </p>

            {/* Bottom Actions */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-navy/5"
            >
              <Link href="/calendar">
                <Button variant="ghost" className="text-navy hover:text-gold text-[9px] font-bold tracking-[0.2em] uppercase group flex items-center gap-2 p-0">
                  <Calendar className="h-3.5 w-3.5 text-gold" />
                  View Complete 2026–2027 Calendar
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="/news">
                <span className="text-[9px] font-bold tracking-[0.2em] text-navy/50 hover:text-gold uppercase transition-colors">
                  Latest School News & Stories →
                </span>
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
