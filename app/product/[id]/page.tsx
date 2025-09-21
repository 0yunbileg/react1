import Detail from "@/components/detailSection/DetailSection"
import { notFound } from "next/navigation"

interface ProductProps {
  params: { id: string }
}

async function getProducts() {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000"

  const res = await fetch(`${baseUrl}/api/products`, { cache: "no-store" })
  if (!res.ok) throw new Error("Failed to fetch products")
  return res.json()
}

export default async function ProductPage({ params }: ProductProps) {
  const { id } = params
  const products = await getProducts()
  const product = products.find((p: { id: number }) => p.id === Number(id))

  if (!product) notFound() // renders Next.js 404 page

  return <Detail product={product} />
}
