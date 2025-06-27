import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import type { RootState } from "../utils/store";

const SecondaryContainer = () => {
  const nowPlaying = useSelector(
    (store: RootState) => store.movies.nowPlayingMovies
  );
  const popular = useSelector((store: RootState) => store.movies.popularMovies);
  const topRated = useSelector(
    (store: RootState) => store.movies.topRatedMovies
  );
  const upcoming = useSelector(
    (store: RootState) => store.movies.upcomingMovies
  );
  return (
    <div className=" bg-black">
      <div className=" -mt-56 pl-10 relative z-20">
        {nowPlaying && <MovieList title={"Now playing"} movies={nowPlaying} />}
        {popular && <MovieList title={"Trending"} movies={popular} />}
        {topRated && <MovieList title={"POpular"} movies={topRated} />}
        {upcoming && <MovieList title={"Upcoming"} movies={upcoming} />}
      </div>
    </div>
  );
};

export default SecondaryContainer;
