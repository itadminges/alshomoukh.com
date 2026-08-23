"use client"

import Image from "next/image"

const organisations = [
  {
    image: "https://www.alshomoukh.com:443/uploads/affiliations/20200807213934-2020-08-07affiliations213852.jpg",
    href: "https://home.moe.gov.om/?GetLang=en",
    alt: "Ministry of Education",
  },
  {
    image: "https://www.alshomoukh.com:443/uploads/affiliations/20200807213952-2020-08-07affiliations213944.jpg",
    href: "https://www.cognia.org/",
    alt: "Cognia",
  },
  {
    image: "https://www.alshomoukh.com:443/uploads/affiliations/20200807214011-2020-08-07affiliations214001.jpg",
    href: "https://www.ecis.org/",
    alt: "ECIS",
  },
  {
    image: "https://www.alshomoukh.com:443/uploads/affiliations/20200808182038-2020-08-08affiliations182014.jpg",
    href: "https://qualifications.pearson.com/en/home.html",
    alt: "Pearson Qualifications",
  },
  {
    image: "/pearson-btec-approved-centre.png",
    href: "https://qualifications.pearson.com/en/qualifications/btec-international-level-3.html",
    alt: "Pearson BTEC Approved Centre",
  },
  {
    image: "https://www.alshomoukh.com:443/uploads/affiliations/20221208222839-2022-12-08affiliations222835.jpg",
    href: "https://shomoukh.com",
    alt: "Al Shomoukh",
  },
  {
    image: "/ges-logo.png",
    href: "https://www.ges.om/",
    alt: "Global Educational Services",
  },
]

export function AffiliationsSection() {
  return (
    <section className="overflow-hidden bg-white py-12 md:py-16">
      <div className="relative mx-auto w-full max-w-7xl px-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
          {/* First set of logos */}
          <div className="flex shrink-0 items-center gap-12 md:gap-16 pr-12 md:pr-16">
            {organisations.map((org, idx) => (
              <a
                key={`org-1-${idx}`}
                href={org.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex h-14 w-32 md:h-18 md:w-44 shrink-0 items-center justify-center transition-transform duration-300 hover:scale-105"
                aria-label={org.alt}
              >
                <Image
                  src={org.image}
                  alt={org.alt}
                  fill
                  sizes="(max-width: 768px) 128px, 176px"
                  className="object-contain"
                />
              </a>
            ))}
          </div>

          {/* Duplicated set of logos for seamless infinite auto-scroll */}
          <div className="flex shrink-0 items-center gap-12 md:gap-16 pr-12 md:pr-16" aria-hidden="true">
            {organisations.map((org, idx) => (
              <div
                key={`org-2-${idx}`}
                className="relative flex h-14 w-32 md:h-18 md:w-44 shrink-0 items-center justify-center transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={org.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 128px, 176px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
