import {useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';

// store
import {useAppDispatch} from '@stores/hooks';
import {useAppSelector} from '@stores/hooks';
import {getListMovie} from '@slices/listMovie/listMovieSlice';

type INavigation = StackNavigationProp<ParamListBase>;

export function useHomeViewModel(navigation: INavigation) {
  const dispatch = useAppDispatch();
  const {data} = useAppSelector(state => state.getListMovieReducer);

  useEffect(() => {
    dispatch(getListMovie());
  }, []);

  const handleOnPress = (movId: string) => {
    console.log('movie id', movId);
    navigation.push('MovieDetails', {movId});
  };

  return {
    data,
    handleOnPress,
  };
}
