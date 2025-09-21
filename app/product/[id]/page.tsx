import Detail from "@/components/detailSection/DetailSection"

interface ProductProps {
  params: { id: string }
}

async function getProducts() {
  const res = await fetch("/api/products", { cache: "no-store" })
  if (!res.ok) throw new Error("Failed to fetch products")
  return res.json()
}

export default async function ProductPage({ params }: ProductProps) {
  const { id } = params
  const products = await getProducts()
  const product = products.find((p: { id: number }) => p.id === Number(id))

  if (!product) return <div>Product not found</div>

  return <Detail product={product} />
}
