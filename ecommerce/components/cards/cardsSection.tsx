"use client"

import { useEffect, useState } from "react"
import CardItem from "./cardItem"
import { Button } from "react-bootstrap"
import { useRouter } from "next/navigation"

export default function CardsSection() {
  const [products, setProducts] = useState<any[]>([])
  const router = useRouter()

  useEffect(() => {
    async function loadProducts() {
      const res = await fetch("/api/products")
      const data = await res.json()
      setProducts(data)
    }
    loadProducts()
  }, [])

  return (
    <div className='container text-white mb-[100px] mt-[60px]'>
      <h1 className='!font-serif text-center'>Products</h1>
      <div className='grid gap-4 grid-cols-4 mt-[60px]'>
        {products.slice(0, 4).map((product) => (
          <CardItem key={product.id} product={product} />
        ))}
      </div>
      <div className='flex w-[100%] justify-center'>
        <Button
          onClick={() => router.push("/products")}
          className='mt-4 !px-[50px] !rounded-full !bg-[#493628] !border-none !transition hover:scale-115'
        >
          See more
        </Button>
      </div>
    </div>
  )
}
