import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const nowPlaying = useSelector((store) => store.movies.nowPlayingMovies);
  const popular = useSelector((store) => store.movies.popularMovies);
  const topRated = useSelector((store) => store.movies.topRatedMovies);
  const upcoming = useSelector((store) => store.movies.upcomingMovies);
  return (
    <div className=" bg-black">
      <div className=" -mt-56 pl-10 relative z-20">
        <MovieList title={"Now playing"} movies={nowPlaying} />
        <MovieList title={"Trending"} movies={popular} />
        <MovieList title={"POpular"} movies={topRated} />
        <MovieList title={"Upcoming"} movies={upcoming} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
