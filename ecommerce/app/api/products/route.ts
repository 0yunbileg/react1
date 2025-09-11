import { PRODUCTS_DB } from "@/lib/products"
import { NextResponse } from "next/server"

export async function GET() {
  const list = PRODUCTS_DB.map((p) => ({
    id: p.id,
    title: p.title,
    shortDescription: p.shortDescription,
    fullDescription: p.fullDescription,
    price: p.price,
    image: p.image,
  }))
  return NextResponse.json(list)
}
