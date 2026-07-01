"use client"

import { cn } from "@/lib/utils"

/** Archimedean spiral path — centered in 240×240 viewBox */
const SPIRAL_PATH =
  "M120 120 " +
  Array.from({ length: 72 }, (_, i) => {
    const angle = (i * 10 * Math.PI) / 180
    const r = 4 + i * 1.35
    const x = 120 + r * Math.cos(angle)
    const y = 120 + r * Math.sin(angle)
    return `L${x.toFixed(1)} ${y.toFixed(1)}`
  }).join(" ")

type SpiralProps = {
  className?: string
  color?: "gold" | "navy" | "white"
  size?: number
  strokeWidth?: number
  animated?: boolean
  flip?: boolean
}

export function DecorativeSpiral({
  className,
  color = "gold",
  size = 240,
  strokeWidth = 1.25,
  animated = true,
  flip = false,
}: SpiralProps) {
  const strokeClass = {
    gold: "stroke-gold/30",
    navy: "stroke-navy/12",
    white: "stroke-white/15",
  }[color]

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      fill="none"
      aria-hidden
      className={cn(
        "pointer-events-none select-none",
        animated && "animate-spiral-drift",
        flip && "scale-x-[-1]",
        className,
      )}
    >
      <path
        d={SPIRAL_PATH}
        className={strokeClass}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

type SectionSpiralsProps = {
  variant?: "hero" | "light" | "dark"
  className?: string
}

/** Pre-positioned spiral cluster for section backgrounds */
export function SectionSpirals({ variant = "light", className }: SectionSpiralsProps) {
  const palette =
    variant === "hero"
      ? { primary: "white" as const, secondary: "gold" as const }
      : variant === "dark"
        ? { primary: "gold" as const, secondary: "white" as const }
        : { primary: "navy" as const, secondary: "gold" as const }

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      <DecorativeSpiral
        color={palette.primary}
        size={320}
        className="absolute -top-24 -right-16 opacity-80"
        animated
      />
      <DecorativeSpiral
        color={palette.secondary}
        size={200}
        strokeWidth={1}
        className="absolute top-1/3 -left-20 opacity-70"
        animated
        flip
      />
      <DecorativeSpiral
        color={palette.primary}
        size={140}
        strokeWidth={0.9}
        className="absolute bottom-12 right-1/4 opacity-60"
        animated={false}
        flip
      />
      <DecorativeSpiral
        color={palette.secondary}
        size={100}
        strokeWidth={0.75}
        className="absolute bottom-1/4 left-12 opacity-50 hidden md:block"
        animated
      />
    </div>
  )
}
