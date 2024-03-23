'use client'
import React from 'react'

import data from '../../../data.json'
import { Movie } from '../lib/definitions'
import { TrendingCard } from './TrendingCard'

export const TrendingMovies = () => {
  const movies : Movie[] = data
  const trendingMovies = movies.filter((movie)=> movie.isTrending !== false)
  return (
    <div className=' flex gap-[40px]'>
        {trendingMovies.map((movie)=>(
          <TrendingCard key={movie.title + 3} movie={movie}/>
        ))}
    </div>
  )
}
