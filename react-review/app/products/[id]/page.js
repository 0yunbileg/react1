import Image from "next/image";
import Detail from "@/components/detail/detail";
import books_data from "@/public/data/books_data";

export default function Home({ params }) {
    const product = books_data.find(book => book.id == params.id)
    return (
        <div>
            <Detail
                image={product.image}
                title={product.title}
                fullDesc={product.fullDescription}
                id={product.id}
                price={product.price} />
        </div>
    );
}
