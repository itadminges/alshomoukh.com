"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { PageHero } from "@/components/page-hero"

const FadeIn = ({ children, delay = 0, x = 0, y = 30 }: { children: React.ReactNode, delay?: number, x?: number, y?: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function UpperSecondaryPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="Upper Secondary" 
        subtitle="Advanced academic pathways designed to prepare students for global higher education and professional success."
      />

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-bold text-3xl text-navy mb-8 tracking-tight uppercase border-l-4 border-gold pl-6">
              Pearson Edexcel International GCSE (IGCSE) Programme
            </h2>
            <p className="text-gold font-bold tracking-widest uppercase text-xs mb-4">Grades 9 & 10</p>
            <div className="text-lg text-navy/70 leading-[1.8] font-medium mb-12 italic space-y-6">
              <p>
                At Al Shomoukh International Private School, students in Grades 9 and 10 follow the Pearson Edexcel International GCSE (IGCSE) Programme, a globally recognised British qualification designed for learners aged 14–16. Studied in over 80 countries worldwide, Pearson Edexcel International GCSEs are equivalent to UK GCSE qualifications and provide students with the academic knowledge, practical skills, and critical thinking required for progression to International A Levels, BTEC Level 3 qualifications, university, and future careers. The curriculum has been specifically designed for international learners, combining rigorous academic standards with relevant global perspectives.
              </p>
              <p>
                Our International GCSE programme offers a broad and balanced curriculum that enables students to develop subject mastery while preparing for internationally benchmarked external examinations. Students study a carefully selected range of core and optional subjects, including English Language, English Literature, Mathematics, Biology, Chemistry, Physics, Business, Information and Communication Technology (ICT), Global Citizenship, Arabic, Art, French, Economics, Physical Education, and other elective subjects. Through analytical thinking, research, practical application, collaboration, and independent study, students develop the confidence and academic resilience needed to excel in higher education and an increasingly competitive global environment.
              </p>
              <p>
                Teaching is delivered by highly qualified specialist teachers using innovative teaching methodologies, practical investigations, digital learning technologies, and evidence-based assessment practices. Continuous formative assessment, mock examinations, and personalised feedback enable teachers to monitor progress closely, identify areas for improvement, and ensure students are fully prepared for Pearson Edexcel external examinations. This structured approach promotes high academic achievement while encouraging students to become reflective, independent, and self-motivated learners.
              </p>
              <p>
                Beyond academic success, our International GCSE programme is committed to developing well-rounded global citizens. Students are encouraged to demonstrate leadership, integrity, resilience, creativity, and social responsibility through enrichment activities, community engagement, wellbeing initiatives, and character education. By combining academic excellence with personal development, we prepare our students to become confident, responsible, and internationally minded young people who are equipped to succeed in further education and make meaningful contributions to society.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="text-lg text-navy/70 leading-[1.8] font-medium mb-12 italic space-y-6">
              <h2 className="font-bold text-3xl text-navy mb-8 tracking-tight uppercase border-l-4 border-gold pl-6">
                Pearson Edexcel International Advanced Level (IAL) Programme
              </h2>
              <p className="text-gold font-bold tracking-widest uppercase text-xs mb-4">Grades 11 & 12</p>
              <p>
                At Al Shomoukh International Private School, students in Grades 11 and 12 follow the Pearson Edexcel International Advanced Level (IAL) Programme, one of the world&apos;s most respected pre-university qualifications. Designed for learners aged 16–19, the programme provides an academically rigorous pathway that prepares students for admission to leading universities in the United Kingdom, Europe, North America, the Middle East, and around the world.
              </p>
              <p>
                Our International Advanced Level curriculum enables students to specialise in subjects aligned with their university aspirations and future career pathways. Students study a carefully selected combination of subjects, including Mathematics, Biology, Chemistry, Physics, Business, Economics, Information Technology, English, and other specialist options. Through advanced academic study, independent research, analytical thinking, and practical application, students develop the knowledge, intellectual curiosity, and critical thinking skills required to succeed in higher education and an increasingly competitive global environment.
              </p>
              <p>
                Teaching is delivered by experienced subject specialists using innovative teaching strategies, practical investigations, academic research, and technology-enhanced learning. The modular structure of Pearson Edexcel International A Levels allows students to complete assessments throughout their programme of study, providing opportunities to monitor progress, receive targeted feedback, and continually strengthen their academic performance. This personalised approach encourages resilience, independent learning, and academic excellence while ensuring students are exceptionally well prepared for university-level study.
              </p>
              <p>
                Beyond academic achievement, our International Advanced Level programme is committed to developing confident, ethical, and globally minded young adults. Through leadership opportunities, community engagement, career guidance, wellbeing initiatives, and enrichment programmes, students are encouraged to become resilient, innovative, and socially responsible leaders. By combining outstanding academic preparation with character development and global citizenship, we empower our graduates to make informed choices, embrace lifelong learning, and achieve success in higher education and their future careers.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="text-lg text-navy/70 leading-[1.8] font-medium mb-12 italic space-y-6">
              <h2 className="font-bold text-3xl text-navy mb-8 tracking-tight uppercase border-l-4 border-gold pl-6">
                Pearson BTEC International Level 3 Extended Diploma
              </h2>
              <p>
                The Pearson BTEC International Level 3 Extended Diploma is a globally recognised, career-focused qualification designed for students aged 16–19 who wish to combine academic study with practical, real-world learning. Equivalent in size to three International A Levels, the qualification provides students with the knowledge, technical skills, and professional competencies required for progression to university, higher education, apprenticeships, or employment.
              </p>
              <p>
                At Al Shomoukh International Private School, students benefit from an engaging learning experience that develops critical thinking, problem-solving, communication, teamwork, leadership, and independent research skills through authentic vocational scenarios. Assessment is based primarily on coursework, projects, presentations, and practical assignments, allowing students to demonstrate their understanding in meaningful contexts while building a professional portfolio of evidence.
              </p>
              <p>
                Our BTEC programme is designed to bridge the gap between education and industry by enabling students to apply theoretical knowledge to real business challenges. Learners gain valuable transferable skills that prepare them for success in higher education and the modern workplace while developing confidence, creativity, and resilience.
              </p>
              <h3 className="font-bold text-2xl text-navy mb-6 tracking-tight uppercase">
                Why Choose the Pearson BTEC International Level 3 Extended Diploma?
              </h3>
              <ul className="list-disc pl-6 space-y-3">
                <li>Internationally recognised qualification equivalent to three International A Levels.</li>
                <li>Accepted by many universities and higher education institutions worldwide.</li>
                <li>Career-focused curriculum that develops practical, workplace-ready skills.</li>
                <li>Assessment through coursework and applied learning rather than relying solely on final examinations.</li>
                <li>Develops leadership, communication, teamwork, research, analytical thinking, and project management skills.</li>
                <li>Provides clear progression pathways to university, higher education, and professional careers.</li>
              </ul>
              <p>
                At Al Shomoukh International Private School, we are committed to providing students with innovative learning opportunities that prepare them to become confident, skilled, and globally competitive learners, equipped for success in higher education and their future careers.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="text-lg text-navy/70 leading-[1.8] font-medium mb-12 italic space-y-6">
              <h2 className="font-bold text-3xl text-navy mb-8 tracking-tight uppercase border-l-4 border-gold pl-6">
                Omani Bilingual Curriculum (Grades 10–12)
              </h2>
              <p>
                At Al Shomoukh International Private School, students in Grades 10 to 12 have the opportunity to follow the Omani Bilingual Curriculum, a Ministry of Education-approved programme that combines the academic requirements of the Sultanate of Oman. The curriculum provides students with a strong bilingual foundation, delivering key academic subjects in English while preparing learners for the Omani General Education Diploma (GED). This nationally recognised qualification enables students to progress to higher education institutions in Oman and is also recognised by many universities internationally.
              </p>
              <p>
                The programme offers a broad and balanced curriculum designed to promote academic excellence, bilingual proficiency, and personal development. Students study a comprehensive range of subjects, including Mathematics, Physics, Chemistry, Biology, English Language, Information Technology, Arabic Language, Physical Education, Business, Economics and Ministry of Education compulsory subjects. Through rigorous academic study, practical investigations, research, and collaborative learning, students develop critical thinking, problem-solving, communication, and independent learning skills that prepare them for higher education and future careers. The curriculum is carefully aligned with Ministry of Education requirements while supporting students in becoming confident bilingual learners.
              </p>
              <p>
                Teaching is delivered by experienced and highly qualified educators who use innovative teaching strategies, practical applications, digital technologies, and continuous assessment to maximise student achievement. Regular formative assessments, mock examinations, and targeted feedback enable teachers to monitor progress closely, personalise learning, and ensure students are fully prepared for the Ministry of Education General Education Diploma examinations. This structured approach promotes high academic standards while fostering resilience, responsibility, and a commitment to lifelong learning.
              </p>
              <p>
                Alongside academic success, our Omani Bilingual Curriculum is committed to developing well-rounded, responsible, and globally aware young adults. Through leadership opportunities, character education, wellbeing initiatives, and community engagement, students are encouraged to demonstrate integrity, respect, resilience, and social responsibility. By combining academic excellence with strong bilingual communication skills and the values of the Sultanate of Oman, we prepare our graduates to thrive in higher education, contribute positively to society, and succeed in an increasingly interconnected world.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
