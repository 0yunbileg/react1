"use client"
import { useCart } from "@/context/CartContext"

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart()

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <span>{item.title}</span>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  )
}
// import { useEffect, useState } from "react"
// import { useCart } from "@/context/CartContext"

// interface Product {
//   id: number
//   title: string
//   price: number
//   image: string
// }

// export default function CartPage() {
//   const { cart, removeFromCart } = useCart() // <-- use cart from context
//   const [products, setProducts] = useState<Product[]>([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const loadProducts = async () => {
//       setLoading(true)
//       try {
//         if (!cart || cart.length === 0) {
//           setProducts([])
//           return
//         }
//         const res = await fetch("/api/products")
//         const allProducts: Product[] = await res.json()
//         setProducts(allProducts.filter((p) => cart.includes(p.id)))
//       } catch (err) {
//         console.error("Failed to load products:", err)
//       } finally {
//         setLoading(false)
//       }
//     }
//     loadProducts()
//   }, [cart])
//   if (loading) return <div className='p-6'>Loading cart...</div>
//   if (!products || products.length === 0)
//     return <div className='p-6 text-center'>🛒 Your cart is empty.</div>

//   return (
//     <div className='p-6'>
//       <h1 className='text-2xl font-bold mb-4'>Your Cart</h1>
//       <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
//         {products.map((product) => (
//           <div key={product.id} className='border p-4 rounded-lg shadow'>
//             <img
//               src={product.image}
//               alt={product.title}
//               className='w-full h-40 object-cover mb-2 rounded'
//             />
//             <h2 className='font-semibold'>{product.title}</h2>
//             <p className='text-gray-600'>${product.price}</p>
//             <button
//               onClick={() => removeFromCart(product.id)} // <-- use context remove
//               className='mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }
