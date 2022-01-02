import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [hookState, setHookState] = useState({ data: [], loading: true });

  useEffect(() => {
    getGifs(category).then((gifs) =>
      setTimeout(() => {
        setHookState({ data: gifs, loading: false });
      }, 1000)
    );
  }, [category]);

  return hookState;
};
