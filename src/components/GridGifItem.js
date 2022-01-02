import React from "react";

export const GridGifItem = ({ id, title, url }) => {
  return (
    <div className="container-gif animate__animated animate__fadeInRight">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
