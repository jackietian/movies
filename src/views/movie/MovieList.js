import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Paginator from "../../common/Paginator";
import TextInput from "../../common/TextInput";
import MovieCard from "./MovieCard";
import {
  loadMovies,
  changeSearchText,
  selectCurrentMovie,
  changePage
} from "../../state/movie/movie-action-creators";
import "./MovieList.scss";

class MovieList extends Component {
  static propTypes = {
    movies: PropTypes.array.isRequired,
    searchText: PropTypes.string.isRequired,
    currentMovie: PropTypes.object,
    page: PropTypes.shape({
      size: PropTypes.number,
      totalElements: PropTypes.number,
      totalPages: PropTypes.number,
      currentPage: PropTypes.number
    }),
    actions: PropTypes.shape({
      loadMovies: PropTypes.func,
      changeSearchText: PropTypes.func,
      selectCurrentMovie: PropTypes.func,
      changePage: PropTypes.func
    })
  };

  componentDidMount() {
    this.handleSearch();
  }

  handleSearchTextChange = e => {
    const {
      actions: { changeSearchText }
    } = this.props;
    changeSearchText(e.target.value);
  };

  handleSearch = () => {
    const {
      actions: { loadMovies },
      searchText
    } = this.props;
    const params = {
      s: searchText
    };
    loadMovies(params);
  };

  handleKeyDown = e => {
    console.log(e.key);
    if (e.key === "Enter") {
      this.handleSearch();
    }
  };

  handleClickCard = movie => {
    const {
      actions: { selectCurrentMovie }
    } = this.props;
    selectCurrentMovie(movie);
  };

  handlePageChange = nextPage => {
    const {
      actions: { changePage }
    } = this.props;
    changePage(nextPage);
  };

  loadPaginatedMovies = () => {
    const {
      movies,
      page: { size, currentPage }
    } = this.props;
    return movies.slice(size * currentPage, size * currentPage + size);
  };

  showPaginator = () => {
    const {
      page: { totalElements, size }
    } = this.props;
    return totalElements > size;
  };

  render() {
    const { searchText, page, currentMovie } = this.props;
    return (
      <>
        <TextInput
          className='searchInput'
          value={searchText}
          onChange={this.handleSearchTextChange}
          onKeyDown={this.handleKeyDown}
        />

        <ul className="card-list">
          {this.loadPaginatedMovies().map(movie => (
            <li
              key={movie.imdbID}
              onClick={() => this.handleClickCard(movie)}
              className={
                currentMovie && currentMovie.imdbID === movie.imdbID
                  ? "selected"
                  : ""
              }
            >
              <MovieCard {...movie} />
            </li>
          ))}
        </ul>
        {this.showPaginator() && (
          <Paginator onChangePage={this.handlePageChange} {...page} />
        )}
      </>
    );
  }
}

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
