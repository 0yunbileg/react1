"use client";

import { useCart } from "@/context/CartContext";
import CartItem from "@/components/cart/cartItem";
import { Button } from "react-bootstrap";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCartItems } = useCart();
  console.log("Cart contents:", cart[0]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#ab886d]">
      <div className="mt-[60px] p-8 rounded-2xl w-full max-w-2xl text-[#fffbe9]">
        <h1 className="text-2xl font-bold mb-6 text-center">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-center text-sm">🛒 Your cart is empty</p>
        ) : (
          <>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
                image1={item.image1}
                shortDescription={item.shortDescription}
                fullDescription={item.fullDescription}
                category={item.category}
                onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
                onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
                onRemove={() => removeFromCart(item.id)}
              />
            ))}

            <div className="flex justify-between items-center mt-6">
              <p className="text-lg font-semibold">
                Total: $
                {cart
                  .reduce((sum, item) => sum + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
              <Button
                variant="secondary"
                onClick={clearCartItems}
                className="rounded-xl bg-[#ab886d] border-none hover:bg-[#a27b5c]"
              >
                Clear Cart
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
