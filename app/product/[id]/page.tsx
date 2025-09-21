import Image from "next/image"
import Detail from "@/components/detailSection/DetailSection"

interface ProductProps {
  params: Promise<{ id: string }> // 👈 params is async, id is a string
}

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store", // always fetch fresh
  })
  return res.json()
}

export default async function Home({ params }: ProductProps) {
  const { id } = await params // 👈 await here
  const products = await getProducts()
  const product = products.find((p: { id: number }) => p.id === Number(id))

  if (!product) {
    return <div>Product not found</div>
  }

  console.log("desc", product.fullDescription)

  return (
    <div>
      <Detail product={product} />
    </div>
  )
}
