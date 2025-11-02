import Link from "next/link"
import { Button } from "@/components/ui/button"

interface PageHeroProps {
  title: string
  description?: string
  className?: string
  buttons?: Array<{
    text: string
    href: string
    linkType?: "path" | "external"
    variant?: "default" | "secondary" | "outline"
  }>
}

export function PageHero({ title, description, className = "", buttons }: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-[#7a4d15] !py-8 ${className}`}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25" />
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-white/70 max-w-3xl mx-auto text-pretty leading-relaxed">{description}</p>
          )}
          {buttons && buttons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  asChild
                  variant={button.variant || "default"}
                  size="lg"
                >
                  <Link
                    href={button.href}
                    target={button.linkType === "external" ? "_blank" : undefined}
                    rel={button.linkType === "external" ? "noopener noreferrer" : undefined}
                  >
                    {button.text}
                  </Link>
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
