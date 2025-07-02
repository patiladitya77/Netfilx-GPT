import { useSelector } from "react-redux";
import type { RootState } from "../utils/store";
import MovieList from "./MovieList";
import Spinner from "./Spinner";
const GptMovieSuggestion = () => {
  const gpt = useSelector((store: RootState) => store.gpt);
  const { movieNames, movieResults, isQueried } = gpt;

  if (isQueried && (!movieResults || !movieNames)) return <Spinner />;
  if (!isQueried) return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-70">
      <div>
        {movieNames.map((m: string, index: number) => (
          <MovieList key={m} title={m} movies={movieResults[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
