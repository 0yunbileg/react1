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

const PopularItem = ({ product }: { product: Product }) => {
  const [hovered, setHovered] = useState(false)
  const { addToCart, cart } = useCart()

  return (
    <Card
      className='!rounded-3xl w-[24rem] !font-serif relative overflow-hidden !bg-gray-50'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className='relative '>
        <Card.Img
          variant='top'
          src={product.image1}
          className='bg-gray-50 !w-[100%] !aspect-1/1'
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
            <Link href={`/product/${product.id}`} className='btn btn-light'>
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

      <Card.Body className='text-center !text-[#493628]'>
        <Card.Title className='!text-2xl !font-bold'>
          {product.title}
        </Card.Title>
        <Card.Text className='text-xl px-7'>
          {product.shortDescription}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default PopularItem
