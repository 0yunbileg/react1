"use client";

import React from "react";
import CardItem from "../cards/cardItem";
import { Product } from "@/context/CartContext";

interface ProductsSectionProps {
  products: Product[];
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ products }) => {
  return (
    <div className="container text-white p-0 grid gap-4 md:grid-cols-4 ">
      {products.map((product) => (
        <CardItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsSection;
