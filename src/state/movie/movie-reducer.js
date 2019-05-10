import movieActionTypes from "./movie-action-types";

const initialState = {
  movies: [],
  searchText: "sydney",
  currentMovie: null,
  page: {
    size: 10,
    totalElements: 0,
    totalPages: 0,
    currentPage: 0
  },
  err: ''
};

const movie = (state = initialState, action) => {
  switch (action.type) {
    case movieActionTypes.SEARCH_TEXT_CHANGED:
      return {
        ...state,
        searchText: action.data.text
      };
    case movieActionTypes.LOAD_MOVIES_SUCCEEDED:
      return {
        ...state,
        movies: action.data.movies
      };
    case movieActionTypes.LOAD_MOVIES_FAILED:
      return {
        ...state,
        movies: [],
        error: action.data.err
      };
    case movieActionTypes.SELECT_MOVIE:
      return {
        ...state,
        currentMovie: action.data.movie
      };
    default:
      return state;
  }
};

export default movie;
