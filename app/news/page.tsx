"use client"

import { motion } from "framer-motion"
import { ArrowRight, Facebook, Instagram, Mail, Newspaper, Youtube } from "lucide-react"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"

const officialChannels = [
  {
    label: "Instagram",
    description: "School life, activities, celebrations, and community highlights.",
    href: "https://www.instagram.com/alshomoukhschool/",
    icon: Instagram,
  },
  {
    label: "Facebook",
    description: "Announcements, event coverage, and school community updates.",
    href: "https://www.facebook.com/sismuscat/",
    icon: Facebook,
  },
  {
    label: "YouTube",
    description: "Videos from school events, learning activities, and celebrations.",
    href: "https://www.youtube.com/channel/UC7ftr6kS9rUbVWTL-3f_NOw",
    icon: Youtube,
  },
]

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        title="News & Stories"
        subtitle="Follow verified announcements and highlights from the Al Shomoukh school community."
        backgroundImage="/images/final/art-studio-students.webp"
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <Newspaper className="mx-auto mb-5 h-9 w-9 text-gold shrink-0" />
            <h2 className="mb-5 text-3xl font-bold uppercase tracking-tight text-navy md:text-4xl">
              Official School Updates
            </h2>
            <p className="text-sm font-medium leading-relaxed text-navy/70 md:text-base">
              Current school news is shared through the official channels below. Time-sensitive notices for enrolled families are also available through the Parent Portal.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {officialChannels.map((channel, index) => (
              <motion.div
                key={channel.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Link
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col border border-navy/10 bg-white p-8 shadow-sm transition-all hover:border-gold/40 hover:shadow-md"
                >
                  <channel.icon className="mb-7 h-7 w-7 text-gold shrink-0" />
                  <h3 className="mb-3 text-xl font-bold uppercase tracking-tight text-navy">{channel.label}</h3>
                  <p className="mb-8 flex-1 text-sm font-medium leading-relaxed text-navy/65">{channel.description}</p>
                  <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
                    Open official channel <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 shrink-0" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center justify-between gap-6 border border-navy/10 bg-ivory/30 p-8 text-center md:flex-row md:text-left">
            <div>
              <h3 className="mb-2 text-xl font-bold uppercase tracking-tight text-navy">Need a specific announcement?</h3>
              <p className="text-sm font-medium text-navy/65">Contact the school directly for publication or event information.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex h-12 shrink-0 items-center gap-3 bg-navy px-7 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-gold"
            >
              <Mail className="h-4 w-4 shrink-0" /> Contact the School
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
