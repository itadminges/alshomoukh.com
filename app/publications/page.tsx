"use client"

import { motion } from "framer-motion"
import { BookOpen, Mail, Newspaper } from "lucide-react"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"

const publicationTypes = [
  {
    title: "School Newsletters",
    description: "Request the latest available newsletter, school circular, or community update directly from the school office.",
    subject: "School Newsletter Request",
    icon: Newspaper,
  },
  {
    title: "Yearbooks & Reports",
    description: "Ask about current yearbook availability or request information about school publications and academic reports.",
    subject: "School Publication Request",
    icon: BookOpen,
  },
]

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        title="Publications"
        subtitle="Contact the school for current newsletters, yearbooks, and publication information."
        backgroundImage="/images/final/student-art.webp"
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="mb-5 text-3xl font-bold uppercase tracking-tight text-navy md:text-4xl">Publication Requests</h2>
            <p className="text-sm font-medium leading-relaxed text-navy/70 md:text-base">
              Publication dates and availability can change. Contact the school office to receive the latest verified edition or access information.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            {publicationTypes.map((publication, index) => (
              <motion.article
                key={publication.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex h-full flex-col border border-navy/10 bg-white p-8 shadow-sm md:p-10"
              >
                <publication.icon className="mb-7 h-9 w-9 text-gold shrink-0" />
                <h3 className="mb-4 text-2xl font-bold uppercase tracking-tight text-navy">{publication.title}</h3>
                <p className="mb-8 flex-1 text-sm font-medium leading-relaxed text-navy/70">{publication.description}</p>
                <Link
                  href={`mailto:admission@alshomoukh.com?subject=${encodeURIComponent(publication.subject)}`}
                  className="inline-flex h-12 items-center justify-center gap-3 bg-navy px-6 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-gold"
                >
                  <Mail className="h-4 w-4 shrink-0" /> Request by Email
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
