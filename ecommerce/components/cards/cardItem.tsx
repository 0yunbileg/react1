"use client"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { useState } from "react"
import { FiShoppingCart } from "react-icons/fi"
import Link from "next/link"
import { useCart } from "@/context/CartContext"

type CardItemProps = {
  id: number
  title: string
  shortDescription: string
  price: number
  image: string
}

const CardItem = ({
  id,
  title,
  shortDescription,
  price,
  image,
}: CardItemProps) => {
  const [hovered, setHovered] = useState(false)
  const { addToCart } = useCart()

  return (
    <Card
      className='w-[18rem] relative overflow-hidden'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className='relative'>
        <Card.Img variant='top' src={image} className='bg-[#F7CFD8]' />

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
          <p className='mb-3'>{shortDescription}</p>
          <div className='d-flex gap-2'>
            <Link href={`/products/${id}`} className='btn btn-light'>
              Details
            </Link>
            <Button onClick={() => addToCart(id)} variant='light' size='sm'>
              <FiShoppingCart />
            </Button>
          </div>
        </div>
      </div>

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>${price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardItem
