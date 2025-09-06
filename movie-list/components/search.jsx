"use client";
import { useState } from "react";
import { movies } from "@/data/movies";

const Search = ({ onResults }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
        if (searchQuery.trim() === "") {
            alert("Please enter a search term!");
            return;
        }

        const filtered = movies.filter((movie) =>
            movie.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        onResults(filtered);
    };

    return (
        <>
            <div className="d-flex">
                <input
                    type="text"
                    className="form-control me-2"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
        </>
    );
}

export default Search;
