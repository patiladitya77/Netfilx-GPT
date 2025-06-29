import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/tmdb";
import { addupcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import type { RootState } from "../utils/store";

const useUpcomingMovies = () => {
  const upcomingMovies = useSelector(
    (store: RootState) => store.movies.upcomingMovies
  );
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addupcomingMovies(json.results));
  };
  useEffect(() => {
    if (!upcomingMovies) getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
