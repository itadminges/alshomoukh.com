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
  { href: "/learning-support", label: "Learning Support" },
]

export function AcademicTabs() {
  const pathname = usePathname()

  return (
    <div className="w-full bg-ivory-dark/40 border-b border-navy/10 sticky top-[72px] lg:top-[80px] z-30 backdrop-blur-md">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16">
        <nav 
          className="flex items-center justify-start md:justify-center gap-1.5 md:gap-2 overflow-x-auto no-scrollbar py-3"
          aria-label="Academic stages navigation"
        >
          {academicTabs.map((tab) => {
            const isActive = pathname === tab.href

            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={cn(
                  "shrink-0 px-4 md:px-6 py-2.5 text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-300 border relative rounded-none",
                  isActive
                    ? "bg-navy text-gold border-gold/40 shadow-sm"
                    : "bg-white/90 text-navy/70 border-navy/10 hover:bg-white hover:text-navy hover:border-gold/40"
                )}
              >
                <span>{tab.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold" />
                )}
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
