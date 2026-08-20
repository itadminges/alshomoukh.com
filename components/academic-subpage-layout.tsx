"use client"

import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"
import { 
  ArrowRight, 
  Check, 
  Compass
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { PageHero } from "@/components/page-hero"
import { Scroll3DReveal, Scroll3DCard } from "@/components/scroll-3d"
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
  icon?: LucideIcon
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
  heroImage?: string
  eyebrow?: string
  heading?: string
  metaBadge?: string
  cardIcon?: LucideIcon
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
  heroImage,
  eyebrow,
  heading,
  metaBadge,
  cardTitle,
  cardSubtitle,
  cardImage = "/images/final/primary-project.webp",
  intro,
  highlights = [],
  featuresHeading,
  featuresSubtitle,
  features = [],
  subjectsHeading,
  subjects = [],
  pathwayHeading,
  pathwaySubtitle: _pathwaySubtitle,
  pathway = [],
  detailSectionsHeading,
  detailSections = [],
  customSections,
  quote,
  nextLink,
}: AcademicSubPageProps) {
  return (
    <main className="min-h-screen bg-white overflow-hidden scroll-3d-scene">
      <PageHero title={title} subtitle={subtitle} backgroundImage={heroImage} />
      <AcademicTabs />

      {/* Main Feature Section (Seamless Editorial Layout Matching Home Page IntroSection) */}
      {intro.length > 0 && (
        <section className="pt-20 md:pt-32 pb-16 md:pb-24 bg-white relative overflow-hidden scroll-3d-scene">
          <SectionSpirals variant="light" />
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              
              {/* Left Column: Typography & Content */}
              <Scroll3DReveal rotateAmount={8} depth={30}>
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-gold font-bold tracking-[0.3em] uppercase text-[11px]">
                      {cardSubtitle || eyebrow || metaBadge || "A Tradition of Excellence"}
                    </span>
                    <div className="h-[1px] w-12 bg-gold/30" />
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.12] mb-8 tracking-tight text-navy font-bold uppercase font-heading">
                    {cardTitle || heading || title}
                  </h2>

                  <div className="space-y-4 text-navy/70 text-sm md:text-base leading-relaxed font-medium mb-8 max-w-xl">
                    {intro.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>

                  {quote && (
                    <div className="border-l-2 border-gold pl-5 py-2 mt-6">
                      <p className="text-sm italic text-navy/80 font-medium">"{quote.text}"</p>
                      {quote.author && (
                        <p className="text-[11px] font-bold text-gold uppercase tracking-wider mt-1">— {quote.author}</p>
                      )}
                    </div>
                  )}
                </div>
              </Scroll3DReveal>

              {/* Right Column: Photography with Artistic Background Accents */}
              <Scroll3DReveal rotateAmount={12} depth={40} className="relative">
                <div className="relative z-10 aspect-[4/3] md:aspect-[4/3] overflow-hidden shadow-strong">
                  <Image
                    src={cardImage}
                    alt={cardTitle || title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                {/* Floating Architectural Background Accents Matching IntroSection */}
                <div className="absolute -top-8 -left-8 w-40 h-40 border border-navy/5 -z-0" />
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-ivory -z-0" />
              </Scroll3DReveal>

            </div>
          </div>
        </section>
      )}

      {/* Highlights / Stats Band (Seamless Strip Matching Home Page StatsSection) */}
      {highlights.length > 0 && (
        <section className="relative py-16 bg-white overflow-hidden border-y border-navy/5 scroll-3d-scene">
          <SectionSpirals variant="light" />
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {highlights.map((stat, index) => (
                <Scroll3DReveal
                  key={index}
                  rotateAmount={10 + index * 2}
                  depth={20}
                  className="flex flex-col items-start"
                >
                  <div className="text-2xl md:text-3xl lg:text-4xl text-navy font-bold tracking-tight mb-1 font-heading">
                    <span>{stat.title}</span>
                  </div>
                  <p className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-navy/50 leading-relaxed">
                    {stat.description}
                  </p>
                </Scroll3DReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Custom Sections (e.g. 7 EYFS Areas, Senior Pathways Comparison) */}
      {customSections}

      {/* Detailed Multi-Section Showcases (Seamless Alternating Editorial Layout) */}
      {detailSections.length > 0 && (
        <section className="py-24 md:py-36 bg-white relative overflow-hidden">
          <SectionSpirals variant="light" />
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
            {detailSectionsHeading && (
              <div className="max-w-2xl mb-20">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-gold font-bold tracking-[0.3em] uppercase text-[11px]">
                    Academic Pathways
                  </span>
                  <div className="h-[1px] w-8 bg-gold/30" />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.1] tracking-tight font-bold uppercase font-heading">
                  {detailSectionsHeading}
                </h2>
              </div>
            )}

            <div className="space-y-24 md:space-y-36">
              {detailSections.map((section, index) => {
                const isEven = index % 2 === 1

                return (
                  <div 
                    key={section.title}
                    className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center"
                  >
                    {/* Text Column */}
                    <Scroll3DReveal 
                      rotateAmount={8} 
                      depth={30}
                      className={isEven ? "lg:order-2" : "lg:order-1"}
                    >
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-gold font-bold tracking-[0.3em] uppercase text-[11px]">
                            {section.eyebrow || section.subtitle || "Programme Overview"}
                          </span>
                          <div className="h-[1px] w-8 bg-gold/30" />
                        </div>

                        <h3 className="text-2xl md:text-3xl lg:text-4xl text-navy font-bold uppercase tracking-tight font-heading mb-6 leading-tight">
                          {section.title}
                        </h3>

                        <div className="space-y-4 text-navy/70 text-sm md:text-base leading-relaxed font-medium mb-8">
                          {section.paragraphs.map((p, pIdx) => (
                            <p key={pIdx}>{p}</p>
                          ))}
                        </div>

                        {section.tags && section.tags.length > 0 && (
                          <div className="mb-8 pt-6 border-t border-navy/10 flex flex-wrap items-center gap-2">
                            <span className="text-xs font-bold uppercase text-navy/50 mr-2">Curriculum:</span>
                            {section.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-3 py-1 bg-ivory-dark/40 text-navy font-bold text-xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {section.bullets && section.bullets.length > 0 && (
                          <div className="space-y-3 pt-6 border-t border-navy/10">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-navy/80 mb-3">
                              {section.bulletsHeading ?? "Key Highlights:"}
                            </h4>
                            {section.bullets.map((bullet, bIdx) => (
                              <div key={bIdx} className="flex items-start gap-3">
                                <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                                <span className="text-xs md:text-sm font-semibold text-navy/80 leading-relaxed">
                                  {bullet}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </Scroll3DReveal>

                    {/* Image Column */}
                    <Scroll3DReveal 
                      rotateAmount={12} 
                      depth={40}
                      className={`relative ${isEven ? "lg:order-1" : "lg:order-2"}`}
                    >
                      <div className="relative z-10 aspect-[4/3] overflow-hidden shadow-strong">
                        <Image
                          src={section.image || "/images/final/primary-project.webp"}
                          alt={section.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {section.logo && (
                        <div className="mt-4 p-4 bg-ivory-dark/30 flex items-center justify-center">
                          <Image
                            src={section.logo.src}
                            alt={section.logo.alt}
                            width={section.logo.width || 200}
                            height={section.logo.height || 80}
                            className="h-10 md:h-12 w-auto object-contain"
                          />
                        </div>
                      )}

                      {/* Artistic Background Layer */}
                      <div className="absolute -top-6 -left-6 w-32 h-32 border border-navy/5 -z-0" />
                      <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-ivory -z-0" />
                    </Scroll3DReveal>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Pillars / Features (Matching AcademicPrograms Grid on Home Page) */}
      {features.length > 0 && (
        <section className="py-24 md:py-36 bg-[#FDFCF7] border-y border-navy/5 relative overflow-hidden">
          <SectionSpirals variant="light" />
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
            
            <div className="max-w-xl mb-16">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-gold font-bold tracking-[0.3em] uppercase text-[11px]">
                  {featuresSubtitle || "Our Pillars"}
                </span>
                <div className="h-[1px] w-8 bg-gold/30" />
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-navy leading-[1.1] mb-4 tracking-tight font-bold uppercase font-heading">
                {featuresHeading || "Distinctive Educational Strengths"}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Scroll3DCard key={feature.title} index={index}>
                  <article className="relative bg-white border border-navy/5 p-8 md:p-9 h-full flex flex-col justify-between hover:border-gold/40 transition-colors duration-500 shadow-sm">
                    <div>
                      <div className="flex items-center justify-between mb-8">
                        <span className="text-gold font-bold text-xs uppercase tracking-widest">
                          0{index + 1}
                        </span>
                        {feature.badge && (
                          <span className="text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 bg-ivory text-navy/80">
                            {feature.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl text-navy mb-3 font-bold tracking-tight uppercase font-heading">
                        {feature.title}
                      </h3>
                      <p className="text-xs md:text-sm text-navy/70 leading-relaxed font-medium">
                        {feature.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-navy/5 text-gold font-bold text-[9px] uppercase tracking-widest">
                      Quality Standard
                    </div>
                  </article>
                </Scroll3DCard>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* Subjects & Progression Matrix */}
      {(subjects.length > 0 || pathway.length > 0) && (
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
          <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
              
              {subjects.length > 0 && (
                <Scroll3DReveal rotateAmount={8} depth={25}>
                  <div className="h-full bg-navy text-white p-8 md:p-14 relative overflow-hidden shadow-strong flex flex-col justify-between">
                    <SectionSpirals variant="dark" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-gold font-bold tracking-[0.3em] uppercase text-[11px]">
                          Curriculum Breadth
                        </span>
                        <div className="h-[1px] w-8 bg-gold/40" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-8 font-heading">
                        {subjectsHeading || "Core & Specialist Subjects"}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {subjects.map((subject) => (
                          <div
                            key={subject}
                            className="flex items-center gap-3 border border-white/10 bg-white/5 px-4 py-3.5"
                          >
                            <Check className="w-3.5 h-3.5 text-gold shrink-0" />
                            <span className="text-xs md:text-sm font-bold text-ivory tracking-wide">{subject}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="relative z-10 pt-8 mt-8 border-t border-white/10 text-ivory/70 text-xs font-medium">
                      Pearson Edexcel & Oman Ministry of Education standards.
                    </div>
                  </div>
                </Scroll3DReveal>
              )}

              {pathway.length > 0 && (
                <Scroll3DReveal rotateAmount={8} depth={25}>
                  <div className="h-full border border-navy/10 p-8 md:p-14 bg-white flex flex-col justify-between shadow-sm">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-gold font-bold tracking-[0.3em] uppercase text-[11px]">
                          Academic Trajectory
                        </span>
                        <div className="h-[1px] w-8 bg-gold/40" />
                      </div>
                      <h3 className="text-2xl md:text-3xl text-navy font-bold uppercase tracking-tight mb-8 font-heading">
                        {pathwayHeading || "Progression With Purpose"}
                      </h3>
                      <div className="space-y-6">
                        {pathway.map((step) => (
                          <div
                            key={step.title}
                            className="grid grid-cols-[72px_1fr] gap-4 border-t border-navy/10 pt-6 first:border-t-0 first:pt-0"
                          >
                            <div className="text-gold font-bold tracking-widest uppercase text-xs pt-0.5">
                              {step.label}
                            </div>
                            <div>
                              <h4 className="text-base text-navy font-bold uppercase tracking-tight mb-1 font-heading">
                                {step.title}
                              </h4>
                              <p className="text-xs text-navy/70 leading-relaxed font-medium mb-2">
                                {step.description}
                              </p>
                              {step.highlights && (
                                <div className="flex flex-wrap gap-2 mt-2">
                                  {step.highlights.map((h, i) => (
                                    <span key={i} className="text-[10px] font-bold text-navy/80 bg-ivory-dark/40 px-2.5 py-0.5">
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
                      <Compass className="w-4 h-4 text-gold" /> Clear progression through graduation and university entry.
                    </div>
                  </div>
                </Scroll3DReveal>
              )}

            </div>
          </div>
        </section>
      )}

      {/* Next Link Navigation Section (Seamless Home Page CTA Style) */}
      {nextLink && (
        <section className="py-20 md:py-28 bg-[#FAFAFA] border-t border-navy/5">
          <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
            <Link
              href={nextLink.href}
              className="group flex flex-col md:flex-row md:items-center md:justify-between gap-8 bg-white border border-navy/10 shadow-strong p-8 md:p-14 hover:border-gold/60 transition-all duration-500"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">Explore Next Stage</span>
                  <div className="h-[1px] w-6 bg-gold/40" />
                </div>
                <h2 className="text-2xl md:text-4xl text-navy font-bold uppercase tracking-tight mb-2 group-hover:text-gold transition-colors font-heading">
                  {nextLink.label}
                </h2>
                <p className="text-navy/70 font-medium text-sm md:text-base leading-relaxed max-w-xl">
                  {nextLink.description}
                </p>
              </div>
              <div className="w-16 h-16 bg-navy text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-colors duration-500 shrink-0">
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </section>
      )}
    </main>
  )
}
