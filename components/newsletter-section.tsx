"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle2 } from "lucide-react"

export function NewsletterSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [email, setEmail] = useState("")
  const [agreed, setAgreed] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.2 }
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && agreed) {
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail("")
        setAgreed(false)
      }, 3000)
    }
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-secondary overflow-hidden"
    >
      <div className="relative mx-auto max-w-2xl px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="reveal opacity-0 translate-y-4 transition-all duration-500 delay-100 font-serif text-2xl sm:text-3xl font-semibold text-white tracking-tight">
          Subscribe to our newsletter
        </h2>

        {/* Description */}
        <p className="reveal opacity-0 translate-y-4 transition-all duration-500 delay-200 mt-4 text-sm md:text-base text-white/80 max-w-lg mx-auto leading-relaxed">
          Stay updated with the latest news, campus events, and academic insights from Al Shomoukh International School delivered to your inbox.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="reveal opacity-0 translate-y-4 transition-all duration-500 delay-300 mt-8">
          {!isSubmitted ? (
            <>
              <div className="max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Your professional email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 px-4 bg-white/95 border-0 text-primary placeholder:text-muted-foreground rounded-md focus:ring-2 focus:ring-white transition-all duration-200"
                  required
                />
              </div>

              {/* Checkbox */}
              <div className="mt-4 flex items-center justify-center gap-2">
                <Checkbox
                  id="terms"
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(checked as boolean)}
                  className="border-white/50 data-[state=checked]:bg-white data-[state=checked]:border-white data-[state=checked]:text-secondary"
                />
                <label
                  htmlFor="terms"
                  className="text-xs text-white/70 cursor-pointer"
                >
                  I agree to the Terms and Conditions and Privacy Notice.
                </label>
              </div>

              <Button
                type="submit"
                disabled={!agreed}
                className="mt-6 bg-primary text-white hover:bg-primary/90 h-11 px-8 text-sm font-semibold tracking-wider uppercase transition-all duration-200 disabled:opacity-50"
              >
                Subscribe Now
              </Button>
            </>
          ) : (
            <div className="flex flex-col items-center gap-3 py-6">
              <CheckCircle2 className="w-10 h-10 text-white" />
              <p className="text-white text-base font-medium">Thank you for subscribing!</p>
            </div>
          )}
        </form>
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  )
}
