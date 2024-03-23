"use client"

import React from 'react'
import  movies  from '../../../data.json';
import { Card, CardContent } from "@/components/ui/card"
 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"


export const MyCarousel = () => {
    const trendingMovies = movies.filter((movie)=>movie.isTrending);
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[100vw] max-w-sm"
    >
      <CarouselContent>
        {trendingMovies.map((movie) => (
          <CarouselItem key={movie.thumbnail + '100'} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{movie.year}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}