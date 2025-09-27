"use client";

import React from "react";
import CardItem from "../cards/cardItem";
import { Product } from "@/context/CartContext";

interface ProductsSectionProps {
  products: Product[];
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ products }) => {
  return (
    <div className="bg-[#493628] container text-white mb-[100px]">
      <div className="grid gap-4 grid-cols-4 ">
        {products.map((product) => (
          <CardItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
