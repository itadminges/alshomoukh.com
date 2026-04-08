"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, ArrowRight, Share2, Tag } from "lucide-react"
import Image from "next/image"
import { PageHero } from "@/components/page-hero"

const newsItems = [
  {
    title: "School Community Engagement Day",
    date: "2 April 2026",
    category: "Events",
    description: "Join us for a day of community building and activities at Al Shomoukh International School.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80"
  },
  {
      title: "Parent-Teacher Meeting",
      date: "13 April 2026",
      category: "School Info",
      description: "Discuss your child's progress with our teaching staff during the upcoming PTM session.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=80"
  },
  {
      title: "Science Exhibition Winners",
      date: "15 March 2026",
      category: "Student Life",
      description: "Celebrating the creativity and innovation of our students in this year's Science Exhibition.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop&q=80"
  }
]

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
  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="News & Stories" 
        subtitle="Stay updated with the latest events, achievements, and announcements from our vibrant school community."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <FadeIn>
              <div className="flex items-center justify-between mb-16 border-b border-navy/5 pb-8">
                <h2 className="font-bold text-2xl text-navy tracking-tight uppercase">Latest <span className="text-gold">Updates</span></h2>
                <div className="hidden md:flex gap-4">
                  {["All", "Events", "Academic", "Sports"].map((cat, i) => (
                    <button key={i} className="text-[10px] font-bold uppercase tracking-widest text-navy/40 hover:text-gold transition-colors">
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {newsItems.map((item, i) => (
                    <FadeIn key={i} y={40} delay={0.1 * i}>
                      <article className="group cursor-pointer">
                          <div className="relative aspect-[16/10] overflow-hidden mb-8 border border-navy/5 shadow-sm">
                              <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                              <div className="absolute top-4 left-4 bg-navy text-gold px-4 py-1 text-[9px] font-bold uppercase tracking-widest flex items-center gap-2">
                                <Tag className="w-3 h-3" />
                                {item.category}
                              </div>
                          </div>
                          
                          <div className="flex items-center gap-4 text-navy/40 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                            <Calendar className="w-3.5 h-3.5 text-gold" />
                            {item.date}
                          </div>

                          <h3 className="font-bold text-xl text-navy mb-4 tracking-tight leading-[1.3] group-hover:text-gold transition-colors duration-300">
                            {item.title}
                          </h3>
                          
                          <p className="text-navy/60 leading-relaxed mb-8 font-medium line-clamp-2 text-sm">
                            {item.description}
                          </p>

                          <div className="flex items-center justify-between pt-6 border-t border-navy/5 grayscale group-hover:grayscale-0 transition-all duration-500">
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

      {/* Newsletter Section */}
      <section className="py-24 bg-ivory/30 border-y border-navy/5">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <h3 className="text-2xl font-bold uppercase tracking-tight text-navy mb-6">Join Our Mailing List</h3>
            <p className="text-navy/60 font-medium mb-10 max-w-lg mx-auto leading-relaxed">
              Subscribe to receive weekly updates, academic calendars, and school newsletters directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow bg-white border border-navy/10 px-6 py-4 text-sm font-medium focus:outline-none focus:border-gold transition-colors"
              />
              <button className="bg-navy text-white px-8 py-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-gold transition-all duration-500">
                Subscribe
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
