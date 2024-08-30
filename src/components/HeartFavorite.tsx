import { Movie } from "../models/movies";
import { useMovies } from "../data/store";
import "../css/moveCard.css";

type Props = {
  movie: Movie;
};

const HeartFavorite = ({ movie }: Props) => {
  const { favorites, toggleFavorite } = useMovies((state) => ({
    favorites: state.favorites,
    toggleFavorite: state.toggleFavorite,
  }));

  return (
    <section>
      <p
        onClick={() => toggleFavorite(movie.id)}
        className="icon"
        style={{ cursor: "pointer" }}>
        {favorites[movie.id] ? "💛" : "🩶"}
      </p>
    </section>
  );
};

export default HeartFavorite;
