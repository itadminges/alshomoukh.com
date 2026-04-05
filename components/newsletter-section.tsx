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
      className="relative py-24 bg-primary overflow-hidden"
    >
      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="reveal opacity-0 translate-y-4 transition-all duration-500 delay-100 font-bold text-3xl md:text-3xl text-white tracking-tight mb-6">
          Subscribe to our newsletter
        </h2>

        {/* Description */}
        <p className="reveal opacity-0 translate-y-4 transition-all duration-500 delay-200 text-[15px] md:text-[16px] text-white/80 max-w-2xl mx-auto leading-relaxed font-medium">
          Stay updated with the latest news, campus events, and academic insights from Al Shomoukh International School delivered to your inbox.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="reveal opacity-0 translate-y-4 transition-all duration-500 delay-300 mt-12 max-w-2xl mx-auto">
          {!isSubmitted ? (
            <>
              <div className="mb-6">
                <Input
                  type="email"
                  placeholder="Your professional email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 px-6 bg-white border-0 text-primary placeholder:text-primary/40 rounded-none focus:ring-0 transition-all duration-200"
                  required
                />
              </div>

              {/* Checkbox */}
              <div className="mb-10 flex items-center justify-center gap-3">
                <Checkbox
                  id="terms"
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(checked as boolean)}
                  className="h-5 w-5 border-white/30 data-[state=checked]:bg-white data-[state=checked]:text-primary rounded-none"
                />
                <label
                  htmlFor="terms"
                  className="text-[13px] text-white/80 cursor-pointer font-medium"
                >
                  I agree to the Terms and Conditions and Privacy Notice.
                </label>
              </div>

              <Button
                type="submit"
                disabled={!agreed}
                className="bg-secondary text-white hover:bg-secondary/90 h-10 px-12 text-[12px] font-bold tracking-widest uppercase rounded-none transition-all duration-200 disabled:opacity-50"
              >
                Subscribe Now
              </Button>
            </>
          ) : (
            <div className="flex flex-col items-center gap-4 py-8">
              <CheckCircle2 className="w-12 h-12 text-secondary" />
              <p className="text-white text-lg font-bold tracking-wide uppercase">Thank you for subscribing!</p>
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
