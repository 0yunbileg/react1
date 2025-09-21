"use client"

import React from "react"
import CardItem from "../cards/cardItem"

interface Product {
  id: number
  title: string
  description: string
  price: number
  image: string
  category: string
}

interface ProductsSectionProps {
  products: Product[]
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ products }) => {
  return (
    <div>
      <div className="container text-white mb-[100px] mt-[60px]">
        <div className="grid gap-4 grid-cols-4 mt-[60px]">
          {products.map((product) => (
            <CardItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductsSection
