'use client'
import { useState } from "react";
import Search from "@/components/search";
import Slider from "@/components/Slider";
import CategoriesList from "@/components/CategoriesList";
import MovieList from "@/components/MovieList";
import { movies } from "@/data/movies";

export default function Home() {
  const [results, setResults] = useState([]);

  return (
    <div className="bg-[#2E073F]">
      <Search onResults={setResults} />
      <div className="px-8 py-4">
        <MovieList movies={results} />
      </div>
      <Slider />
      <CategoriesList />
    </div>
  )
}
