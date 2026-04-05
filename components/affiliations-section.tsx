"use client"

import Image from "next/image"

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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary text-center mb-12 uppercase tracking-wider">Our Affiliations</h2>
        <div className="flex flex-wrap justify-center items-center gap-12 transition-all duration-500">
          {affiliations.map((aff, i) => (
            <a key={i} href={aff.url} target="_blank" rel="noopener noreferrer" className="transition-all duration-300">
              <div className="relative w-32 h-20 md:w-40 md:h-24">
                <Image src={aff.img} alt={`Affiliation ${i}`} fill className="object-contain" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
