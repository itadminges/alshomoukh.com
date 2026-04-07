import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { AcademicPrograms } from "@/components/academic-programs"
import { AchievementsSection } from "@/components/achievements-section"
import { CommunitySection } from "@/components/community-section"
import StudentsGlobalSection from "@/components/students-global-section"
import { EventsSection } from "@/components/events-section"
import { AffiliationsSection } from "@/components/affiliations-section"
import { NewsletterSection } from "@/components/newsletter-section"

import { StatsSection } from "@/components/stats-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <AcademicPrograms />
      <CommunitySection />
      <StatsSection />
      <AchievementsSection />
      <StudentsGlobalSection />
      <EventsSection />
      <AffiliationsSection />
      <NewsletterSection />
    </>
  )
}



