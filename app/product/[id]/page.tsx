import Detail from "@/components/detailSection/DetailSection"
import { notFound } from "next/navigation"
import { PRODUCTS_DB } from "@/lib/products" // adjust path if needed

interface ProductProps {
  params: { id: string }
}

export default async function ProductPage({ params }: ProductProps) {
  const { id } = params

  // Convert id to number to match your PRODUCTS_DB
  const product = PRODUCTS_DB.find((p) => p.id === Number(id))

  if (!product) notFound() // Next.js 404 page if product not found

  return <Detail product={product} />
}
