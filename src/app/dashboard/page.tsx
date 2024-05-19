"use client";

import data from "../../../data.json";
import { Movie } from "../lib/definitions";
import { useEffect, useState } from "react";
import { MovieCard } from "../components/MovieCard";
import { Search } from "../components/Search";
import { MyCarousel } from "../components/Carousel";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    setMovies(data);
  }, []);
  return (
    <main className=" bg-[#10141E] sm:w-5/6  w-3/5 flex flex-col">
      <Search movieArray={movies} setMoviesArray={setMovies} />
      <MyCarousel />
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 w-auto">
        {movies.map((movie) => (
          <MovieCard key={movie.title + "400"} movie={movie} />
        ))}
      </div>
    </main>
  );
}
