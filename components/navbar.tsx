"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/admissions", label: "Admissions" },
  { 
    label: "Academics", 
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
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  
  // Only transparent on homepage at top
  const isHomePage = pathname === "/"
  const forceSolid = !isHomePage || isScrolled

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 font-sans",
        forceSolid 
          ? "bg-white/95 backdrop-blur-md border-b border-border/40 shadow-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-12">
        <nav className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="shrink-0 relative z-10">
            <div className={cn(
              "transition-all duration-500",
              forceSolid ? "scale-95" : "scale-100"
            )}>
              <Image 
                src="/SIS Logo-01.png" 
                alt="SIS Logo" 
                width={210} 
                height={70} 
                className={cn(
                  "h-12 lg:h-14 w-auto object-contain transition-all duration-500"
                )}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group px-3 xl:px-4">
                <Link
                  href={link.href || "#"}
                  className={cn(
                    "relative text-[12px] xl:text-[13px] font-bold tracking-[0.15em] transition-all duration-300 py-2 uppercase whitespace-nowrap flex items-center gap-1",
                    forceSolid ? "text-primary/80 hover:text-primary" : "text-white/90 hover:text-white"
                  )}
                >
                  {link.label}
                  {link.submenu && <ChevronDown className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180" />}
                  <span className={cn(
                    "absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full",
                    forceSolid ? "bg-secondary" : "bg-white"
                  )} />
                </Link>
                {link.submenu && (
                  <div className="absolute left-0 top-full mt-2 w-64 bg-white border border-border/10 shadow-strong opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform group-hover:translate-y-0 translate-y-2">
                    <div className="py-3">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-8 py-3 text-[12px] font-bold text-primary/70 hover:text-primary hover:bg-muted transition-colors tracking-widest uppercase whitespace-nowrap"
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

          {/* Actions */}
          <div className="flex items-center gap-4 lg:gap-8">
            <button className={cn(
              "hidden md:block transition-colors duration-300",
              forceSolid ? "text-primary/70 hover:text-primary" : "text-white/70 hover:text-white"
            )}>
              <Search className="h-5 w-5" />
            </button>
            
            <div className="hidden lg:block">
              <Link href="/admissions">
                <Button
                  className={cn(
                    "px-8 text-[12px] font-extrabold tracking-[0.2em] uppercase rounded-none transition-all duration-500 h-14",
                    forceSolid 
                      ? "bg-primary text-white hover:bg-primary/90 shadow-md" 
                      : "bg-white text-primary hover:bg-secondary hover:text-white"
                  )}
                >
                  Apply Now
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <div className="flex items-center gap-4 lg:hidden">
                <button className={cn(
                  "transition-colors duration-300",
                  forceSolid ? "text-primary" : "text-white"
                )}>
                  <Search className="h-5 w-5" />
                </button>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className={cn(
                      "transition-colors duration-300",
                      forceSolid ? "text-primary" : "text-white"
                    )}
                  >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
              </div>
              <SheetContent side="right" className="w-[320px] bg-white border-l border-border/50 p-0 overflow-y-auto">
                <div className="flex flex-col h-full bg-white">
                  <div className="p-8 border-b border-border/10">
                    <Image 
                      src="/SIS Logo-01.png" 
                      alt="SIS Logo" 
                      width={180} 
                      height={50} 
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                  <nav className="flex flex-col py-6 px-4">
                    {navLinks.map((link) => (
                      <div key={link.label} className="mb-2">
                        <Link
                          href={link.href || "#"}
                          onClick={() => !link.submenu && setIsOpen(false)}
                          className="px-4 py-3 text-[14px] font-bold text-primary/80 hover:text-primary hover:bg-muted flex items-center justify-between tracking-widest uppercase transition-colors"
                        >
                          {link.label}
                          {link.submenu && <ChevronDown className="h-4 w-4" />}
                        </Link>
                        {link.submenu && (
                          <div className="mt-1 mb-2 bg-muted/30">
                            {link.submenu.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                onClick={() => setIsOpen(false)}
                                className="px-10 py-3 text-[12px] font-bold text-primary/60 hover:text-primary block tracking-widest uppercase"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>
                  <div className="mt-auto p-8 bg-muted/20">
                    <Button className="bg-primary text-white hover:bg-primary/90 w-full py-7 text-[14px] font-extrabold tracking-widest uppercase rounded-none shadow-lg" asChild>
                      <Link href="/admissions">Apply Now</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  )
}

