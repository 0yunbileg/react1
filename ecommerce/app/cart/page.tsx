"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/context/AuthContext"

interface Product {
  id: number
  title: string
  price: number
  image: string
}

export default function CartPage() {
  const { user } = useAuth() // get logged-in user info
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  // Load cart products from backend
  const loadCartProducts = async () => {
    if (!user?.email) {
      setProducts([])
      setLoading(false)
      return
    }

    try {
      const resCart = await fetch("/api/cart", {
        headers: { "x-user-email": user.email },
      })
      const { cart }: { cart: number[] } = await resCart.json()

      if (!cart || cart.length === 0) {
        setProducts([])
        setLoading(false)
        return
      }

      const resProducts = await fetch("/api/products")
      const allProducts: Product[] = await resProducts.json()
      setProducts(allProducts.filter((p) => cart.includes(p.id)))
    } catch (err) {
      console.error("Failed to load cart:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadCartProducts()
  }, [user?.email])

  // Remove product from cart
  const handleRemove = async (productId: number) => {
    if (!user?.email) return

    try {
      const res = await fetch("/api/cart/remove", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user.email, productId }),
      })
      const data = await res.json()
      if (res.ok) {
        // Refresh cart products after removal
        loadCartProducts()
      } else {
        console.error("Failed to remove from cart:", data.error)
      }
    } catch (err) {
      console.error("Error removing from cart:", err)
    }
  }

  if (loading) return <div className='p-6'>Loading cart...</div>

  if (!products || products.length === 0)
    return <div className='p-6 text-center'>🛒 Your cart is empty.</div>

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold mb-4'>Your Cart</h1>
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        {products.map((product) => (
          <div key={product.id} className='border p-4 rounded-lg shadow'>
            <img
              src={product.image}
              alt={product.title}
              className='w-full h-40 object-cover mb-2 rounded'
            />
            <h2 className='font-semibold'>{product.title}</h2>
            <p className='text-gray-600'>${product.price}</p>
            <button
              onClick={() => handleRemove(product.id)}
              className='mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
