"use client";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import { useCart, Product } from "@/context/CartContext";

const CardItem = ({ product }: { product: Product }) => {
  const [hovered, setHovered] = useState(false);
  const { cart, addToCart, updateQuantity } = useCart();

  const cartItem = cart.find((item) => item.id === product.id);

  return (
    <div className="w-[100%] flex justify-center">
      <Card
        className="!rounded-3xl w-[80%] md:w-[100%] relative overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative !h-[100%] !bg-gray-50 text-white">
          <Card.Img
            variant="top"
            src={product.image1}
            className="!w-[100%] !aspect-1/1"
          />

          <div
            className="!transition"
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.6)",
              color: "white",
              display: "flex",
              opacity: hovered ? 1 : 0,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem",
              textAlign: "center",
            }}
          >
            <p className="mb-3">{product.shortDescription}</p>
            <div className="d-flex gap-2">
              <Link
                href={`/product/${product.id}`}
                className="btn btn-light !px-4 !rounded-full"
              >
                Details
              </Link>
              <Button
                onClick={() => addToCart(product)}
                variant="light"
                size="sm"
                className="!rounded-full"
              >
                <FiShoppingCart />
              </Button>
            </div>
          </div>
        </div>

        <Card.Body className="bg-gray-50">
          <Card.Title>{product.title}</Card.Title>
          <div className="flex justify-between items-center mt-4">
            <p className="m-0">${product.price}</p>
            <div className="flex items-center gap-3">
              {!cartItem ? (
                <Button
                  onClick={() => addToCart(product)}
                  className="!bg-gray-100 !text-black !border-none !px-6 !py-2 rounded-xl hover:!bg-gray-300 transition"
                >
                  Add to Cart
                </Button>
              ) : (
                <div className="flex items-center gap-3">
                  <Button
                    className="!bg-gray-100 hover:!bg-gray-300 !border-none !text-black"
                    size="sm"
                    onClick={() =>
                      updateQuantity(product.id, cartItem.quantity - 1)
                    }
                    disabled={cartItem.quantity <= 1}
                  >
                    -
                  </Button>
                  <span className="bg-gray-100 px-3 py-1 rounded-md text-black font-medium">
                    {cartItem.quantity}
                  </span>
                  <Button
                    className="!bg-gray-100 hover:!bg-gray-300 !border-none !text-black"
                    size="sm"
                    onClick={() =>
                      updateQuantity(product.id, cartItem.quantity + 1)
                    }
                  >
                    +
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardItem;
