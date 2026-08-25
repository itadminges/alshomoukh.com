"use client"

import { motion } from "framer-motion"
import { GraduationCap, Heart, Mail, Users } from "lucide-react"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"

const opportunities = [
  {
    title: "Family Engagement",
    icon: Users,
    description: "Families can contact the school to learn about current meetings, events, and opportunities to support school life.",
  },
  {
    title: "Student Voice",
    icon: GraduationCap,
    description: "Students are encouraged to share ideas, contribute responsibly, and develop confidence through age-appropriate leadership opportunities.",
  },
  {
    title: "Community Activities",
    icon: Heart,
    description: "School activities help students connect learning with service, culture, teamwork, and the wider community.",
  },
]

export default function InvolvementPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        title="Get Involved"
        subtitle="Building a supportive school community through communication, participation, and shared responsibility."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="mb-5 text-3xl font-bold uppercase tracking-tight text-navy md:text-4xl">Our Community</h2>
            <p className="text-sm font-medium leading-relaxed text-navy/70 md:text-base">
              Participation opportunities can vary during the academic year. Contact the school for current programmes, schedules, and eligibility details.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {opportunities.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="h-full border border-navy/10 bg-white p-8 text-center shadow-sm"
              >
                <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center bg-navy text-gold shrink-0">
                  <item.icon className="h-7 w-7 shrink-0" />
                </div>
                <h3 className="mb-4 text-xl font-bold uppercase tracking-tight text-navy">{item.title}</h3>
                <p className="text-sm font-medium leading-relaxed text-navy/65">{item.description}</p>
              </motion.article>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center justify-between gap-6 bg-navy p-8 text-center text-white md:flex-row md:p-10 md:text-left">
            <div>
              <h3 className="mb-2 text-2xl font-bold uppercase tracking-tight">Ask About Current Opportunities</h3>
              <p className="text-sm font-medium text-white/70">The school team can direct families to the appropriate current programme or contact.</p>
            </div>
            <Link
              href="mailto:info@alshomoukh.com?subject=Community%20Involvement%20Inquiry"
              className="inline-flex h-12 shrink-0 items-center gap-3 bg-gold px-7 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-navy"
            >
              <Mail className="h-4 w-4 shrink-0" /> Contact the School
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
