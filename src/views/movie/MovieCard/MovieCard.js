import React from "react";
import PropTypes from "prop-types";
import "./MovieCard.scss";

const MovieCard = props => {
  const { Title, Year } = props;
  return (
    <div className="card-container">
      <h1 className="card-container__title">{Title}</h1>
      <div className="card-container__year">{Year}</div>
    </div>
  );
};

MovieCard.propTypes = {
  Title: PropTypes.string,
  Year: PropTypes.string
};

export default MovieCard;
