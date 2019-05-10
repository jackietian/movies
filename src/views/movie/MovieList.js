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
  selectCurrentMovie
} from "../../state/movie/movie-action-creators";
import "./MovieList.scss";

class MovieList extends Component {
  static propTypes = {
    movies: PropTypes.array.isRequired,
    searchText: PropTypes.string.isRequired
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

  handleKeyDown = (e) => {
    console.log(e.key);
    if (e.key === 'Enter') {
      this.handleSearch();
    }
  }

  handleClickCard = (movie) => {
    const {actions: { selectCurrentMovie }} = this.props;
    selectCurrentMovie(movie);
  }

  render() {
    const { movies, searchText } = this.props;
    return (
      <>
        <TextInput 
          value={searchText} 
          onChange={this.handleSearchTextChange} 
          onKeyDown={this.handleKeyDown}
        />
        
        <ul className="card-list">
          {movies.map(movie => (
            <li 
              key={movie.imdbID} 
              onClick={() => this.handleClickCard(movie)}>
                <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
        <Paginator />
      </>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movie.movies,
  searchText: state.movie.searchText
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      loadMovies,
      changeSearchText,
      selectCurrentMovie,
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);
