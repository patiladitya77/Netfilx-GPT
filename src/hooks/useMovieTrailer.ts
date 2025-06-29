import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/tmdb";
import { useEffect } from "react";
import type { RootState } from "../utils/store";

const useMovieTrailer = (movieId: number) => {
  const trailerVideo = useSelector(
    (store: RootState) => store.movies.trailerVideo
  );
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const movieTrailer =
      filteredData.length > 0 ? filteredData[0] : json.results[0];
    dispatch(addTrailerVideo(movieTrailer));
  };

  useEffect(() => {
    if (!trailerVideo) getMovieVideos();
  }, []);
};
export default useMovieTrailer;
