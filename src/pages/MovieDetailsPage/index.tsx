import React, {useEffect} from 'react';
import {Image, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

// view models
import {useMovieDetailsViewModel} from '@viewModels/MovieDetails';

// styles
import Colors from '@theme/Colors';
import styles from './styles';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'MovieDetails'>;
  route: RouteProp<RootStackParamList, 'MovieDetails'>;
};

const MovieDetailsPage: React.FC<Props> = ({navigation, route}) => {
  const {params} = route || {};
  const {movId, source} = params || {};

  const {data, handleAddToFavorite} = useMovieDetailsViewModel(movId);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTintColor: Colors.WHITE,
      headerTitle: 'Movie Detail',
      headerStyle: {backgroundColor: Colors.PRIMARY_01},
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      {/* Movie Poster */}
      {data?.Poster && (
        <Image source={{uri: data?.Poster}} style={styles.poster} />
      )}

      {/* Movie Title and Year */}
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{data?.Title}</Text>
        <Text style={styles.year}>Released: {data?.Year}</Text>
        <Text style={styles.genre}>{data?.Genre}</Text>
      </View>

      {source !== 'favorite' && (
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={() => handleAddToFavorite(data)}>
          <Text style={styles.favoriteButtonText}>Add to Favorite</Text>
        </TouchableOpacity>
      )}

      {/* Movie Plot */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Plot</Text>
        <Text style={styles.text}>{data?.Plot}</Text>
      </View>

      {/* Movie Details */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Details</Text>
        <Text style={styles.text}>Director: {data?.Director}</Text>
        <Text style={styles.text}>Writer: {data?.Writer}</Text>
        <Text style={styles.text}>Actors: {data?.Actors}</Text>
        <Text style={styles.text}>Released: {data?.Released}</Text>
        <Text style={styles.text}>Runtime: {data?.Runtime}</Text>
        <Text style={styles.text}>Rated: {data?.Rated}</Text>
        <Text style={styles.text}>Language: {data?.Language}</Text>
        <Text style={styles.text}>Country: {data?.Country}</Text>
        <Text style={styles.text}>Awards: {data?.Awards}</Text>
        <Text style={styles.text}>Box Office: {data?.BoxOffice}</Text>
      </View>

      {/* Movie Ratings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ratings</Text>
        {data?.Ratings?.map((rating, index) => (
          <Text key={index} style={styles.text}>
            {rating.Source}: {rating.Value}
          </Text>
        ))}
        <Text style={styles.text}>IMDB Rating: {data?.imdbRating}</Text>
        <Text style={styles.text}>IMDB Votes: {data?.imdbVotes}</Text>
      </View>
    </ScrollView>
  );
};

export default MovieDetailsPage;
