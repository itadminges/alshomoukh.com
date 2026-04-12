"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
]

const footerNav = [
  {
    title: "About",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Principal's Welcome", href: "/about#welcome" },
      { label: "Vision & Mission", href: "/about#vision" },
      { label: "Careers", href: "/careers" },
      { label: "News & Stories", href: "/news" },
    ]
  },
  {
    title: "Admissions",
    links: [
      { label: "Admission Process", href: "/admissions" },
      { label: "Fees & Finance", href: "/admissions#fees" },
      { label: "Book a Tour", href: "/contact#visit" },
      { label: "Apply Online", href: "/admissions#apply" },
      { label: "Scholarships", href: "/admissions#scholarships" },
    ]
  },
  {
    title: "Academics",
    links: [
      { label: "Kindergarten", href: "/kindergarten" },
      { label: "Primary School", href: "/primary-school" },
      { label: "Lower Secondary", href: "/lower-secondary" },
      { label: "Upper Secondary", href: "/upper-secondary" },
      { label: "Learning Support", href: "/learning-support" },
    ]
  }
]

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-12 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-center md:items-start gap-8 order-last lg:order-first pt-10 md:pt-0 border-t border-white/10 md:border-t-0 text-center md:text-left">
            <Link href="/" className="inline-block transition-transform hover:scale-[1.02] duration-500">
              <Image 
                src="/White SIS Logo-01.png" 
                alt="Al Shomoukh Logo" 
                width={240} 
                height={80} 
                className="h-20 w-auto object-contain"
                priority
              />
            </Link>
            <p className="text-white/70 text-[15px] leading-[1.8] font-medium font-sans max-w-sm">
              Providing a world-class education that empowers students to lead with integrity, innovate with passion, and succeed with purpose in a global community.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-500"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Clusters */}
          {footerNav.map((cluster) => (
            <div key={cluster.title} className="lg:col-span-2 flex flex-col items-center md:items-start">
              <h4 className="text-[13px] md:text-[11px] font-extrabold tracking-widest md:tracking-[0.25em] uppercase text-white mb-6 md:text-white/40 md:mb-10 text-center md:text-left">
                {cluster.title}
              </h4>
              <ul className="flex flex-col gap-5 items-center md:items-start text-center md:text-left">
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
          ))}

          {/* Contact Column */}
          <div className="lg:col-span-2 flex flex-col items-center md:items-start">
            <h4 className="text-[13px] md:text-[11px] font-extrabold tracking-widest md:tracking-[0.25em] uppercase text-white mb-6 md:text-white/40 md:mb-10 text-center md:text-left">
              Contact
            </h4>
            <ul className="flex flex-col gap-6 md:gap-8 w-full items-center md:items-start text-center md:text-left">
              <li className="flex flex-col gap-2 group cursor-default items-center md:items-start">
                <div className="flex items-center gap-3 text-white/40 group-hover:text-secondary transition-colors duration-300">
                  <span className="inline-block md:hidden"><MapPin className="h-4 w-4" /></span>
                  <span className="hidden md:inline-block"><MapPin className="h-3.5 w-3.5" /></span>
                  <span className="text-[12px] md:text-[10px] font-bold tracking-widest uppercase">Location</span>
                </div>
                <span className="text-[15px] md:text-[13px] font-medium text-white/70 leading-relaxed md:pl-6.5 md:border-l border-white/10 group-hover:border-secondary/30 transition-colors duration-300">
                  P.O. Box 71, PC 111, <br className="hidden md:block" />Al Hail South, Muscat, <br className="hidden md:block" />Sultanate of Oman
                </span>
              </li>
              <li className="flex flex-col gap-2 group cursor-default items-center md:items-start">
                <div className="flex items-center gap-3 text-white/40 group-hover:text-secondary transition-colors duration-300">
                  <span className="inline-block md:hidden"><Phone className="h-4 w-4" /></span>
                  <span className="hidden md:inline-block"><Phone className="h-3.5 w-3.5" /></span>
                  <span className="text-[12px] md:text-[10px] font-bold tracking-widest uppercase">Inquiries</span>
                </div>
                <span className="text-[15px] md:text-[13px] font-medium text-white/70 md:pl-6.5 md:border-l border-white/10 group-hover:border-secondary/30 transition-colors duration-300">
                  +968 2452 7100
                </span>
              </li>
              <li className="flex flex-col gap-2 group cursor-default items-center md:items-start">
                <div className="flex items-center gap-3 text-white/40 group-hover:text-secondary transition-colors duration-300">
                  <span className="inline-block md:hidden"><Mail className="h-4 w-4" /></span>
                  <span className="hidden md:inline-block"><Mail className="h-3.5 w-3.5" /></span>
                  <span className="text-[12px] md:text-[10px] font-bold tracking-widest uppercase">Email</span>
                </div>
                <span className="text-[15px] md:text-[13px] font-medium text-white/70 md:pl-6.5 md:border-l border-white/10 group-hover:border-secondary/30 transition-colors duration-300">
                  info@alshomoukh.com
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower Footer */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 order-2 md:order-1">
            <p className="text-[11px] font-bold text-white/30 tracking-[0.2em] uppercase">
              &copy; {new Date().getFullYear()} Al Shomoukh International School
            </p>
            <div className="hidden md:block h-3 w-[1px] bg-white/10" />
            <div className="flex gap-8">
              <Link href="/privacy" className="text-[11px] font-bold text-white/30 tracking-[0.2em] uppercase hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-[11px] font-bold text-white/30 tracking-[0.2em] uppercase hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-5 order-1 md:order-2">
            <span className="text-[11px] font-bold text-white/30 tracking-[0.3em] uppercase">Provided by</span>
            <Image 
              src="/ges-logo.png" 
              alt="GES" 
              width={100} 
              height={40} 
              className="h-9 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

