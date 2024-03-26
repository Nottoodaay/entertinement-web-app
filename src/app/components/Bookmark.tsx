import Image from "next/image"
import { Movie } from "../lib/definitions";
import { useStore } from "../store/store";

export const Bookmark = (props:{
    active: boolean,
    setActive: (value: boolean) => void,
    movie: Movie
}) => {
    const {addMovie, removeMovie, movies} = useStore()
    console.log(movies)
    const removeMovieFromStore = (movie: Movie) =>{
        props.setActive(!props.active)
        removeMovie(movie.title)
    }

    const addMovieToStore = (movie: Movie) =>{
        props.setActive(!props.active)
        addMovie(movie)
    }

    if (props.active) {
        return (
          <button
            onClick={()=> removeMovieFromStore(props.movie) }
            className="bg-[#10141E]/50 w-[32px] h-[32px] 
            rounded-full absolute right-5 top-5 flex justify-center items-center z-50"
          >
            <Image
              src={"/assets/icon-bookmark-full.svg"}
              width={11.67}
              height={14}
              alt={"bookMark"}
              className="select-none absolute"
            />
          </button>
        );
      }
    
      if (!props.active) {
        return (
          <button
            onClick={()=> addMovieToStore(props.movie)}
            className="bg-[#10141E]/50 w-[32px] h-[32px] rounded-full
             absolute right-5 top-5 flex justify-center items-center z-50"
          >
            <Image
              src={"/assets/icon-bookmark-empty.svg"}
              width={11.67}
              height={14}
              alt={"bookMark"}
              className="select-none absolute"
            />
          </button>
        );
      }
};

