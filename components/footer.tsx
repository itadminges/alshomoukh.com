"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin, Plus, Minus } from "lucide-react"

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/sismuscat/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/alshomoukhschool/", label: "Instagram" },
  { icon: Twitter, href: "https://x.com/ShomoukhSchool", label: "X (Twitter)" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/al-shomoukh-international-school-953aa0171/", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/channel/UC7ftr6kS9rUbVWTL-3f_NOw", label: "YouTube" },
]

const footerNav = [
  {
    title: "About",
    links: [
      { label: "Our Story", href: "/about#story" },
      { label: "Principal's Welcome", href: "/about#welcome" },
      { label: "Vision & Mission", href: "/about#vision" },
      { label: "News & Stories", href: "/news" },
    ]
  },
  {
    title: "Admissions",
    links: [
      { label: "Admission Process", href: "/admissions#process" },
      { label: "Fees & Finance", href: "/admissions#fees" },
      { label: "Book a Tour", href: "/book-a-tour" },
      { label: "Contact Admissions", href: "/admissions#apply" },
    ]
  },
  {
    title: "Academics",
    links: [
      { label: "Curriculum", href: "/curriculum" },
      { label: "Kindergarten", href: "/kindergarten" },
      { label: "Primary School", href: "/primary-school" },
      { label: "Lower Secondary", href: "/lower-secondary" },
      { label: "Upper Secondary", href: "/upper-secondary" },
      { label: "Learning Support", href: "/learning-support" },
      { label: "Academic Calendar", href: "/calendar" },
    ]
  }
]

