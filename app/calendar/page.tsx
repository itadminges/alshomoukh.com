"use client"

import { useState, useMemo, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Sparkles, 
  Search, 
  Printer, 
  Download, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  FileText,
  AlertCircle,
  CalendarDays
} from "lucide-react"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { 
  ACADEMIC_CALENDAR_2026_2027, 
  CalendarEvent, 
  getUpcomingEvents,
  getEventsGroupedByMonth 
} from "@/lib/academic-calendar"

const ALL_MONTHS = [
  "August 2026",
  "September 2026",
  "October 2026",
  "November 2026",
  "December 2026",
  "January 2027",
  "February 2027",
  "March 2027",
  "April 2027",
  "May 2027",
  "June 2027",
  "July 2027"
]

const FadeIn = ({ children, delay = 0, y = 20 }: { children: React.ReactNode, delay?: number, y?: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function CalendarPage() {
  const [selectedTerm, setSelectedTerm] = useState<string>("All")
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [searchQuery, setSearchQuery] = useState<string>("")

  // Filter events based on selections
  const filteredEvents = useMemo(() => {
    return ACADEMIC_CALENDAR_2026_2027.filter(event => {
      const matchesTerm = selectedTerm === "All" || event.term === selectedTerm
      const matchesCategory = selectedCategory === "All" || 
        (selectedCategory === "academic" && (event.category === "academic" || event.category === "revision" || event.category === "exam")) ||
        (selectedCategory === "holiday" && (event.category === "holiday" || event.category === "observance")) ||
        (selectedCategory === "break" && event.category === "break") ||
        (selectedCategory === "exam" && (event.category === "exam" || event.category === "revision"))
      
      const matchesSearch = searchQuery === "" || 
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.monthFull.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.type.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesTerm && matchesCategory && matchesSearch
    })
  }, [selectedTerm, selectedCategory, searchQuery])

  // Group filtered events by month
  const monthlyGroups = useMemo(() => {
    return ALL_MONTHS.map(monthName => {
      const eventsInMonth = filteredEvents.filter(e => e.monthFull === monthName)
      return {
        monthName,
        events: eventsInMonth
      }
    })
  }, [filteredEvents])

  const upcomingEvents = useMemo(() => getUpcomingEvents(3), [])

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print()
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="Academic Calendar 2026–2027" 
        subtitle="Official school calendar including term commencement dates, revision periods, examinations, student breaks, and national holidays."
      />

      {/* Quick Stats / Term Highlights */}
      <section className="py-12 bg-ivory/50 border-b border-navy/10">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Term 1 Card */}
            <div className="p-6 bg-white border border-navy/10 shadow-sm border-t-4 border-t-gold">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">Term 1</span>
                <span className="text-[9px] font-semibold bg-navy text-white px-2 py-0.5 uppercase">Autumn</span>
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">30 Aug 2026 – 17 Dec 2026</h3>
              <p className="text-xs text-navy/70 leading-relaxed">
                Staggered start dates across Secondary (Aug 30), Primary (Aug 31), and KG (Sep 01). Winter Break begins Dec 20.
              </p>
            </div>

            {/* Term 2 Card */}
            <div className="p-6 bg-white border border-navy/10 shadow-sm border-t-4 border-t-navy">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy">Term 2</span>
                <span className="text-[9px] font-semibold bg-navy/10 text-navy px-2 py-0.5 uppercase">Winter / Spring</span>
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">03 Jan 2027 – 11 Mar 2027</h3>
              <p className="text-xs text-navy/70 leading-relaxed">
                Classes resume Jan 03. Ramadan starts Feb 08*. Term 2 concludes Mar 11, followed by Spring Break (Mar 14–25).
              </p>
            </div>

            {/* Term 3 Card */}
            <div className="p-6 bg-white border border-navy/10 shadow-sm border-t-4 border-t-gold">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">Term 3</span>
                <span className="text-[9px] font-semibold bg-gold text-navy px-2 py-0.5 uppercase">Summer</span>
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">28 Mar 2027 – 22 Jun 2027</h3>
              <p className="text-xs text-navy/70 leading-relaxed">
                Classes commence Mar 28. Final revision (Jun 13–15), Term 3 Exams (Jun 16–22), and student year-end on Jun 22.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Main Calendar Content */}
      <section className="py-20">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          
          {/* Controls Bar: Filters, Search, Print */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 pb-8 mb-12 border-b border-navy/10">
            
            {/* Term Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-navy/50 mr-2">Filter Term:</span>
              {["All", "Term 1", "Term 2", "Term 3"].map((term) => (
                <button
                  key={term}
                  onClick={() => setSelectedTerm(term)}
                  className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all ${
                    selectedTerm === term
                      ? "bg-navy text-gold shadow-sm"
                      : "bg-ivory/50 text-navy/60 hover:text-navy hover:bg-ivory"
                  }`}
                >
                  {term === "All" ? "All Terms" : term}
                </button>
              ))}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-navy/50 mr-2">Category:</span>
              {[
                { id: "All", label: "All Events" },
                { id: "academic", label: "Academic" },
                { id: "exam", label: "Exams & Revision" },
                { id: "break", label: "Breaks" },
                { id: "holiday", label: "Holidays" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest transition-all ${
                    selectedCategory === cat.id
                      ? "bg-gold text-navy shadow-sm"
                      : "bg-navy/5 text-navy/60 hover:text-navy hover:bg-navy/10"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input & Print Actions */}
            <div className="flex items-center gap-3">
              <div className="relative flex-grow sm:w-64">
                <Search className="w-4 h-4 text-navy/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search events, exams, dates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-ivory/30 border border-navy/10 text-xs text-navy placeholder:text-navy/40 focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              <Button
                variant="outline"
                onClick={handlePrint}
                className="border-navy/15 text-navy hover:bg-navy hover:text-white text-[10px] font-bold tracking-widest uppercase h-9 px-4 hidden sm:flex items-center gap-2"
              >
                <Printer className="w-3.5 h-3.5" />
                Print
              </Button>
            </div>

          </div>

          {/* Monthly Calendar Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {monthlyGroups.map((group, idx) => {
              const hasEvents = group.events.length > 0
              return (
                <FadeIn key={group.monthName} delay={0.05 * (idx % 3)}>
                  <div className={`h-full flex flex-col bg-white border transition-all duration-300 ${
                    hasEvents 
                      ? "border-navy/10 hover:border-gold/50 shadow-sm hover:shadow-md" 
                      : "border-navy/5 bg-ivory/20 opacity-80"
                  }`}>
                    
                    {/* Month Header */}
                    <div className="p-5 bg-navy text-white flex items-center justify-between border-b border-gold/30">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="w-4 h-4 text-gold" />
                        <h3 className="font-bold text-sm tracking-widest uppercase text-white">
                          {group.monthName}
                        </h3>
                      </div>
                      <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 bg-gold text-navy">
                        {hasEvents ? `${group.events.length} Event${group.events.length > 1 ? 's' : ''}` : "Regular Class"}
                      </span>
                    </div>

                    {/* Events in Month */}
                    <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                      {hasEvents ? (
                        <div className="space-y-4">
                          {group.events.map((event) => (
                            <div 
                              key={event.id}
                              className="group/item flex items-start gap-4 p-3 bg-ivory/30 hover:bg-ivory-dark/60 border border-navy/5 transition-colors"
                            >
                              {/* Date Box */}
                              <div className="w-14 h-14 bg-navy text-white flex flex-col items-center justify-center shrink-0 border-l-2 border-gold">
                                <span className="text-base font-extrabold text-gold leading-none">{event.day}</span>
                                <span className="text-[7px] font-bold tracking-widest uppercase opacity-70 mt-0.5">{event.month}</span>
                              </div>

                              {/* Details */}
                              <div className="flex-grow min-w-0">
                                <div className="flex items-center gap-2 mb-1 flex-wrap">
                                  <span className={`text-[7px] font-extrabold uppercase px-2 py-0.5 tracking-wider ${
                                    event.category === "holiday" 
                                      ? "bg-gold/20 text-gold-dark border border-gold/40" 
                                      : event.category === "break"
                                      ? "bg-navy/10 text-navy"
                                      : event.category === "exam" || event.category === "revision"
                                      ? "bg-amber-100 text-amber-900 border border-amber-300"
                                      : "bg-navy text-white"
                                  }`}>
                                    {event.type}
                                  </span>
                                  <span className="text-[7px] font-bold text-navy/40 uppercase">
                                    {event.term}
                                  </span>
                                </div>
                                <h4 className="font-bold text-xs text-navy leading-snug group-hover/item:text-gold transition-colors">
                                  {event.title}
                                </h4>
                                {event.description && (
                                  <p className="text-[10px] text-navy/60 font-medium leading-relaxed mt-1">
                                    {event.description}
                                  </p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="py-8 text-center flex flex-col items-center justify-center text-navy/40">
                          <Clock className="w-6 h-6 mb-2 opacity-30" />
                          <p className="text-xs font-semibold uppercase tracking-wider">No specific events shown</p>
                          <p className="text-[10px] text-navy/40 mt-1 max-w-[200px]">
                            {group.monthName === "April 2027" 
                              ? "Term 3 regular curriculum and classes continue."
                              : "Summer break for students."}
                          </p>
                        </div>
                      )}
                    </div>

                  </div>
                </FadeIn>
              )
            })}
          </div>

          {/* Important Disclaimers & Notes */}
          <div className="mt-16 p-8 bg-navy text-white border-l-4 border-gold shadow-lg">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-gold shrink-0 mt-0.5" />
              <div className="space-y-2 text-xs">
                <h4 className="font-bold text-gold uppercase tracking-wider text-sm">
                  Important Notes on Academic & Islamic Dates
                </h4>
                <ul className="text-ivory/80 space-y-1.5 list-disc list-inside leading-relaxed text-[11px]">
                  <li>
                    <strong>Islamic & National Holidays (*):</strong> All dates marked with an asterisk are subject to the official sighting of the moon and formal announcements issued by the relevant government authorities in the Sultanate of Oman.
                  </li>
                  <li>
                    <strong>Holy Month of Ramadan:</strong> Special Ramadan school hours and timetable adjustments will be communicated to parents prior to commencement on February 08, 2027*.
                  </li>
                  <li>
                    <strong>Examination Schedules:</strong> Detailed individual exam timetables for Cambridge IGCSE, Pearson Edexcel, and school assessments will be issued to students by their respective academic coordinators.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Actions Banner */}
          <div className="mt-12 p-8 bg-ivory/50 border border-navy/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h3 className="font-bold text-lg text-navy uppercase tracking-tight">Need assistance or have questions?</h3>
              <p className="text-xs text-navy/60 font-medium mt-1">
                For queries regarding admissions, school schedules, or parent consultations, our administrative team is here to help.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link href="/contact">
                <Button className="bg-navy text-white hover:bg-gold hover:text-navy text-[10px] font-bold tracking-widest uppercase h-11 px-6 rounded-none transition-all">
                  Contact School
                </Button>
              </Link>
              <Link href="https://portal.alshomoukh.com/" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gold text-navy hover:bg-navy hover:text-white text-[10px] font-bold tracking-widest uppercase h-11 px-6 rounded-none transition-all">
                  Parent Portal
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
