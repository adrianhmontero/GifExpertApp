import PropTypes from "prop-types";
import React from "react";

export const GridGifItem = ({ title, url }) => {
  return (
    <div className="container-gif animate__animated animate__fadeInRight">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

GridGifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
