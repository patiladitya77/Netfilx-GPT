import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-3xl py-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex">
          {movies &&
            movies.map((m) => (
              <MovieCard key={m.id} poster_path={m.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
