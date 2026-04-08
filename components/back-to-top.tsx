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
          className="fixed bottom-10 right-10 z-[50] w-12 h-12 bg-secondary text-white rounded-full shadow-strong flex items-center justify-center group"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          style={{ willChange: "transform, opacity" }}
        >
          <ArrowUp className="h-6 w-6 transition-transform group-hover:-translate-y-1" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
