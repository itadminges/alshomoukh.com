"use client"

import { useState } from "react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 500 && !isVisible) {
      setIsVisible(true)
    } else if (latest <= 500 && isVisible) {
      setIsVisible(false)
    }
  })

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          type="button"
          aria-label="Back to top"
          className="fixed bottom-5 right-5 z-[50] w-12 h-12 bg-[#BB9268] text-white rounded-full shadow-strong flex items-center justify-center group md:bottom-10 md:right-10 shrink-0"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          style={{ willChange: "transform, opacity" }}
        >
          <ArrowUp className="h-5 w-5 transition-transform group-hover:-translate-y-1 md:h-6 md:w-6 shrink-0" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
