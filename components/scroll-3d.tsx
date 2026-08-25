"use client"

import { type ReactNode } from "react"
import {
  motion,
  useReducedMotion,
  type UseScrollOptions,
} from "framer-motion"
import { cn } from "@/lib/utils"

type Scroll3DRevealProps = {
  children: ReactNode
  className?: string
  rotateAmount?: number
  depth?: number
  offset?: UseScrollOptions["offset"]
}

/** Lightweight, one-time reveal that avoids continuous scroll-linked transforms. */
export function Scroll3DReveal({
  children,
  className,
}: Scroll3DRevealProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <div className={cn("relative", className)}>
      <motion.div
        className="h-full"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  )
}

type Scroll3DCardProps = {
  children: ReactNode
  className?: string
  index?: number
}

/** Lightweight card reveal; index only controls a short stagger. */
export function Scroll3DCard({ children, className, index = 0 }: Scroll3DCardProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <div className={cn("relative", className)}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.45, delay: Math.min(index, 3) * 0.04, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  )
}

type Scroll3DParallaxProps = {
  children: ReactNode
  className?: string
  rotateRange?: [number, number]
  depthRange?: [number, number]
  offset?: UseScrollOptions["offset"]
}

/** One-time image reveal used in place of continuous scroll parallax. */
export function Scroll3DParallax({
  children,
  className,
}: Scroll3DParallaxProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        initial={{ opacity: 0.85, scale: 1.02 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </div>
  )
}
