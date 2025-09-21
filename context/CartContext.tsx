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

interface CartItem {
  id: string | number
  title: string
  price: number
  quantity: number
}
interface CartContextType {
  cart: any[]
  addToCart: (item: any) => void
  removeFromCart: (id: string | number) => void
  clearCartItems: () => void
  updateQuantity: (id: string | number, quantity: number) => void
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

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCart((prev) => {
      const existing = prev.find((cartItem) => cartItem.id === item.id)
      if (existing) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const updateQuantity = (id: string | number, quantity: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    )
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
      value={{ cart, addToCart, removeFromCart, updateQuantity,clearCartItems }}
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
