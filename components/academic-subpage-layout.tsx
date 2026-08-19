"use client"

import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"
import { 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Compass
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { PageHero } from "@/components/page-hero"
import { Scroll3DReveal } from "@/components/scroll-3d"
import { SectionSpirals } from "@/components/decorative-spirals"
import { AcademicTabs } from "@/components/academic-tabs"

export type AcademicHighlight = {
  icon?: LucideIcon
  title: string
  description: string
}

export type AcademicFeature = {
  title: string
  description: string
  icon?: LucideIcon
  badge?: string
}

export type AcademicPathway = {
  label: string
  title: string
  description: string
  highlights?: string[]
}

export type AcademicDetailSection = {
  eyebrow?: string
  title: string
  subtitle?: string
  badge?: string
  image?: string
  logo?: {
    src: string
    alt: string
    width?: number
    height?: number
  }
  paragraphs: string[]
  bulletsHeading?: string
  bullets?: string[]
  tags?: string[]
  highlights?: AcademicHighlight[]
}

export type AcademicSubPageProps = {
  title: string
  subtitle?: string
  eyebrow?: string
  heading?: string
  metaBadge?: string
  cardTitle?: string
  cardSubtitle?: string
  cardImage?: string
  intro: string[]
  highlights?: AcademicHighlight[]
  featuresHeading?: string
  featuresSubtitle?: string
  features?: AcademicFeature[]
  subjectsHeading?: string
  subjects?: string[]
  pathwayHeading?: string
  pathwaySubtitle?: string
  pathway?: AcademicPathway[]
  detailSectionsHeading?: string
  detailSections?: AcademicDetailSection[]
  customSections?: ReactNode
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
  metaBadge,
  cardTitle,
  cardSubtitle,
  cardImage = "/school_building_premium.png",
  intro,
  highlights = [],
  featuresHeading,
  featuresSubtitle,
  features = [],
  subjectsHeading,
  subjects = [],
  pathwayHeading,
  pathwaySubtitle,
  pathway = [],
  detailSectionsHeading,
  detailSections = [],
  customSections,
  quote,
  nextLink,
}: AcademicSubPageProps) {
  return (
    <main className="min-h-screen bg-white overflow-hidden scroll-3d-scene">
      <PageHero title={title} subtitle={subtitle} />
      <AcademicTabs />

      {/* Main Feature Card Section (Sharp Luxury Architectural Design) */}
      {intro.length > 0 && (
        <section className="py-16 md:py-24 bg-[#FAFAFA] relative overflow-hidden">
          <SectionSpirals variant="light" />
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
            
            {/* Top Sharp Feature Card */}
            <Scroll3DReveal rotateAmount={8} depth={30}>
              <div className="bg-white border border-navy/10 shadow-strong p-8 md:p-12 lg:p-14 relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 md:gap-14 items-center">
                  
                  {/* Left Column: Titles + Paragraphs */}
                  <div>
                    {/* Eyebrow & Badge */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-[1px] w-8 bg-gold/50" />
                      <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">
                        {cardSubtitle || eyebrow || metaBadge || "Academic Programme"}
                      </span>
                    </div>

                    {/* Main Title & Grade Subtitle */}
                    <h2 className="text-2xl md:text-3xl lg:text-4xl text-navy font-bold uppercase tracking-tight font-heading leading-tight">
                      {cardTitle || heading || title}
                    </h2>

                    {/* Accent Divider Line */}
                    <div className="w-14 h-1 bg-gold my-5" />

                    {/* Intro Paragraphs */}
                    <div className="space-y-4 text-navy/75 text-sm md:text-base leading-[1.85] font-medium">
                      {intro.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Photography Card */}
                  <div className="relative aspect-[16/10] md:aspect-[4/3] w-full overflow-hidden shadow-strong border border-navy/10">
                    <Image
                      src={cardImage}
                      alt={cardTitle || title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
                  </div>

                </div>
              </div>
            </Scroll3DReveal>

            {/* Bottom 4-Column Highlights Strip */}
            {highlights.length > 0 && (
              <Scroll3DReveal rotateAmount={6} depth={20}>
                <div className="bg-white border border-navy/10 shadow-strong p-6 md:p-8 mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {highlights.map((item, idx) => (
                      <div key={idx} className="border-l-2 border-gold pl-5 py-1">
                        <h4 className="text-base md:text-lg font-bold text-navy uppercase tracking-tight font-heading">
                          {item.title}
                        </h4>
                        <p className="text-xs text-navy/70 font-medium leading-relaxed mt-1">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Scroll3DReveal>
            )}

          </div>
        </section>
      )}

      {/* Custom Section (e.g. 7 Areas of Learning in KG or Multi-Tier Model) */}
      {customSections}

      {/* Detailed Multi-Section Cards (e.g. 4 Pathways in Upper Secondary) */}
      {detailSections.length > 0 && (
        <section className="py-20 md:py-28 bg-white relative overflow-hidden">
          <SectionSpirals variant="light" />
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
            {detailSectionsHeading && (
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="h-[1px] w-8 bg-gold/40" />
                  <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">
                    Academic Pathways
                  </span>
                  <div className="h-[1px] w-8 bg-gold/40" />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy font-bold uppercase tracking-tight font-heading">
                  {detailSectionsHeading}
                </h2>
              </div>
            )}

            <div className="space-y-12 md:space-y-16">
              {detailSections.map((section, index) => (
                <Scroll3DReveal key={section.title} rotateAmount={8 + index * 2} depth={28}>
                  <div className="space-y-6">
                    {/* Main Card */}
                    <article className="bg-white border border-navy/10 shadow-strong p-8 md:p-12 lg:p-14 relative overflow-hidden">
                      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 md:gap-12 items-center">
                        
                        {/* Left Column */}
                        <div>
                          {/* Eyebrow */}
                          <div className="flex items-center gap-3 mb-3">
                            <div className="h-[1px] w-8 bg-gold/40" />
                            <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">
                              {section.eyebrow || section.subtitle || "Programme Overview"}
                            </span>
                          </div>

                          {/* Titles */}
                          <h2 className="text-2xl md:text-3xl lg:text-4xl text-navy font-bold uppercase tracking-tight font-heading leading-tight">
                            {section.title}
                          </h2>

                          {/* Accent Line */}
                          <div className="w-14 h-1 bg-gold my-5" />

                          {/* Paragraphs */}
                          <div className="space-y-4 text-navy/75 text-sm md:text-base leading-[1.85] font-medium">
                            {section.paragraphs.map((paragraph, pIdx) => (
                              <p key={pIdx}>{paragraph}</p>
                            ))}
                          </div>

                          {/* Subject Tags */}
                          {section.tags && section.tags.length > 0 && (
                            <div className="mt-6 pt-5 border-t border-navy/10 flex flex-wrap items-center gap-2">
                              <span className="text-xs font-bold uppercase text-navy/60 mr-1">Curriculum Subjects:</span>
                              {section.tags.map((tag, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="px-2.5 py-1 bg-ivory text-navy font-bold text-xs border border-navy/10"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Bullets */}
                          {section.bullets && section.bullets.length > 0 && (
                            <div className="mt-8 pt-6 border-t border-navy/10">
                              <h4 className="text-sm md:text-base text-navy font-bold uppercase tracking-tight mb-4 font-heading">
                                {section.bulletsHeading ?? "Why Choose This Pathway?"}
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {section.bullets.map((bullet, bIdx) => (
                                  <div
                                    key={bIdx}
                                    className="flex items-start gap-3 bg-ivory/45 border-l-2 border-gold p-3.5"
                                  >
                                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                                    <span className="text-xs text-navy/85 font-semibold leading-relaxed">
                                      {bullet}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Right Column (Image or Logo) */}
                        <div className="flex flex-col items-center justify-center gap-6">
                          <div className="relative aspect-[16/10] md:aspect-[4/3] w-full overflow-hidden shadow-strong border border-navy/10">
                            <Image
                              src={section.image || "/school_building_premium.png"}
                              alt={section.title}
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                          </div>

                          {section.logo && (
                            <div className="w-full p-4 bg-ivory/60 border border-navy/10 flex items-center justify-center shadow-xs">
                              <Image
                                src={section.logo.src}
                                alt={section.logo.alt}
                                width={section.logo.width || 200}
                                height={section.logo.height || 80}
                                className="h-12 md:h-14 w-auto object-contain"
                              />
                            </div>
                          )}
                        </div>

                      </div>
                    </article>

                    {/* Section Highlights Strip */}
                    {section.highlights && section.highlights.length > 0 && (
                      <div className="bg-white border border-navy/10 shadow-strong p-6 md:p-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                          {section.highlights.map((hItem, hIdx) => (
                            <div key={hIdx} className="border-l-2 border-gold pl-5 py-1">
                              <h4 className="text-base md:text-lg font-bold text-navy uppercase tracking-tight font-heading">
                                {hItem.title}
                              </h4>
                              <p className="text-xs text-navy/70 font-medium leading-relaxed mt-1">
                                {hItem.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </Scroll3DReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Core Key Features / Pillars */}
      {features.length > 0 && (
        <section className="py-20 md:py-28 bg-[#FDFCF7] border-y border-navy/5 relative overflow-hidden">
          <SectionSpirals variant="light" />
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-[1px] w-8 bg-gold/40" />
                <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">
                  {featuresSubtitle || "Academic Pillars"}
                </span>
                <div className="h-[1px] w-8 bg-gold/40" />
              </div>
              <h2 className="text-3xl md:text-4xl text-navy font-bold uppercase tracking-tight font-heading">
                {featuresHeading || "Distinctive Educational Strengths"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <Scroll3DReveal key={feature.title} rotateAmount={10 + index * 2} depth={28}>
                  <div className="bg-white p-8 md:p-9 border border-navy/10 shadow-strong h-full flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-500 hover:border-gold/50 relative overflow-hidden">
                    <div>
                      <div className="flex items-center justify-between mb-7">
                        <span className="text-gold font-bold text-xs uppercase tracking-widest">
                          Pillar 0{index + 1}
                        </span>
                        {feature.badge && (
                          <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 bg-ivory border border-gold/30 text-gold">
                            {feature.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-lg text-navy uppercase tracking-tight mb-3.5 group-hover:text-gold transition-colors font-heading">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-navy/70 leading-relaxed font-medium">
                        {feature.description}
                      </p>
                    </div>
                    <div className="pt-6 mt-6 border-t border-navy/5 flex items-center gap-2 text-gold font-bold text-[10px] uppercase tracking-widest">
                      <Award className="w-3.5 h-3.5" /> High Standards
                    </div>
                  </div>
                </Scroll3DReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Subjects & Progression Pathway Grid */}
      {(subjects.length > 0 || pathway.length > 0) && (
        <section className="py-20 md:py-28 bg-white relative overflow-hidden">
          <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
              {subjects.length > 0 && (
                <Scroll3DReveal rotateAmount={10} depth={35}>
                  <div className="h-full bg-navy text-white p-8 md:p-12 relative overflow-hidden shadow-strong border border-navy/20 flex flex-col justify-between">
                    <SectionSpirals variant="dark" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">
                          Curriculum Breadth
                        </span>
                        <div className="h-[1px] w-8 bg-gold/40" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-8 font-heading">
                        {subjectsHeading || "Core & Specialist Learning Areas"}
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {subjects.map((subject) => (
                          <div
                            key={subject}
                            className="flex items-center gap-3 border border-white/10 bg-white/5 hover:bg-white/10 px-4 py-3.5 transition-colors"
                          >
                            <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                            <span className="text-xs md:text-sm font-bold text-ivory tracking-wide">{subject}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="relative z-10 pt-8 mt-8 border-t border-white/10 text-ivory/70 text-xs font-medium">
                      Aligned with Pearson Edexcel standards and Oman Ministry of Education national requirements.
                    </div>
                  </div>
                </Scroll3DReveal>
              )}

              {pathway.length > 0 && (
                <Scroll3DReveal rotateAmount={12} depth={40}>
                  <div className="h-full border border-navy/10 shadow-strong p-8 md:p-12 bg-white flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">
                          Academic Trajectory
                        </span>
                        <div className="h-[1px] w-8 bg-gold/40" />
                      </div>
                      <h2 className="text-2xl md:text-3xl text-navy font-bold uppercase tracking-tight mb-8 font-heading">
                        {pathwayHeading || "Progression With Purpose"}
                      </h2>
                      <div className="space-y-6">
                        {pathway.map((step) => (
                          <div
                            key={step.title}
                            className="grid grid-cols-[72px_1fr] gap-5 border-t border-navy/10 pt-6 first:border-t-0 first:pt-0"
                          >
                            <div className="text-gold font-bold tracking-widest uppercase text-xs pt-0.5">
                              {step.label}
                            </div>
                            <div>
                              <h3 className="text-base md:text-lg text-navy font-bold uppercase tracking-tight mb-1.5 font-heading">
                                {step.title}
                              </h3>
                              <p className="text-xs md:text-sm text-navy/70 leading-relaxed font-medium mb-2">
                                {step.description}
                              </p>
                              {step.highlights && step.highlights.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-2">
                                  {step.highlights.map((h, i) => (
                                    <span
                                      key={i}
                                      className="text-[10px] font-bold text-navy/80 bg-ivory border border-navy/10 px-2.5 py-0.5"
                                    >
                                      {h}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="pt-8 mt-8 border-t border-navy/10 flex items-center gap-2 text-navy/60 text-xs font-medium">
                      <Compass className="w-4 h-4 text-gold" /> Clear pathways from early years through university entrance.
                    </div>
                  </div>
                </Scroll3DReveal>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Next Link Navigation Teaser */}
      {nextLink && (
        <section className="py-16 md:py-20 bg-[#FAFAFA] border-t border-navy/10">
          <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
            <Link
              href={nextLink.href}
              className="group flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-white border border-navy/10 shadow-premium p-8 md:p-10 hover:border-gold/60 transition-all duration-500"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">Explore Next Stage</span>
                  <div className="h-[1px] w-6 bg-gold/40" />
                </div>
                <h2 className="text-2xl md:text-3xl text-navy font-bold uppercase tracking-tight mb-2 group-hover:text-gold transition-colors font-heading">
                  {nextLink.label}
                </h2>
                <p className="text-navy/70 font-medium text-sm md:text-base leading-relaxed">
                  {nextLink.description}
                </p>
              </div>
              <div className="w-14 h-14 bg-navy text-gold border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-all duration-500 shrink-0">
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </section>
      )}
    </main>
  )
}
