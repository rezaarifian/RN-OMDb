import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';

// store
import {useAppSelector} from '@stores/hooks';

type INavigation = StackNavigationProp<ParamListBase>;

export function useFavoriteViewModel(navigation: INavigation) {
  const {favoriteMovie} = useAppSelector(state => state.favoriteMovieReducer);

  const handleOnPress = (movId: string) => {
    navigation.push('MovieDetails', {movId, source: 'favorite'});
  };

  return {
    favoriteMovie,
    handleOnPress,
  };
}
