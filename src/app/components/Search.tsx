import Image from "next/image";
import { Movie } from "../lib/definitions";

export const Search = (props:{
  movieArray: Movie[],
  setMoviesArray: (value: Movie[])=>void
}) => {
  const onChange = (searchText: string) =>{
    const filterdMovies  = props.movieArray.filter((movie)=>
     movie.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
    props.setMoviesArray(filterdMovies)
  }
  return (
    <form className="w-full h-[30px] flex items-center gap-3">
      <button>
        <Image
          src="/assets/icon-search.svg"
          width={32}
          height={32}
          alt="Home Icon"
          className="select-none "
        />
      </button>
      <input
        type="search"
        placeholder="Search for movies or TV series"
        className="w-full text-white/50 h-[30px] px-3 bg-transparent focus:outline-none"
        onChange={(e)=>onChange(e.target.value)}
      />
    </form>
  );
};
