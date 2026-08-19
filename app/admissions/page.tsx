"use client"

import { 
  BookOpen, 
  FileText, 
  CheckSquare, 
  Award, 
  UserPlus, 
  DollarSign, 
  GraduationCap, 
  Calendar, 
  Clock, 
  Phone, 
  Mail, 
  HelpCircle, 
  ChevronRight,
  Sparkles,
  Users
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
    { num: "05", title: "Enrollment", desc: "Complete registration requirements and welcome your child into the Al Shomoukh community.", icon: UserPlus },
  ]

  const faqs = [
    {
      q: "What is the academic readiness criteria for admission to Al Shomoukh?",
      a: "At Al Shomoukh International Private School, all students undergo an age-appropriate placement test to assess academic readiness and ensure they are placed in the ideal grade level to thrive in our British and international curriculum."
    },
    {
      q: "What is the age criteria for Kindergarten and Grade 1?",
      a: "• KG1: Children must be 3 years old and 2 months by September 1st of the enrolling academic year.\n• KG2: Children must be 4 years and 2 months old by September 1st of the academic year.\n• Grade 1: Children must be 6 years and 2 months old by September 1st of the academic year."
    },
    {
      q: "Is there a sibling discount available?",
      a: "Yes! Younger siblings enrolled at Al Shomoukh International Private School may be eligible for a 10% tuition fee discount."
    },
    {
      q: "Can parents meet teachers and visit the campus before enrolling?",
      a: "Absolutely. We warmly encourage campus visits from Sunday to Thursday (7:30 AM – 3:30 PM). Parents can meet our academic leaders and teachers during scheduled tours and orientation sessions."
    },
    {
      q: "When do students start learning additional languages like French?",
      a: "Students begin learning French from Grade 1 as part of our foreign language curriculum, building bilingual fluency and global communication skills early."
    },
    {
      q: "Are educational trips organized for students?",
      a: "Yes, we organize local excursions across Oman to explore cultural heritage and science, as well as supervised overseas trips for older students to broaden their international perspectives."
    }
  ]

  return (
    <main className="min-h-screen bg-white overflow-hidden scroll-3d-scene">
      {/* Hero Section */}
      <PageHero 
        title="Admissions" 
        subtitle="Begin Your Child’s Journey Towards Excellence."
      />

      {/* Intro Overview Section */}
      <section className="py-20 bg-ivory/30 border-b border-navy/5 relative overflow-hidden">
        <SectionSpirals variant="light" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20 text-center">
          <div className="max-w-3xl mx-auto">
            <Scroll3DReveal rotateAmount={10} depth={30}>
              <p className="text-navy/80 text-base md:text-xl leading-[1.8] font-medium">
                At Al Shomoukh International Private School, every student is encouraged to discover their potential through a journey of academic achievement, personal growth, and global opportunity. Our admissions process is designed to be clear, supportive, and welcoming, ensuring that every family feels confident from the very first step.
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
                  Thank you for considering Al Shomoukh International Private School as your child’s educational partner. We understand that selecting the right school is a significant decision, and we are committed to providing families with the guidance, information, and support they need throughout the admissions journey.
                </p>
                <p>
                  Located in Muscat, Sultanate of Oman, Al Shomoukh International Private School offers a high-quality international education built on academic excellence, strong values, and a commitment to every student’s success.
                </p>
              </div>

              <div className="bg-ivory/40 p-6 md:p-8 border-l-4 border-gold shadow-strong">
                <p className="text-lg md:text-xl text-navy font-serif italic leading-[1.6]">
                  "Our admissions team is dedicated to making the enrolment process clear, welcoming, and seamless, guiding your family every step of the way with care, transparency, and confidence."
                </p>
              </div>
            </Scroll3DReveal>

            <Scroll3DReveal rotateAmount={18} depth={60}>
              <div className="relative aspect-[4/5] w-full max-w-lg mx-auto lg:ml-auto shadow-strong overflow-hidden border border-navy/10">
                <Image 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1470&auto=format&fit=crop"
                  alt="Students learning together"
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
              <Scroll3DReveal key={step.num} rotateAmount={12 + idx * 2} depth={30 + idx * 8}>
                <div className="bg-white p-8 shadow-strong border border-navy/5 h-full flex flex-col justify-between group hover:border-gold/40 transition-colors duration-500 relative">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-500">
                        <step.icon className="w-6 h-6 stroke-[1.5]" />
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
                  <div className="p-2.5 bg-gold/10 text-gold">
                    <DollarSign className="w-6 h-6" />
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
                      <h4 className="font-bold text-navy text-sm uppercase tracking-wide mb-1">10% Sibling Discount</h4>
                      <p className="text-navy/70 text-sm font-medium leading-relaxed">
                        Younger siblings enrolled at Al Shomoukh International Private School are eligible for a 10% discount on tuition fees.
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

                <Link href="mailto:admission@alshomoukh.com?subject=Fee%20Structure%20Inquiry">
                  <Button className="bg-navy text-white hover:bg-navy/90 h-14 px-8 text-[11px] font-bold tracking-[0.2em] uppercase rounded-none transition-all">
                    Request Full Fee Schedule
                  </Button>
                </Link>
              </Scroll3DReveal>
            </div>

            <div className="lg:col-span-7">
              <Scroll3DReveal rotateAmount={16} depth={45}>
                <div className="bg-primary text-white p-8 md:p-12 shadow-strong border border-white/10 space-y-8">
                  <div className="border-b border-white/10 pb-6">
                    <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-2">What Our Tuition Covers</h3>
                    <p className="text-ivory/70 text-sm font-medium">Delivering an exceptional international standard of holistic learning and student care.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {[
                      { title: "British Curriculum", desc: "Pearson Edexcel iPrimary, iLowerSecondary, IGCSE & International A levels." },
                      { title: "Specialist Facilities", desc: "State-of-the-art science labs, modern IT suites, libraries, and arts studios." },
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
                    <Link href="tel:+96824284771">
                      <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white h-12 px-6 text-[10px] font-bold tracking-[0.2em] uppercase rounded-none bg-transparent">
                        Call +968 24 284771
                      </Button>
                    </Link>
                  </div>
                </div>
              </Scroll3DReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Scholarships Section */}
      <section id="scholarships" className="py-24 md:py-32 bg-ivory/30 border-y border-navy/5 relative overflow-hidden">
        <SectionSpirals variant="light" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-gold/30" />
              <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">
                Academic Recognition
              </span>
              <div className="h-[1px] w-8 bg-gold/30" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.1] tracking-tight mb-6 font-bold uppercase">
              Scholarships & <span className="text-gold">Excellence</span>
            </h2>

            <p className="text-navy/80 text-base md:text-lg leading-[1.8] font-medium">
              Al Shomoukh International Private School celebrates and supports outstanding academic potential, leadership, and exemplary character. We recognize exceptional student achievements and provide avenues to support high-performing scholars.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Academic Excellence",
                desc: "Awarded to students demonstrating superior performance in Pearson Edexcel IGCSE and International A levels entrance evaluations and past academic records."
              },
              {
                icon: Award,
                title: "Excellence in Arts & STEM",
                desc: "Recognizing outstanding creative achievements, musical ability, scientific research, and innovation showcased during assessments and student portfolios."
              },
              {
                icon: Users,
                title: "Leadership & Community",
                desc: "Honoring students who show exceptional initiative, community service, global citizenship, and positive peer mentorship."
              }
            ].map((item, idx) => (
              <Scroll3DReveal key={idx} rotateAmount={12 + idx * 2} depth={30 + idx * 5}>
                <div className="bg-white p-8 border border-navy/5 shadow-strong h-full flex flex-col justify-between hover:border-gold/30 transition-colors duration-500">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-6">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-navy font-bold text-xl uppercase tracking-tight mb-3">{item.title}</h3>
                    <p className="text-navy/70 text-sm leading-[1.7] font-medium">{item.desc}</p>
                  </div>
                </div>
              </Scroll3DReveal>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="mailto:admission@alshomoukh.com?subject=Scholarship%20Inquiry">
              <Button className="bg-gold text-white hover:bg-gold/90 h-14 px-10 text-[11px] font-bold tracking-[0.25em] uppercase rounded-none transition-all shadow-lg hover:shadow-gold/20">
                Inquire About Scholarships
              </Button>
            </Link>
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
                  We warmly invite you to visit Al Shomoukh International Private School and experience firsthand what makes our school a place of excellence and growth. A personal tour is the best way to gain a true understanding of our campus, facilities, and unique learning atmosphere.
                </p>

                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gold font-bold uppercase tracking-wider">Days of Operation</p>
                      <p className="text-sm font-bold text-white">Sunday – Thursday</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gold font-bold uppercase tracking-wider">Visiting Hours</p>
                      <p className="text-sm font-bold text-white">7:30 AM – 3:30 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/book-a-tour">
                    <Button className="bg-gold text-white hover:bg-gold/90 h-14 px-8 text-[11px] font-bold tracking-[0.2em] uppercase rounded-none transition-all">
                      Schedule Tour Online
                    </Button>
                  </Link>
                  <Link href="tel:+96824284771">
                    <Button variant="outline" className="border-white/40 text-white hover:bg-white hover:text-navy h-14 px-8 text-[11px] font-bold tracking-[0.2em] uppercase rounded-none bg-transparent">
                      Call +968 24 284771
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative aspect-[4/3] w-full border border-white/10 shadow-strong overflow-hidden">
                <Image 
                  src="/school_building_premium.png"
                  alt="Al Shomoukh Campus Tour"
                  fill
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
              <Scroll3DReveal key={idx} rotateAmount={10} depth={25}>
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

      {/* Apply Online & Next Steps */}
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
                Our admissions team is ready to guide your family through the application and placement test process. Feel free to contact the Administration at <a href="mailto:admission@alshomoukh.com" className="text-gold font-bold hover:underline">admission@alshomoukh.com</a> or call <a href="tel:+96824284771" className="text-gold font-bold hover:underline">+968 24 284771</a>.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/contact">
                  <Button className="bg-gold text-white hover:bg-gold/90 h-14 px-10 text-[11px] font-bold tracking-[0.25em] uppercase rounded-none transition-all shadow-lg hover:shadow-gold/20">
                    Apply Now
                  </Button>
                </Link>
                <Link href="/book-a-tour">
                  <Button className="bg-transparent border border-white/60 text-white hover:bg-white hover:text-navy h-14 px-10 text-[11px] font-bold tracking-[0.25em] uppercase rounded-none transition-all">
                    Book a Campus Tour
                  </Button>
                </Link>
              </div>
            </Scroll3DReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
