import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies: null,
    movieNames: null,
    movieResults: null,
    isQueried: false,
  },
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
