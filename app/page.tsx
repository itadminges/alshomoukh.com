"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { AcademicPrograms } from "@/components/academic-programs"
import { AchievementsSection } from "@/components/achievements-section"
import { CommunitySection } from "@/components/community-section"
import { AffiliationsSection } from "@/components/affiliations-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <AcademicPrograms />
      <CommunitySection />
      <AchievementsSection />
      <AffiliationsSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
