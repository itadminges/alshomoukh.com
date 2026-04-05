"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#academics", label: "Academics" },
  { href: "#admissions", label: "Admissions" },
  { href: "#community", label: "Community" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-sm py-3"
          : "bg-transparent py-4"
      )}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <span className={cn(
              "font-serif text-lg md:text-xl font-semibold tracking-wider uppercase transition-colors duration-200",
              isScrolled ? "text-primary" : "text-white"
            )}>
              Al Shomoukh
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors duration-200",
                  isScrolled 
                    ? "text-primary/70 hover:text-primary" 
                    : "text-white/80 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              className="bg-secondary text-white hover:bg-secondary/95 h-10 px-6 text-sm font-semibold tracking-wider uppercase transition-all duration-200"
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button 
                variant="ghost" 
                size="icon"
                className={cn(
                  "transition-colors",
                  isScrolled ? "text-primary hover:bg-primary/10" : "text-white hover:bg-white/10"
                )}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white border-l border-border/50">
              <div className="flex flex-col gap-8 mt-12">
                <Link href="/" className="font-serif text-2xl font-semibold text-primary tracking-wide">
                  AL SHOMOUKH
                </Link>
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-3 text-base font-medium text-primary/80 hover:text-primary hover:bg-muted rounded-lg transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Button className="bg-secondary text-white hover:bg-secondary/90 w-full py-6 text-base font-medium tracking-wide">
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
