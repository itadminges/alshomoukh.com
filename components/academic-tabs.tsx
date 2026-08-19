"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const academicTabs = [
  { href: "/curriculum", label: "Curriculum" },
  { href: "/kindergarten", label: "Kindergarten" },
  { href: "/primary-school", label: "Primary School" },
  { href: "/lower-secondary", label: "Lower Secondary" },
  { href: "/upper-secondary", label: "Upper Secondary" },
  { href: "/learning-support", label: "Learning Support" },
]

export function AcademicTabs() {
  const pathname = usePathname()

  return (
    <div className="w-full bg-white/95 border-b border-navy/10 sticky top-[72px] lg:top-[80px] z-30 backdrop-blur-md">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
        <nav 
          className="flex items-center justify-start md:justify-center gap-1 md:gap-4 overflow-x-auto no-scrollbar py-2.5"
          aria-label="Academic stages navigation"
        >
          {academicTabs.map((tab) => {
            const isActive = pathname === tab.href

            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={cn(
                  "shrink-0 px-4 md:px-5 py-2.5 text-xs md:text-sm font-bold tracking-[0.15em] uppercase transition-colors duration-300 relative",
                  isActive
                    ? "text-navy"
                    : "text-navy/50 hover:text-navy"
                )}
              >
                <span>{tab.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="academicActiveTab"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-gold"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
