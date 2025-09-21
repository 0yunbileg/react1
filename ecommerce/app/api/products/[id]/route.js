import { PRODUCTS_DB } from "@/lib/products"

export async function GET(request, { params }) {
  const { id } = params;
  const product = PRODUCTS_DB.find(p => p.id === id);
  if (!product) return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
  return Response.json(product);
}
