"use client"

import { useEffect, useRef, useCallback } from "react"
import createGlobe from "cobe"

interface GlobeMarker {
  location: [number, number]
  size: number
}

interface GlobeInteractiveProps {
  className?: string
  speed?: number
  markers?: GlobeMarker[]
  phi?: number
  theta?: number
  dark?: number
  diffuse?: number
  mapSamples?: number
  mapBrightness?: number
  baseColor?: [number, number, number]
  markerColor?: [number, number, number]
  glowColor?: [number, number, number]
  opacity?: number
}

const DEFAULT_MARKERS: GlobeMarker[] = [
  { location: [40.7128, -74.006], size: 0.05 }, // USA (New York)
  { location: [51.5074, -0.1278], size: 0.05 }, // UK (London)
  { location: [19.076, 72.8777], size: 0.05 }, // India (Mumbai)
  { location: [25.2048, 55.2708], size: 0.07 }, // UAE (Dubai)
  { location: [48.8566, 2.3522], size: 0.05 }, // Europe (Paris)
  { location: [1.3521, 103.8198], size: 0.05 }, // Asia (Singapore)
]

export function GlobeInteractive({
  className = "",
  speed = 0.002,
  markers = DEFAULT_MARKERS,
  phi = 0,
  theta = 0.3,
  dark = 1,
  diffuse = 1.2,
  mapSamples = 16000,
  mapBrightness = 6,
  baseColor = [0.1, 0.3, 0.6],
  markerColor = [1, 0.2, 0.2],
  glowColor = [0.1, 0.1, 0.2],
  opacity = 0.9,
}: GlobeInteractiveProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null)
  const pointerInteractionStart = useRef(0)
  const rotationPhi = useRef(phi)
  const rotationTheta = useRef(theta)
  const dragOffset = useRef({ phi: 0, theta: 0 })

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteracting.current = { x: e.clientX, y: e.clientY }
    pointerInteractionStart.current = e.clientX
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing"
  }, [])

  const handlePointerUp = useCallback(() => {
    pointerInteracting.current = null
    if (canvasRef.current) canvasRef.current.style.cursor = "grab"
  }, [])

  const handlePointerOut = useCallback(() => {
    pointerInteracting.current = null
    if (canvasRef.current) canvasRef.current.style.cursor = "grab"
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (pointerInteracting.current !== null) {
      const deltaX = e.clientX - pointerInteracting.current.x
      const deltaY = e.clientY - pointerInteracting.current.y
      pointerInteracting.current = { x: e.clientX, y: e.clientY }
      
      dragOffset.current.phi += deltaX / 200
      dragOffset.current.theta += deltaY / 200
    }
  }, [])

  useEffect(() => {
    if (!canvasRef.current) return

    let globePhi = phi
    let globeTheta = theta
    let width = 0

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth
      }
    }
    window.addEventListener("resize", onResize)
    onResize()

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi,
      theta,
      dark,
      diffuse,
      mapSamples,
      mapBrightness,
      baseColor,
      markerColor,
      glowColor,
      opacity,
      markers,
      onRender: (state: any) => {
        if (!pointerInteracting.current) {
          globePhi += speed
        }
        state.phi = globePhi + dragOffset.current.phi
        state.theta = globeTheta + dragOffset.current.theta
        state.width = width * 2
        state.height = width * 2
      },
    } as any)

    setTimeout(() => {
      if (canvasRef.current) canvasRef.current.style.opacity = "1"
    })

    return () => {
      globe.destroy()
      window.removeEventListener("resize", onResize)
    }
  }, [
    phi,
    theta,
    dark,
    diffuse,
    mapSamples,
    mapBrightness,
    baseColor,
    markerColor,
    glowColor,
    opacity,
    markers,
    speed,
  ])

  return (
    <div className={`relative w-full aspect-square max-w-[600px] mx-auto ${className}`}>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerOut={handlePointerOut}
        onMouseMove={handleMouseMove}
        className="w-full h-full opacity-0 transition-opacity duration-1000 cursor-grab"
        style={{ touchAction: "none" }}
      />
    </div>
  )
}
