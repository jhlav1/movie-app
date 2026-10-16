import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h2>Movie App</h2>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/saved">Saved movies</Link>

      </nav>
    </header>
  );
}

export default Header;
