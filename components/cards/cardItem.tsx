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
  image1: string
  shortDescription: string
}

const CardItem = ({ product }: { product: Product }) => {
  const [hovered, setHovered] = useState(false)
  const { addToCart, cart } = useCart()

  return (
    <Card
      className='!rounded-3xl w-[100%] relative overflow-hidden'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className='relative !h-[100%] !bg-[#F7DCB9] text-white'>
        <Card.Img
          variant='top'
          src={product.image1}
          className='!w-[100%] !aspect-1/1'
        />

        <div
          className='!transition '
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            color: "white",
            display: "flex",
            opacity: hovered ? 100 : 0,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
            textAlign: "center",
          }}
        >
          <p className='mb-3'>{product.shortDescription}</p>
          <div className='d-flex gap-2'>
            <Link
              href={`/product/${product.id}`}
              className='btn btn-light !px-4 !rounded-full'
            >
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
              className='!rounded-full '
            >
              <FiShoppingCart />
            </Button>
          </div>
        </div>
      </div>
      <Card.Body className='bg-gray-50'>
        <Card.Title>{product.title}</Card.Title>
        <div className='flex justify-between mt-4'>
          <Card.Text>${product.price}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  )
}

export default CardItem
