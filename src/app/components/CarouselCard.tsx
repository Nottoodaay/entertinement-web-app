"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Movie } from "../lib/definitions";

type PropsType = {
  data: Movie;
};

const CarouselCard = ({ data }: PropsType) => {
  return (
    <div className="w-auto h-[230px] relative flex items-end cursor-pointer">
      <div className="bg-transparent w-full h-full absolute z-50 select-none" />
      <Image
        src={`${data.thumbnail.regular?.large}`}
        width={470}
        height={230}
        layout="responsive"
        alt={data.title}
        className="select-none absolute rounded-xl"
      />
      <div className="relative z-30 py-2 px-6 flex flex-col gap-3">
        <div className="flex items-center gap-3 text-[#FFFFFF]/75 text-[15px]">
          {data.year}
          <div className="w-[3px] h-[3px] bg-[#FFFFFF]/50 rounded-full " />
          <span className="uppercase">{data.category}</span>
          <div className="w-[3px] h-[3px] bg-[#FFFFFF]/50 rounded-full" />
          {data.year}
        </div>
        <h3 className="text-white text-[24px]">{data.title}</h3>
      </div>
    </div>
  );
};

export default CarouselCard;
