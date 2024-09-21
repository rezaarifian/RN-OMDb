import {combineReducers} from 'redux';
import getListMovieReducer from './listMovie/listMovieSlice';
import getMovieDetailsReducer from './movieDetails/movieDetailSlice';
import favoriteMovieReducer from './favoriteMovie/favoriteMovieSlice';

const rootReducer = combineReducers({
  getListMovieReducer,
  getMovieDetailsReducer,
  favoriteMovieReducer,
});

export default rootReducer;
