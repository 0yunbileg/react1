"use client"
import React, { createContext, useContext, useState, ReactNode } from "react"
import { useAuth } from "@/context/AuthContext"

interface CartContextType {
  cart: number[]
  addToCart: (id: number) => void
  removeFromCart: (id: number) => void
  clearCart: () => void
}

const CartContext = createContext<any>(null)

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { user } = useAuth()
  const [cart, setCart] = useState<number[]>([])

  const loadCart = async () => {
    if (!user) return
    const res = await fetch("/api/cart/get", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email })
    })
    const data = await res.json()
    setCart(data.cart)
  }

  // const addToCart = (id: number) => setCart((prev) => [...prev, id])


  const addToCart = async (productId: number) => {
    if (!user) return
    const res = await fetch("/api/cart/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email, productId })
    })
    const data = await res.json()
    setCart(data.cart)
  }

  // const removeFromCart = (id: number) =>
  //   setCart((prev) => prev.filter((item) => item !== id))


  const removeFromCart = async (productId: number) => {
    if (!user) return
    const res = await fetch("/api/cart/remove", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email, productId })
    })
    const data = await res.json()
    setCart(data.cart)
  }

  const clearCart = () => setCart([])

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within CartProvider")
  }
  return context
}
