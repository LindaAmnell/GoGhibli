import { useState, useEffect } from "react";
import { getMovies } from "../data/getMovies";
import RenderMovies from "./RenderMovies";
import { Movie } from "../models/movies";
import { useMovies } from "../data/store";
import { validateMovies } from "../data/validate";

const Movies = () => {
  const { setMovieList, movieList } = useMovies((state) => ({
    setMovieList: state.setMovieList,
    movieList: state.movieList,
  }));

  const [searchFilter, setSearchFilter] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const handleGet = async () => {
    try {
      const result = validateMovies(await getMovies());
      if (result.success) {
        setMovieList(result.value);
      } else {
        setMessage(result.error);
      }
    } catch (error) {
      const e: Error = error as Error;
      console.log("API failed with error: ", e.message);
      setMessage("Something went wrong. Please try again later");
    }
  };
  useEffect(() => {
    handleGet();
  }, []);

  const filteredMovie: Movie[] = movieList
    .filter((m) => m.title.toLowerCase().includes(searchFilter.toLowerCase()))
    .sort((a, b) => -parseInt(b.release_date) - parseInt(a.release_date));

  console.log(filteredMovie);

  return (
    <div>
      <div className="movie-div">
        {message && <p> {message} </p>}
        {/* <button onClick={handleGet}>Get Movies</button> */}
        <input
          type="text"
          placeholder="Search Movie"
          onChange={(event) => setSearchFilter(event.target.value)}
          value={searchFilter}
        />
        <RenderMovies MovieList={filteredMovie} />
      </div>
    </div>
  );
};

export default Movies;
