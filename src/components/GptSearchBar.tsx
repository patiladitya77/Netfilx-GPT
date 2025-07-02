import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../utils/store";
import lang from "../utils/languageConstant";
import { useRef } from "react";
import ai from "../utils/gemini";
import { API_OPTIONS } from "../utils/tmdb";
import { addGptMovieResults, queried } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store: RootState) => store.config.lang);
  const searchText = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const searchMoviesInTMDB = async (movie: string) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearch = async () => {
    dispatch(queried());
    console.log(searchText);
    if (!searchText.current || searchText.current.value.trim() === "") return;
    const searchQuery =
      "Act as a movie recommendation system and suggest movies for the query" +
      searchText.current.value +
      ".Only give me 5 movies, comma separated like the example result given ahead. Example result: Golmaal,Mission impossoble,Gadar,Dhammal,Lucky Bhaskar";
    const gptSearchResult = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: searchQuery,
    });
    const gptText = gptSearchResult?.text;
    if (!gptText) return;
    const gptMovies = gptSearchResult?.text?.split(",");

    //this is written array of promises beacuse time, tide and js waits for none
    const promiseArray = gptMovies.map((m) => searchMoviesInTMDB(m));

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    const filteredResults = tmdbResults.map((movies, idx) => {
      const target = gptMovies[idx].trim().toLowerCase();
      return movies.filter(
        (m) =>
          m.title?.toLowerCase() === target ||
          m.original_title?.toLowerCase() === target
      );
    });

    dispatch(
      addGptMovieResults({
        movieNames: gptMovies,
        movieResults: filteredResults,
      })
    );
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="m-4 p-4 col-span-9"
        />
        <button
          className="bg-red-700 rounded-lg text-white col-span-3 m-4 py-2 px-4"
          onClick={handleGptSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
