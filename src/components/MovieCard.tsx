import { THUMBNAIL_BASE_URL } from "../utils/constants";
type MovieCardProps = {
  poster_path: string;
};
const MovieCard = ({ poster_path }: MovieCardProps) => {
  if (!poster_path) return null;
  return (
    <div className="w-36 pr-4">
      <img src={THUMBNAIL_BASE_URL + poster_path} />
    </div>
  );
};

export default MovieCard;
