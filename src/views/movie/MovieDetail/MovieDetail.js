import React from "react";
import PropTypes from "prop-types";
import "./MovieDetail.scss";

const MovieDetail = props => {
  if (!props.currentMovie) return "";

  const {
    currentMovie: { Title, Poster, Type }
  } = props;

  return (
    <section className="movie-detail">
      <div>
        <h1 className="movie-detail__title" tabIndex="0">{Title}</h1>
        <p className="movie-detail__type" tabIndex="1">{Type}</p>
      </div>
      <img
        className="movie-detail__image"
        tabIndex="2"
        src={Poster}
        alt={`Poster for movie: ${Title}`}
      />
    </section>
  );
};

MovieDetail.propTypes = {
  Title: PropTypes.string,
  Type: PropTypes.string,
  Poster: PropTypes.string
};

export default MovieDetail;
