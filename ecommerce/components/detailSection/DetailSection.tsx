"use client"
import Image from "next/image"
import Button from "react-bootstrap/Button"
import Link from "next/link"
import { useCart } from "@/context/CartContext"

interface Product {
  id: number
  title: string
  price: number
  image1: string
  fullDescription: string
}

const Detail = ({ product }: { product: Product }) => {
  const { addToCart } = useCart()
  return (
    <div className='flex justify-center'>
      <div className='flex w-[60%] gap-[40px] border-1'>
        <div className='' id=''>
          <Image
            src={product.image1}
            alt='book cover'
            width={400}
            height={600}
            unoptimized
          />
        </div>
        <div className=''>
          <h3 className='product-title'>{product.title}</h3>
          <p className='product-description'>{product.fullDescription}</p>
          <h4 className='price'>
            current price: <span>${product.price}</span>
          </h4>
          <Button
            onClick={() => {
              addToCart(product)
            }}
            variant='primary'
            size='sm'
          >
            add to cart
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Detail
