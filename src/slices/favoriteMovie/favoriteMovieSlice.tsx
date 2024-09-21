import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {showToast} from '@utils';

type InitGLobalProps = {
  favoriteMovie: MovieDetailProps[];
};

const initialState: InitGLobalProps = {
  favoriteMovie: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setFavoriteMovie(state, action: PayloadAction<MovieDetailProps>) {
      const isAlreadyFavorite = state.favoriteMovie.find(
        movie => movie.imdbID === action.payload.imdbID,
      );
      if (!isAlreadyFavorite) {
        showToast('Already add in your favorite movies');
        state.favoriteMovie.push(action.payload);
      }
    },
  },
});

export const {setFavoriteMovie} = favoriteSlice.actions;

export default favoriteSlice.reducer;
