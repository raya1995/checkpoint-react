import { render } from "@testing-library/react";
import React from "react";
import PropTypes from "prop-types";
const MovieCard = ({ Movies }) => {
  const { titre, description, posterUrl, rate } = Movies;

  return (
    <>
      <div className="card">
        <div className="rowContainer">
          <span> {titre}</span>

          <span> {description}</span>

       
<button onClick={()=>window.location=posterUrl}>Link</button>
          {rate}
        </div>
      </div>
    </>
  );
};
MovieCard.propTypes = {
  posterUrl: PropTypes.any,
};
export default MovieCard;