export function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (title: string) => {
    setOpenSection(prev => prev === title ? null : title)
  }

  return (
    <footer id="site-footer" className="scroll-mt-20 bg-[#0B3958] text-white pb-0 pt-0 overflow-hidden border-t border-white/5 md:pb-7 md:pt-12">
      <div className="mx-auto max-w-[1440px] px-0 md:px-8 lg:px-12">
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-12 md:gap-10 lg:gap-8 xl:gap-10 mb-0 md:mb-8">

          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-center md:items-start gap-5 md:gap-4 order-last lg:order-first mt-10 pt-0 px-6 md:px-0 md:pt-0 md:border-t-0 md:mt-0 text-center md:text-left">
            <Link href="/" className="inline-block transition-transform hover:scale-[1.02] duration-500">
              <Image
                src="/White SIS Logo-01.png"
                alt="Al Shomoukh Logo"
                width={120}
                height={199}
                className="h-auto w-[76px] object-contain md:h-14 md:w-auto"
                priority
              />
            </Link>
            <p className="max-w-[280px] text-[14px] leading-[1.6] font-medium font-sans text-white/70 md:hidden">
              Inspiring students to learn, lead, and make a difference.
            </p>
            <p className="hidden text-white/70 text-[13px] leading-[1.6] font-medium font-sans max-w-xs md:block">
              Providing a world-class education that empowers students to lead with integrity, innovate with passion, and succeed with purpose in a global community.
            </p>
            <div className="mt-1 flex gap-3 md:mt-0">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 md:w-10 md:h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-500 shrink-0"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 shrink-0" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Clusters */}
          {footerNav.map((cluster) => (
            <div key={cluster.title} className="lg:col-span-2 flex flex-col items-center md:items-start w-full border-b border-white/10 md:border-b-0 md:py-0">
              <button
                type="button"
                onClick={() => toggleSection(cluster.title)}
                className="h-[66px] w-full px-6 flex items-center justify-between md:h-auto md:px-0 md:justify-start md:cursor-default"
                aria-expanded={openSection === cluster.title}
              >
                <h2 className="text-[13px] md:text-[11px] font-extrabold tracking-[0.16em] md:tracking-[0.25em] uppercase text-white md:text-white/40 text-center md:text-left md:mb-10">
                  {cluster.title}
                </h2>
                <div className="md:hidden text-[#BB9268] shrink-0">
                  {openSection === cluster.title ? <Minus className="h-5 w-5 shrink-0" /> : <Plus className="h-5 w-5 shrink-0" />}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out w-full px-6 md:px-0 md:!max-h-[1000px] md:!opacity-100 ${openSection === cluster.title ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0 md:mt-0"
                  }`}
              >
                <ul className="flex flex-col gap-5 items-center md:items-start text-center md:text-left pb-2 md:pb-0">
                  {cluster.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[15px] md:text-[13px] font-medium md:font-bold text-white/60 hover:text-white transition-all duration-300 tracking-wide md:uppercase group flex items-center"
                      >
                        <span className="relative">
                          {link.label}
                          <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-secondary/50 transition-all duration-300 group-hover:w-full" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Contact Column */}
          <div className="lg:col-span-2 flex flex-col items-center md:items-start w-full border-b border-white/10 md:border-b-0 md:py-0">
            <button
              type="button"
              onClick={() => toggleSection('Contact')}
              className="h-[66px] w-full px-6 flex items-center justify-between md:h-auto md:px-0 md:justify-start md:cursor-default"
              aria-expanded={openSection === 'Contact'}
            >
              <h2 className="text-[13px] md:text-[11px] font-extrabold tracking-[0.16em] md:tracking-[0.25em] uppercase text-white md:text-white/40 text-center md:text-left md:mb-10">
                Contact
              </h2>
              <div className="md:hidden text-[#BB9268] shrink-0">
                {openSection === 'Contact' ? <Minus className="h-5 w-5 shrink-0" /> : <Plus className="h-5 w-5 shrink-0" />}
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out w-full px-6 md:px-0 md:!max-h-[1000px] md:!opacity-100 ${openSection === 'Contact' ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0 md:mt-0"
                }`}
            >
              <ul className="flex flex-col gap-6 md:gap-8 w-full items-center md:items-start text-center md:text-left pb-2 md:pb-0">
                <li className="flex flex-col gap-2 group cursor-default items-center md:items-start">
                  <div className="flex items-center gap-3 text-white/40 group-hover:text-secondary transition-colors duration-300">
                    <span className="inline-block md:hidden shrink-0"><MapPin className="h-4 w-4 shrink-0" /></span>
                    <span className="hidden md:inline-block shrink-0"><MapPin className="h-3.5 w-3.5 shrink-0" /></span>
                    <span className="text-[12px] md:text-[10px] font-bold tracking-widest uppercase">Location</span>
                  </div>
                  <span className="text-[15px] md:text-[13px] font-medium text-white/70 leading-relaxed md:pl-6.5 md:border-l border-white/10 group-hover:border-secondary/30 transition-colors duration-300">
                    Road 106, Way 208, Building 323<br className="hidden md:block" />
                    Hay Al Hail, Al Jadeed Al Hail South<br className="hidden md:block" />
                    P.O. Box 1756, PC: 111, Airport Heights<br className="hidden md:block" />
                    Muscat, Sultanate of Oman
                  </span>
                </li>
                <li className="flex flex-col gap-2 group cursor-default items-center md:items-start">
                  <div className="flex items-center gap-3 text-white/40 group-hover:text-secondary transition-colors duration-300">
                    <span className="inline-block md:hidden shrink-0"><Phone className="h-4 w-4 shrink-0" /></span>
                    <span className="hidden md:inline-block shrink-0"><Phone className="h-3.5 w-3.5 shrink-0" /></span>
                    <span className="text-[12px] md:text-[10px] font-bold tracking-widest uppercase">Inquiries</span>
                  </div>
                  <a
                    href="tel:+96824284771"
                    className="text-[15px] md:text-[13px] font-medium text-white/70 hover:text-white md:pl-6.5 md:border-l border-white/10 group-hover:border-secondary/30 transition-colors duration-300"
                  >
                    +968 24284771
                  </a>
                  <a
                    href="tel:+96824284756"
                    className="text-[15px] md:text-[13px] font-medium text-white/70 hover:text-white md:pl-6.5 md:border-l border-white/10 group-hover:border-secondary/30 transition-colors duration-300"
                  >
                    +968 24284756
                  </a>
                </li>
                <li className="flex flex-col gap-2 group cursor-default items-center md:items-start">
                  <div className="flex items-center gap-3 text-white/40 group-hover:text-secondary transition-colors duration-300">
                    <span className="inline-block md:hidden shrink-0"><Mail className="h-4 w-4 shrink-0" /></span>
                    <span className="hidden md:inline-block shrink-0"><Mail className="h-3.5 w-3.5 shrink-0" /></span>
                    <span className="text-[12px] md:text-[10px] font-bold tracking-widest uppercase">Email</span>
                  </div>
                  <a
                    href="mailto:admission@alshomoukh.com"
                    className="break-all text-[15px] md:text-[13px] font-medium text-white/70 hover:text-white md:pl-6.5 md:border-l border-white/10 group-hover:border-secondary/30 transition-colors duration-300"
                  >
                    admission@alshomoukh.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Lower Footer */}
        <div className="mt-10 border-t border-white/10 flex flex-col md:mt-0 md:pt-12 md:flex-row md:justify-between md:items-center md:gap-10">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-8 order-2 md:order-1 px-6 py-7 md:px-0 md:py-0">
            <p className="max-w-[260px] text-center text-[12px] font-normal leading-relaxed text-white/55 tracking-normal md:max-w-none md:text-left md:text-[11px] md:font-bold md:text-white/30 md:tracking-[0.2em] md:uppercase">
              Copyright &copy; {new Date().getFullYear()}
            </p>
            <div className="hidden md:block h-3 w-[1px] bg-white/10" />
            <div className="flex items-center gap-2 text-white/45">
              <Link href="/privacy" className="inline-flex min-h-11 items-center text-[12px] font-normal tracking-normal hover:text-white transition-colors md:min-h-0 md:text-[11px] md:font-bold md:text-white/30 md:tracking-[0.2em] md:uppercase">Privacy Policy</Link>
              <span className="text-[10px] md:hidden" aria-hidden="true">•</span>
              <Link href="/terms" className="inline-flex min-h-11 items-center text-[12px] font-normal tracking-normal hover:text-white transition-colors md:min-h-0 md:text-[11px] md:font-bold md:text-white/30 md:tracking-[0.2em] md:uppercase">Terms of Service</Link>
            </div>
          </div>

          <div className="flex w-full items-center justify-center gap-3 border-b border-white/10 px-6 py-8 order-1 md:order-2 md:w-auto md:justify-start md:border-b-0 md:px-0 md:py-0">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">Powered by</span>
            <Image
              src="/ges-logo.png"
              alt="GES - Global Education Services"
              width={200}
              height={51}
              className="h-7 w-auto object-contain opacity-100 transition-opacity duration-300 md:h-10 shrink-0"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
