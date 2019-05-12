import React, { Component } from "react";
import PropTypes from "prop-types";
import Paginator from "../../../common/Paginator";
import MovieCard from "../MovieCard/MovieCard";
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
    const { movies, searchText, page, currentMovie } = this.props;

    return (
      <>
        <input 
          type="text"
          className='searchInput'
          value={searchText}
          onChange={this.handleSearchTextChange}
          onKeyDown={this.handleKeyDown}
          autoFocus
        />

        <ul className="card-list">
          { movies.length === 0 && <li>no resuls found</li>}
          {this.loadPaginatedMovies().map((movie, index) => (
            <li
              key={index}
              onClick={() => this.handleClickCard(movie)}
              className={
                currentMovie && currentMovie.imdbID === movie.imdbID && "selected"
              }
            >
              <MovieCard {...movie} />
            </li>
          ))}
        </ul>
        {this.showPaginator() && (
          <Paginator onChangePage={this.handlePageChange} {...page}/>
        )}
      </>
    );
  }
}

export default MovieList;



