import { create } from "zustand"
import type { Product, Activity } from "@/lib/types"
import { useAuthStore } from "@/lib/store/auth-store"
import apiClient from "@/lib/api/apiclient"

interface Stats {
  totalProducts: number
  totalBrands: number
  totalContacts: number
  activeProducts: number
}

// Product type is imported from lib/types

interface DataState {
  stats: Stats | null
  products: Product[]
  latestActivities: Activity[]
  recentActivities: Activity[]
  loading: boolean
  latestActivitiesLoaded: boolean
  recentActivitiesLoaded: boolean
  fetchStats: () => Promise<void>
  fetchLatestActivities: () => Promise<void>
  fetchRecentActivities: () => Promise<void>
  fetchProducts: () => Promise<void>
  createProduct: (product: Omit<Product, "_id"> & { images?: File[]; specifications?: string | Record<string, any> }) => Promise<boolean>
}

export const useDataStore = create<DataState>((set, get) => ({
  stats: null,
  products: [],
  latestActivities: [],
  recentActivities: [],
  loading: false,
  latestActivitiesLoaded: false,
  recentActivitiesLoaded: false,

  fetchStats: async () => {
    set({ loading: true })
    // Mock API call - replace with real API
    await new Promise((resolve) => setTimeout(resolve, 500))
    set({
      stats: {
        totalProducts: 1247,
        totalBrands: 45,
        totalContacts: 328,
        activeProducts: 1189,
      },
      loading: false,
    })
  },

  fetchLatestActivities: async () => {
    const { latestActivitiesLoaded } = get()
    if (latestActivitiesLoaded) return
    
    // Check if user is authenticated before making API call
    const { isAuthenticated } = useAuthStore.getState()
    if (!isAuthenticated) return
    
    set({ loading: true })
    try {
      const data = await apiClient.getLatestActivities()
      set({ latestActivities: data.data || [], loading: false, latestActivitiesLoaded: true })
    } catch (error) {
      console.error("Failed to fetch latest activities:", error)
      set({ loading: false })
    }
  },

  fetchRecentActivities: async () => {
    // Check if user is authenticated before making API call
    const { isAuthenticated } = useAuthStore.getState()
    if (!isAuthenticated) return
    
    set({ loading: true })
    try {
      const data = await apiClient.getRecentActivities()
      set({ recentActivities: data.data || [], loading: false, recentActivitiesLoaded: true })
    } catch (error) {
      console.error("Failed to fetch recent activities:", error)
      set({ loading: false })
    }
  },

  fetchProducts: async () => {
    const { isAuthenticated } = useAuthStore.getState()
    if (!isAuthenticated) return

    set({ loading: true })
    try {
      const data = await apiClient.getProducts()
      set({ products: data.data || [], loading: false })
    } catch (error) {
      console.error("Failed to fetch products:", error)
      set({ loading: false })
    }
  },

  createProduct: async (product) => {
    set({ loading: true })
    try {
      const productData = {
        name: product.name,
        description: product.description,
        category: product.category,
        subcategory: product.subcategory || "",
        model: product.model || "",
        featured: !!product.featured,
        isAvailable: true,
        sortOrder: product.sortOrder ?? 0,
        tags: product.tags || [],
        specifications: product.specifications || {},
        images: product.images || [], // This will be File objects
      }

      const created = await apiClient.createProduct(productData)

      const newProduct: Product = {
        ...product,
        ...created,
        isAvailable: true,
        featured: product.featured ?? false,
        sortOrder: product.sortOrder ?? 0,
        id: created.id || Date.now().toString(),
      }

      set((state) => ({
        products: [...state.products, newProduct],
        loading: false,
      }))
      return true
    } catch (e) {
      console.error("Product creation failed:", e)
      set({ loading: false })
      return false
    }
  },
}))
