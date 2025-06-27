import { THUMBNAIL_BASE_URL } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  return (
    <div className="w-36 pr-4">
      <img src={THUMBNAIL_BASE_URL + poster_path} />
    </div>
  );
};

export default MovieCard;
