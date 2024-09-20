import {combineReducers} from 'redux';
import getListMovieReducer from './listMovie/listMovieSlice';
import getMovieDetailsReducer from './movieDetails/movieDetailSlice';

const rootReducer = combineReducers({
  getListMovieReducer,
  getMovieDetailsReducer,
});

export default rootReducer;
