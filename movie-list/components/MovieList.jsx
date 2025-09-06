import MovieItem from "./MovieItem";

const MovieList = ({ movies }) => {
    return (
        <div className="grid w-[90%] max-w-[1400px] grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mx-auto gap-6">
            {movies.map((movie) => <MovieItem movie={movie} />)}
        </div>
    )
}

export default MovieList;