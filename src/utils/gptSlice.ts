import { createSlice } from "@reduxjs/toolkit";

import type { Movie } from "./types";

interface GptState {
  showGptSearch: boolean;
  gptMovies: Movie[] | null;
  movieNames: string[] | null;
  movieResults: Movie[][] | null;
  isQueried: boolean;
}

const initialState: GptState = {
  showGptSearch: false,
  gptMovies: null,
  movieNames: null,
  movieResults: null,
  isQueried: false,
};

const gptSlice = createSlice({
  name: "gpt",
  initialState,
  reducers: {
    toggleGptSeachView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResults: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    queried: (state) => {
      state.isQueried = true;
    },
  },
});

export const { toggleGptSeachView, addGptMovieResults, queried } =
  gptSlice.actions;
export default gptSlice.reducer;
