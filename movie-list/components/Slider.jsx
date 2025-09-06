import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import { movies } from '@/data/movies';


const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='mt-2'>
            <Carousel
                className="w-[90%] max-w-[1400px] mx-auto rounded-2xl overflow-hidden shadow-xl"
                activeIndex={index}
                onSelect={handleSelect}
            >
                {movies.map((movie, i) => (
                    <Carousel.Item key={i} className="relative">
                        <img
                            className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                            src={movie.bannerImage}
                            alt={movie.name}
                        />
                        <Carousel.Caption className="absolute bottom-0 left-0 w-[70%] p-4">
                            <h3 className="text-lg md:text-2xl font-bold text-white">
                                {movie.name}
                            </h3>
                            <p className="text-sm md:text-base text-gray-200">
                                ⭐ IMDB: {movie.imdbScore}
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default Slider;