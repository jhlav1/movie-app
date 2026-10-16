import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import SavedMovies from "./pages/SavedMovies";

import "./App.css";

function App() {
  const [savedMovies, setSavedMovies] = useState(() => {
    try {
      const storedMovies = localStorage.getItem("savedMovies");
      return storedMovies ? JSON.parse(storedMovies) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
  }, [savedMovies]);

  function handleSaveMovie(movie) {
    setSavedMovies((currentMovies) => {
      const alreadySaved = currentMovies.some(
        (savedMovie) => savedMovie.imdbID === movie.imdbID
      );

      if (alreadySaved) {
        return currentMovies;
      }

      return [...currentMovies, movie];
    });
  }

  function handleRemoveMovie(imdbID) {
    setSavedMovies((currentMovies) =>
      currentMovies.filter((movie) => movie.imdbID !== imdbID)
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/movies" element={<Movies />} />

        <Route
          path="/movies/:id"
          element={
            <MovieDetails
              savedMovies={savedMovies}
              onSaveMovie={handleSaveMovie}
              onRemoveMovie={handleRemoveMovie}
            />
          }
        />

        <Route
          path="/saved"
          element={
            <SavedMovies
              savedMovies={savedMovies}
              onRemoveMovie={handleRemoveMovie}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


