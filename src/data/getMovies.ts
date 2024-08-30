import { Movie } from "../models/movies";

async function getMovies(): Promise<Movie[]> {
  const response: Response = await fetch("https://ghibliapi.vercel.app/films");
  const data: Movie[] = await response.json();
  return data;
}

export { getMovies };
