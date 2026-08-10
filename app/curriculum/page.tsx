"use client"

import { BookMarked, CheckSquare, GraduationCap, School } from "lucide-react"
import { AcademicSubPageLayout } from "@/components/academic-subpage-layout"

export default function CurriculumPage() {
  return (
    <AcademicSubPageLayout
      title="Our Curriculum"
      subtitle="A world-class educational framework that blends British excellence with Omani cultural heritage."
      eyebrow="Academic Framework"
      heading="International standards shaped by local identity."
      intro={[
        "Our curriculum is based on the National Curriculum for England and Pearson Edexcel pathways, providing a broad, balanced, and stimulating programme of study from the early years through upper secondary.",
        "The framework prepares students for the demands of the 21st century while respecting Omani cultural values, Ministry of Education requirements, bilingual development, and each learner's personal growth.",
        "Across every stage, students develop academic confidence, character, wellbeing, leadership, creativity, and the skills needed to thrive in higher education and an interconnected world.",
      ]}
      features={[
        {
          title: "Broad & Balanced",
          description: "A wide subject offer supports academic, creative, physical, and personal development.",
          icon: BookMarked,
        },
        {
          title: "Internationally Recognised",
          description: "Pearson Edexcel routes prepare students for IGCSE, IAL, BTEC, and university progression.",
          icon: GraduationCap,
        },
        {
          title: "Culturally Responsive",
          description: "Local values, Arabic, Islamic Studies, and Ministry requirements are integrated with care.",
          icon: School,
        },
        {
          title: "Student Centered",
          description: "Assessment and classroom support help teachers respond to individual strengths and needs.",
          icon: CheckSquare,
        },
      ]}
      subjects={[
        "EYFS",
        "Pearson Edexcel iPrimary",
        "Pearson Edexcel iLowerSecondary",
        "International GCSE",
        "International Advanced Level",
        "BTEC International Level 3",
        "Omani Bilingual Curriculum",
        "General Education Diploma",
      ]}
      pathway={[
        {
          label: "Start",
          title: "Kindergarten",
          description: "Purposeful EYFS learning builds curiosity, independence, and early academic confidence.",
        },
        {
          label: "G1-G6",
          title: "Primary School",
          description: "Pearson Edexcel iPrimary creates strong foundations across core and wider subjects.",
        },
        {
          label: "G7-G8",
          title: "iLowerSecondary",
          description: "Students bridge into more rigorous secondary learning and future qualification choices.",
        },
        {
          label: "G9-G12",
          title: "Upper Secondary",
          description: "Students choose international, vocational, or national bilingual routes for future progression.",
        },
      ]}
      quote={{
        text: "We prepare future global citizens who are confident in the world and proud of their identity.",
      }}
      nextLink={{
        href: "/academics",
        label: "Academic Pathways",
        description: "View all stages and explore the school journey from Kindergarten to Upper Secondary.",
      }}
    />
  )
}
