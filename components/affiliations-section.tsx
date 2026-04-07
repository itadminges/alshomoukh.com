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
    <section className="py-24 bg-muted/20 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20 mb-12 text-center lg:text-left">
        <h2 className="font-serif text-2xl text-primary font-bold tracking-tight mb-3 italic">Trusted & Accredited</h2>
        <p className="text-[13px] text-primary/60 font-medium tracking-wide uppercase">Recognized by leading global educational bodies.</p>
      </div>

      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20 overflow-hidden relative">
        <div className="relative flex group">
          <motion.div 
            className="flex whitespace-nowrap gap-28 md:gap-36 py-8 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 150,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* Show all icons repeated for a truly seamless loop */}
            {Array.from({ length: 6 }).map((_, setIdx) => (
              affiliations.map((aff, i) => (
                <a 
                  key={`${setIdx}-${i}`} 
                  href={aff.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="transition-all duration-700 transform hover:scale-110 opacity-100 flex-shrink-0"
                >
                  <div className="relative w-36 h-16 md:w-44 md:h-20">
                    <Image 
                      src={aff.img} 
                      alt={`Accreditation ${i}`} 
                      fill 
                      className="object-contain" 
                    />
                  </div>
                </a>
              ))
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

