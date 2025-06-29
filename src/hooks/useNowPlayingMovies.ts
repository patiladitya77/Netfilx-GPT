import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/tmdb";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import type { RootState } from "../utils/store";

const useNowPlayingMovies = () => {
  const nowPlaingMovies = useSelector(
    (store: RootState) => store.movies.nowPlayingMovies
  );
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    if (!nowPlaingMovies) getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
