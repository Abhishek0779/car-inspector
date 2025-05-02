"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"

interface User {
  id: string
  name: string
  email: string
  city: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  signup: (name: string, email: string, password: string, city: string) => Promise<void>
  logout: () => void
  updateUserCity: (city: string) => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = async () => {
      try {
        const storedUser = localStorage.getItem("user")
        if (storedUser) {
          setUser(JSON.parse(storedUser))
        }
      } catch (error) {
        console.error("Failed to restore auth state:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // In a real app, this would be an API call
      // Simulating API call for demo
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock user data - in a real app, this would come from the backend
      const mockUser = {
        id: "user_123",
        name: "Demo User",
        email,
        city: "Ahmedabad",
      }

      // Save to localStorage for persistence
      localStorage.setItem("user", JSON.stringify(mockUser))
      localStorage.setItem("auth-token", "mock-jwt-token")
      document.cookie = "auth-token=mock-jwt-token; path=/; max-age=86400"

      setUser(mockUser)
      toast({
        title: "Login successful",
        description: "Welcome back!",
      })
      router.push("/")
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again.",
        variant: "destructive",
      })
      console.error("Login error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const signup = async (name: string, email: string, password: string, city: string) => {
    setIsLoading(true)
    try {
      // In a real app, this would be an API call
      // Simulating API call for demo
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock user data - in a real app, this would come from the backend
      const mockUser = {
        id: "user_" + Date.now(),
        name,
        email,
        city,
      }

      // Save to localStorage for persistence
      localStorage.setItem("user", JSON.stringify(mockUser))
      localStorage.setItem("auth-token", "mock-jwt-token")
      document.cookie = "auth-token=mock-jwt-token; path=/; max-age=86400"

      setUser(mockUser)
      toast({
        title: "Signup successful",
        description: "Your account has been created.",
      })
      router.push("/")
    } catch (error) {
      toast({
        title: "Signup failed",
        description: "Please try again later.",
        variant: "destructive",
      })
      console.error("Signup error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("auth-token")
    document.cookie = "auth-token=; path=/; max-age=0"
    setUser(null)
    router.push("/auth/login")
  }

  const updateUserCity = (city: string) => {
    if (user) {
      const updatedUser = { ...user, city }
      setUser(updatedUser)
      localStorage.setItem("user", JSON.stringify(updatedUser))
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, updateUserCity, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

