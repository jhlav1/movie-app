import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <Link to={`/movies/${movie.imdbID}`}>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "/placeholder-movie.png"
          }
          alt={movie.Title}
        />

        <h2>{movie.Title}</h2>
        <p>År: {movie.Year}</p>
      </Link>
    </article>
  );
}

export default MovieCard;
