"use client"

import { 
  BookOpen, 
  Award, 
  Landmark, 
  GraduationCap
} from "lucide-react"
import { AcademicSubPageLayout } from "@/components/academic-subpage-layout"

export default function CurriculumPage() {
  return (
    <AcademicSubPageLayout
      title="Our Curriculum"
      subtitle="A world-class educational framework that blends British academic excellence with Omani cultural heritage."
      heroImage="/images/final/primary-project.webp"
      cardIcon={BookOpen}
      cardTitle="OUR CURRICULUM"
      cardSubtitle="(INTERNATIONAL STANDARDS & LOCAL IDENTITY)"
      cardImage="/images/final/primary-boys.webp"
      intro={[
        "At Al Shomoukh International Private School, our curriculum is designed to provide every student with a high-quality, inclusive, and internationally focused education that promotes academic excellence and personal development.",
        "Underpinned by the National Curriculum for England and Pearson Edexcel International pathways, our curriculum combines the latest English educational standards with an international approach, providing clear progression from the Early Years through to Upper Secondary.",
        "Learning is made meaningful and accessible through engaging, culturally relevant examples and resources, while integrating Omani cultural values and Ministry of Education requirements.",
        "Through engaging, challenging, and differentiated learning experiences, we ensure that students develop secure knowledge, critical thinking, creativity, communication, leadership, independence, and resilience.",
      ]}
      highlights={[
        {
          icon: Award,
          title: "UK Framework",
          description: "National Curriculum for England",
        },
        {
          icon: BookOpen,
          title: "Pearson Edexcel",
          description: "iPrimary to IAL & BTEC programmes",
        },
        {
          icon: Landmark,
          title: "MoE Aligned",
          description: "Omani Heritage & Bilingual STEM",
        },
        {
          icon: GraduationCap,
          title: "University Ready",
          description: "University and career preparation",
        },
      ]}
      featuresSubtitle="Curriculum Principles"
      featuresHeading="Guiding Pillars of Our Learning Framework"
      features={[
        {
          title: "Broad & Balanced",
          badge: "Holistic",
          description: "A wide subject offer supports academic, creative, scientific, physical, and personal development across all stages.",
        },
        {
          title: "Internationally Recognised",
          badge: "Global Standard",
          description: "Pearson Edexcel routes prepare students for IGCSE, IAL, BTEC, and progression to further study or employment.",
        },
        {
          title: "Culturally Grounded",
          badge: "Omani Heritage",
          description: "National identity, Arabic language, Islamic Studies, and Ministry of Education requirements are integrated with care.",
        },
        {
          title: "Student Centered",
          badge: "Differentiated",
          description: "Continuous assessment and classroom support help teachers respond to individual strengths, learning styles, and needs.",
        },
      ]}
      subjectsHeading="Curriculum Qualifications & Programmes"
      subjects={[
        "Early Years Foundation Stage (EYFS)",
        "Pearson Edexcel iPrimary (Grades 1–6)",
        "Pearson Edexcel iLowerSecondary (Grades 7–8)",
        "International GCSE (Grades 9–10)",
        "International Advanced Level - IAL (Grades 11–12)",
        "Pearson BTEC International Level 3 Extended Diploma",
        "Omani Bilingual Curriculum (Grades 10–12)",
        "General Education Diploma (GED)",
      ]}
      pathwayHeading="Progression With Purpose"
      pathwaySubtitle="Structured Trajectory"
      pathway={[
        {
          label: "Ages 3–5",
          title: "Kindergarten (EYFS)",
          description: "Purposeful EYFS learning builds curiosity, independence, and early academic confidence through play and inquiry.",
          highlights: ["7 Areas of Learning", "Phonics & Numeracy", "Motor Skills"],
        },
        {
          label: "Grades 1–6",
          title: "Primary School (iPrimary)",
          description: "Pearson Edexcel iPrimary creates strong foundations across English, Mathematics, Sciences, and National Subjects.",
          highlights: ["Inquiry Labs", "Progress Tests", "Bilingual Proficiency"],
        },
        {
          label: "Grades 7–8",
          title: "Lower Secondary (iLowerSecondary)",
          description: "Students bridge into rigorous secondary learning, subject specialist teaching, and future IGCSE qualification choices.",
          highlights: ["Specialist Labs", "Analytical Projects", "Checkpoint Readiness"],
        },
        {
          label: "Grades 9–12",
          title: "Upper Secondary & Pre-University",
          description: "Students choose international (IGCSE/IAL), vocational (BTEC), or national bilingual (GED) routes for future university admission.",
          highlights: ["International GCSE & IAL", "BTEC Level 3 Diploma", "Omani Bilingual GED"],
        },
      ]}
      quote={{
        text: "We prepare future global citizens who are confident in the world and proud of their identity.",
        author: "Al Shomoukh Academic Leadership",
      }}
      nextLink={{
        href: "/kindergarten",
        label: "Kindergarten Stage (EYFS)",
        description: "Explore how we nurture curiosity, creativity, and joyful discovery in the early formative years.",
      }}
    />
  )
}
