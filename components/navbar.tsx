"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/admissions", label: "Admissions" },
  { 
    label: "Academic", 
    href: "/academics",
    submenu: [
      { href: "/curriculum", label: "Curriculum" },
      { href: "/kindergarten", label: "Kindergarten" },
      { href: "/lower-secondary", label: "Lower Secondary" },
      { href: "/primary-school", label: "Primary School" },
      { href: "/upper-secondary", label: "Upper Secondary" },
      { href: "/learning-support", label: "Learning Support" },
    ]
  },
  { href: "/news", label: "News & Stories" },
  { href: "/enrichment", label: "Enrichment" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border/40 py-4 font-sans">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8 xl:px-12">
        <nav className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image 
              src="/SIS Logo-01.png" 
              alt="SIS Logo" 
              width={180} 
              height={50} 
              className="h-10 lg:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-6 2xl:gap-8">
            {/* Search Icon */}
            <button className="text-primary/70 hover:text-primary transition-colors duration-200">
              <Search className="h-5 w-5" />
            </button>

            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <Link
                  href={link.href || "#"}
                  className="text-[11px] xl:text-[13px] font-bold tracking-widest text-primary/80 hover:text-primary transition-colors duration-200 py-4 uppercase whitespace-nowrap"
                >
                  {link.label}
                </Link>
                {link.submenu && (
                  <div className="absolute left-0 top-full mt-0 w-56 bg-white border border-border/50 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-6 py-3 text-[12px] font-bold text-primary/70 hover:text-primary hover:bg-muted transition-colors tracking-widest uppercase whitespace-nowrap"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              className="bg-secondary text-white hover:bg-secondary/90 h-10 px-4 xl:px-8 text-[11px] xl:text-[12px] font-bold tracking-widest uppercase rounded-none transition-all duration-200 whitespace-nowrap"
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <div className="flex items-center gap-4 lg:hidden">
              <button className="text-primary/70 hover:text-primary transition-colors duration-200">
                <Search className="h-5 w-5" />
              </button>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-primary hover:bg-primary/5"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
            </div>
            <SheetContent side="right" className="w-80 bg-white border-l border-border/50 overflow-y-auto">
              <div className="flex flex-col gap-8 mt-12 pb-12">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <Image 
                    src="/SIS Logo-01.png" 
                    alt="SIS Logo" 
                    width={180} 
                    height={50} 
                    className="h-10 w-auto object-contain"
                  />
                </Link>
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <div key={link.label}>
                      <Link
                        href={link.href || "#"}
                        onClick={() => !link.submenu && setIsOpen(false)}
                        className="px-4 py-3 text-[14px] font-bold text-primary/80 hover:text-primary hover:bg-muted block tracking-widest uppercase"
                      >
                        {link.label}
                      </Link>
                      {link.submenu && (
                        <div className="pl-6 flex flex-col gap-1 mt-1 mb-3">
                          {link.submenu.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setIsOpen(false)}
                              className="px-4 py-2 text-[12px] font-bold text-primary/60 hover:text-primary hover:bg-muted block tracking-widest uppercase"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
                <Button className="bg-secondary text-white hover:bg-secondary/90 w-full py-6 text-[14px] font-bold tracking-widest uppercase rounded-none">
                  Apply Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  )
}
