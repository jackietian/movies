import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieList from "./views/movie/MovieList";
import MovieDetail from "./views/movie/MovieDetail";
import "./App.scss";

const App = (props) => (
  <main>
    <section>
      <MovieList />
    </section>
    <section>
      <MovieDetail {...props.currentMovie} />
    </section>
  </main>
);

App.propTypes = {
  currentMovie: PropTypes.object
}

const mapStateToProps = state => ({
  currentMovie: state.movie.currentMovie,
})

export default connect(mapStateToProps, null)(App);
