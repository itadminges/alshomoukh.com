"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Admissions", href: "/admissions" },
  { label: "Academic", href: "/academics" },
  { label: "News & Stories", href: "/news" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
]

export function Footer() {
  return (
    <footer className="relative bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16">
        {/* Social Links - Centered */}
        <div className="flex justify-center gap-8 mb-12">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              className="text-white hover:text-white/70 transition-all duration-200"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </Link>
          ))}
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-12">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[11px] font-bold text-white hover:text-white/70 transition-colors duration-200 tracking-[0.2em] uppercase"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center text-[10px] text-white/60 font-bold tracking-[0.1em] uppercase">
          Copyright &copy; {new Date().getFullYear()} - Al Shomoukh International School
        </p>
      </div>
    </footer>
  )
}
