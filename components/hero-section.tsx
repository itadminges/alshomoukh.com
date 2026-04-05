'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
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
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-sky-400 to-sky-300"
    >
      {/* SVG Illustration */}
      <svg
        viewBox="0 0 1200 800"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5BA8D8" stopOpacity="1" />
            <stop offset="100%" stopColor="#A8D5E8" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="buildingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D4A574" stopOpacity="1" />
            <stop offset="100%" stopColor="#C49560" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Sky */}
        <rect width="1200" height="800" fill="url(#skyGrad)" />

        {/* Clouds */}
        <g opacity="0.8">
          <ellipse cx="150" cy="100" rx="80" ry="50" fill="white" />
          <ellipse cx="230" cy="80" rx="100" ry="60" fill="white" />
          <ellipse cx="70" cy="130" rx="70" ry="45" fill="white" />

          <ellipse cx="950" cy="150" rx="90" ry="55" fill="white" />
          <ellipse cx="1050" cy="130" rx="110" ry="65" fill="white" />
          <ellipse cx="850" cy="170" rx="80" ry="50" fill="white" />
        </g>

        {/* Ground */}
        <rect y="650" width="1200" height="150" fill="#98C896" />

        {/* Left Building */}
        <rect x="80" y="350" width="200" height="300" fill="#6B8E99" />
        {/* Windows - Left Building */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <g key={`left-${i}`}>
            <rect x={100 + (i % 3) * 50} y={370 + Math.floor(i / 3) * 50} width="30" height="30" fill="#87CEEB" />
          </g>
        ))}

        {/* Main Central Building */}
        <rect x="320" y="280" width="560" height="370" fill="url(#buildingGrad)" />

        {/* Central building frame detail */}
        <rect x="320" y="280" width="560" height="30" fill="#B8885F" opacity="0.6" />

        {/* Windows grid - main building */}
        {[0, 1, 2, 3, 4, 5, 6].map((col) => (
          <g key={`main-col-${col}`}>
            {[0, 1, 2, 3, 4].map((row) => (
              <rect
                key={`main-window-${col}-${row}`}
                x={345 + col * 70}
                y={320 + row * 60}
                width="45"
                height="45"
                fill="#6BA8D8"
              />
            ))}
          </g>
        ))}

        {/* Right Building */}
        <rect x="920" y="380" width="160" height="270" fill="#3D4D5C" />
        {/* Windows - Right Building */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <g key={`right-${i}`}>
            <rect x={940 + (i % 2) * 50} y={400 + Math.floor(i / 2) * 50} width="30" height="30" fill="#5DADE2" />
          </g>
        ))}

        {/* Trees Left */}
        <g>
          <ellipse cx="50" cy="600" rx="50" ry="60" fill="#6B8E4A" />
          <rect x="35" y="650" width="30" height="60" fill="#8B6F47" />
        </g>

        {/* Trees Right */}
        <g>
          <ellipse cx="1130" cy="610" rx="55" ry="65" fill="#7BA860" />
          <rect x="1110" y="660" width="40" height="70" fill="#9B8B67" />
        </g>

        {/* People silhouettes */}
        <g fill="#4A5568" opacity="0.5">
          {/* Person 1 */}
          <circle cx="480" cy="610" r="10" />
          <rect x="474" y="625" width="12" height="30" />
          {/* Person 2 */}
          <circle cx="580" cy="615" r="9" />
          <rect x="575" y="628" width="10" height="28" />
          {/* Person 3 */}
          <circle cx="440" cy="620" r="8" />
          <rect x="436" y="632" width="8" height="25" />
          {/* Person 4 */}
          <circle cx="650" cy="618" r="9" />
          <rect x="645" y="631" width="10" height="27" />
        </g>
      </svg>

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center max-w-4xl px-6">
          <h1 className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-xl mb-6">
            Your Gateway to <span className="text-secondary">Global</span> Excellence
          </h1>
          <p className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-300 text-lg md:text-xl text-white drop-shadow-lg">
            Nurturing lifelong learners prepared for the world
          </p>
        </div>
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  )
}
