"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const affiliations = [
  { img: "https://www.alshomoukh.com:443/uploads/affiliations/20200807213934-2020-08-07affiliations213852.jpg", url: "https://home.moe.gov.om/?GetLang=en" },
  { img: "https://www.alshomoukh.com:443/uploads/affiliations/20200807213952-2020-08-07affiliations213944.jpg", url: "https://www.cognia.org/" },
  { img: "https://www.alshomoukh.com:443/uploads/affiliations/20200807214011-2020-08-07affiliations214001.jpg", url: "https://www.ecis.org/" },
  { img: "https://www.alshomoukh.com:443/uploads/affiliations/20200808182038-2020-08-08affiliations182014.jpg", url: "https://qualifications.pearson.com/en/home.html" },
  { img: "https://www.alshomoukh.com:443/uploads/affiliations/20221208222839-2022-12-08affiliations222835.jpg", url: "https://shomoukh.com" },
  { img: "https://www.alshomoukh.com:443/uploads/affiliations/20221208222244-2022-12-08affiliations222240.jpeg", url: "https://www.ges.om/" },
]

export function AffiliationsSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20 mb-10 overflow-hidden">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-gold/50" />
            <span className="text-navy/40 font-bold tracking-[0.4em] uppercase text-[11px]">
              Recognized Globally
            </span>
            <div className="h-[1px] w-8 bg-gold/50" />
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden">
        {/* Fading Edge Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent z-10" />
        
        <motion.div 
          className="flex whitespace-nowrap gap-24 md:gap-32 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {Array.from({ length: 4 }).map((_, setIdx) => (
            <div key={setIdx} className="flex gap-24 md:gap-32 items-center">
              {affiliations.map((aff, i) => (
                <a 
                  key={`${setIdx}-${i}`} 
                  href={aff.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="transition-all duration-500 opacity-60 hover:opacity-100 transform hover:scale-105"
                >
                  <div className="relative w-32 h-14 md:w-36 md:h-16">
                    <Image 
                      src={aff.img} 
                      alt={`Accreditation Logo`} 
                      fill 
                      className="object-contain" 
                    />
                  </div>
                </a>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

