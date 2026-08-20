"use client"

import { Check } from "lucide-react"
import { AcademicSubPageLayout } from "@/components/academic-subpage-layout"
import { Scroll3DReveal, Scroll3DCard } from "@/components/scroll-3d"
import Image from "next/image"

export default function UpperSecondaryPage() {
  const pathwayCards = [
    {
      num: "01",
      title: "International GCSE",
      grades: "Grades 9–10 (Ages 14–16)",
      framework: "Pearson Edexcel IGCSE",
      desc: "Globally recognised British qualification studied across 80+ countries, establishing rigorous subject mastery and analytical depth.",
      features: ["UK GCSE Equivalent", "Core & Elective Breadth", "External Board Exams"],
    },
    {
      num: "02",
      title: "International A Level (IAL)",
      grades: "Grades 11–12 (Ages 16–19)",
      framework: "Pearson Edexcel IAL",
      desc: "The gold-standard pre-university qualification offering modular flexibility, deep academic specialisation, and direct entry to top world universities.",
      features: ["Modular Assessment", "Advanced Specialisation", "Russell Group & Global Entry"],
    },
    {
      num: "03",
      title: "Pearson BTEC Level 3",
      grades: "Grades 11–12 (Ages 16–19)",
      framework: "Extended Diploma (Vocational)",
      desc: "Career-focused vocational qualification equivalent to 3 International A Levels, assessed via practical projects, real business scenarios, and coursework.",
      features: ["Equivalent to 3 A Levels", "No Single Exam Pressure", "Industry & Applied Skills"],
      hasLogo: true
    },
    {
      num: "04",
      title: "Omani Bilingual Curriculum",
      grades: "Grades 10–12 (Ages 15–18)",
      framework: "General Education Diploma (GED)",
      desc: "Ministry of Education-approved national bilingual pathway delivering core STEM in English while preparing students for the Omani GED.",
      features: ["MoE Oman Approved", "Bilingual STEM Delivery", "Oman & Regional University Entry"],
    },
  ]

  const customPathwayComparison = (
    <section className="py-24 md:py-36 bg-[#FDFCF7] border-y border-navy/5 relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
        
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-[11px]">
              Tailored Senior Education
            </span>
            <div className="h-[1px] w-8 bg-gold/30" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.1] mb-6 tracking-tight font-bold uppercase font-heading">
            Four Distinct <span className="text-gold">Senior Pathways</span>
          </h2>
          <p className="text-navy/70 text-sm md:text-base leading-relaxed font-medium">
            Al Shomoukh provides students with the flexibility to choose an academic trajectory that perfectly aligns with their strengths, career ambitions, and university aspirations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pathwayCards.map((card, idx) => (
            <Scroll3DCard key={idx} index={idx}>
              <div className="bg-white border border-navy/5 p-8 h-full flex flex-col justify-between hover:border-gold/40 transition-colors duration-500 shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-gold font-bold text-xs uppercase tracking-widest">
                      Pathway {card.num}
                    </span>
                    <span className="text-[9px] font-bold px-2 py-0.5 bg-ivory text-navy">
                      {card.grades}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold uppercase tracking-tight text-navy mb-1.5 font-heading">
                    {card.title}
                  </h3>

                  <p className="text-[11px] font-bold text-gold uppercase tracking-wider mb-4">
                    {card.framework}
                  </p>

                  <p className="text-navy/70 text-xs md:text-sm leading-relaxed font-medium mb-6">
                    {card.desc}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-navy/5 mb-6">
                    {card.features.map((f, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-navy/80">
                        <Check className="w-3.5 h-3.5 text-gold shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {card.hasLogo && (
                  <div className="pt-4 border-t border-navy/5 flex items-center justify-center">
                    <Image
                      src="/pearson-btec-approved-centre.png"
                      alt="Pearson BTEC Approved Centre"
                      width={140}
                      height={50}
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                )}
              </div>
            </Scroll3DCard>
          ))}
        </div>

        {/* University and Career Guidance Banner */}
        <Scroll3DReveal rotateAmount={6} depth={20}>
          <div className="bg-navy text-white p-8 md:p-14 shadow-strong">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-gold font-bold tracking-[0.3em] uppercase text-[11px]">Global Recognition</span>
                  <div className="h-[1px] w-6 bg-gold/40" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-4 font-heading">
                  University & Career <span className="text-gold">Guidance</span>
                </h3>
                <p className="text-ivory/80 text-xs md:text-sm leading-relaxed font-medium">
                  Upper Secondary programmes support university and career planning. Families should contact the school to confirm the application guidance and preparation services currently available for each pathway.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white/5 border border-white/10 p-5">
                  <p className="text-gold font-bold text-xs uppercase tracking-wider mb-1">Higher Education</p>
                  <p className="text-sm font-bold text-white uppercase">Application Preparation</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-5">
                  <p className="text-gold font-bold text-xs uppercase tracking-wider mb-1">Future Planning</p>
                  <p className="text-sm font-bold text-white uppercase">Academic & Career Choices</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-5">
                  <p className="text-gold font-bold text-xs uppercase tracking-wider mb-1">Pathway Advice</p>
                  <p className="text-sm font-bold text-white uppercase">Local & International Options</p>
                </div>
              </div>
            </div>
          </div>
        </Scroll3DReveal>

      </div>
    </section>
  )

  return (
    <AcademicSubPageLayout
      title="Upper Secondary & Pre-University"
      subtitle="Comprehensive British and National pathways empowering students aged 14–19 to excel in International GCSE, IAL, Pearson BTEC Level 3, and Omani Bilingual qualifications."
      heroImage="/images/final/upper-secondary-students.webp"
      cardTitle="International GCSE (Grades 9–10)"
      cardSubtitle="Grades 9–10 • Ages 14–16 • Pearson Edexcel IGCSE"
      cardImage="/images/final/upper-secondary-class.webp"
      intro={[
        "At Al Shomoukh International Private School, students in Grades 9 and 10 follow the Pearson Edexcel International GCSE (IGCSE) Programme, a globally recognised British qualification designed for learners aged 14–16.",
        "Studied in over 80 countries worldwide, Pearson Edexcel International GCSEs are equivalent to UK GCSE qualifications and provide students with the academic knowledge, practical skills, and critical thinking required for progression to International A levels, BTEC Level 3 qualifications, university, and future careers.",
        "The curriculum has been specifically designed for international learners, combining rigorous academic standards with relevant global perspectives.",
      ]}
      highlights={[
        {
          title: "80+",
          description: "Countries worldwide offering Pearson Edexcel qualifications",
        },
        {
          title: "UK Equivalent",
          description: "Globally recognised British standard benchmark",
        },
        {
          title: "Pathway to Success",
          description: "Progression options for A Levels, BTEC & higher education",
        },
        {
          title: "Future Focused",
          description: "Skills for international higher education opportunities",
        },
      ]}
      customSections={customPathwayComparison}
      featuresSubtitle="Upper Secondary Strengths"
      featuresHeading="Hallmarks of Senior School Education"
      features={[
        {
          title: "4 Distinct Pathways",
          badge: "Flexibility",
          description: "Options spanning academic IGCSE/IAL, applied vocational BTEC, and national bilingual GED programmes.",
        },
        {
          title: "Recognised Qualifications",
          badge: "Global Standard",
          description: "International qualifications that support applications to higher education in Oman and abroad.",
        },
        {
          title: "Application Guidance",
          badge: "Personalised",
          description: "Guidance for higher-education applications and career planning, according to each student's pathway and current school provision.",
        },
        {
          title: "Leadership & Ethics",
          badge: "Character",
          description: "Empowering senior students through community engagement, student council, debate, and social responsibility.",
        },
      ]}
      detailSectionsHeading="Comprehensive Pathway Overviews"
      detailSections={[
        {
          title: "International GCSE (Grades 9–10)",
          subtitle: "Ages 14–16 • Pearson Edexcel International Standard",
          tags: ["English Language", "English Literature", "Mathematics", "Biology", "Chemistry", "Physics", "Business", "ICT", "Global Citizenship", "Economics", "Art", "French", "Arabic", "Islamic Studies"],
          paragraphs: [
            "Our International GCSE programme offers a broad and balanced curriculum that enables students to develop subject mastery while preparing for internationally benchmarked external examinations. Students study a carefully selected range of core and optional subjects designed to foster analytical thinking, practical application, and examination confidence.",
            "Teaching is delivered by highly qualified specialist teachers using innovative teaching methodologies, practical investigations, digital learning technologies, and evidence-based assessment practices. Mock examinations and personalized feedback ensure students are thoroughly prepared for external Pearson Edexcel examinations.",
            "Beyond academic success, our International GCSE programme is committed to developing well-rounded global citizens through leadership opportunities, community engagement, and character education.",
          ],
          bulletsHeading: "Why Choose Pearson Edexcel International GCSE?",
          bullets: [
            "Globally recognized standard equivalent to UK GCSE qualifications.",
            "Rigorous external assessment certified by Pearson Edexcel.",
            "Broad subject choice enabling balanced specialization across STEM and Humanities.",
            "Seamless progression directly into International A Levels (IAL) or BTEC Level 3.",
            "Builds critical analytical, research, and examination mastery.",
            "Recognized by universities and educational authorities worldwide."
          ],
        },
        {
          title: "International Advanced Level (IAL)",
          subtitle: "Grades 11–12 (Ages 16–19) • Pre-University Qualification",
          tags: ["Pure Mathematics", "Statistics & Mechanics", "Biology", "Chemistry", "Physics", "Business Studies", "Economics", "Information Technology", "English Literature"],
          paragraphs: [
            "At Al Shomoukh International Private School, students in Grades 11 and 12 follow the Pearson Edexcel International Advanced Level (IAL) Programme. Designed for learners aged 16–19, the programme provides an academically rigorous pathway that supports applications to universities in Oman and internationally.",
            "The modular structure of Pearson Edexcel International A levels allows students to complete assessments throughout their programme of study, providing opportunities to monitor progress, receive targeted feedback, and continually strengthen academic performance.",
            "Through advanced academic study, independent research, analytical thinking, and practical application, students develop the intellectual curiosity and critical thinking skills required to succeed in higher education and competitive global careers.",
          ],
          bulletsHeading: "Why Choose International Advanced Levels (IAL)?",
          bullets: [
            "Modular structure offering progressive assessment and performance optimization.",
            "Recognised by higher education institutions in many countries, subject to each institution's entry requirements.",
            "Enables deep academic specialisation tailored to career aspirations (Medicine, Engineering, Business, Law).",
            "Develops independent research, university-level essay writing, and analytical problem-solving.",
            "Supports preparation for UCAS and other higher-education application processes.",
            "Offers subject combinations that can be aligned with future study and career interests."
          ],
        },
        {
          title: "Pearson BTEC International Level 3 Extended Diploma",
          subtitle: "Grades 11–12 (Ages 16–19) • Applied Vocational Excellence Equivalent to 3 A Levels",
          logo: {
            src: "/pearson-btec-approved-centre.png",
            alt: "Pearson BTEC Approved Centre Logo",
            width: 220,
            height: 90,
          },
          paragraphs: [
            "The Pearson BTEC International Level 3 Extended Diploma is a globally recognised, career-focused qualification designed for students aged 16–19 who wish to combine academic study with practical, real-world learning. Equivalent in size to three International A levels, the qualification provides students with the knowledge, technical skills, and professional competencies required for university or employment.",
            "Assessment is based primarily on coursework, projects, presentations, and practical assignments, allowing students to demonstrate their understanding in meaningful contexts while building a professional portfolio of evidence.",
            "Our BTEC programme bridges the gap between education and industry by enabling students to apply theoretical knowledge to real business challenges, developing valuable transferable leadership and project management skills.",
          ],
          bulletsHeading: "Why Choose the Pearson BTEC International Level 3 Extended Diploma?",
          bullets: [
            "Internationally recognised qualification equivalent to three International A levels.",
            "Accepted by many universities and higher education institutions worldwide.",
            "Career-focused curriculum that develops practical, workplace-ready skills.",
            "Assessment through coursework and applied learning rather than relying solely on final examinations.",
            "Develops leadership, communication, teamwork, research, and project management skills.",
            "Provides clear progression pathways to university, higher education, and professional careers.",
          ],
        },
        {
          title: "Omani Bilingual Curriculum (Grades 10–12)",
          subtitle: "Ages 15–18 • Ministry of Education Approved General Education Diploma (GED)",
          tags: ["Mathematics", "Physics", "Chemistry", "Biology", "English Language", "Information Technology", "Arabic Language", "Islamic Studies", "Physical Education", "Business & Economics"],
          paragraphs: [
            "At Al Shomoukh International Private School, students in Grades 10 to 12 have the opportunity to follow the Omani Bilingual Curriculum, a Ministry of Education-approved programme that combines the academic requirements of the Sultanate of Oman.",
            "The curriculum provides students with a strong bilingual foundation, delivering key academic subjects in English while preparing learners for the Omani General Education Diploma (GED). This nationally recognised qualification enables students to progress to higher education institutions in Oman and internationally.",
            "Teaching is delivered by experienced and highly qualified educators who use innovative teaching strategies, practical applications, and continuous assessment to ensure students are fully prepared for the Ministry of Education examinations.",
          ],
          bulletsHeading: "Why Choose the Omani Bilingual Curriculum?",
          bullets: [
            "Official Ministry of Education accreditation preparing students for the General Education Diploma (GED).",
            "Core STEM disciplines delivered in English ensuring strong bilingual communication.",
            "Supports applications to universities and colleges in Oman and the region, subject to entry requirements.",
            "Integrates national identity, Arabic language mastery, and Islamic values.",
            "Provides a comprehensive balance between international standards and local heritage.",
            "Dedicated preparation for national examinations and higher-education applications."
          ],
        },
      ]}
      quote={{
        text: "By combining outstanding academic preparation with character development and global citizenship, we empower our graduates to make informed choices, embrace lifelong learning, and achieve success in higher education and future careers.",
        author: "Upper Secondary Leadership",
      }}
      nextLink={{
        href: "/learning-support",
        label: "Learning Support Department",
        description: "Learn how our inclusive education team supports diverse learning needs, neurodiversity, and academic growth across all grade levels.",
      }}
    />
  )
}
