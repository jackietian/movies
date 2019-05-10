import { fetchMovies } from "../../api/movie-api";
import movieActionTypes from "./movie-action-types";

export const changeSearchText = text => ({
  type: movieActionTypes.SEARCH_TEXT_CHANGED,
  data: { text }
});

export const loadMovies = params => dispatch => {
  dispatch(loadMoviesRequested());
  fetchMovies(params)
    .then(res => dispatch(loadMoviesSucceeded(res)))
    .catch(err => dispatch(loadMoviesFailed(err)));
};

const loadMoviesRequested = () => ({
  type: movieActionTypes.LOAD_MOVIES_REQUESTED
});

const loadMoviesSucceeded = res => ({
  type: movieActionTypes.LOAD_MOVIES_SUCCEEDED,
  data: { movies: res.data.Search || [] }
});

const loadMoviesFailed = err => ({
  type: movieActionTypes.LOAD_MOVIES_FAILED,
  data: { err }
});

export const selectCurrentMovie = movie => ({
  type: movieActionTypes.SELECT_MOVIE,
  data: { movie }
});
