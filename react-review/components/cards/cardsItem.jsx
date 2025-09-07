'use client'
import Image from "next/image";
import Link from "next/link";


const CardsItem = ({ image, title, shortDesc, id }) => {
    return (
        <div class="card w-[100%]">
            <Image src={image} class="card-img-top" alt="..." width={100} height={150} unoptimized />
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{shortDesc}</p>
                <Link href={`/products/${id}`} className="btn btn-primary">
                    View Product
                </Link>

            </div>
        </div>
    )
}

export default CardsItem;