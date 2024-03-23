import React from 'react'
import { Movie } from '../lib/definitions'
import Image from 'next/image'

export const TrendingCard = (props:{movie: Movie}) => {
  return (
    <div className=' w-[430px] h-[230px]'>
      <Image  
      src={`${props.movie.thumbnail.trending?.small}`}
      alt={props.movie.title} 
      width={430} 
      height={230}/>
    </div>
  )
}
