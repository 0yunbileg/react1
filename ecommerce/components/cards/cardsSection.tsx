"use client"

import { useEffect, useState } from "react"
import CardItem from "./cardItem"

export default function CardsSection() {
  // const products = await getProducts()
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
    <div className='container grid gap-4 grid-cols-4'>
      {products.map((product) => (
        <CardItem key={product.id} product={product} />
      ))}
    </div>
  )
}
