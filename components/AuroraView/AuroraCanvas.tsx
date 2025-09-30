"use client"


import { useEffect, useRef } from "react"
import { useTheme } from "../../src/contexts/theme-context"


interface AuroraBackgroundProps {
  className?: string
}


export function AuroraBackground({ className = "" }: AuroraBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()


  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return


    const ctx = canvas.getContext("2d")
    if (!ctx) return


    // Set canvas size for right side positioning
    const setCanvasSize = () => {
      canvas.width = Math.floor(window.innerWidth * 0.4) // 40% of screen width
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)


    // Theme-aware wave configurations matching your gradients
    const darkWaves = [
      // Zinc-900 base layers
      { color: "rgba(24, 24, 27, 0.9)", speed: 0.0002, amplitude: 80, frequency: 0.001, offset: 0 },
      { color: "rgba(39, 39, 42, 0.7)", speed: 0.0003, amplitude: 100, frequency: 0.0015, offset: 100 },
      // Teal-900 flowing layers  
      { color: "rgba(19, 78, 74, 0.6)", speed: 0.0004, amplitude: 120, frequency: 0.002, offset: 200 },
      { color: "rgba(19, 78, 74, 0.45)", speed: 0.00025, amplitude: 140, frequency: 0.0018, offset: 300 },
      // Teal accent highlights
      { color: "rgba(13, 148, 136, 0.3)", speed: 0.0005, amplitude: 90, frequency: 0.0022, offset: 400 },
    ]


    const lightWaves = [
      // Neutral-200/300 base layers
      { color: "rgba(229, 231, 235, 0.85)", speed: 0.0002, amplitude: 60, frequency: 0.001, offset: 0 },
      { color: "rgba(212, 212, 216, 0.7)", speed: 0.0003, amplitude: 80, frequency: 0.0015, offset: 100 },
      // Teal-900 with reduced opacity for light mode
      { color: "rgba(19, 78, 74, 0.4)", speed: 0.0004, amplitude: 100, frequency: 0.002, offset: 200 },
      { color: "rgba(19, 78, 74, 0.25)", speed: 0.00025, amplitude: 120, frequency: 0.0018, offset: 300 },
      // Subtle teal highlights
      { color: "rgba(13, 148, 136, 0.2)", speed: 0.0005, amplitude: 70, frequency: 0.0022, offset: 400 },
    ]


    const waves = theme === 'dark' ? darkWaves : lightWaves


    let animationFrameId: number
    let time = 0


    const drawWave = (wave: (typeof waves)[0], xOffset: number) => {
      if (!ctx || !canvas) return


      ctx.beginPath()
      ctx.moveTo(0, 0)


      // Create flowing vertical wave path across the right canvas
      for (let y = 0; y <= canvas.height; y += 2) {
        const x1 = Math.sin(y * wave.frequency + time * wave.speed + wave.offset) * wave.amplitude
        const x2 = Math.cos(y * wave.frequency * 0.5 + time * wave.speed * 0.7 + wave.offset) * wave.amplitude * 0.5
        const x = Math.max(0, Math.min(canvas.width, xOffset + x1 + x2)) // Keep wave within canvas bounds
        ctx.lineTo(x, y)
      }


      // Close the path
      ctx.lineTo(0, canvas.height)
      ctx.closePath()


      // Create gradient across the canvas width
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
      gradient.addColorStop(0, "rgba(0, 0, 0, 0)") // Transparent on left edge
      gradient.addColorStop(0.4, wave.color.replace(/[\d\.]+\)$/g, "0.2)")) // Build up opacity
      gradient.addColorStop(1, wave.color) // Full color on right edge


      ctx.fillStyle = gradient
      ctx.fill()
    }


    const animate = () => {
      if (!ctx || !canvas) return


      // Clear the canvas first
      ctx.clearRect(0, 0, canvas.width, canvas.height)


      // Create animated base gradient across the entire right-side canvas
      const gradientOffset = (Math.sin(time * 0.0005) + 1) * 0.15 // Oscillates between 0 and 0.3
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height) // Diagonal across right canvas
      
      if (theme === 'dark') {
        // Matching: from-zinc-900 via-zinc-900 to-teal-900
        gradient.addColorStop(1, "rgba(19, 78, 74, 0.9)") // to-teal-900
        gradient.addColorStop(0.5 + gradientOffset * 0.3, "rgba(24, 24, 27, 0.8)") // via-zinc-900 with animation
        gradient.addColorStop(0, "rgba(24, 24, 27, 0.6)") // zinc-900 with transparency for blending
      } else {
        // Matching: from-neutral-200 via-neutral-300 to-teal-900/60
        gradient.addColorStop(0, "rgba(229, 231, 235, 0.5)") // neutral-200 with transparency
        gradient.addColorStop(0.5 + gradientOffset * 0.3, "rgba(212, 212, 216, 0.7)") // via-neutral-300 with animation
        gradient.addColorStop(1, "rgba(19, 78, 74, 0.6)") // to-teal-900/60
      }


      // Fill the entire right-side canvas
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)


      // Draw flowing waves across the right-side canvas
      waves.forEach((wave, index) => {
        const xOffset = canvas.width * 0.2 + index * 25 // Distribute waves across right canvas
        drawWave(wave, xOffset)
      })


      time += 1
      animationFrameId = requestAnimationFrame(animate)
    }


    animate()


    return () => {
      window.removeEventListener("resize", setCanvasSize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme])


  return <canvas ref={canvasRef} className={`fixed inset-0 h-full -z-10 ${className}`} />
}