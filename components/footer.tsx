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
  { label: "About", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Terms and Conditions", href: "#" },
  { label: "Cookie Policy", href: "#" },
  { label: "Privacy", href: "#" },
]

export function Footer() {
  return (
    <footer className="relative bg-secondary">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 py-12">
        {/* Social Links - Centered */}
        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center transition-all duration-200 hover:bg-white/25"
              aria-label={social.label}
            >
              <social.icon className="w-4 h-4 text-white" />
            </Link>
          ))}
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs text-white/70 hover:text-white transition-colors duration-200 uppercase tracking-wider"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-white/50">
          Copyright &copy; {new Date().getFullYear()} - Al Shomoukh International School
        </p>
      </div>
    </footer>
  )
}
