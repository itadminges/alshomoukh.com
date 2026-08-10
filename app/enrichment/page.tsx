"use client"

import {
  Laptop,
  Palette,
  Sparkles,
  Trophy,
} from "lucide-react"
import { AcademicSubPageLayout } from "@/components/academic-subpage-layout"

export default function EnrichmentPage() {
  return (
    <AcademicSubPageLayout
      title="Enrichment"
      subtitle="Beyond the classroom: opportunities for every student to discover passions and develop new talents."
      eyebrow="Holistic Development"
      heading="A richer school life for confident, capable students."
      intro={[
        "Enrichment is an essential part of the student journey at Al Shomoukh International Private School. It gives students space to explore interests, build confidence, and apply learning in authentic contexts.",
        "Our programmes span science, digital innovation, languages, sport, creative arts, performing arts, leadership, and educational travel, helping learners discover strengths beyond traditional classroom measures.",
        "Through clubs, events, competitions, celebrations, and student-led opportunities, learners develop teamwork, creativity, communication, leadership, resilience, and a stronger sense of belonging.",
      ]}
      features={[
        {
          title: "Discovery",
          description: "Students explore new interests through practical, creative, athletic, cultural, and academic experiences.",
          icon: Sparkles,
        },
        {
          title: "Innovation",
          description: "Digital learning, science activities, and applied projects encourage experimentation and future-ready skills.",
          icon: Laptop,
        },
        {
          title: "Expression",
          description: "Visual arts, music, drama, and performance give students meaningful ways to communicate and create.",
          icon: Palette,
        },
        {
          title: "Leadership",
          description: "Student Council, peer support, teamwork, and events help learners lead with responsibility and confidence.",
          icon: Trophy,
        },
      ]}
      subjects={[
        "Science Lab",
        "Digital Innovation",
        "Modern Languages",
        "Sports & Athletics",
        "Global Expeditions",
        "Creative Arts",
        "Performing Arts",
        "Student Leadership",
      ]}
      pathway={[
        {
          label: "Explore",
          title: "Clubs and Activities",
          description: "Students try varied activities that reveal interests, talents, and new ways of learning.",
        },
        {
          label: "Grow",
          title: "Competitions and Projects",
          description: "Learners apply skills through teamwork, challenge, research, creativity, and performance.",
        },
        {
          label: "Lead",
          title: "Community and Celebration",
          description: "Events such as National Day and International Day help students share culture and take responsibility.",
        },
      ]}
      quote={{
        text: "A strong education gives students room to discover who they are becoming.",
      }}
      nextLink={{
        href: "/learning-support",
        label: "Learning Support",
        description: "See how personalised guidance helps every learner access opportunity and thrive.",
      }}
    />
  )
}
