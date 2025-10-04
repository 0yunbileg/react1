"use client";

import { useEffect, useState } from "react";
import PopularItem from "./popularItem";

interface Product {
  id: number;
  title: string;
  price: number;
  image1: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
}

const PopularSection = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    }
    loadProducts();
  }, []);

  return (
    <div className="container text-white !font-serif">
      <h1 className="text-center">Popular Products</h1>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mt-[60px]">
        {products.slice(0, 3).map((product) => (
          <PopularItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PopularSection;
