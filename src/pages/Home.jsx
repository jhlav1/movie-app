import { Link } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  return (
    <main>
      <Header />

      <section className="home">
        <h1>Welcome to your Movie App!</h1>

        <p>
          Discover movies, read about them and save your favorites
        </p>

        <Link to="/movies">Discover movies</Link>
      </section>
    </main>
  );
}

export default Home;
