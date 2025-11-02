import { create } from "zustand"
import { persist } from "zustand/middleware"
import apiClient from "@/lib/api/apiclient"

interface User {
  id: string
  username: string
  email?: string
  role: "admin" | "user"
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  login: (username: string, password: string) => Promise<boolean>
  logout: () => void
  checkAuth: () => boolean
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,

      login: async (username: string, password: string) => {
        try {
          const data = await apiClient.login({ username, password })
          set({
            user: data.user,
            isAuthenticated: true,
          })
          return true
        } catch {
          return false
        }
      },

      logout: async () => {
        try {
          // Call logout API to invalidate tokens on server
          await apiClient.logout()
        } catch (error) {
          // Continue with local logout even if API call fails
          console.warn("Logout API call failed:", error)
        } finally {
          // Always clear local state
          set({ user: null, isAuthenticated: false })
        }
      },

      checkAuth: () => {
        return get().isAuthenticated
      },
    }),
    {
      name: "thulir-auth-storage",
    },
  ),
)
