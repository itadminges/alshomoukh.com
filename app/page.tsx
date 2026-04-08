import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { AcademicPrograms } from "@/components/academic-programs"
import { AchievementsSection } from "@/components/achievements-section"
import { EventsSection } from "@/components/events-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { StatsSection } from "@/components/stats-section"
import { AffiliationsSection } from "@/components/affiliations-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <IntroSection />
      <AcademicPrograms />
      <AchievementsSection />
      <EventsSection />
      <NewsletterSection />
      <AffiliationsSection />
    </>
  )
}



