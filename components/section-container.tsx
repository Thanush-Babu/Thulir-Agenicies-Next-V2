import type React from "react"

interface SectionContainerProps {
  children: React.ReactNode
  className?: string
  background?: string
  id?: string
}

export function SectionContainer({ children, className = "", background = "bg-white", id }: SectionContainerProps) {
  const bgClass = background === "muted" ? "bg-muted" : background;

  return (
    <section id={id} className={`${bgClass} py-16 lg:py-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">{children}</div>
    </section>
  )
}
