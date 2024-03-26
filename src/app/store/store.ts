import { create } from "zustand";
import { Movie } from "../lib/definitions";

type Store = {
    movies: Movie[]
    addMovie: (movie: Movie)=> void
    removeMovie: (movieName: string)=> void
}

export const useStore = create<Store>()((set) => ({
    movies: [],
    addMovie: (movie) => {
        set((state)=>({
            movies: [...state.movies, movie]
        }))
    },
    removeMovie: (movieName) => {
        set((state)=>({
            movies: state.movies.filter((movie)=>movie.title !== movieName)
        }))
    }
  }))