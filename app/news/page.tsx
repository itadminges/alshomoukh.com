"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, ArrowRight, Share2, Tag } from "lucide-react"
import Image from "next/image"
import { PageHero } from "@/components/page-hero"

const newsItems = [
  {
    id: "moe-workshop",
    title: "MOE Leadership Workshop",
    date: "Nov 14, 2024",
    category: "Academic",
    description: "Al Shomoukh leadership team participated in the Ministry of Education Leadership Workshop, collaborating with educational leaders across Oman to discuss modern instructional strategies.",
    image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "cambridge-center",
    title: "Becoming an Official Cambridge Center",
    date: "Oct 28, 2024",
    category: "Academic",
    description: "We are proud to celebrate our accredited status as an official Cambridge Center, providing our students with internationally recognised benchmarks and qualifications.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "cognia-accreditation",
    title: "Cognia International Accreditation",
    date: "Sep 19, 2024",
    category: "Academic",
    description: "Al Shomoukh International Private School has achieved Cognia Accreditation, affirming our commitment to educational excellence, institutional quality, and continuous improvement.",
    image: "https://images.unsplash.com/photo-1546410531-bea5aad16e45?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "injaz-oman",
    title: "Collaboration with Injaz Oman: STEM Workshop",
    date: "May 12, 2024",
    category: "Student Life",
    description: "Students participated in an immersive two-day STEM Workshop in collaboration with Injaz Oman, solving real-world challenges through technology, engineering, and teamwork.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "al-mouj-expansion",
    title: "Shomoukh Nursery and School, Al Mouj",
    date: "Aug 20, 2024",
    category: "Events",
    description: "Exciting developments and community open days celebrating our expanding early learning environment and nurturing spaces at Al Mouj.",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "graduation-2024",
    title: "Graduation Ceremony Class of 2024",
    date: "Jun 06, 2024",
    category: "Events",
    description: "Honouring the achievements, perseverance, and university milestones of our graduating seniors as they embark on higher education around the world.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "art-exhibition-2024",
    title: "Annual Art & Music Exhibition",
    date: "Apr 25, 2024",
    category: "Events",
    description: "Showcasing the extraordinary creative talents, paintings, sculptures, and musical performances of our students across all year groups.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop&q=80"
  }
]

const categories = ["All", "Events", "Academic", "Student Life"]

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

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredNews = selectedCategory === "All" 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory)

  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="News & Stories" 
        subtitle="Stay updated with the latest events, achievements, and announcements from our vibrant school community."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <FadeIn>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-16 border-b border-navy/5 pb-8 gap-4">
                <h2 className="font-bold text-2xl text-navy tracking-tight uppercase">Latest <span className="text-gold">Updates</span></h2>
                <div className="flex flex-wrap gap-3">
                  {categories.map((cat) => (
                    <button 
                      key={cat} 
                      onClick={() => setSelectedCategory(cat)}
                      className={`text-[10px] font-bold uppercase tracking-widest px-4 py-2 transition-all ${
                        selectedCategory === cat 
                          ? "bg-navy text-gold shadow-sm" 
                          : "text-navy/60 hover:text-navy bg-ivory/50"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {filteredNews.map((item, i) => (
                    <FadeIn key={item.id} y={40} delay={0.1 * (i % 3)}>
                      <article className="group cursor-pointer flex flex-col h-full bg-white border border-navy/5 p-6 hover:border-gold/30 hover:shadow-strong transition-all duration-500">
                          <div className="relative aspect-[16/10] overflow-hidden mb-6 border border-navy/5 shadow-sm">
                              <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                              <div className="absolute top-4 left-4 bg-navy text-gold px-4 py-1 text-[9px] font-bold uppercase tracking-widest flex items-center gap-2">
                                <Tag className="w-3 h-3" />
                                {item.category}
                              </div>
                          </div>
                          
                          <div className="flex items-center gap-3 text-navy/50 text-[10px] font-bold tracking-[0.2em] uppercase mb-3">
                            <Calendar className="w-3.5 h-3.5 text-gold" />
                            {item.date}
                          </div>

                          <h3 className="font-bold text-xl text-navy mb-3 tracking-tight leading-[1.3] group-hover:text-gold transition-colors duration-300">
                            {item.title}
                          </h3>
                          
                          <p className="text-navy/70 leading-relaxed mb-6 font-medium text-sm flex-grow">
                            {item.description}
                          </p>

                          <div className="flex items-center justify-between pt-4 border-t border-navy/5 grayscale group-hover:grayscale-0 transition-all duration-500 mt-auto">
                              <div className="flex items-center gap-2 text-gold font-bold text-[10px] tracking-[0.3em] uppercase group-hover:gap-4 transition-all">
                                  Read Article
                                  <ArrowRight className="w-4 h-4" />
                              </div>
                              <Share2 className="w-4 h-4 text-navy/20 hover:text-navy transition-colors" />
                          </div>
                      </article>
                    </FadeIn>
                ))}
            </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-24 bg-ivory/30 border-y border-navy/5">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <h3 className="text-2xl font-bold uppercase tracking-tight text-navy mb-6">Join Our Mailing List</h3>
            <p className="text-navy/60 font-medium mb-10 max-w-lg mx-auto leading-relaxed">
              Subscribe to receive weekly updates, academic calendars, and school newsletters directly in your inbox.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing!"); }} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                required
                placeholder="Your email address" 
                className="flex-grow bg-white border border-navy/10 px-6 py-4 text-sm font-medium focus:outline-none focus:border-gold transition-colors"
              />
              <button type="submit" className="bg-navy text-white px-8 py-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-gold transition-all duration-500">
                Subscribe
              </button>
            </form>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
