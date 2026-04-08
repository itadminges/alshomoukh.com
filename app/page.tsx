import dynamic from 'next/dynamic'
import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { StatsSection } from "@/components/stats-section"

// Dynamically import sections below the fold
const AcademicPrograms = dynamic(() => import("@/components/academic-programs").then(mod => mod.AcademicPrograms), {
  loading: () => <div className="h-96 bg-background animate-pulse" />
})

const AchievementsSection = dynamic(() => import("@/components/achievements-section").then(mod => mod.AchievementsSection), {
  loading: () => <div className="h-96 bg-background animate-pulse" />
})

const EventsSection = dynamic(() => import("@/components/events-section").then(mod => mod.EventsSection), {
  loading: () => <div className="h-96 bg-background animate-pulse" />
})

const NewsletterSection = dynamic(() => import("@/components/newsletter-section").then(mod => mod.NewsletterSection), {
  loading: () => <div className="h-80 bg-background animate-pulse" />
})

const AffiliationsSection = dynamic(() => import("@/components/affiliations-section").then(mod => mod.AffiliationsSection), {
  loading: () => <div className="h-40 bg-background animate-pulse" />
})

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



