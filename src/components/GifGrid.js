import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GridGifItem } from "./GridGifItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  if (loading) return <p className="animate__animated animate__flash">Cargando gifs...</p>;

  return (
    <>
      <h3 className="animate__animated animate__fadeIn" key={category}>
        {category}
      </h3>
      <div className="gifs-grid">
        {images.map((gif) => (
          <GridGifItem key={gif?.id} {...gif} />
        ))}
      </div>
    </>
  );
};
