"use client"

import type { LucideIcon } from "lucide-react"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { Scroll3DReveal } from "@/components/scroll-3d"
import { SectionSpirals } from "@/components/decorative-spirals"

type AcademicFeature = {
  title: string
  description: string
  icon: LucideIcon
}

type AcademicPathway = {
  label: string
  title: string
  description: string
}

type AcademicDetailSection = {
  eyebrow?: string
  title: string
  subtitle?: string
  paragraphs: string[]
  bulletsHeading?: string
  bullets?: string[]
}

type AcademicSubPageProps = {
  title: string
  subtitle?: string
  eyebrow?: string
  heading?: string
  intro: string[]
  features?: AcademicFeature[]
  subjects?: string[]
  pathway?: AcademicPathway[]
  detailSections?: AcademicDetailSection[]
  quote?: {
    text: string
    author?: string
  }
  nextLink?: {
    href: string
    label: string
    description: string
  }
}

export function AcademicSubPageLayout({
  title,
  subtitle,
  eyebrow,
  heading,
  intro,
  features = [],
  subjects = [],
  pathway = [],
  detailSections = [],
  quote,
  nextLink,
}: AcademicSubPageProps) {
  return (
    <main className="min-h-screen bg-white overflow-hidden scroll-3d-scene">
      <PageHero title={title} subtitle={subtitle} />

      {intro.length > 0 && (
        <section className="py-20 md:py-28 bg-white relative overflow-hidden">
          <SectionSpirals variant="light" />
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
            <div className={heading || eyebrow || quote ? "grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-12 lg:gap-16 items-start" : "max-w-5xl mx-auto"}>
              {(heading || eyebrow || quote) && (
                <Scroll3DReveal rotateAmount={12} depth={40}>
                  <div className="sticky top-28">
                    {eyebrow && (
                      <div className="flex items-center gap-4 mb-5">
                        <div className="h-[1px] w-10 bg-gold/40" />
                        <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">
                          {eyebrow}
                        </span>
                      </div>
                    )}
                    {heading && (
                      <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy font-bold uppercase tracking-tight leading-tight">
                        {heading}
                      </h2>
                    )}
                    {quote && (
                      <div className="mt-10 bg-ivory/60 border-l-4 border-gold p-7 shadow-premium">
                        <p className="text-navy/85 text-lg leading-relaxed font-medium italic">
                          &quot;{quote.text}&quot;
                        </p>
                        {quote.author && (
                          <p className="mt-5 text-gold font-bold tracking-widest uppercase text-[10px]">
                            {quote.author}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </Scroll3DReveal>
              )}

              <Scroll3DReveal rotateAmount={10} depth={35}>
                <div className="bg-white border border-navy/10 shadow-strong p-7 md:p-10">
                  <div className="space-y-5 text-navy/75 text-base md:text-lg leading-[1.8] font-medium">
                    {intro.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </Scroll3DReveal>
            </div>
          </div>
        </section>
      )}

      {features.length > 0 && (
        <section className="py-20 md:py-28 bg-ivory/35 border-y border-navy/5 relative overflow-hidden">
          <SectionSpirals variant="light" />
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Scroll3DReveal key={feature.title} rotateAmount={12 + index * 2} depth={32 + index * 6}>
                  <div className="bg-white p-7 md:p-8 border border-navy/5 shadow-strong h-full group hover:-translate-y-1 transition-all duration-500">
                    <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/20 text-gold flex items-center justify-center mb-7 group-hover:bg-gold group-hover:text-white transition-colors duration-500">
                      <feature.icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-bold text-lg text-navy uppercase tracking-tight mb-4 group-hover:text-gold transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-navy/65 leading-relaxed font-medium">
                      {feature.description}
                    </p>
                  </div>
                </Scroll3DReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {(subjects.length > 0 || pathway.length > 0) && (
        <section className="py-20 md:py-28 bg-white relative overflow-hidden">
          <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
              {subjects.length > 0 && (
                <Scroll3DReveal rotateAmount={10} depth={35}>
                  <div className="h-full bg-navy text-white p-8 md:p-10 relative overflow-hidden">
                    <SectionSpirals variant="dark" />
                    <div className="relative z-10">
                      <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">
                        Curriculum Breadth
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mt-4 mb-8">
                        Core Learning Areas
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {subjects.map((subject) => (
                          <div key={subject} className="flex items-center gap-3 border border-white/10 bg-white/5 px-4 py-3">
                            <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                            <span className="text-sm font-bold text-ivory/90">{subject}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Scroll3DReveal>
              )}

              {pathway.length > 0 && (
                <Scroll3DReveal rotateAmount={12} depth={40}>
                  <div className="h-full border border-navy/10 shadow-strong p-8 md:p-10 bg-white">
                    <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">
                      Pathway
                    </span>
                    <h2 className="text-2xl md:text-3xl text-navy font-bold uppercase tracking-tight mt-4 mb-8">
                      Progression With Purpose
                    </h2>
                    <div className="space-y-6">
                      {pathway.map((step) => (
                        <div key={step.title} className="grid grid-cols-[72px_1fr] gap-5 border-t border-navy/10 pt-6 first:border-t-0 first:pt-0">
                          <div className="text-gold font-bold tracking-widest uppercase text-xs">{step.label}</div>
                          <div>
                            <h3 className="text-lg text-navy font-bold uppercase tracking-tight mb-2">{step.title}</h3>
                            <p className="text-sm text-navy/65 leading-relaxed font-medium">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Scroll3DReveal>
              )}
            </div>
          </div>
        </section>
      )}

      {detailSections.length > 0 && (
        <section className="py-20 md:py-28 bg-ivory/35 border-y border-navy/5 relative overflow-hidden">
          <SectionSpirals variant="light" />
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
            <div className="space-y-12">
              {detailSections.map((section, index) => (
                <Scroll3DReveal key={section.title} rotateAmount={10 + index * 2} depth={36}>
                  <article className="bg-white border border-navy/10 shadow-strong p-7 md:p-10 lg:p-12">
                    {section.eyebrow && (
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-[1px] w-10 bg-gold/40" />
                        <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">
                          {section.eyebrow}
                        </span>
                      </div>
                    )}
                    <h2 className="text-2xl md:text-4xl text-navy font-bold uppercase tracking-tight mb-3">
                      {section.title}
                    </h2>
                    {section.subtitle && (
                      <p className="text-gold font-bold tracking-widest uppercase text-xs mb-8">
                        {section.subtitle}
                      </p>
                    )}
                    <div className="space-y-5 text-navy/75 text-base md:text-lg leading-[1.8] font-medium">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    {section.bullets && section.bullets.length > 0 && (
                      <div className="mt-10 border-t border-navy/10 pt-8">
                        <h3 className="text-xl md:text-2xl text-navy font-bold uppercase tracking-tight mb-6">
                          {section.bulletsHeading ?? "Why Choose This Pathway?"}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {section.bullets.map((bullet) => (
                            <div key={bullet} className="flex items-start gap-4 bg-ivory/45 border-l-2 border-gold p-4">
                              <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                              <span className="text-sm md:text-base text-navy/75 font-bold leading-relaxed">
                                {bullet}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </article>
                </Scroll3DReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {nextLink && (
        <section className="py-16 md:py-20 bg-ivory/40 border-t border-navy/5">
          <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
            <Link
              href={nextLink.href}
              className="group flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-white border border-navy/10 shadow-premium p-7 md:p-9 hover:border-gold/40 transition-all duration-500"
            >
              <div>
                <p className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-3">Next Step</p>
                <h2 className="text-2xl md:text-3xl text-navy font-bold uppercase tracking-tight mb-2">
                  {nextLink.label}
                </h2>
                <p className="text-navy/65 font-medium leading-relaxed">{nextLink.description}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-gold/10 text-gold border border-gold/20 flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-colors">
                <ArrowRight className="w-6 h-6" />
              </div>
            </Link>
          </div>
        </section>
      )}
    </main>
  )
}
