export interface User {
  id: string
  username: string
  email?: string
  role: "admin" | "user"
}

export interface Product {
  _id: string
  name: string
  description: string
  category: string
  subcategory?: string
  model?: string
  specifications?: Record<string, any>
  images?: Array<{
    _id: string
    filename: string
    originalName: string
    path: string
    size: number
    mimetype: string
  }>
  isAvailable: boolean
  sku?: string
  tags?: string[]
  featured?: boolean
  sortOrder?: number
  createdBy?: {
    _id: string
    username: string
    email?: string
  }
  updatedBy?: string
  createdAt: string
  updatedAt: string
}

export interface Brand {
  name: string
  logo?: string
  categories: string[]
  keyProducts: string[]
}

export interface Activity {
  _id: string
  type: string
  title: string
  description: string
  entityType: string
  entityId: string
  actor: {
    _id: string
    username: string
    email: string
    role: string
  }
  meta?: Record<string, any>
  createdAt: string
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
}

export interface QuoteFormData extends ContactFormData {
  products: Array<{
    name: string
    quantity: number
    specifications?: string
  }>
  budgetRange?: string
  timeline?: string
  additionalInfo?: string
}

export type LinkType = "path" | "externalLink"

export interface CTAButton {
  text: string
  href: string
  linkType: LinkType
  variant?: "default" | "secondary" | "outline" | "ghost"
  className?: string
}
