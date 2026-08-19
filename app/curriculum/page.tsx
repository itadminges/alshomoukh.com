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
        "At Al Shomoukh International Private School, our curriculum is designed to provide every student with a high-quality, inclusive, and internationally focused education that promotes academic excellence and personal development. Underpinned by the National Curriculum for England and Pearson Edexcel International pathways, our curriculum combines the latest English educational standards with an international approach, providing clear progression from the Early Years through to Upper Secondary. Learning is made meaningful and accessible through engaging, culturally relevant examples and resources, while integrating Omani cultural values and Ministry of Education requirements.",
        "Through engaging, challenging, and differentiated learning experiences, we ensure that students develop secure knowledge and are able to retain, apply, and build upon their learning as they progress through the school. Our curriculum develops critical thinking, creativity, communication, leadership, independence, and resilience, while recognising the individual strengths and needs of every learner. Students are appropriately supported and challenged to achieve their full potential, equipping them with the knowledge, skills, values, confidence, and internationally recognised qualifications required to succeed in higher education, future careers, and an increasingly interconnected world.",
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
          title: "Lower Secondary",
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
