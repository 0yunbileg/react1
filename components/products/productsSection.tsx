"use client";

import React from "react";
import CardItem from "../cards/cardItem";

interface Product {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  description: string;
  price: number;
  image: string;
  image1: string;
  category: string;
}

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
