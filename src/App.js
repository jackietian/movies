import React from "react";
import MovieListContainer from "./views/movie/MovieList/MovieListContainer";
import MovieDetailContainer from "./views/movie/MovieDetail/MovieDetailContainer";
import "./App.scss";

const App = () => (
  <main>
    <section>
      <MovieListContainer />
    </section>
    <section>
      <MovieDetailContainer />
    </section>
  </main>
);

export default App;
