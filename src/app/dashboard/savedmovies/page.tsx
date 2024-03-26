'use client'

import { useEffect, useState } from 'react'
import data from '../../../../data.json'
import { Movie } from '@/app/lib/definitions'
import { MovieCard } from '@/app/components/MovieCard'
import { useStore } from '@/app/store/store'

export default function Home() {
  const { movies } = useStore() 

  return (
    <main className=" bg-[#10141E] w-[100vw] h-[100vh]">
        <div className="grid grid-cols-3 gap-4 w-[900px]">
          {movies.map((movie)=>(
            <MovieCard key={movie.title + 'dfasfas'} movie={movie}/>
          ))}
        </div>
    </main>
  );
}
