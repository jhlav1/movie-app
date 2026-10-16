import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import { getMovieDetails } from "../services/movieApi";

function MovieDetails({ savedMovies, onSaveMovie, onRemoveMovie }) {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const isSaved = savedMovies.some(
  (savedMovie) => savedMovie.imdbID === id
  );



  useEffect(() => {
    async function loadMovie() {
      setLoading(true);
      setError("");
      setMovie(null);

      try {
        const result = await getMovieDetails(id);
        setMovie(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadMovie();
  }, [id]);

  return (
    <main>
      <Header />

      <section className="movie-details">
        {loading && <p>Hämtar filminformation...</p>}

        {error && <p className="error-message">{error}</p>}

        {movie && (
          <article className="movie-details__content">
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : ""}
              alt={`Affisch för ${movie.Title}`}
            />

            <div>
              <h1>{movie.Title}</h1>

              <p><strong>År:</strong> {movie.Year}</p>
              <p><strong>Genre:</strong> {movie.Genre}</p>
              <p><strong>Regissör:</strong> {movie.Director}</p>
              <p><strong>Skådespelare:</strong> {movie.Actors}</p>
              <p><strong>Betyg:</strong> {movie.imdbRating}</p>

              <h2>Handling</h2>
              <p>{movie.Plot}</p>

              <button
                type="button"
                onClick={() => {
                    if (isSaved) {
                        onRemoveMovie(movie.imdbID);
                    } else {
                        onSaveMovie(movie);
                    }
                }}
                >
                    {isSaved ? "Ta bort från sparade filmer" : "Spara film"}
              </button>

              <Link to="/movies">Tillbaka till filmerna</Link>
            </div>
          </article>
        )}
      </section>
    </main>
  );
}

export default MovieDetails;
