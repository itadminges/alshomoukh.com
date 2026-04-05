"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useEffect, useRef } from "react"
import { Calendar, ArrowRight, Share2 } from "lucide-react"
import Image from "next/image"

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

export default function NewsPage() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
      })
    }, { threshold: 0.1 })

    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-white" ref={sectionRef}>
      <Navbar />

      <section className="bg-primary py-32 mt-[76px] relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center relative z-10">
          <h1 className="reveal opacity-0 translate-y-8 transition-all duration-700 font-bold text-5xl md:text-6xl text-white tracking-tight uppercase">
            News & Stories
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <h2 className="reveal opacity-0 translate-y-4 transition-all duration-500 font-bold text-2xl text-primary mb-12 tracking-widest uppercase">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {newsItems.map((item, i) => (
                    <article key={i} className="reveal opacity-0 translate-y-8 transition-all duration-700 group cursor-pointer" style={{ transitionDelay: `${200 + i * 100}ms` }}>
                        <div className="relative aspect-[16/10] overflow-hidden mb-8 border border-border/50">
                            <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <p className="text-secondary font-bold text-xs uppercase tracking-widest mb-3">{item.category}</p>
                        <h3 className="font-bold text-2xl text-primary mb-4 tracking-tight leading-[1.2] group-hover:text-secondary transition-colors">{item.title}</h3>
                        <p className="text-primary/70 leading-[1.6] mb-6 font-medium line-clamp-3">{item.description}</p>
                        <div className="flex items-center justify-between border-t border-border/30 pt-6">
                            <div className="flex items-center gap-2 text-primary/50 text-[11px] font-bold tracking-widest uppercase">
                                <Calendar className="w-3 h-3" />
                                {item.date}
                            </div>
                            <div className="flex items-center gap-2 text-secondary font-bold text-[11px] tracking-widest uppercase group-hover:gap-4 transition-all">
                                Read More
                                <ArrowRight className="w-3 h-3" />
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
      </section>

      <Footer />
      <style jsx>{`
        .animate-in { opacity: 1 !important; transform: translate(0) !important; }
      `}</style>
    </main>
  )
}
