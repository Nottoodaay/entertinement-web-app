'use client'

import { useEffect, useState } from 'react'
import data from '../../../../data.json'
import { Movie } from '@/app/lib/definitions'
import { Search } from '@/app/components/Search'
import { MovieCard } from '@/app/components/MovieCard'

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(()=>{
    const movies = data.filter((movie)=>movie.category === "Movie")
    setMovies(movies)
  },[])
  return (
    <main className=" bg-[#10141E] w-[100vw] h-[100vh]">
        <Search movieArray={movies} setMoviesArray={setMovies}/>
        <div className="grid grid-cols-3 gap-4 w-[900px]">
          {movies.map((movie)=>(
            <MovieCard key={movie.title + 'dasdasdae'} movie={movie}/>
          ))}
        </div>
    </main>
  );
}
