"use client"

import { Globe } from "@/components/ui/cobe-globe"

const countries = [
  "🇺🇸 USA",
  "🇬🇧 UK",
  "🇮🇳 India",
  "🇦🇪 UAE / GCC",
  "🇩🇪 Germany",
  "🇸🇬 Singapore",
  "🇨🇦 Canada",
  "🇪🇬 Egypt",
  "🇱🇧 Lebanon",
  "🇦🇿 Azerbaijan",
  "🇯🇴 Jordan",
  "🇵🇰 Pakistan",
  "🇸🇾 Syria",
  "🇪🇸 Spain",
  "🇮🇹 Italy",
]

export default function StudentsGlobalSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_center,_#123c73_0%,_#071a2b_45%,_#04111d_100%)] py-24 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        
        {/* Left */}
        <div className="max-w-xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-300/70">
            Global Community
          </p>

          <h2 className="text-5xl font-semibold leading-tight md:text-6xl">
            Where Our <span className="text-blue-400">Students</span>
            <br />
            Come From
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
            Al Shomoukh International School is home to a vibrant international
            student community representing over 23 nationalities, creating a rich
            environment of cultural exchange and global perspective.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {countries.map((country) => (
              <div
                key={country}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 backdrop-blur-sm transition hover:bg-white/10"
              >
                {country}
              </div>
            ))}
          </div>

          <div className="mt-10 flex max-w-md items-center gap-6 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-md">
            <div>
              <div className="text-5xl font-bold text-blue-400">23+</div>
              <div className="mt-1 text-xs uppercase tracking-[0.25em] text-blue-200/70">
                Nationalities
              </div>
            </div>
            <div className="h-14 w-px bg-white/10" />
            <p className="text-sm leading-6 text-slate-300">
              Nurturing global citizens in a diverse and inclusive environment.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex items-center justify-center">
          <div className="absolute h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />
          <Globe className="w-full h-full" />
        </div>
      </div>
    </section>
  )
}
