"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView, useSpring, useTransform } from "framer-motion"

const stats = [
  { label: "Years of Excellence", value: 15, suffix: "+" },
  { label: "Global Nationalities", value: 23, suffix: "+" },
  { label: "Qualified Educators", value: 100, suffix: "+" },
  { label: "Success Rate", value: 100, suffix: "%" },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const spring = useSpring(0, {
    stiffness: 100,
    damping: 30,
  })

  useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, value, spring])

  const display = useTransform(spring, (latest) => Math.floor(latest))

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-serif text-secondary font-bold tabular-nums">
      <motion.span>{display}</motion.span>
      {suffix}
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="py-20 bg-primary text-white overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
              <Counter value={stat.value} suffix={stat.suffix} />
              <div className="w-10 h-[2px] bg-secondary/30" />
              <p className="text-white/60 font-bold tracking-[0.2em] uppercase text-[12px] md:text-[14px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
