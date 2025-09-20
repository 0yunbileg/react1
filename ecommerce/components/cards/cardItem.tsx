"use client"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { useState } from "react"
import { FiShoppingCart } from "react-icons/fi"
import Link from "next/link"
import { useCart } from "@/context/CartContext"

interface Product {
  id: number
  title: string
  price: number
  image: string
  shortDescription: string
}

const CardItem = ({ product }: { product: any }) => {
  const [hovered, setHovered] = useState(false)
  const { addToCart, cart } = useCart()

  return (
    <Card
      className='w-[18rem] relative overflow-hidden'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className='relative'>
        <Card.Img
          variant='top'
          src={product.image}
          className='p-[26px] bg-[#D6C0B3]'
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            color: "white",
            display: hovered ? "flex" : "none",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
            textAlign: "center",
          }}
        >
          <p className='mb-3'>{product.shortDescription}</p>
          <div className='d-flex gap-2'>
            <Link href={`/products/${product.id}`} className='btn btn-light'>
              Details
            </Link>
            <Button
              onClick={() => {
                addToCart({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                })
              }}
              variant='light'
              size='sm'
            >
              <FiShoppingCart />
            </Button>
          </div>
        </div>
      </div>

      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardItem
