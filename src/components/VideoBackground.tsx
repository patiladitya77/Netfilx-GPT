import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import type { RootState } from "../utils/store";

type VideoBackgroundProps = {
  movieId: number;
};

const VideoBackground = ({ movieId }: VideoBackgroundProps) => {
  const trailer = useSelector((store: RootState) => store.movies.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
