import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["CR7"]);

  /* const handleAddCat = () => {
    const newCat = "Soccer";
    setCategories((prev) => [...prev, newCat]);
  }; */

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory categories={categories} setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleAddCat}>Agregar</button> */}
      <ol key="gif-expert-key">
        {categories.map((cat) => (
          <GifGrid category={cat} key={`gifgrid-${cat}`} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
