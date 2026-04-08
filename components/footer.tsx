"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
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
    <footer className="bg-primary text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Ornament */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />
      
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 max-w-sm">
            <Link href="/" className="inline-block mb-10">
              <Image 
                src="/White SIS Logo-01.png" 
                alt="Al Shomoukh Logo" 
                width={200} 
                height={60} 
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-white/60 text-[15px] leading-[1.8] mb-10 font-medium font-sans">
              Providing a world-class education that empowers students to lead with integrity, innovate with passion, and succeed with purpose in a global community.
            </p>
            <div className="flex gap-5">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-secondary hover:bg-secondary transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Clusters */}
          {footerNav.map((cluster) => (
            <div key={cluster.title} className="lg:col-span-2">
              <h4 className="font-serif text-xl mb-8 tracking-tight font-bold text-white relative inline-block">
                {cluster.title}
                <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-secondary" />
              </h4>
              <ul className="space-y-4">
                {cluster.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-[14px] text-white/50 hover:text-white transition-all duration-200 flex items-center group font-medium"
                    >
                      <ArrowRight className="h-3 w-3 mr-0 opacity-0 -ml-3 group-hover:opacity-100 group-hover:mr-2 group-hover:ml-0 transition-all duration-300 text-secondary" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div className="lg:col-span-2 lg:pl-4">
            <h4 className="font-serif text-xl mb-8 tracking-tight font-bold text-white relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-secondary" />
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-white/60 group">
                <MapPin className="h-5 w-5 text-secondary shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <span className="text-[14px] font-medium leading-relaxed">P.O. Box 71, PC 111, <br />Al Hail South, Muscat, <br />Sultanate of Oman</span>
              </li>
              <li className="flex items-center gap-4 text-white/60 group">
                <Phone className="h-5 w-5 text-secondary shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-[14px] font-medium">+968 2452 7100</span>
              </li>
              <li className="flex items-center gap-4 text-white/60 group">
                <Mail className="h-5 w-5 text-secondary shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-[14px] font-medium">info@alshomoukh.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower Footer */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[12px] font-bold text-white/40 tracking-[0.2em] uppercase">
            &copy; {new Date().getFullYear()} Al Shomoukh International School
          </p>
          <div className="flex gap-10">
            <Link href="/privacy" className="text-[12px] font-bold text-white/40 tracking-[0.2em] uppercase hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-[12px] font-bold text-white/40 tracking-[0.2em] uppercase hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <p className="text-[12px] font-bold text-white/40 tracking-[0.2em] uppercase flex items-center gap-2">
            Designed for <span className="text-secondary group hover:text-white transition-colors cursor-pointer">Excellence</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

