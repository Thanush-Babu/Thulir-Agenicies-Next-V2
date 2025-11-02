import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { CTAButton } from "@/lib/types"

interface CallToActionProps {
  title: string
  description?: string
  buttons: CTAButton[]
  className?: string
}

export function CallToAction({ title, description, buttons, className = "" }: CallToActionProps) {
  return (
    <section
      className={`relative bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground py-16 overflow-hidden ${className}`}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.1))]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8 relative">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">{title}</h2>
          {description && (
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto text-pretty">{description}</p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            {buttons.map((button, index) => {
              const buttonVariant = button.variant || "secondary"
              const buttonContent = button.text

              if (button.linkType === "externalLink") {
                return (
                  <Button
                    key={index}
                    asChild
                    variant={buttonVariant}
                    size="lg"
                    className={`shadow-lg hover:shadow-xl transition-shadow ${button.className}`}
                  >
                    <a href={button.href} target="_blank" rel="noopener noreferrer">
                      {buttonContent}
                    </a>
                  </Button>
                )
              }

              return (
                <Button
                  key={index}
                  asChild
                  variant={buttonVariant}
                  size="lg"
                  className={`shadow-lg hover:shadow-xl transition-shadow ${button.className}`}
                >
                  <Link href={button.href}>{buttonContent}</Link>
                </Button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
