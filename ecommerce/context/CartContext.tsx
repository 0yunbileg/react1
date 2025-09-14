"use client"

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react"
import { useAuth } from "./AuthContext"
import { getCart, saveCart, clearCart } from "@/utils/cartStorage"

interface CartContextType {
  cart: any[]
  addToCart: (item: any) => void
  removeFromCart: (id: string | number) => void
  clearCartItems: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth()
  const [cart, setCart] = useState<any[]>([])

  // Load cart when user logs in or changes
  useEffect(() => {
    setCart(getCart(user?.id))
  }, [user?.id])

  // Save cart whenever it changes
  useEffect(() => {
    if (user?.id) saveCart(user.id, cart)
  }, [cart, user?.id])

  const addToCart = (item: any) => {
    setCart((prev) => [...prev, item])
  }

  const removeFromCart = (id: string | number) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const clearCartItems = () => {
    setCart([])
    if (user?.id) clearCart(user.id)
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCartItems }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used within CartProvider")
  return context
}

// "use client"
// import { createContext, useContext, useEffect, useState } from "react"
// import { getCart, saveCart, clearCart } from "@/utils/cartStorage"
// import { useAuth } from "@/context/AuthContext"

// interface Product {
//   id: number
//   title: string
//   price: number
//   image: string
// }

// interface CartContextType {
//   cart: Product[]
//   addToCart: (product: Product) => void
//   removeFromCart: (id: number) => void
// }

// const CartContext = createContext<CartContextType | undefined>(undefined)

// export function CartProvider({ children }: { children: React.ReactNode }) {
//   const [cart, setCart] = useState<Product[]>([])
//   const { loggedIn, user, logout } = useAuth()

//   useEffect(() => {
//     if (user?.id) {
//       setCart(getCart(user.id))
//     } else {
//       setCart([]) // no user = empty cart
//     }
//   }, [user?.id])

//   useEffect(() => {
//     if (user?.id) {
//       saveCart(user.id, cart)
//     }
//   }, [cart, user?.id])

//   useEffect(() => {
//     if (!user?.id) {
//       setCart([])
//     }
//   }, [user?.id])

//   const addToCart = (product: Product) => {
//     setCart((prev) => {
//       const exists = prev.find((item) => item.id === product.id)
//       if (exists) return prev
//       return [...prev, product]
//     })
//   }

//   const removeFromCart = (id: number) => {
//     setCart((prev) => prev.filter((item) => item.id !== id))
//   }

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   )
// }

// export const useCart = () => {
//   const context = useContext(CartContext)
//   if (!context) throw new Error("useCart must be used inside CartProvider")
//   return context
// }
