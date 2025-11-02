"use client"

export function NavigationLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/50 backdrop-blur-sm">
      <div className="relative">
        {/* Donut spinner */}
        <div className="w-12 h-12 rounded-full border-4 border-muted animate-spin border-t-primary" />
      </div>
    </div>
  )
}
