import Image from "next/image"
import Detail from "@/components/detailSection/DetailSection"

interface ProductProps {
  params: { id: number }
}

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store", // always fresh
  })
  return res.json()
}

export default async function Home({ params }: ProductProps) {
  const products = await getProducts()
  const product = products.find((p: { id: number }) => p.id == params.id)
  console.log("desc", product.fullDescription)
  return (
    <div> 
      <Detail
        image={product.image}
        title={product.title}
        fullDescription={product.fullDescription}
        id={product.id}
        price={product.price}
      />
    </div>
  )
}
