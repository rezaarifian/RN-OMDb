import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// page
import DashboardPage from '@pages/DashboardPage';
import SplashPage from '@pages/SplashPage';
import HomePage from '@pages/HomePage';
import FavoritePage from '@pages/FavoritePage';
import MovieDetailsPage from '@pages/MovieDetailsPage';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Main: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Favorite"
          component={FavoritePage}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="MovieDetails"
          component={MovieDetailsPage}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
