import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { TrailerVideo, Movie } from "./types";

interface MoviesState {
  nowPlayingMovies: Movie[] | null;
  popularMovies: Movie[] | null;
  topRatedMovies: Movie[] | null;
  upcomingMovies: Movie[] | null;
  trailerVideo: TrailerVideo | null;
}

const initialState: MoviesState = {
  nowPlayingMovies: null,
  popularMovies: null,
  topRatedMovies: null,
  upcomingMovies: null,
  trailerVideo: null,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addupcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrailerVideo: (state, action: PayloadAction<TrailerVideo>) => {
      state.trailerVideo = action.payload;
    },
  },
});
export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addupcomingMovies,
  addTrailerVideo,
} = movieSlice.actions;
export default movieSlice.reducer;
