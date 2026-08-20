import Image from "next/image"

const organisations = [
  {
    image: "/pearson-btec-approved-centre.png",
    href: "https://qualifications.pearson.com/en/qualifications/btec-international-level-3.html",
    alt: "Pearson BTEC Approved Centre",
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
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <div className="mb-10 flex items-center justify-center gap-4">
          <div className="h-px w-8 bg-gold/50" />
          <span className="text-center text-[11px] font-bold uppercase tracking-[0.3em] text-navy/45">
            Programme & School Group
          </span>
          <div className="h-px w-8 bg-gold/50" />
        </div>

        <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2">
          {organisations.map((organisation) => (
            <a
              key={organisation.alt}
              href={organisation.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-24 items-center justify-center border border-navy/10 bg-white p-5 transition-all hover:border-gold/40 hover:shadow-sm"
              aria-label={organisation.alt}
            >
              <div className="relative h-12 w-48">
                <Image
                  src={organisation.image}
                  alt={organisation.alt}
                  fill
                  sizes="192px"
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
