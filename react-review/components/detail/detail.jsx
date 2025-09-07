'use client'
import Image from "next/image";
import Link from "next/link";


const Detail = ({ image, title, fullDesc, id, price }) => {
    return (
        <div className="flex justify-center">
            <div class="flex w-[60%] gap-[40px] border-1">
                <div className="" id="">
                    <Image src={image} alt="book cover" width={400} height={600} unoptimized />
                </div>
                <div class="">
                    <h3 class="product-title">{title}</h3>
                    <p class="product-description">{fullDesc}</p>
                    <h4 class="price">current price: <span>${price}</span></h4>
                    <button class="add-to-cart btn btn-primary" type="button">add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Detail;