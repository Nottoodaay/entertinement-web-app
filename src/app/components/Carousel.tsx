"use client";

import React from "react";
import movies from "../../../data.json";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CarouselCard from "./CarouselCard";

export const MyCarousel = () => {
  const trendingMovies = movies.filter((movie) => movie.isTrending);
  return (
    <div>
      <Swiper
        className="w-[100vw] h-[285px]"
        modules={[Navigation]}
        spaceBetween={4}
        breakpoints={{
          650: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 2.5,
          },
          1200: {
            slidesPerView: 3.25,
          },
        }}
      >
        {trendingMovies.map((result, index) => (
          <SwiperSlide className=" m-6" key={index}>
            <CarouselCard data={result} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
