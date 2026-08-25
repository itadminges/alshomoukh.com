"use client"

import { useState } from "react"
import { Calendar, Clock, Phone, Mail, CheckCircle2, Send, Sparkles } from "lucide-react"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { Scroll3DReveal } from "@/components/scroll-3d"
import { SectionSpirals } from "@/components/decorative-spirals"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function BookATourPage() {
  const [emailPrepared, setEmailPrepared] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const body = [
      `Parent name: ${String(form.get("parentName") || "")}`,
      `Email: ${String(form.get("email") || "")}`,
      `Phone / WhatsApp: ${String(form.get("phone") || "")}`,
      `Grade / year group: ${String(form.get("grade") || "")}`,
      `Preferred date: ${String(form.get("date") || "")}`,
      `Preferred time: ${String(form.get("time") || "")}`,
      "",
      `Questions or comments: ${String(form.get("comments") || "")}`,
    ].join("\n")

    setEmailPrepared(true)
    window.location.href = `mailto:admission@alshomoukh.com?subject=${encodeURIComponent("Campus Tour Request")}&body=${encodeURIComponent(body)}`
  }

  return (
    <main className="min-h-screen bg-white overflow-hidden scroll-3d-scene">
      {/* Hero Section */}
      <PageHero 
        title="Book a Campus Tour" 
        subtitle="Experience firsthand what makes Al Shomoukh International Private School a place of excellence, community, and growth."
      />

      {/* Main Content & Booking Form */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <SectionSpirals variant="light" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
            
            {/* Tour Info Left Column */}
            <div className="lg:col-span-5 space-y-10">
              <Scroll3DReveal rotateAmount={12} depth={40}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">
                    Personalized Visit
                  </span>
                  <div className="h-[1px] w-12 bg-gold/30" />
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy font-bold uppercase tracking-tight leading-[1.15] mb-6">
                  Welcome to Our <br />
                  <span className="text-gold">Campus</span>
                </h2>

                <p className="text-navy/80 text-base md:text-lg leading-[1.8] font-medium mb-8">
                  We warmly invite prospective families to visit Al Shomoukh International Private School. A personal tour is the best way to discover our modern facilities, experience our supportive classroom environments, and meet our dedicated academic team.
                </p>

                <div className="space-y-6 bg-ivory/40 p-8 border-l-4 border-gold shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-navy text-gold rounded-none shrink-0">
                      <Calendar className="w-5 h-5 shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-base uppercase tracking-tight mb-1">Tour Days</h4>
                      <p className="text-navy/70 text-sm font-medium">Sunday – Thursday</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-navy text-gold rounded-none shrink-0">
                      <Clock className="w-5 h-5 shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-base uppercase tracking-tight mb-1">Visiting Hours</h4>
                      <p className="text-navy/70 text-sm font-medium">7:30 AM – 3:30 PM (By Appointment)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-navy text-gold rounded-none shrink-0">
                      <Phone className="w-5 h-5 shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-base uppercase tracking-tight mb-1">Direct Phone</h4>
                      <p className="text-navy/70 text-sm font-medium">
                        <a href="tel:+96824284756" className="hover:text-gold transition-colors">+968 24284756</a><br />
                        <a href="tel:+96824284771" className="hover:text-gold transition-colors">+968 24284771</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-navy text-gold rounded-none shrink-0">
                      <Mail className="w-5 h-5 shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-base uppercase tracking-tight mb-1">Admissions Email</h4>
                      <p className="text-navy/70 text-sm font-medium">
                        <a href="mailto:admission@alshomoukh.com" className="hover:text-gold transition-colors">admission@alshomoukh.com</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="p-6 bg-navy text-white flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-gold text-sm uppercase tracking-wider mb-1">Can’t visit in person today?</h4>
                      <p className="text-ivory/70 text-xs font-medium">Contact the school to ask about current remote visit or information options.</p>
                    </div>
                    <Button asChild className="bg-gold text-white hover:bg-gold/90 text-[10px] font-bold tracking-widest uppercase rounded-none h-11 px-5">
                      <Link href="/contact">
                        Inquire
                      </Link>
                    </Button>
                  </div>
                </div>
              </Scroll3DReveal>
            </div>

            {/* Booking Form Right Column */}
            <div className="lg:col-span-7">
              <Scroll3DReveal rotateAmount={16} depth={50}>
                <div className="bg-white p-8 md:p-12 border border-navy/10 shadow-strong">
                  <div className="flex items-center gap-3 mb-6">
                    <Sparkles className="w-5 h-5 text-gold shrink-0" />
                    <h3 className="font-bold text-2xl text-navy uppercase tracking-tight">Schedule Your Tour</h3>
                  </div>

                  {emailPrepared ? (
                    <div className="py-16 text-center space-y-6">
                      <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto border border-gold/20 shrink-0">
                        <CheckCircle2 className="w-8 h-8 shrink-0" />
                      </div>
                      <h4 className="text-2xl font-bold text-navy uppercase tracking-tight">Email Prepared</h4>
                      <p className="text-navy/70 text-base max-w-md mx-auto font-medium">
                        Your email application should open with the tour details filled in. The request is sent only after you review and send the email there.
                      </p>
                      <Button 
                        onClick={() => setEmailPrepared(false)}
                        className="bg-navy text-white hover:bg-navy/90 text-xs font-bold tracking-widest uppercase rounded-none h-12 px-8"
                      >
                        Edit Request
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="tour-parent-name" className="text-xs font-bold text-navy uppercase tracking-wider">Parent Full Name *</label>
                          <Input id="tour-parent-name" name="parentName" required maxLength={120} autoComplete="name" placeholder="e.g. Salim Al Hashmi" className="border-navy/15 h-12 rounded-none focus:border-gold" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="tour-email" className="text-xs font-bold text-navy uppercase tracking-wider">Email Address *</label>
                          <Input id="tour-email" name="email" required maxLength={254} type="email" autoComplete="email" placeholder="e.g. parent@example.com" className="border-navy/15 h-12 rounded-none focus:border-gold" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="tour-phone" className="text-xs font-bold text-navy uppercase tracking-wider">Phone / WhatsApp Number *</label>
                          <Input id="tour-phone" name="phone" required maxLength={40} type="tel" autoComplete="tel" placeholder="+968 9XXXXXXX" className="border-navy/15 h-12 rounded-none focus:border-gold" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="tour-grade" className="text-xs font-bold text-navy uppercase tracking-wider">Grade / Year Group Interested In *</label>
                          <Input id="tour-grade" name="grade" required maxLength={80} placeholder="e.g. KG1, Primary, Grade 9 (IGCSE)" className="border-navy/15 h-12 rounded-none focus:border-gold" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="tour-date" className="text-xs font-bold text-navy uppercase tracking-wider">Preferred Tour Date (Sun - Thu) *</label>
                          <Input id="tour-date" name="date" required type="date" className="border-navy/15 h-12 rounded-none focus:border-gold" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="tour-time" className="text-xs font-bold text-navy uppercase tracking-wider">Preferred Time Slot *</label>
                          <Input id="tour-time" name="time" required maxLength={40} placeholder="e.g. 9:00 AM or 1:00 PM" className="border-navy/15 h-12 rounded-none focus:border-gold" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="tour-comments" className="text-xs font-bold text-navy uppercase tracking-wider">Additional Questions or Comments</label>
                        <Textarea id="tour-comments" name="comments" maxLength={3000} placeholder="Please tell us about your child's interests or any specific areas of the school you would like to explore." className="border-navy/15 min-h-[120px] rounded-none focus:border-gold" />
                      </div>

                      <Button type="submit" className="w-full bg-gold text-white hover:bg-gold/90 h-14 uppercase tracking-[0.25em] font-bold rounded-none flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-gold/20">
                        <Send className="w-4 h-4 shrink-0" />
                        Prepare Tour Request Email
                      </Button>
                      <p className="text-xs font-medium leading-relaxed text-navy/55">
                        This opens your email application. Your request is not sent until you review and send the prepared email.
                      </p>
                    </form>
                  )}
                </div>
              </Scroll3DReveal>
            </div>

          </div>

        </div>
      </section>
    </main>
  )
}
