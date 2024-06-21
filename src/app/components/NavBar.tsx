"use client";

import React from "react";
import Image from "next/image";

import logo from "/public/assets/logo.svg";
import home from "/public/assets/icon-nav-home.svg";
import movies from "/public/assets/icon-nav-movies.svg";
import tvSeries from "/public/assets/icon-nav-tv-series.svg";
import bookMark from "/public/assets/icon-nav-bookmark.svg";
import avatar from "/public/assets/image-avatar.png";

import Link from "next/link";

export const NavBar = () => {
  return (
    <div
      className="w-full lg:w-[96px] h-[56px] lg:h-[700px]
     bg-[#161D2F] flex lg:flex-col items-center justify-between m-4 p-4"
    >
      <Image
        src={logo}
        alt="logo"
        className=" cursor-pointer w-[25px] md:w-[32px] h-[20px] md:h-[26px]"
      />
      <div className=" flex lg:flex-col gap-[24px]">
        <Link href={"/dashboard"}>
          <Image src={home} alt="home" className=" cursor-pointer" />
        </Link>
        <Link href={"/dashboard/movies"}>
          <Image src={movies} alt="movie" className=" cursor-pointer" />
        </Link>
        <Link href={"/dashboard/tvseries"}>
          <Image src={tvSeries} alt="tv" className=" cursor-pointer" />
        </Link>
        <Link href={"/dashboard/savedmovies"}>
          <Image src={bookMark} alt="bookmark" className=" cursor-pointer" />
        </Link>
      </div>
      <Image
        src={avatar}
        alt="avatar"
        className=" cursor-pointer w-[32px] md:w-[40px] h-[32px] md:h-[40px]"
      />
    </div>
  );
};
