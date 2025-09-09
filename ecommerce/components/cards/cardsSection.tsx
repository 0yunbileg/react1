import CardItem from "./cardItem"

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store", // always fresh
  })
  return res.json()
}

export default async function CardsSection() {
  const products = await getProducts()

  return (
    <div className='container grid gap-4 grid-cols-4'>
      {products.map((product: any) => (
        <CardItem key={product.id} {...product} />
      ))}
    </div>
  )
}
