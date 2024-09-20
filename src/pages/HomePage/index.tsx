/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

// view models
import {useHomeViewModel} from '@viewModels/Home';

// styles
import styles from './styles';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const HomePage: React.FC<Props> = ({navigation}) => {
  const {data, handleOnPress} = useHomeViewModel(navigation);

  const MovieItem = ({item}: {item: MovieListProps}) => {
    return (
      <TouchableOpacity
        onPress={() => handleOnPress(item?.imdbID)}
        style={styles.itemContainer}>
        <Image source={{uri: item.Poster}} style={styles.poster} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.Title}</Text>
          <Text style={styles.year}>{item.Year}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <MovieItem item={item} />}
        keyExtractor={item => item.imdbID}
      />
    </SafeAreaView>
  );
};

export default HomePage;
