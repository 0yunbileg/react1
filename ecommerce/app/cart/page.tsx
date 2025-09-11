"use client"
import { useCart } from "@/context/CartContext"
import { PRODUCTS_DB } from "@/lib/products"

export default function Home() {
    const { cart, removeFromCart, clearCart } = useCart()
    console.log("Cart IDs:", cart)
    return (
      <div>
        <h2>Your Cart</h2>
        {cart.map(item => {
          const product = PRODUCTS_DB.find(p => p.id === item.productId)
          return (
            <div key={item.productId}>
              {product?.title} × {item.quantity}
              <button onClick={() => removeFromCart(item.productId)}>Remove</button>
            </div>
          )
        })}
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    )
}
