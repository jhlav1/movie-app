/*import Header from "../components/Header";

function Movies() {
  return (
    <main>
      <Header />

      <h1>Filmkatalog</h1>
      <p>Här ska vi söka efter och visa filmer.</p>
    </main>
  );
}

export default Movies;*/

import { useState } from "react";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import { searchMovies } from "../services/movieApi";

function Movies() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch(event) {
    event.preventDefault();

    if (!searchTerm.trim()) {
      setError("Skriv en filmtitel att söka efter.");
      setMovies([]);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const results = await searchMovies(searchTerm.trim());
      setMovies(results);
    } catch (err) {
      setMovies([]);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <Header />

      <section className="movies-page">
        <h1>Film catalog</h1>

        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search for a movie..."
          />

          <button type="submit" disabled={loading}>
            {loading ? "Search..." : "Search"}
          </button>
        </form>

        {loading && <p>Hämtar filmer...</p>}

        {error && <p className="error-message">{error}</p>}

        {!loading && movies.length > 0 && (
          <div className="movies-grid">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Movies;
