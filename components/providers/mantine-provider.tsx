"use client"

import type React from "react"

import { MantineProvider as Mantine, createTheme } from "@mantine/core"
import "@mantine/core/styles.css"

const theme = createTheme({
  primaryColor: "green",
  colors: {
    green: [
      "#e8f5e9",
      "#c8e6c9",
      "#a5d6a7",
      "#81c784",
      "#66bb6a",
      "#4caf50",
      "#43a047",
      "#388e3c",
      "#2e7d32",
      "#1b5e20",
    ],
  },
  fontFamily: "var(--font-geist-sans), sans-serif",
  headings: {
    fontFamily: "var(--font-geist-sans), sans-serif",
  },
})

export function MantineProvider({ children }: { children: React.ReactNode }) {
  return <Mantine theme={theme}>{children}</Mantine>
}
