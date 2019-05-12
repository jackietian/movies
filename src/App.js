import React from "react";
import PropTypes from 'prop-types';
import MovieListContainer from "./views/movie/MovieList/MovieListContainer";
import MovieDetailContainer from "./views/movie/MovieDetail/MovieDetailContainer";
import "./App.scss";

const App = (props) => (
  <main>
    <section>
      <MovieListContainer />
    </section>
    <section>
      <MovieDetailContainer />
    </section>
  </main>
);

App.propTypes = {
  currentMovie: PropTypes.object
}

export default App;
