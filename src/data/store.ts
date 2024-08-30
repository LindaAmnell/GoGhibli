import { create } from "zustand";
import { Movie } from "../models/movies";

interface MovieStore {
  movieList: Movie[];
  setMovieList: (movieList: Movie[]) => void;
  favorites: { [key: string]: boolean };
  toggleFavorite: (movieId: string) => void;
  haveSeen: { [key: string]: boolean };
  toggleHaveSeen: (movieId: string) => void;
}

const useMovies = create<MovieStore>((set) => ({
  movieList: [],
  setMovieList: (movieList) => set({ movieList }),
  favorites: {},
  toggleFavorite: (movieId) =>
    set((state) => ({
      favorites: {
        ...state.favorites,
        [movieId]: !state.favorites[movieId],
      },
    })),

  haveSeen: {},
  toggleHaveSeen: (movieId) =>
    set((state) => ({
      haveSeen: {
        ...state.haveSeen,
        [movieId]: !state.haveSeen[movieId],
      },
    })),
}));

export { useMovies };
