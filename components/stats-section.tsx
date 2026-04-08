"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useSpring, useInView, useTransform } from "framer-motion"

const stats = [
  { label: "Established", value: 1997, suffix: "" },
  { label: "Nationalities", value: 45, suffix: "+" },
  { label: "University Entrance", value: 100, suffix: "%" },
  { label: "Years of Excellence", value: 27, suffix: "+" },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const spring = useSpring(0, { stiffness: 40, damping: 20 })
  
  useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, spring, value])

  const display = useTransform(spring, (latest) => Math.floor(latest))

  return (
    <div ref={ref} className="text-3xl md:text-4xl lg:text-5xl text-navy font-bold tracking-tight mb-2">
      <motion.span>{display}</motion.span>
      <span className="text-gold">{suffix}</span>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="relative py-16 bg-white overflow-hidden border-y border-navy/5">
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col items-start"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-navy/40">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
