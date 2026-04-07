"use client"

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { GlobeCdn } from '@/components/ui/globe-cdn'

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

const globeMarkers = [
  { id: "usa", location: [37.0902, -95.7129] as [number, number], region: "USA" },
  { id: "uk", location: [55.3781, -3.4360] as [number, number], region: "UK" },
  { id: "india", location: [20.5937, 78.9629] as [number, number], region: "India" },
  { id: "oman", location: [23.5859, 58.4059] as [number, number], region: "Oman" },
  { id: "germany", location: [51.1657, 10.4515] as [number, number], region: "Germany" },
  { id: "canada", location: [56.1304, -106.3468] as [number, number], region: "Canada" },
  { id: "serbia", location: [44.0165, 21.0059] as [number, number], region: "Serbia" },
  { id: "singapore", location: [1.3521, 103.8198] as [number, number], region: "Singapore" },
]

const globeArcs = [
  { id: "arc-1", from: [37.0902, -95.7129] as [number, number], to: [23.5859, 58.4059] as [number, number] },
  { id: "arc-2", from: [55.3781, -3.4360] as [number, number], to: [23.5859, 58.4059] as [number, number] },
  { id: "arc-3", from: [20.5937, 78.9629] as [number, number], to: [23.5859, 58.4059] as [number, number] },
  { id: "arc-4", from: [51.1657, 10.4515] as [number, number], to: [23.5859, 58.4059] as [number, number] },
  { id: "arc-5", from: [1.3521, 103.8198] as [number, number], to: [23.5859, 58.4059] as [number, number] },
]

const GLOBE_BASE_COLOR: [number, number, number] = [0.1, 0.1, 0.2]
const GLOBE_MARKER_COLOR: [number, number, number] = [0.73, 0.11, 0.11] // #b91c1c Al Shomoukh Red

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
                  <div className="relative w-8 h-5 overflow-hidden ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110">
                    <Image src={country.flag} alt={country.name} fill className="object-cover" />
                  </div>
                  <span className="text-sm font-medium text-white/90 group-hover:text-secondary transition-colors duration-300">{country.name}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 flex items-center gap-6 reveal opacity-0 translate-y-4 transition-all duration-500 delay-[1200ms]">
                <div className="flex flex-col">
                    <span className="text-5xl font-bold text-secondary">23+</span>
                    <span className="text-xs uppercase tracking-widest font-bold text-white/60">Nationalities</span>
                </div>
                <div className="h-12 w-px bg-white/10" />
                <p className="text-sm text-white/60 max-w-[200px]">
                    Nurturing global citizens in a diverse and inclusive environment.
                </p>
            </div>
          </div>
          
          <div className="reveal opacity-0 scale-90 transition-all duration-1000 delay-300 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[600px] aspect-square">
              <GlobeCdn 
                markers={globeMarkers}
                arcs={globeArcs}
                className="w-full h-full"
                dark={0}
                baseColor={GLOBE_BASE_COLOR}
                markerColor={GLOBE_MARKER_COLOR}
                glowColor={GLOBE_MARKER_COLOR}
              />
              
              {/* Subtle background glow for the globe */}
              <div className="absolute inset-0 -z-10 bg-secondary/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

