"use client";

import Image from "next/image";
import { Button } from "react-bootstrap";
import { useCart } from "@/context/CartContext";
import { Product } from "@/context/CartContext";

const Detail = ({ product }: { product: Product }) => {
  const { cart, addToCart, updateQuantity, removeFromCart } = useCart();

  const cartItem = cart.find((item) => item.id === product.id);

  return (
    <div className="flex justify-center py-12 bg-[#fff8f0]">
      <div className="flex flex-col md:flex-row w-[90%] md:w-[70%] gap-10 bg-white rounded-2xl shadow-lg p-6">
        {/* Product Image */}
        <div className="flex-1 flex items-center justify-center">
          <Image
            src={product.image1}
            alt={product.title}
            width={400}
            height={400}
            className="rounded-xl object-cover"
            unoptimized
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col gap-4">
          <span className="text-sm uppercase tracking-wide text-[#b36b47] font-semibold">
            {product.category}
          </span>
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-gray-600">{product.shortDescription}</p>
          <p className="text-gray-500 leading-relaxed">
            {product.fullDescription}
          </p>

          <h2 className="text-2xl font-semibold text-[#d27d2d]">
            ${product.price.toFixed(2)}
          </h2>

          {/* Cart Controls */}
          <div className="mt-4 flex items-center gap-4">
            {!cartItem ? (
              <Button
                onClick={() => addToCart(product)}
                variant="warning"
                className="!bg-[#d27d2d] !text-white !px-6 !py-2 rounded-xl shadow-md hover:!bg-[#b36b47] transition"
              >
                Add to Cart
              </Button>
            ) : (
              <div className="flex items-center gap-3">
                <Button
                  variant="light"
                  size="sm"
                  onClick={() =>
                    updateQuantity(product.id, cartItem.quantity - 1)
                  }
                  disabled={cartItem.quantity <= 1}
                >
                  -
                </Button>
                <span className="bg-gray-100 px-3 py-1 rounded-md text-black font-medium">
                  {cartItem.quantity} pcs
                </span>
                <Button
                  variant="light"
                  size="sm"
                  onClick={() =>
                    updateQuantity(product.id, cartItem.quantity + 1)
                  }
                >
                  +
                </Button>
                <span className="font-bold text-lg text-[#493628]">
                  ${(product.price * cartItem.quantity).toFixed(2)}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="rounded-lg text-red-500"
                  onClick={() => removeFromCart(product.id)}
                >
                  x
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
