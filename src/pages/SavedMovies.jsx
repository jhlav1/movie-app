import Header from "../components/Header";
import MovieCard from "../components/MovieCard";

function SavedMovies({ savedMovies, onRemoveMovie }) {
  return (
    <main>
      <Header />

      <section className="movies-page">
        <h1>Sparade filmer</h1>

        {savedMovies.length === 0 ? (
          <p>Du har inte sparat några filmer ännu.</p>
        ) : (
          <div className="movies-grid">
            {savedMovies.map((movie) => (
              <div key={movie.imdbID}>
                <MovieCard movie={movie} />

                <button
                  type="button"
                  onClick={() => onRemoveMovie(movie.imdbID)}
                >
                  Ta bort
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default SavedMovies;
