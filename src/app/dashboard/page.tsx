'use client'

import data from '../../../data.json'
import { Movie } from '../lib/definitions'
import { useEffect, useState } from "react";
import { MovieCard } from "../components/MovieCard";
import { Search } from "../components/Search";
import { MyCarousel } from '../components/Carousel';

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([])
  console.log(movies)

  useEffect(()=>{
    setMovies(data)
  },[])
  return (
    <main className=" bg-[#10141E] w-[100vw] h-[100vh] flex flex-col items-center">
        <Search movieArray={movies} setMoviesArray={setMovies}/>
        {/* <MyCarousel/> */}
        <div className="grid grid-cols-3 gap-4 w-[900px]">
          {movies.map((movie)=>(
            <MovieCard key={movie.title + '400'} movie={movie}/>
          ))}
        </div>
    </main>
  );
}
