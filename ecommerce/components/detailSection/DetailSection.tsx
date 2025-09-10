"use client"
import Image from "next/image"
import Link from "next/link"

type DetailsItemProps = {
  id: number
  title: string
  fullDescription: string
  price: number
  image: string
}

const Detail = ({
  id,
  title,
  fullDescription,
  price,
  image,
}: DetailsItemProps) => {
  return (
    <div className='flex justify-center'>
      <div className='flex w-[60%] gap-[40px] border-1'>
        <div className='' id=''>
          <Image
            src={image}
            alt='book cover'
            width={400}
            height={600}
            unoptimized
          />
        </div>
        <div className=''>
          <h3 className='product-title'>{title}</h3>
          <p className='product-description'>{fullDescription}</p>
          <h4 className='price'>
            current price: <span>${price}</span>
          </h4>
          <button className='add-to-cart btn btn-primary' type='button'>
            add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Detail
