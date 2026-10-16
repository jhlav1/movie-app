const API_URL = "https://www.omdbapi.com/";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

// Sök efter filmer
export async function searchMovies(searchTerm) {
  const params = new URLSearchParams({
    apikey: API_KEY,
    s: searchTerm,
    type: "movie",
  });

  const response = await fetch(`${API_URL}?${params}`);
  const data = await response.json();

  if (!response.ok || data.Response === "False") {
    throw new Error(data.Error || "Kunde inte hämta filmer.");
  }

  return data.Search;
}

// Hämta detaljer om en film
export async function getMovieDetails(imdbID) {
  const params = new URLSearchParams({
    apikey: API_KEY,
    i: imdbID,
    plot: "full",
  });

  const response = await fetch(`${API_URL}?${params}`);
  const data = await response.json();

  if (!response.ok || data.Response === "False") {
    throw new Error(data.Error || "Kunde inte hämta filminformation.");
  }

  return data;
}
