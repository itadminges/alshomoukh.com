"use client"

import { cn } from "@/lib/utils"
import { useEffect, useRef } from "react"

type Rgb = readonly [number, number, number]

/** Flat footer tokens — `bg-primary` base, `text-secondary` accent lines only */
function getThemePalette(variant: "dark" | "light"): {
  base: Rgb
  line: Rgb
  lineSecondary: Rgb
} {
  const root = getComputedStyle(document.documentElement)
  const primary = parseRgb(root.getPropertyValue("--primary-rgb"), [11, 59, 91])
  const secondary = parseRgb(root.getPropertyValue("--secondary-rgb"), [193, 157, 118])
  const ivory = parseHex(root.getPropertyValue("--ivory"), [253, 252, 240])

  if (variant === "dark") {
    return {
      base: toUnit(primary),
      line: toUnit(secondary),
      lineSecondary: [1, 1, 1] as Rgb,
    }
  }

  return {
    base: toUnit(ivory),
    line: toUnit(primary),
    lineSecondary: toUnit(secondary),
  }
}

function parseRgb(value: string, fallback: number[]): Rgb {
  const parts = value
    .split(",")
    .map((n) => Number(n.trim()))
    .filter((n) => !Number.isNaN(n))
  if (parts.length < 3) return fallback as Rgb
  return [parts[0], parts[1], parts[2]] as Rgb
}

function parseHex(value: string, fallback: number[]): Rgb {
  const hex = value.trim().replace("#", "")
  if (hex.length !== 6) return fallback as Rgb
  return [
    parseInt(hex.slice(0, 2), 16),
    parseInt(hex.slice(2, 4), 16),
    parseInt(hex.slice(4, 6), 16),
  ] as Rgb
}

function toUnit([r, g, b]: Rgb): Rgb {
  return [r / 255, g / 255, b / 255] as Rgb
}

type AnimatedPatternCloudProps = {
  className?: string
  /** `dark` matches footer `bg-primary`; `light` for ivory sections */
  variant?: "dark" | "light"
  speed?: number
  /** Line visibility — 0 to 1 */
  intensity?: number
}

function createShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)
  if (!shader) return null
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader)
    return null
  }
  return shader
}

export function AnimatedPatternCloud({
  className,
  variant = "dark",
  speed = 1,
  intensity = 0.35,
}: AnimatedPatternCloudProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const colors = getThemePalette(variant)

    const gl = canvas.getContext("webgl", { alpha: true, antialias: false })
    if (!gl) return

    const vsSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `

    const fsSource = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec3 u_baseColor;
      uniform vec3 u_lineColor;
      uniform vec3 u_lineSecondary;
      uniform float u_intensity;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
                   mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);

        float depth = 1.0 / (uv.y + 1.15);
        vec2 gridUv = vec2(uv.x * depth, depth + u_time * 0.15);

        float n = noise(gridUv * 3.5);
        float ripples = sin(gridUv.y * 18.0 + n * 8.0 + u_time * 0.5);
        float topoLine = smoothstep(0.03, 0.0, abs(ripples));

        vec3 finalColor = u_baseColor;
        finalColor += topoLine * mix(u_lineSecondary, u_lineColor, 0.55) * u_intensity * 0.28;

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `

    const vs = createShader(gl, gl.VERTEX_SHADER, vsSource)
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource)
    if (!vs || !fs) return

    const program = gl.createProgram()
    if (!program) return
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return
    gl.useProgram(program)

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    )

    const posAttrib = gl.getAttribLocation(program, "position")
    gl.enableVertexAttribArray(posAttrib)
    gl.vertexAttribPointer(posAttrib, 2, gl.FLOAT, false, 0, 0)

    const timeLoc = gl.getUniformLocation(program, "u_time")
    const resLoc = gl.getUniformLocation(program, "u_resolution")
    const baseLoc = gl.getUniformLocation(program, "u_baseColor")
    const lineLoc = gl.getUniformLocation(program, "u_lineColor")
    const lineSecondaryLoc = gl.getUniformLocation(program, "u_lineSecondary")
    const intensityLoc = gl.getUniformLocation(program, "u_intensity")

    gl.uniform3f(baseLoc, colors.base[0], colors.base[1], colors.base[2])
    gl.uniform3f(lineLoc, colors.line[0], colors.line[1], colors.line[2])
    gl.uniform3f(lineSecondaryLoc, colors.lineSecondary[0], colors.lineSecondary[1], colors.lineSecondary[2])
    gl.uniform1f(intensityLoc, intensity)

    const resize = () => {
      const { width, height } = container.getBoundingClientRect()
      const w = Math.max(1, Math.floor(width))
      const h = Math.max(1, Math.floor(height))
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w
        canvas.height = h
        gl.viewport(0, 0, w, h)
      }
      gl.uniform2f(resLoc, w, h)
    }

    const observer = new ResizeObserver(resize)
    observer.observe(container)
    resize()

    let animationFrameId = 0
    const frozenTime = 0

    const render = (time: number) => {
      gl.uniform1f(timeLoc, prefersReducedMotion ? frozenTime : time * 0.001 * speed)
      gl.drawArrays(gl.TRIANGLES, 0, 6)
      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render)
      }
    }

    if (prefersReducedMotion) {
      render(frozenTime)
    } else {
      animationFrameId = requestAnimationFrame(render)
    }

    return () => {
      observer.disconnect()
      cancelAnimationFrame(animationFrameId)
      gl.deleteProgram(program)
      gl.deleteShader(vs)
      gl.deleteShader(fs)
      gl.deleteBuffer(buffer)
    }
  }, [variant, speed, intensity])

  return (
    <div
      ref={containerRef}
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      <canvas ref={canvasRef} className="block h-full w-full touch-none" />
    </div>
  )
}
