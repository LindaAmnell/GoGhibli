import { Movie } from "../models/movies";
import "../css/moveCard.css";
import HeartFavorite from "./HeartFavorite";

type Props = {
  MovieList: Movie[];
};

const RenderMovies = ({ MovieList = [] }: Props) => {
  return (
    <div className="movie-grid">
      {MovieList.map((movie) => (
        <div className="list-movie" key={movie.id}>
          <h3>{movie.title}</h3>
          <img className="picture" src={movie.image} alt="" />
          <h4>About the movie:</h4>
          <p>{movie.description}</p>
          <div className="info-div">
            <div className="director">
              <p>Director:</p>
              {movie.director}
            </div>
            <div>
              <p> Release date: </p>
              {movie.release_date}
            </div>
            <HeartFavorite movie={movie} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RenderMovies;
