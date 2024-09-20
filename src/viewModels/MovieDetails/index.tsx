import {useEffect} from 'react';

// store
import {useAppDispatch} from '@stores/hooks';
import {useAppSelector} from '@stores/hooks';
import {getMovieDetails} from '@slices/movieDetails/movieDetailSlice';

export function useMovieDetailsViewModel(movId: string) {
  const dispatch = useAppDispatch();
  const {data} = useAppSelector(state => state.getMovieDetailsReducer);

  useEffect(() => {
    const payload = {
      movId: movId,
    };
    dispatch(getMovieDetails({payload}));
  }, []);

  return {
    data,
  };
}
