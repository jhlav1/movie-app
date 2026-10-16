 # Movie App

En data-driven React-applikation där användaren kan söka efter filmer,
visa information om filmer och spara filmer till en personlig lista.

## Funktioner

- Söka efter filmer
- Visa sökresultat från OMDb API
- Filtrera filmer efter år
- Visa detaljerad information om en vald film
- Spara filmer
- Ta bort filmer från den sparade listan
- Visa alla sparade filmer på en separat sida
- Sparade filmer lagras i localStorage
- Hantera laddning och felmeddelanden

## Teknik

Projektet är byggt med:

- React
- Vite
- JavaScript
- React Router
- OMDb API
- localStorage
- CSS

## Projektstruktur

```text
src/
├── components/
│   ├── Header.jsx
│   └── MovieCard.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Movies.jsx
│   ├── MovieDetails.jsx
│   └── SavedMovies.jsx
│
├── services/
│   └── movieApi.js
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx

Sidor
Home

Startsidan med information om applikationen och en länk till filmsidan.

Movies

Här kan användaren söka efter filmer och filtrera sökresultaten efter år.

Movie Details

Visar detaljerad information om den valda filmen och ger användaren möjlighet
att spara eller ta bort filmen från den sparade listan.

Saved Movies

Visar filmer som användaren har sparat.

Lagring

Sparade filmer lagras i webbläsarens localStorage.
Det innebär att de sparade filmerna finns kvar även efter att sidan laddas om.

Externt API

Filminformation hämtas från:

OMDb API

https://www.omdbapi.com/
