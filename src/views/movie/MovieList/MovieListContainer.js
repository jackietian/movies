import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  loadMovies,
  changeSearchText,
  selectCurrentMovie,
  changePage
} from "../../../state/movie/movie-action-creators";
import MovieList from "./MovieList";

const mapStateToProps = state => ({
  movies: state.movie.movies,
  searchText: state.movie.searchText,
  page: state.movie.page,
  currentMovie: state.movie.currentMovie
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      loadMovies,
      changeSearchText,
      selectCurrentMovie,
      changePage
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);
