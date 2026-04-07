"use client"

import { Globe } from "@/components/ui/cobe-globe"
import { motion } from "framer-motion"

const countries = [
  { name: "USA", flag: "🇺🇸", lat: 37.0902, lng: -95.7129 },
  { name: "UK", flag: "🇬🇧", lat: 55.3781, lng: -3.436 },
  { name: "India", flag: "🇮🇳", lat: 20.5937, lng: 78.9629 },
  { name: "UAE / GCC", flag: "🇦🇪", lat: 23.4241, lng: 53.8478 },
  { name: "Germany", flag: "🇩🇪", lat: 51.1657, lng: 10.4515 },
  { name: "Singapore", flag: "🇸🇬", lat: 1.3521, lng: 103.8198 },
  { name: "Canada", flag: "🇨🇦", lat: 56.1304, lng: -106.3468 },
  { name: "Egypt", flag: "🇪🇬", lat: 26.8206, lng: 30.8025 },
  { name: "Lebanon", flag: "🇱🇧", lat: 33.8547, lng: 35.8623 },
  { name: "Azerbaijan", flag: "🇦🇿", lat: 40.1431, lng: 47.5769 },
  { name: "Jordan", flag: "🇯🇴", lat: 30.5852, lng: 36.2384 },
  { name: "Pakistan", flag: "🇵🇰", lat: 30.3753, lng: 69.3451 },
  { name: "Syria", flag: "🇸🇾", lat: 34.8021, lng: 38.9968 },
  { name: "Spain", flag: "🇪🇸", lat: 40.4637, lng: -3.7492 },
  { name: "Italy", flag: "🇮🇹", lat: 41.8719, lng: 12.5674 },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
} as const

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
} as const

export default function StudentsGlobalSection() {
  const globeMarkers = countries.map((c) => ({
    id: c.name,
    location: [c.lat, c.lng] as [number, number],
    label: c.name,
  }))

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_center,_#123c73_0%,_#071a2b_45%,_#04111d_100%)] py-24 text-white">
      {/* Decorative background elements */}
      <div className="absolute left-0 top-0 h-full w-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-xl z-10"
        >
          <motion.p 
            variants={itemVariants}
            className="mb-4 inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300 border border-blue-400/20"
          >
            Global Community
          </motion.p>

          <motion.h2 
            variants={itemVariants}
            className="text-5xl font-bold leading-[1.1] md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70 text-balance"
          >
            Where Our <span className="text-blue-400">Students</span>
            <br />
            Come From
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="mt-8 max-w-lg text-lg leading-8 text-slate-400 text-balance"
          >
            Al Shomoukh International School is home to a vibrant international
            student community representing over 23 nationalities, creating a rich
            environment of cultural exchange and global perspective.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3"
          >
            {countries.map((country) => (
              <motion.div
                key={country.name}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.12)" }}
                className="group flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-sm font-medium text-slate-300 backdrop-blur-md transition-all hover:border-blue-400/30 hover:text-white"
              >
                <span className="text-lg grayscale group-hover:grayscale-0 transition-all">{country.flag}</span>
                {country.name}
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-12 flex max-w-md items-center gap-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl group hover:border-blue-400/20 transition-all"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative text-6xl font-black text-blue-400 drop-shadow-[0_0_15px_rgba(37,99,235,0.4)]">23+</div>
            </div>
            <div className="h-16 w-px bg-white/10" />
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300/80">
                Nationalities
              </div>
              <p className="mt-1 text-sm leading-relaxed text-slate-400">
                Nurturing global citizens in a diverse and inclusive environment.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Globe */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex items-center justify-center lg:h-[700px]"
        >
          {/* Animated glow rings */}
          <div className="absolute h-[500px] w-[500px] rounded-full border border-blue-500/20" />
          <div className="absolute h-[600px] w-[600px] rounded-full border border-blue-500/10" />
          <div className="absolute h-[550px] w-[550px] rounded-full bg-blue-500/10 blur-[100px] animate-pulse" />
          
          <div className="relative w-full h-full max-w-[600px] max-h-[600px]">
            <Globe 
              className="w-full h-full" 
              markers={globeMarkers}
              markerColor={[0.2, 0.5, 1]}
              speed={0.004}
              mapBrightness={12}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

