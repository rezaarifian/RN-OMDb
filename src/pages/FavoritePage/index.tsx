import React from 'react';
import {View, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Favorite'>;
};

const FavoritePage: React.FC<Props> = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{fontSize: 30, color: 'black'}}>Favorite Page</Text>
    </View>
  );
};

export default FavoritePage;
