"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export const academicTabs = [
  { href: "/curriculum", label: "Curriculum" },
  { href: "/kindergarten", label: "Kindergarten" },
  { href: "/primary-school", label: "Primary School" },
  { href: "/lower-secondary", label: "Lower Secondary" },
  { href: "/upper-secondary", label: "Upper Secondary" },
]

export function AcademicTabs() {
  const pathname = usePathname()

  return (
    <div className="w-full bg-ivory-dark/40 border-b border-navy/10 sticky top-[72px] lg:top-[80px] z-30 backdrop-blur-md">
      <div className="mx-auto max-w-[1440px] px-4 md:px-10 lg:px-20">
        <nav 
          className="flex items-center justify-start sm:justify-center gap-1 md:gap-2 overflow-x-auto py-3 no-scrollbar"
          aria-label="Academic stages navigation"
        >
          {academicTabs.map((tab) => {
            const isActive = pathname === tab.href

            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={cn(
                  "shrink-0 px-4 md:px-6 py-2.5 text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-300 rounded-none border",
                  isActive
                    ? "bg-navy text-gold border-gold/40 shadow-sm"
                    : "bg-white/80 text-navy/70 border-navy/5 hover:bg-white hover:text-navy hover:border-gold/30"
                )}
              >
                {tab.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
