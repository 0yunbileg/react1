'use client'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MovieItem = ({ movie }) => {
    return (
        <>
            <Card className=" text-white relative overflow-hidden group transition-all duration-600 hover:scale-110">
                <Card.Img src={movie.coverImage} alt="Card image" className="w-full h-auto z-0" />

                <Card.ImgOverlay
                    className="absolute bg-black/70 opacity-1 transition-all duration-600 flex flex-col justify-center items-center text-center z-2 group-hover:opacity-100"
                >

                    <Card.Title className="text-lg md:text-xl font-bold">{movie.name}</Card.Title>
                    <Card.Text className="text-sm md:text-base">{movie.description}</Card.Text>
                    <Button variant="light" className="mt-2">Details</Button>
                </Card.ImgOverlay>
            </Card>

        </>
    )
}

export default MovieItem;