"use client"

import { useEffect, useRef, useCallback, useState } from "react"
import createGlobe from "cobe"

interface CdnMarker {
  id: string
  location: [number, number]
  region: string
}

interface CdnArc {
  id: string
  from: [number, number]
  to: [number, number]
}

interface GlobeCdnProps {
  markers?: CdnMarker[]
  arcs?: CdnArc[]
  className?: string
  speed?: number
  dark?: number
  baseColor?: [number, number, number]
  markerColor?: [number, number, number]
  glowColor?: [number, number, number]
}

const defaultMarkers: CdnMarker[] = [
  { id: "cdn-iad", location: [38.95, -77.45], region: "USA" },
  { id: "cdn-sfo", location: [37.62, -122.38], region: "USA" },
  { id: "cdn-cdg", location: [49.01, 2.55], region: "UK" },
  { id: "cdn-hnd", location: [35.55, 139.78], region: "Singapore" },
  { id: "cdn-syd", location: [-33.95, 151.18], region: "Australia" },
  { id: "cdn-gru", location: [-23.43, -46.47], region: "Argentina" },
  { id: "cdn-sin", location: [1.36, 103.99], region: "Singapore" },
  { id: "cdn-arn", location: [59.65, 17.93], region: "Germany" },
  { id: "cdn-dub", location: [53.43, -6.25], region: "Ireland" },
  { id: "cdn-bom", location: [19.09, 72.87], region: "India" },
  { id: "cdn-mct", location: [23.5859, 58.4059], region: "Oman" },
]

const defaultArcs: CdnArc[] = [
  { id: "cdn-arc-1", from: [38.95, -77.45], to: [23.5859, 58.4059] },
  { id: "cdn-arc-2", from: [49.01, 2.55], to: [23.5859, 58.4059] },
  { id: "cdn-arc-3", from: [35.55, 139.78], to: [23.5859, 58.4059] },
  { id: "cdn-arc-4", from: [-23.43, -46.47], to: [23.5859, 58.4059] },
  { id: "cdn-arc-5", from: [19.09, 72.87], to: [23.5859, 58.4059] },
]

export function GlobeCdn({
  markers = defaultMarkers,
  arcs = defaultArcs,
  className = "",
  speed = 0.003,
  dark = 0,
  baseColor = [0.3, 0.7, 0.3], // Green continents
  markerColor = [1, 0, 0],
  glowColor = [0.1, 0.3, 0.8], // Blue atmospheric glow
}: GlobeCdnProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null)
  const dragOffset = useRef({ phi: 0, theta: 0 })
  const phiOffsetRef = useRef(0)
  const thetaOffsetRef = useRef(0)
  const isPausedRef = useRef(false)
  const [traffic, setTraffic] = useState<{ id: string; value: number }[]>([])

  useEffect(() => {
    // Initialize traffic on the client to avoid hydration mismatch
    setTraffic(arcs.map((a) => ({ id: a.id, value: Math.floor(Math.random() * 300) + 100 })))

    const interval = setInterval(() => {
      setTraffic((data) =>
        data.map((t) => ({
          ...t,
          value: Math.max(50, t.value + Math.floor(Math.random() * 21) - 10),
        }))
      )
    }, 2500)
    return () => clearInterval(interval)
  }, [arcs])

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteracting.current = { x: e.clientX, y: e.clientY }
    const canvas = canvasRef.current
    if (canvas) canvas.style.cursor = "grabbing"
    isPausedRef.current = true
  }, [])

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current += dragOffset.current.phi
      thetaOffsetRef.current += dragOffset.current.theta
      dragOffset.current = { phi: 0, theta: 0 }
    }
    pointerInteracting.current = null
    const canvas = canvasRef.current
    if (canvas) canvas.style.cursor = "grab"
    isPausedRef.current = false
  }, [])

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (pointerInteracting.current !== null) {
        dragOffset.current = {
          phi: (e.clientX - pointerInteracting.current.x) / 300,
          theta: (e.clientY - pointerInteracting.current.y) / 1000,
        }
      }
    }
    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("pointerup", handlePointerUp, { passive: true })
    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerup", handlePointerUp)
    }
  }, [handlePointerUp])

  // Stable color refs to avoid unnecessary re-renders
  const baseColorRef = useRef(baseColor)
  const markerColorRef = useRef(markerColor)
  const glowColorRef = useRef(glowColor)

  useEffect(() => {
    baseColorRef.current = baseColor
    markerColorRef.current = markerColor
    glowColorRef.current = glowColor
  }, [baseColor, markerColor, glowColor])

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    let globe: ReturnType<typeof createGlobe> | null = null
    let internalPhi = 0

    function init() {
      const width = canvas.offsetWidth
      if (width === 0 || globe) return

      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width: width * 2,
        height: width * 2,
        phi: 0,
        theta: 0.2,
        dark,
        diffuse: 1.5,
        mapSamples: 16000,
        mapBrightness: 10,
        baseColor: baseColorRef.current,
        markerColor: markerColorRef.current,
        glowColor: glowColorRef.current,
        markerElevation: 0.02,
        markers: markers.map((m) => ({ location: m.location, size: 0.012 })),
        opacity: 0.7,
        onRender: (state: any) => {
          if (!isPausedRef.current) internalPhi += speed
          state.phi = internalPhi + phiOffsetRef.current + dragOffset.current.phi
          state.theta = 0.2 + thetaOffsetRef.current + dragOffset.current.theta
          state.width = canvas.offsetWidth * 2
          state.height = canvas.offsetWidth * 2
        }
      } as any)
      setTimeout(() => {
        if (canvas) canvas.style.opacity = "1"
      })
    }

    if (canvas.offsetWidth > 0) {
      init()
    } else {
      const ro = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          ro.disconnect()
          init()
        }
      })
      ro.observe(canvas)
    }

    return () => {
      if (globe) globe.destroy()
    }
  }, [markers, speed, dark])

  const pyramidFaceStyle = (nth: number): React.CSSProperties => {
    const transforms = [
      "rotateY(0deg) translateZ(4px) rotateX(19.5deg)",
      "rotateY(120deg) translateZ(4px) rotateX(19.5deg)",
      "rotateY(240deg) translateZ(4px) rotateX(19.5deg)",
      "rotateX(-90deg) rotateZ(60deg) translateY(4px)",
    ]
    const colors = ["#b91c1c", "#991b1b", "#7f1d1d", "#dc2626"] // Shades of red for Al Shomoukh
    return {
      position: "absolute",
      left: -0.5,
      top: 0,
      width: 0,
      height: 0,
      borderLeft: "6.5px solid transparent",
      borderRight: "6.5px solid transparent",
      borderBottom: `13px solid ${colors[nth]}`,
      transformOrigin: "center bottom",
      transform: transforms[nth],
    }
  }

  return (
    <div className={`relative aspect-square select-none ${className}`}>
      <style>{`
        @keyframes pyramid-spin {
          0% { transform: rotateX(20deg) rotateY(0deg); }
          100% { transform: rotateX(20deg) rotateY(360deg); }
        }
      `}</style>
      
      {/* Ocean background */}
      <div className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle,rgba(30,58,138,0.7)_0%,rgba(15,23,42,0.3)_70%,transparent_100%)] blur-2xl" />

      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          opacity: 0,
          transition: "opacity 1.2s ease",
          borderRadius: "50%",
          touchAction: "none",
          position: "relative",
          zIndex: 1,
        }}
      />
    </div>
  )
}
