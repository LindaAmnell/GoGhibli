import { NavLink } from "react-router-dom";
import { Movie } from "../models/movies";
import { useMovies } from "../data/store";
import "../css/favo.css";
import HeartFavorite from "./HeartFavorite";
const FavoriteMovies = () => {
  const { movieList, favorites, haveSeen, toggleHaveSeen } = useMovies(
    (state) => ({
      movieList: state.movieList,
      favorites: state.favorites,
      haveSeen: state.haveSeen,
      toggleHaveSeen: state.toggleHaveSeen,
    })
  );
  const favoriteMovies = movieList.filter(
    (movie: Movie) => favorites[movie.id]
  );

  return (
    <div className="favo-div">
      <div className="header-favo">
        <NavLink className="favorite-text" to="/">
          Back ⏪
        </NavLink>
        <h1 className="favo">Your Favorite Movies</h1>
      </div>
      {favoriteMovies.length === 0 ? (
        <p>Inga favoriter hittades.</p>
      ) : (
        <div className="movie-grid">
          {favoriteMovies.map((movie) => (
            <div className="list-movie" key={movie.id}>
              <div className="check-div">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={haveSeen[movie.id] || false}
                  onChange={() => toggleHaveSeen(movie.id)}
                />
                <p className="seen">seen movie</p>
                <HeartFavorite movie={movie} />
              </div>
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
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteMovies;
