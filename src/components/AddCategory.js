import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories, categories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (categories.every((cat) => cat !== inputValue) && inputValue)
      setCategories((prev) => [inputValue, ...prev]);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} aria-label="form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
};
