"use client"

import { useEffect, useState } from "react"
import PopularItem from "./popularItem"

const PopularSection = () => {
  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    async function loadProducts() {
      const res = await fetch("/api/products")
      const data = await res.json()
      setProducts(data)
    }
    loadProducts()
  }, [])

  return (
    <div className='container text-white !font-serif'>
      <h1 className='text-center'>Popular Products</h1>
      <div className='flex justify-between mt-[60px]'>
        {products.slice(0, 3).map((product) => (
          <PopularItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default PopularSection
