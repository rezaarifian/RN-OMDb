import {useEffect} from 'react';

// store
import {useAppDispatch} from '@stores/hooks';
import {useAppSelector} from '@stores/hooks';
import {getMovieDetails} from '@slices/movieDetails/movieDetailSlice';
import {setFavoriteMovie} from '@slices/favoriteMovie/favoriteMovieSlice';

// utils
import {showToast} from '@utils';

export function useMovieDetailsViewModel(movId: string) {
  const dispatch = useAppDispatch();
  const {data} = useAppSelector(state => state.getMovieDetailsReducer);

  useEffect(() => {
    const payload = {
      movId: movId,
    };
    dispatch(getMovieDetails({payload}));
  }, []);

  const handleAddToFavorite = (movieData: MovieDetailProps) => {
    // Handle add to favorite logic here
    dispatch(setFavoriteMovie(movieData));
    showToast(`${movieData.Title} added to favorites!`);
  };

  return {
    data,
    handleAddToFavorite,
  };
}
