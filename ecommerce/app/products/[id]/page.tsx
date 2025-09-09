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
  console.log(products)
  //   const product = products.find(({ item }: any) => item.id == params.id)
  return (
    <div>
      detail
      {/* <Detail 
                image={product.image}
                title={product.title}
                fullDesc={product.fullDescription}
                id={product.id}
                price={product.price} /> */}
    </div>
  )
}
