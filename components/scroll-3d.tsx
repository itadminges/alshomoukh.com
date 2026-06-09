"use client"

import { useRef, type ReactNode } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

type Scroll3DRevealProps = {
  children: ReactNode
  className?: string
  rotateAmount?: number
  depth?: number
  offset?: [string, string]
}

/** Scroll-driven 3D reveal — content tilts forward into view as you scroll */
export function Scroll3DReveal({
  children,
  className,
  rotateAmount = 18,
  depth = 50,
  offset = ["start end", "center center"],
}: Scroll3DRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset })

  const rotateX = useTransform(scrollYProgress, [0, 1], [rotateAmount, 0])
  const translateZ = useTransform(scrollYProgress, [0, 0.5, 1], [-depth, depth * 0.25, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.35, 1], [0.4, 0.85, 1])
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1])

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <div ref={ref} className={cn("scroll-3d-scene", className)}>
      <motion.div
        style={{
          rotateX,
          translateZ,
          opacity,
          scale,
          transformStyle: "preserve-3d",
        }}
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

/** Alternating 3D card flip on scroll — great for grids */
export function Scroll3DCard({ children, className, index = 0 }: Scroll3DCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  })

  const direction = index % 2 === 0 ? 1 : -1
  const rotateY = useTransform(scrollYProgress, [0, 1], [22 * direction, 0])
  const translateZ = useTransform(scrollYProgress, [0, 0.6, 1], [-35, 25, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.45, 1], [0, 1, 1])

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <div ref={ref} className={cn("scroll-3d-scene", className)}>
      <motion.div
        style={{
          rotateY,
          translateZ,
          opacity,
          transformStyle: "preserve-3d",
        }}
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
  offset?: [string, string]
}

/** Depth parallax with subtle 3D rotation tied to scroll progress */
export function Scroll3DParallax({
  children,
  className,
  rotateRange = [0, 12],
  depthRange = [0, -80],
  offset = ["start start", "end start"],
}: Scroll3DParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset })

  const rotateX = useTransform(scrollYProgress, [0, 1], rotateRange)
  const translateZ = useTransform(scrollYProgress, [0, 1], depthRange)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <div ref={ref} className={cn("scroll-3d-scene overflow-hidden", className)}>
      <motion.div
        style={{
          rotateX,
          translateZ,
          scale,
          transformStyle: "preserve-3d",
        }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </div>
  )
}
