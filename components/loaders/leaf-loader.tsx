"use client"

import { useEffect, useState } from "react"

interface LeafLoaderProps {
  alwaysShow?: boolean
}

export function LeafLoader({ alwaysShow = false }: LeafLoaderProps) {
  const [progress, setProgress] = useState(0)
  const [shouldShow, setShouldShow] = useState(alwaysShow)

  useEffect(() => {
    if (alwaysShow) {
      setShouldShow(true)
    } else {
      const checkShouldShow = () => {
        try {
          const lastVisit = localStorage.getItem("thulir-last-visit")
          const today = new Date().toDateString()

          if (!lastVisit || lastVisit !== today) {
            // First visit of the day or first visit ever
            localStorage.setItem("thulir-last-visit", today)
            setShouldShow(true)
            return true
          }
          return false
        } catch (error) {
          // If localStorage is not available, show the loader
          console.error("[v0] localStorage error:", error)
          return true
        }
      }

      const show = checkShouldShow()
      if (!show) {
        // Don't show loader, just return
        return
      }
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => clearInterval(interval)
  }, [alwaysShow])

  if (!shouldShow) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md">
      <div className="relative">
        {/* Leaf SVG outline */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          {/* Leaf outline path */}
          <defs>
            <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(99, 102, 241)" />
              <stop offset="100%" stopColor="rgb(139, 92, 246)" />
            </linearGradient>
            <clipPath id="leafClip">
              <path d="M60 10 C 80 20, 100 40, 105 65 C 108 80, 105 95, 90 105 C 75 115, 60 110, 60 110 L 60 10 Z M60 10 C 40 20, 20 40, 15 65 C 12 80, 15 95, 30 105 C 45 115, 60 110, 60 110 L 60 10 Z" />
            </clipPath>
          </defs>

          {/* Leaf outline stroke */}
          <path
            d="M60 10 C 80 20, 100 40, 105 65 C 108 80, 105 95, 90 105 C 75 115, 60 110, 60 110 L 60 10 Z M60 10 C 40 20, 20 40, 15 65 C 12 80, 15 95, 30 105 C 45 115, 60 110, 60 110 L 60 10 Z"
            stroke="url(#leafGradient)"
            strokeWidth="3"
            fill="none"
            className="opacity-30"
          />

          {/* Center vein */}
          <line x1="60" y1="10" x2="60" y2="110" stroke="url(#leafGradient)" strokeWidth="2" className="opacity-30" />

          {/* Side veins */}
          <line x1="60" y1="30" x2="35" y2="50" stroke="url(#leafGradient)" strokeWidth="1.5" className="opacity-20" />
          <line x1="60" y1="30" x2="85" y2="50" stroke="url(#leafGradient)" strokeWidth="1.5" className="opacity-20" />
          <line x1="60" y1="50" x2="30" y2="70" stroke="url(#leafGradient)" strokeWidth="1.5" className="opacity-20" />
          <line x1="60" y1="50" x2="90" y2="70" stroke="url(#leafGradient)" strokeWidth="1.5" className="opacity-20" />
          <line x1="60" y1="70" x2="35" y2="85" stroke="url(#leafGradient)" strokeWidth="1.5" className="opacity-20" />
          <line x1="60" y1="70" x2="85" y2="85" stroke="url(#leafGradient)" strokeWidth="1.5" className="opacity-20" />

          {/* Filling effect - starts from bottom */}
          <rect
            x="0"
            y={110 - (progress / 100) * 100}
            width="120"
            height={(progress / 100) * 100}
            fill="url(#leafGradient)"
            clipPath="url(#leafClip)"
            className="opacity-60"
          />
        </svg>

        {/* Loading text */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-center">
          <p className="text-sm font-medium text-muted-foreground">Loading...</p>
          <p className="text-xs text-muted-foreground mt-1">{progress}%</p>
        </div>
      </div>
    </div>
  )
}
