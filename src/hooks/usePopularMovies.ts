import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/tmdb";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import type { RootState } from "../utils/store";

const usePopularMovies = () => {
  const popularMovies = useSelector(
    (store: RootState) => store.movies.popularMovies
  );
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    if (!popularMovies) getPopularMovies();
  }, []);
};

export default usePopularMovies;
