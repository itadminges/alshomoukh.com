"use client"

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const countries = [
  { name: 'USA', flag: 'https://www.alshomoukh.com:443/cc-content/themes/alshomoukh/assets/img/flags/usa.jpg' },
  { name: 'Argentina', flag: 'https://www.alshomoukh.com:443/cc-content/themes/alshomoukh/assets/img/flags/argantine.jpg' },
  { name: 'Azerbaijan', flag: 'https://www.alshomoukh.com:443/cc-content/themes/alshomoukh/assets/img/flags/azerbaijan.jpg' },
  { name: 'UK', flag: 'https://www.alshomoukh.com:443/cc-content/themes/alshomoukh/assets/img/flags/england.jpg' },
  { name: 'Canada', flag: 'https://www.alshomoukh.com:443/cc-content/themes/alshomoukh/assets/img/flags/canada.jpg' },
  { name: 'Colombia', flag: 'https://www.alshomoukh.com:443/cc-content/themes/alshomoukh/assets/img/flags/colombia.jpg' },
  { name: 'Egypt', flag: 'https://www.alshomoukh.com:443/cc-content/themes/alshomoukh/assets/img/flags/egypt.jpg' },
  { name: 'Germany', flag: 'https://www.alshomoukh.com:443/cc-content/themes/alshomoukh/assets/img/flags/german.jpg' },
  { name: 'Greece', flag: 'https://www.alshomoukh.com:443/cc-content/themes/alshomoukh/assets/img/flags/greek.jpg' },
  { name: 'India', flag: 'https://www.alshomoukh.com:443/cc-content/themes/alshomoukh/assets/img/flags/india.jpg' },
  { name: 'Iran', flag: 'https://www.alshomoukh.com:443/cc-content/themes/alshomoukh/assets/img/flags/iran.jpg' },
  { name: 'Italy', flag: 'https://www.alshomoukh.com:443/cc-content/themes/alshomoukh/assets/img/flags/italy.jpg' },
  { name: 'Lebanon', flag: 'https://www.alshomoukh.com:443/cc-content/themes/alshomoukh/assets/img/flags/lebanon.jpg' },
  { name: 'Mexico', flag: 'https://www.alshomoukh.com:443/cc-content/themes/alshomoukh/assets/img/flags/mexican.jpg' },
  { name: 'GCC', flag: 'https://www.alshomoukh.com:443/cc-content/themes/alshomoukh/assets/img/flags/gcc.jpg' },
  { name: 'Pakistan', flag: 'https://www.alshomoukh.com:443/cc-content/themes/alshomoukh/assets/img/flags/pakistan.jpg' },
  { name: 'Serbia', flag: 'https://www.alshomoukh.com:443/cc-content/themes/alshomoukh/assets/img/flags/serbian.jpg' },
  { name: 'Singapore', flag: 'https://www.alshomoukh.com:443/cc-content/themes/alshomoukh/assets/img/flags/sengabor.jpg' },
  { name: 'Spain', flag: 'https://www.alshomoukh.com:443/cc-content/themes/alshomoukh/assets/img/flags/span.jpg' },
  { name: 'Sudan', flag: 'https://www.alshomoukh.com:443/cc-content/themes/alshomoukh/assets/img/flags/sudan.jpg' },
  { name: 'Syria', flag: 'https://www.alshomoukh.com:443/cc-content/themes/alshomoukh/assets/img/flags/syria.jpg' },
  { name: 'Russia', flag: 'https://www.alshomoukh.com:443/cc-content/themes/alshomoukh/assets/img/flags/russia.jpg' },
  { name: 'Jordan', flag: 'https://www.alshomoukh.com:443/cc-content/themes/alshomoukh/assets/img/flags/jordan.jpg' },
]

export function GlobalReach() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 blur-3xl pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-secondary rounded-full" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-secondary rounded-full" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="reveal opacity-0 translate-y-4 transition-all duration-500 font-bold text-3xl md:text-4xl mb-8 tracking-wider uppercase">
              Where Our <span className="text-secondary">Students</span> Come From
            </h2>
            <p className="reveal opacity-0 translate-y-4 transition-all duration-500 delay-100 text-lg text-white/80 mb-12 max-w-xl">
              Al Shomoukh International School is a vibrant global community, hosting students from over 20 different countries, fostering cross-cultural understanding and global perspectives.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6">
              {countries.map((country, i) => (
                <div 
                  key={country.name} 
                  className="reveal opacity-0 translate-x-[-20px] transition-all duration-500 flex items-center gap-3 group cursor-default"
                  style={{ transitionDelay: `${200 + i * 40}ms` }}
                >
                  <div className="relative w-8 h-5 overflow-hidden transition-transform duration-300 group-hover:scale-110">
                    <Image src={country.flag} alt={country.name} fill className="object-cover" />
                  </div>
                  <span className="text-sm font-medium text-white/90 group-hover:text-secondary transition-colors duration-300">{country.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="reveal opacity-0 scale-90 transition-all duration-1000 delay-300 flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] group">
              {/* This represents the Earth/Globe from the legacy site, styled for the new theme */}
              <div className="absolute inset-0 rounded-full border border-secondary/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-white/10 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-full h-full rounded-full bg-secondary/5 backdrop-blur-3xl flex items-center justify-center overflow-hidden border border-white/5 shadow-2xl relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary via-transparent to-secondary/20" />
                    <div className="text-secondary flex flex-col items-center">
                       <svg viewBox="0 0 24 24" className="w-48 h-48 opacity-20 animate-pulse" fill="currentColor">
                          <path d="M12,2C6.47,2,2,6.47,2,12s4.47,10,10,10s10-4.47,10-10S17.53,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z M11,7h2v2h-2V7z M11,11h2v6h-2V11z"/>
                       </svg>
                       <div className="absolute inset-0 flex flex-col items-center justify-center px-12 text-center">
                          <span className="text-5xl md:text-7xl font-bold mb-2">23+</span>
                          <span className="text-secondary font-bold tracking-widest uppercase text-sm md:text-base">Nationalities</span>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
