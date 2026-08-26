"use client"

import { 
  BookOpen, 
  FileText, 
  CheckSquare, 
  Award, 
  UserPlus, 
  Calendar, 
  Clock, 
  HelpCircle, 
  Sparkles
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { Scroll3DReveal } from "@/components/scroll-3d"
import { SectionSpirals } from "@/components/decorative-spirals"
import { Button } from "@/components/ui/button"

export default function AdmissionsPage() {
  const steps = [
    { num: "01", title: "Inquiry", desc: "Discover our curriculum, learn about our programmes, and arrange a visit to experience our campus.", icon: BookOpen },
    { num: "02", title: "Application", desc: "Complete the online application and submit the required documents to begin the admissions process.", icon: FileText },
    { num: "03", title: "Assessment", desc: "Participate in an age-appropriate student placement assessment to understand learning readiness.", icon: CheckSquare },
    { num: "04", title: "Offer", desc: "Receive an admission decision and offer of placement following the assessment process.", icon: Award },
    { num: "05", title: "Enrolment", desc: "Complete registration requirements and welcome your child into the Al Shomoukh community.", icon: UserPlus },
  ]

  const faqs = [
    {
      q: "What is the academic level criteria that has to be met in order to admit my child to Al Shomoukh International Private School?",
      a: "At Al Shomoukh International Private School, we assess each child's academic readiness through a placement test to ensure they are well-prepared for the curriculum and will thrive in our learning environment. Our goal is to provide the necessary support for students to succeed and achieve their potential."
    },
    {
      q: "What is the age criteria for accepting students in KG1, KG2, and Grade 1?",
      a: "• KG1: Children must be 3 years old and 2 months by September 1st of the academic year.\n• KG2: Children must be 4 years and 2 months old by September 1st of the academic year.\n• Grade 1: Children must be 6 years and 2 months old by September 1st of the academic year."
    },
    {
      q: "Can I meet the teachers?",
      a: "Yes, we encourage parent-teacher collaboration. You can meet with teachers during scheduled parent-teacher conferences or by making an appointment through our school administration. Our teachers are always available to discuss your child’s progress and address any questions or concerns."
    },
    {
      q: "When do students start learning French?",
      a: "Students begin learning French from Grade 1 as part of our foreign language curriculum. This provides early exposure to the language and fosters bilingual communication skills, which are valuable in today’s globalized world."
    },
    {
      q: "Do you organize trips outside Oman?",
      a: "Yes, we believe that learning extends beyond the classroom. We organize educational trips outside of Oman for older students to enhance their learning experiences. These trips are carefully planned to complement the curriculum and provide cultural, historical, and practical learning opportunities. We also arrange local trips within Oman to support student learning in various subjects."
    }
  ]

  return (
    <main className="min-h-screen bg-white overflow-hidden scroll-3d-scene">
      {/* Hero Section */}
      <PageHero 
        title="Admissions" 
        subtitle="A great school is a place where students not only learn but thrive."
        backgroundImage="/images/final/primary-students.webp"
      />

      {/* Intro Overview Section */}
      <section className="py-20 bg-ivory/30 border-b border-navy/5 relative overflow-hidden">
        <SectionSpirals variant="light" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20 text-center">
          <div className="max-w-3xl mx-auto">
            <Scroll3DReveal rotateAmount={10} depth={30}>
              <p className="text-navy/80 text-base md:text-xl leading-[1.8] font-medium">
                Thank you for considering Al Shomoukh International Private School and entrusting us with your child's education. We understand that choosing the right school is one of the most important decisions you’ll make for your child’s future.
              </p>
            </Scroll3DReveal>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <SectionSpirals variant="light" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <Scroll3DReveal rotateAmount={14} depth={45}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">
                  Welcome Message
                </span>
                <div className="h-[1px] w-12 bg-gold/30" />
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.15] mb-8 tracking-tight font-bold uppercase">
                Choosing the Right <br />
                <span className="text-gold">School Begins Here</span>
              </h2>
              
              <div className="text-navy/80 leading-[1.8] space-y-6 mb-8 text-base md:text-lg font-medium">
                <p>
                  Located in the heart of Muscat, Sultanate of Oman, Al Shomoukh International Private School is a leader in providing high-quality education. We strive to make our admissions process as clear and seamless as possible, ensuring you have all the information needed to make the right choice for your child.
                </p>
                <p>
                  We would be delighted to assist you throughout the entire admissions process and guide you every step of the way.
                </p>
              </div>

              <div className="bg-ivory/40 p-6 md:p-8 border-l-4 border-gold shadow-strong">
                <p className="text-lg md:text-xl text-navy font-serif italic leading-[1.6]">
                  "You don’t choose a school; you choose a community."
                </p>
              </div>
            </Scroll3DReveal>

            <Scroll3DReveal rotateAmount={18} depth={60}>
              <div className="relative aspect-[4/5] w-full max-w-lg mx-auto lg:ml-auto shadow-strong overflow-hidden border border-navy/10">
                <Image 
                  src="/images/final/primary-friends.webp"
                  alt="Al Shomoukh students together at school"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Scroll3DReveal>
          </div>
        </div>
      </section>

      {/* Admissions Process Stepper */}
      <section id="process" className="py-24 md:py-32 bg-ivory/30 border-y border-navy/5 relative overflow-hidden">
        <SectionSpirals variant="light" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-gold/30" />
              <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">
                Admissions Process
              </span>
              <div className="h-[1px] w-8 bg-gold/30" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.1] tracking-tight mb-4 font-bold uppercase">
              Your Journey to <span className="text-gold">Al Shomoukh</span>
            </h2>
            <p className="text-gold font-bold text-xs md:text-sm uppercase tracking-[0.2em]">
              A Simple 5-Step Path to Joining Our Community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <Scroll3DReveal key={step.num} rotateAmount={12 + idx * 2} depth={30 + idx * 8} className="h-full">
                <div className="bg-white p-8 shadow-strong border border-navy/5 h-full flex flex-col justify-between group hover:border-gold/40 transition-colors duration-500 relative">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-500 shrink-0">
                        <step.icon className="w-6 h-6 stroke-[1.5] shrink-0" />
                      </div>
                      <span className="text-gold text-xs font-bold tracking-[0.25em] uppercase">
                        {step.num}
                      </span>
                    </div>

                    <h3 className="text-navy font-bold text-xl mb-3 tracking-tight uppercase">
                      {step.title}
                    </h3>
                    <p className="text-navy/70 text-sm leading-[1.7] font-medium">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Scroll3DReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fees & Finance Section */}
      <section id="fees" className="py-24 md:py-32 bg-white relative overflow-hidden">
        <SectionSpirals variant="light" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5">
              <Scroll3DReveal rotateAmount={14} depth={40}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-11 w-11 items-center justify-center bg-gold/10 text-gold shrink-0" aria-label="Omani rial">
                    <Image
                      src="/omani-rial-symbol.svg"
                      alt=""
                      width={30}
                      height={24}
                      aria-hidden="true"
                      className="h-6 w-auto object-contain shrink-0"
                    />
                  </div>
                  <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">
                    Tuition & Finance
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.15] mb-6 font-bold uppercase tracking-tight">
                  Fees & <span className="text-gold">Finance</span>
                </h2>

                <p className="text-navy/80 text-base md:text-lg leading-[1.8] font-medium mb-8">
                  We are committed to transparency and clarity in our fee structure. Once your application is approved after the placement test, admission is confirmed upon payment following the school’s fee schedule.
                </p>

                <div className="bg-ivory/50 border-l-4 border-gold p-6 space-y-4 mb-8 shadow-sm">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-navy text-sm uppercase tracking-wide mb-1">Current Fee Guidance</h4>
                      <p className="text-navy/70 text-sm font-medium leading-relaxed">
                        Request the current fee schedule and ask Admissions about any available sibling-discount eligibility or payment arrangements.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 pt-4 border-t border-navy/10">
                    <CheckSquare className="w-5 h-5 text-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-navy text-sm uppercase tracking-wide mb-1">Seat Reservation</h4>
                      <p className="text-navy/70 text-sm font-medium leading-relaxed">
                        Places are allocated on merit and availability. A seat is secured once payment has been received according to term guidelines.
                      </p>
                    </div>
                  </div>
                </div>

                <Button asChild className="bg-navy text-white hover:bg-navy/90 h-14 px-8 text-[11px] font-bold tracking-[0.2em] uppercase rounded-none transition-all">
                  <Link href="mailto:admission@alshomoukh.com?subject=Fee%20Structure%20Inquiry">
                    Request Full Fee Schedule
                  </Link>
                </Button>
              </Scroll3DReveal>
            </div>

            <div className="lg:col-span-7">
              <Scroll3DReveal rotateAmount={16} depth={45}>
                <div className="bg-primary text-white p-8 md:p-12 shadow-strong border border-white/10 space-y-8">
                  <div className="border-b border-white/10 pb-6">
                    <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-2">The Learning Experience</h3>
                    <p className="text-ivory/70 text-sm font-medium">An overview of the curriculum, facilities, support, and enrichment available to students.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {[
                      { title: "British Curriculum", desc: "Pearson Edexcel iPrimary, iLowerSecondary, IGCSE & International A levels." },
                      { title: "Specialist Facilities", desc: "Science laboratories, IT learning spaces, libraries, and arts studios." },
                      { title: "Personalised Care", desc: "Individualised learning support and dedicated pastoral wellbeing guidance." },
                      { title: "Enrichment & Clubs", desc: "Diverse after-school clubs, student leadership, sports, and cultural events." },
                    ].map((item, i) => (
                      <div key={i} className="p-5 bg-white/5 border border-white/10">
                        <h4 className="text-gold font-bold uppercase tracking-wider text-sm mb-2">{item.title}</h4>
                        <p className="text-ivory/70 text-xs leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/10">
                    <div>
                      <p className="text-xs text-gold font-bold uppercase tracking-widest mb-1">Admissions Finance Team</p>
                      <a href="mailto:admission@alshomoukh.com" className="text-sm font-medium text-white/90 hover:text-gold transition-colors">
                        admission@alshomoukh.com
                      </a>
                    </div>
                    <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white h-12 px-6 text-[10px] font-bold tracking-[0.2em] uppercase rounded-none bg-transparent">
                      <Link href="tel:+96824284771">
                        Call +968 24284771
                      </Link>
                    </Button>
                  </div>
                </div>
              </Scroll3DReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Book a Tour Section */}
      <section id="tour" className="py-24 md:py-32 bg-white relative overflow-hidden">
        <SectionSpirals variant="light" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          <div className="bg-navy text-white p-10 md:p-16 lg:p-20 shadow-strong relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">
                    Campus Visit
                  </span>
                  <div className="h-[1px] w-8 bg-gold/50" />
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold uppercase tracking-tight leading-[1.15] mb-6">
                  Book a <span className="text-gold">Campus Tour</span>
                </h2>

                <p className="text-ivory/80 text-base leading-[1.8] font-medium mb-8">
                  We warmly invite you to visit Al Shomoukh International Private School and experience firsthand what makes our school a place of excellence and growth. A personal tour is the best way to gain a true understanding of our campus, facilities, and the unique atmosphere that fosters learning and development. To schedule a tour, call us at +968 24284756 / +968 24284771.
                </p>

                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center text-gold shrink-0">
                      <Calendar className="w-5 h-5 shrink-0" />
                    </div>
                    <div>
                      <p className="text-xs text-gold font-bold uppercase tracking-wider">Days of Operation</p>
                      <p className="text-sm font-bold text-white">Sunday – Thursday</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center text-gold shrink-0">
                      <Clock className="w-5 h-5 shrink-0" />
                    </div>
                    <div>
                      <p className="text-xs text-gold font-bold uppercase tracking-wider">Visiting Hours</p>
                      <p className="text-sm font-bold text-white">7:30 AM – 3:30 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-gold text-white hover:bg-gold/90 h-14 px-8 text-[11px] font-bold tracking-[0.2em] uppercase rounded-none transition-all">
                    <Link href="/book-a-tour">
                      Request a Campus Tour
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-white/40 text-white hover:bg-white hover:text-navy h-14 px-8 text-[11px] font-bold tracking-[0.2em] uppercase rounded-none bg-transparent">
                    <Link href="tel:+96824284771">
                      Call +968 24284771
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative aspect-[4/3] w-full border border-white/10 shadow-strong overflow-hidden">
                <Image 
                  src="/images/final/primary-project.webp"
                  alt="Learning at Al Shomoukh International Private School"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section id="faq" className="py-24 md:py-32 bg-ivory/30 border-y border-navy/5 relative overflow-hidden">
        <SectionSpirals variant="light" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-gold/30" />
              <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">Got Questions?</span>
              <div className="h-[1px] w-8 bg-gold/30" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy font-bold uppercase tracking-tight">
              Admissions <span className="text-gold">FAQs</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {faqs.map((faq, idx) => (
              <Scroll3DReveal key={idx} rotateAmount={10} depth={25} className="h-full">
                <div className="bg-white p-8 border border-navy/5 shadow-sm h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-start gap-3 mb-4">
                      <HelpCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <h3 className="font-bold text-navy text-lg leading-snug uppercase tracking-tight">
                        {faq.q}
                      </h3>
                    </div>
                    <p className="text-navy/70 text-sm leading-relaxed font-medium whitespace-pre-line pl-8">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </Scroll3DReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions Contact & Next Steps */}
      <section id="apply" className="py-24 md:py-32 bg-navy text-white relative overflow-hidden">
        <SectionSpirals variant="dark" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20 text-center">
          <div className="max-w-3xl mx-auto">
            <Scroll3DReveal rotateAmount={10} depth={35}>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-[1px] w-8 bg-gold/50" />
                <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">
                  Next Steps
                </span>
                <div className="h-[1px] w-8 bg-gold/50" />
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight mb-4 uppercase">
                Ready to <span className="text-gold">Begin?</span>
              </h2>

              <h3 className="text-gold font-bold text-sm md:text-base uppercase tracking-[0.25em] mb-8">
                Start Your Child’s Journey Today
              </h3>

              <p className="text-ivory/80 text-base md:text-xl leading-[1.7] mb-12 font-medium">
                Once your child has been accepted following the placement test, parents can proceed with completing the necessary application requirements. To begin the application, contact the Administration at <a href="mailto:admission@alshomoukh.com" className="text-gold font-bold hover:underline">admission@alshomoukh.com</a> or call <a href="tel:+96824284756" className="text-gold font-bold hover:underline">+968 24284756</a> / <a href="tel:+96824284771" className="text-gold font-bold hover:underline">+968 24284771</a>.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button asChild className="bg-gold text-white hover:bg-gold/90 h-14 px-10 text-[11px] font-bold tracking-[0.25em] uppercase rounded-none transition-all shadow-lg hover:shadow-gold/20">
                  <Link href="/contact">
                    Contact Admissions
                  </Link>
                </Button>
                <Button asChild className="bg-transparent border border-white/60 text-white hover:bg-white hover:text-navy h-14 px-10 text-[11px] font-bold tracking-[0.25em] uppercase rounded-none transition-all">
                  <Link href="/book-a-tour">
                    Book a Campus Tour
                  </Link>
                </Button>
              </div>
            </Scroll3DReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
