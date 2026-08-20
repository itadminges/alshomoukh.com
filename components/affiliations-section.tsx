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
    <section className="overflow-hidden bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-10 flex items-center justify-center gap-4">
          <div className="h-px w-8 bg-gold/50" />
          <span className="text-center text-[11px] font-bold uppercase tracking-[0.3em] text-navy/45">
            Accreditations & Affiliations
          </span>
          <div className="h-px w-8 bg-gold/50" />
        </div>

        <div className="grid grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {organisations.map((organisation) => (
            <a
              key={organisation.alt}
              href={organisation.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-24 items-center justify-center border border-navy/10 bg-white p-5 transition-all hover:border-gold/40 hover:shadow-sm"
              aria-label={organisation.alt}
            >
              <div className="relative h-12 w-full max-w-[180px]">
                <Image
                  src={organisation.image}
                  alt={organisation.alt}
                  fill
                  sizes="(max-width: 768px) 160px, 200px"
                  className="object-contain"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}