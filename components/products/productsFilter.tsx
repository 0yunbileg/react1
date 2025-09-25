"use client";
import React, { useEffect, useState } from "react";
import ProductsSection from "./productsSection";

interface Product {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  price: number;
  image: string;
  image1: string;
  category: string;
}

const categories = [
  { key: "all", label: "All" },
  { key: "pastry", label: "Pastry" },
  { key: "cake", label: "Cake" },
  { key: "specialty", label: "Specialty" },
  { key: "cookie", label: "Cookie" },
  { key: "bread", label: "Bread" },
];

const ProductsFilter = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [active, setActive] = useState("all");

  useEffect(() => {
    async function loadProducts() {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    }
    loadProducts();
  }, []);

  const filtered =
    active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <div className="min-h-screen p-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-[#493628] text-white rounded-2xl shadow-lg p-4">
          <nav className="flex md:flex-col gap-3">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={`w-full px-4 py-2 rounded-xl text-left font-medium transition-all 
                ${
                  active === c.key
                    ? "!rounded-2xl bg-[#ab886d] text-white shadow-md"
                    : "!rounded-2xl bg-white text-[#493628] hover:text-[#ab886d]"
                }`}
              >
                {c.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Products Section */}
        <main className="bg-[#493628] flex-1 rounded-2xl shadow-lg p-6">
          <ProductsSection products={filtered} />
        </main>
      </div>
    </div>
  );
};

export default ProductsFilter;
