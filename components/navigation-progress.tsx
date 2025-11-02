"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function NavigationProgress() {
  const [isNavigating, setIsNavigating] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Show loader when pathname changes
    setIsNavigating(true)

    // Hide loader after a short delay to allow page to render
    const timer = setTimeout(() => {
      setIsNavigating(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [pathname])

  if (!isNavigating) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-muted">
      <div className="h-full bg-gradient-to-r from-secondary to-primary animate-[progress_1s_ease-in-out]" />
    </div>
  )
}
