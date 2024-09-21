import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

// view models
import {useFavoriteViewModel} from '@viewModels/Favorite';

// styles
import styles from './styles';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Favorite'>;
};

const FavoritePage: React.FC<Props> = ({navigation}) => {
  const {favoriteMovie, handleOnPress} = useFavoriteViewModel(navigation);

  const renderMovieItem = ({item}: {item: MovieDetailProps}) => {
    return (
      <TouchableOpacity
        onPress={() => handleOnPress(item.imdbID)}
        style={styles.movieCard}>
        <Image source={{uri: item.Poster}} style={styles.poster} />
        <View style={styles.movieInfo}>
          <Text style={styles.title}>{item.Title}</Text>
          <Text style={styles.text}>Year: {item.Year}</Text>
          <Text style={styles.text}>Genre: {item.Genre}</Text>
          <Text style={styles.text}>IMDB Rating: {item.imdbRating}</Text>
          <Text style={styles.text}>Plot: {item.Plot}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteMovie}
        renderItem={renderMovieItem}
        keyExtractor={item => item.imdbID}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default FavoritePage;
