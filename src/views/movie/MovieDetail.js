import React from "react";
import PropTypes from "prop-types";
import "./MovieDetail.scss";

const MovieDetail = props => (
  <section className="movie-detail">
    <div>
      <h1 className="movie-detail__title">{props.Title}</h1>
      <p className="movie-detail__type">{props.Type}</p>
    </div>
    <img className="movie-detail__image" src={props.Poster} alt={props.Title} />
  </section>
);

MovieDetail.propTypes = {
  Title: PropTypes.string,
  Type: PropTypes.string,
  Poster: PropTypes.string
};

export default MovieDetail;
