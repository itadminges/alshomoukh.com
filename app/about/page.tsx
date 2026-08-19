"use client"

import { Target, CheckCircle, BookOpen, Users, Heart, Check } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Scroll3DReveal } from "@/components/scroll-3d"
import { SectionSpirals } from "@/components/decorative-spirals"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden scroll-3d-scene">
      <PageHero 
        title="About Us" 
        subtitle="Discover a learning environment where academic excellence, cultural values, and global opportunities come together to inspire confident, future-ready learners."
      />

      {/* Welcome Section */}
      <section id="welcome" className="py-24 md:py-32 bg-white relative overflow-hidden">
        <SectionSpirals variant="light" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <Scroll3DReveal rotateAmount={12} depth={40}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">
                  Welcome Message
                </span>
                <div className="h-[1px] w-12 bg-gold/30" />
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.15] mb-10 tracking-tight font-bold uppercase">
                Welcome to <br />
                <span className="text-gold">Al Shomoukh International</span> Private School
              </h2>

              <div className="bg-ivory/40 p-8 md:p-12 border-l-4 border-gold shadow-strong space-y-6">
                <p className="text-navy/80 text-base md:text-lg leading-[1.8] font-medium">
                  At Al Shomoukh International Private School, we believe that choosing the right school is one of the most important decisions a family can make. We are committed to providing a nurturing and inspiring learning environment where every student is encouraged to achieve their potential.
                </p>
                <p className="text-navy/80 text-base md:text-lg leading-[1.8] font-medium">
                  Over the years, we have built a strong educational legacy, supporting generations of students and families through a commitment to academic excellence, exceptional care, and holistic development.
                </p>
                <p className="text-navy/80 text-base md:text-lg leading-[1.8] font-medium">
                  We continue to provide an environment where students are empowered to grow with confidence, embrace their values, and prepare for success in a rapidly changing world.
                </p>
              </div>
            </Scroll3DReveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision" className="py-24 md:py-32 bg-ivory/30 relative overflow-hidden border-y border-navy/5">
        <SectionSpirals variant="light" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-gold/30" />
              <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">
                Our Purpose & Values
              </span>
              <div className="h-[1px] w-8 bg-gold/30" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.1] tracking-tight font-bold uppercase">
              Vision & <span className="text-gold">Mission</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <Scroll3DReveal rotateAmount={18} depth={50}>
              <div className="bg-white p-8 md:p-12 shadow-strong border border-navy/5 h-full flex flex-col justify-between relative group hover:border-gold/30 transition-colors duration-500">
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                      <Target className="w-7 h-7 text-gold" />
                    </div>
                    <div>
                      <span className="text-gold font-bold tracking-[0.2em] uppercase text-[10px]">Guiding Principle</span>
                      <h3 className="text-2xl md:text-3xl font-bold text-navy uppercase tracking-tight">Our Vision</h3>
                    </div>
                  </div>
                  <p className="text-navy/80 text-lg md:text-xl leading-[1.8] font-medium italic border-l-2 border-gold/40 pl-6 py-2">
                    "To be a community of lifelong learners who demonstrate the knowledge, skills, and values required for productive global citizenship."
                  </p>
                </div>
              </div>
            </Scroll3DReveal>

            <Scroll3DReveal rotateAmount={18} depth={50}>
              <div className="bg-white p-8 md:p-12 shadow-strong border border-navy/5 h-full relative group hover:border-gold/30 transition-colors duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                    <CheckCircle className="w-7 h-7 text-gold" />
                  </div>
                  <div>
                    <span className="text-gold font-bold tracking-[0.2em] uppercase text-[10px]">Our Core Commitment</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-navy uppercase tracking-tight">Our Mission</h3>
                  </div>
                </div>
                
                <p className="text-navy/80 text-base md:text-lg leading-relaxed font-medium mb-6">
                  At Al Shomoukh International Private School, we are a community of learners. We RISE:
                </p>

                <div className="space-y-4">
                  {[
                    { label: "Respect", text: "We encourage kindness, understanding, and tolerance for others and ourselves." },
                    { label: "Integrity", text: "Honesty and responsibility are at the heart of who we are." },
                    { label: "Success", text: "We nurture the holistic development of every member of our community." },
                    { label: "Excellence", text: "We maintain high expectations, support exploration, and promote critical thinking." }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-ivory/40 border-l-2 border-gold">
                      <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mt-0.5 shrink-0">
                        <Check className="h-3.5 w-3.5 text-navy font-bold" />
                      </div>
                      <div>
                        <span className="text-gold font-bold uppercase tracking-wider text-sm block mb-0.5">{item.label}</span>
                        <span className="text-navy/70 text-sm font-medium leading-relaxed">{item.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Scroll3DReveal>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-24 md:py-32 bg-white relative overflow-hidden">
        <SectionSpirals variant="light" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <Scroll3DReveal rotateAmount={14} depth={45}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">
                  Heritage & Journey
                </span>
                <div className="h-[1px] w-12 bg-gold/30" />
              </div>

              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-gold/10 border-l-4 border-gold">
                  <BookOpen className="w-8 h-8 text-gold" />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.1] tracking-tight font-bold uppercase">
                  Our <span className="text-gold">Story</span>
                </h2>
              </div>

              <div className="text-navy/80 text-base md:text-lg leading-[1.8] space-y-6 font-medium">
                <p>
                  Al Shomoukh International Private School is a homegrown educational brand and the lifelong vision of its founder, Honourable Sheikh Salim bin Hamood Al Hashmi.
                </p>
                <p>
                  The school was established by Global Education Services (GES) to provide premium education based on the British Curriculum for both Omani and international students.
                </p>
                <p>
                  Since its establishment, Al Shomoukh International Private School has been committed to creating a supportive learning community that combines the personal care of a close-knit environment with the high standards of an international education.
                </p>
                <p>
                  Today, we provide a comprehensive educational journey from Kindergarten to Grade 12, welcoming students from diverse backgrounds and cultures. Our school community is built on academic excellence, strong values, and a commitment to developing confident, independent, and globally minded learners.
                </p>
                <p className="p-6 bg-navy text-white border-l-4 border-gold shadow-strong">
                  Our leadership team brings together experienced educators and school professionals from diverse international backgrounds, united by a shared passion for inspiring students and delivering excellence in teaching and learning.
                </p>
              </div>
            </Scroll3DReveal>
          </div>
        </div>
      </section>

      {/* Community & Giving Back Section */}
      <section id="community" className="py-24 md:py-32 bg-navy text-white relative overflow-hidden">
        <SectionSpirals variant="dark" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-gold/50" />
              <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">
                Social Responsibility
              </span>
              <div className="h-[1px] w-8 bg-gold/50" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white leading-[1.1] tracking-tight font-bold uppercase">
              Community & <span className="text-gold">Giving Back</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <Scroll3DReveal rotateAmount={16} depth={40}>
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 md:p-12 shadow-strong h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center">
                      <Users className="w-7 h-7 text-gold" />
                    </div>
                    <div>
                      <span className="text-gold font-bold tracking-[0.2em] uppercase text-[10px]">Involvement</span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">Community</h3>
                    </div>
                  </div>

                  <p className="text-ivory/80 text-base md:text-lg leading-[1.8] mb-8 font-medium">
                    At Al Shomoukh International Private School, we believe that a strong, inclusive community is the foundation of a thriving learning environment. Through events, activities and partnerships, we foster a sense of belonging that extends beyond the classroom, preparing our students to be active, responsible global citizens.
                  </p>

                  <div className="border-t border-white/10 pt-8 mt-8">
                    <h4 className="font-bold text-xl tracking-tight uppercase mb-4 text-gold">Develop a Statement</h4>
                    <p className="text-ivory/80 text-base md:text-lg leading-[1.8] mb-6 font-medium">
                      Our training programmes are designed to provide valuable learning opportunities for both the local and international community. Whether you are an aspiring educator, a professional seeking skill enhancement, or someone passionate about lifelong learning, our programmes cater to a diverse range of needs. Led by our highly qualified and experienced staff, these training sessions offer practical insights, innovative teaching methodologies, and hands-on learning experiences.
                    </p>
                    <p className="text-ivory/80 text-base md:text-lg leading-[1.8] font-medium bg-white/5 p-4 border-l-2 border-gold">
                      We welcome individuals from all backgrounds to join us in this enriching journey. To be part of our Training Programmes, please send an email to <a href="mailto:hr@alshomoukh.com" className="text-gold font-bold hover:underline">hr@alshomoukh.com</a> or <a href="mailto:info@alshomoukh.com" className="text-gold font-bold hover:underline">info@alshomoukh.com</a> for more details.
                    </p>
                  </div>
                </div>
              </div>
            </Scroll3DReveal>

            <Scroll3DReveal rotateAmount={16} depth={40}>
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 md:p-12 shadow-strong h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center">
                      <Heart className="w-7 h-7 text-gold" />
                    </div>
                    <div>
                      <span className="text-gold font-bold tracking-[0.2em] uppercase text-[10px]">Impact</span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">Giving Back to the Community</h3>
                    </div>
                  </div>

                  <p className="text-ivory/80 text-base md:text-lg leading-[1.8] mb-8 font-medium">
                    At Al Shomoukh International Private School, we believe that community service is essential in shaping a generation that is compassionate, socially responsible, and aware of the world around them. By actively participating in initiatives that give back to society, our students develop empathy, selflessness, and a deeper understanding of the needs of others. Through volunteering, charity projects and outreach programs, we instill values of kindness and responsibility, empowering our students to make a positive impact.
                  </p>

                  <div className="border-t border-white/10 pt-8 mt-8">
                    <h4 className="font-bold text-xl tracking-tight uppercase mb-4 text-gold">What we have done in the community</h4>
                    <p className="text-ivory/80 text-base md:text-lg leading-[1.8] font-medium">
                      We are committed to making a positive impact on both our local and global communities. Through a range of initiatives, including charity events, environmental projects, and community outreach programs, we strive to foster a sense of responsibility and empathy in our students. Our efforts aim to inspire the next generation to contribute meaningfully to society and create a lasting, positive change.
                    </p>
                  </div>
                </div>
              </div>
            </Scroll3DReveal>
          </div>
        </div>
      </section>

      {/* Diverse Team Section */}
      <section className="py-24 md:py-32 bg-white text-center relative overflow-hidden">
        <SectionSpirals variant="light" />
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <Scroll3DReveal rotateAmount={10} depth={30}>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-gold/30" />
              <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">
                Global Faculty
              </span>
              <div className="h-[1px] w-8 bg-gold/30" />
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-8 tracking-tight uppercase">
              Our <span className="text-gold">Diverse Team</span>
            </h2>
            
            <p className="text-lg md:text-xl text-navy/70 leading-[1.8] font-medium italic border-t border-b border-gold/20 py-8 max-w-2xl mx-auto">
              Our staff represent a wide range of international backgrounds, contributing to a rich and globally minded school culture.
            </p>
          </Scroll3DReveal>
        </div>
      </section>
    </main>
  )
}
