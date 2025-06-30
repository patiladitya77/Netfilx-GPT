import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
import type { RootState } from "../utils/store";

const MainContainer = () => {
  const movies = useSelector(
    (store: RootState) => store?.movies?.nowPlayingMovies
  );
  if (!movies) return;

  const { original_title, overview, id } = movies[1];
  return (
    <div className="pt-[10%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
