'use client'
import { useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import MovieList from './MovieList';
import { movies } from '@/data/movies';
import Search from './search';

const CategoriesList = () => {
    const categories = [
        "Action",
        "Sci-Fi",
        "Thriller",
        "Drama",
        "Crime",
        "Animation",
        "Musical"
    ]

    const [results, setResults] = useState([]);

    return (
        <Tabs
            defaultActiveKey="all"
            id="uncontrolled-tab-example"
            className="my-5 pt-10"
        >
            <Tab eventKey="all" title="All" className="text-white">
                {<MovieList movies={movies} />}
            </Tab>

            {categories.map(category =>
                <Tab eventKey={category.toLocaleLowerCase()} title={category}>
                    {<MovieList movies={movies.filter(movie => movie.category === category)} />}
                </Tab>
            )}

            <Tab eventKey="search" title={<Search onResults={setResults} />}>
                <div className="px-8 py-4">
                    <MovieList movies={results} />
                </div>
            </Tab>
        </Tabs>
    )
}

export default CategoriesList;