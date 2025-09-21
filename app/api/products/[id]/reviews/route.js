import { PRODUCTS_DB } from "@/lib/products"

export async function GET(request, { params }) {
    const { id } = params;
    const product = PRODUCTS_DB.find(p => p.id === id);
    if (!product) return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
    return Response.json(product.reviews || []);
}

export async function POST(request, { params }) {
    const { id } = params;
    const body = await request.json();
    const { userId, rating, comment } = body;

    const product = PRODUCTS_DB.find(p => p.id === id);
    if (!product) return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
    if (!userId || !rating) return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });

    const review = { userId, rating, comment };
    product.reviews.push(review);

    return new Response(JSON.stringify(review), { status: 201 });
}
