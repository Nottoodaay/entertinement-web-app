import React, { useState } from "react";
import Image from "next/image";
import { Movie } from "../lib/definitions";
import { Bookmark } from "./Bookmark";
import { Smartphone } from "lucide-react";

export const MovieCard = (props: { movie: Movie }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="flex items-center justify-center">
      <div className="w-[280px] h-[226px]  relative select-none cursor-pointer">
        <Bookmark active={active} setActive={setActive} movie={props.movie} />
        <Image
          src={`${props.movie.thumbnail.regular?.large}`}
          width={280}
          height={174}
          layout="responsive"
          alt={props.movie.title}
          className="select-none rounded-xl"
        />
        <div className="text-white/75 flex items-center gap-1 text-sm">
          <span>{props.movie.year}</span>
          <div className="w-[3px] h-[3px] bg-[#FFFFFF]/50 rounded-full " />
          <span className="uppercase">{props.movie.category}</span>
          <div className="w-[3px] h-[3px] bg-[#FFFFFF]/50 rounded-full " />
          <span>{props.movie.year}</span>
        </div>
        <h4 className="text-white text-[18px]">{props.movie.title}</h4>
      </div>
    </div>
  );
};
