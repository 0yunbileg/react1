"use client"

import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react"

interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  password: string
}

interface AuthContextType {
  loggedIn: boolean
  user: User | null
  register: (userData: User) => { ok: boolean; message: string }
  // login: (email: string, password: string) => { ok: boolean; message: string }
  login: (credentials: { email: string; password: string }) => {
    ok: boolean
    message: string
  }
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  // Load logged-in user from storage on app start
  useEffect(() => {
    const storedUserId = localStorage.getItem("loggedInUserId")
    if (storedUserId) {
      const users = JSON.parse(localStorage.getItem("users") || "[]") as User[]
      const existingUser = users.find((u) => u.id === storedUserId)
      if (existingUser) setUser(existingUser)
    }
  }, [])

  // Simple ID generator without uuid
  const generateId = () =>
    Date.now().toString() + Math.floor(Math.random() * 1000)

  // ✅ Register new user
  const register = (userData: User) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]") as User[]

    if (users.some((u) => u.email === userData.email)) {
      return { ok: false, message: "Email already registered" }
    }

    const newUser: User = { ...userData, id: generateId() }
    users.push(newUser)
    localStorage.setItem("users", JSON.stringify(users))
    return { ok: true, message: "Registered successfully" }
  }

  // ✅ Login user
  const login = (credentials: { email: string; password: string }) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]") as User[]
    const foundUser = users.find(
      (u) =>
        u.email === credentials.email && u.password === credentials.password
    )
    if (!foundUser) return { ok: false, message: "Invalid email or password" }

    setUser(foundUser)
    localStorage.setItem("loggedInUserId", foundUser.id)
    return { ok: true, message: "Login successful", user: foundUser }
  }

  // ✅ Logout user
  const logout = () => {
    setUser(null)
    localStorage.removeItem("loggedInUserId")
  }

  return (
    <AuthContext.Provider
      value={{ loggedIn: !!user, user, register, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used within AuthProvider")
  return context
}
