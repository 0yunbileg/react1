"use client";

import React from "react";
import { Button } from "react-bootstrap";
import Image from "next/image";

interface CartItemProps {
  id: number;
  title: string;
  price: number;
  image1: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

const CartItem: React.FC<CartItemProps> = ({
  title,
  price,
  image1,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  return (
    <div className="flex gap-4 bg-[#493628] text-[#fffbe9] rounded-xl p-3 shadow-md mb-4 border border-[#493628]/30">
      <div>
        <Image
          className="rounded-2xl"
          src={image1}
          alt={title}
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col justify-between">
        <p className="font-semibold !text-2xl">{title}</p>
        <div className="flex items-center gap-3 mb-3">
          <span className="">${price.toFixed(2)}</span>
          <Button
            variant="light"
            size="sm"
            onClick={onDecrease}
            disabled={quantity <= 1}
          >
            -
          </Button>
          <span className="bg-white px-2 py-1 rounded-md text-black font-medium">
            {quantity} pcs
          </span>
          <Button variant="light" size="sm" onClick={onIncrease}>
            +
          </Button>
          <span className="font-bold text-lg">
            ${(price * quantity).toFixed(2)}
          </span>
          <Button
            variant="ghost"
            size="sm"
            className="rounded-lg"
            onClick={onRemove}
          >
            x
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
