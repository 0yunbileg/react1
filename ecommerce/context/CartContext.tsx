"use client"
import { createContext, useContext, useEffect, useState } from "react"
import { getCart, saveCart } from "@/utils/cartStorage"

interface Product {
  id: number
  title: string
  price: number
  image: string
}

interface CartContextType {
  cart: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (id: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Product[]>([])

  useEffect(() => {
    setCart(getCart())
  }, [])

  useEffect(() => {
    saveCart(cart)
  }, [cart])

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id)
      if (exists) return prev // or handle quantity
      return [...prev, product]
    })
  }

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const clearCart = () => setCart([])

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used inside CartProvider")
  return context
}

// "use client"
// import React, {
//   createContext,
//   useContext,
//   useState,
//   ReactNode,
//   useEffect,
// } from "react"
// import { useAuth } from "@/context/AuthContext"
// import { getCart, saveCart } from "@/utils/cartStorage"

// interface CartContextType {
//   cart: number[]
//   addToCart: (productId: number) => Promise<void>
//   removeFromCart: (productId: number) => Promise<void>
//   clearCart: () => void
//   loadCart: () => Promise<void>
// }

// const CartContext = createContext<CartContextType | null>(null)

// export const CartProvider: React.FC<{ children: ReactNode }> = ({
//   children,
// }) => {
//   const { user } = useAuth()
//   const [cart, setCart] = useState<number[]>([])

//   const loadCart = async () => {
//     if (!user) return
//     const res = await fetch("/api/cart/get", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email: user.email }),
//     })
//     const data = await res.json()
//     console.log("Loaded cart from server:", data) // 👈 check this
//     setCart(data.cart)
//   }

//   const addToCart = async (productId: number) => {
//     if (!user) return
//     const res = await fetch("/api/cart/add", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email: user.email, productId }),
//     })
//     const data = await res.json()
//     setCart(data.cart)
//   }

//   const removeFromCart = async (productId: number) => {
//     if (!user) return
//     const res = await fetch("/api/cart/remove", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email: user.email, productId }),
//     })
//     const data = await res.json()
//     setCart(data.cart)
//   }

//   const clearCart = () => setCart([])

//   useEffect(() => {
//     if (user) {
//       loadCart()
//     } else {
//       setCart([])
//     }
//   }, [user])

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, removeFromCart, clearCart, loadCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   )
// }

// export const useCart = () => {
//   const context = useContext(CartContext)
//   if (!context) {
//     throw new Error("useCart must be used within CartProvider")
//   }
//   return context
// }
