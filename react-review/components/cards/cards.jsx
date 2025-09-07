'use client'
import Image from "next/image";
import CardsItem from "./cardsItem";
import books_data from "@/public/data/books_data";

const Cards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-[100%] max-w-[1400px] gap-4">
            {books_data.map(data => <CardsItem
                image={data.image}
                title={data.title}
                shortDesc={data.shortDescription}
                id={data.id} />)}
        </div>
    )
}

export default Cards;