import { Scroll3DReveal } from "@/components/scroll-3d"
import { SectionSpirals } from "@/components/decorative-spirals"

const stats = [
  { label: "Established", value: "2015" },
  { label: "Student Age Range", value: "3–18" },
  { label: "Learning Journey", value: "KG–12" },
  { label: "Academic Framework", value: "British" },
]

function StatValue({ value }: { value: string }) {
  return (
    <div className="text-3xl md:text-4xl lg:text-5xl text-navy font-bold tracking-tight mb-2">
      {value}
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="relative py-16 bg-white overflow-hidden border-y border-navy/5 scroll-3d-scene">
      <SectionSpirals variant="light" />
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <Scroll3DReveal
              key={stat.label}
              rotateAmount={14 + index * 2}
              depth={30 + index * 8}
              className="flex flex-col items-start"
            >
              <StatValue value={stat.value} />
              <p className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-navy/40">
                {stat.label}
              </p>
            </Scroll3DReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
