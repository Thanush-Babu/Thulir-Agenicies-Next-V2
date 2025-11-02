import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { MantineProvider } from "@/components/providers/mantine-provider"
import "./globals.css"
import { Suspense } from "react"
import { NavigationProgress } from "@/components/navigation-progress"

export const metadata: Metadata = {
  title: "Thulir Agency - Laboratory Instruments & Equipment",
  description:
    "Leading supplier of quality laboratory instruments, glassware, chemicals, and safety equipment for research and educational institutions.",
  keywords: "laboratory instruments, lab equipment, glassware, chemicals, safety equipment, scientific instruments",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <NavigationProgress />
        <Suspense fallback={<div>Loading...</div>}>
          <MantineProvider>{children}</MantineProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
