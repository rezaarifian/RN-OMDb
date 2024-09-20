/* eslint-disable react/no-unstable-nested-components */
import React, {useCallback} from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Header, HeaderHeightContext} from '@react-navigation/elements';

// pages
import HomePage from '@pages/HomePage';
import FavoritePage from '@pages/FavoritePage';

// utils
import {scale} from '@utils';

// assets
import IconHome from '@assets/ic_home.svg';
import IconFavorite from '@assets/ic_bookmark.svg';

// styles
import Colors from '@theme/Colors';
import styles from './styles';

const Tab = createBottomTabNavigator();

const DashboardPage: React.FC = () => {
  const renderTabBarIcon = useCallback(
    (focused: boolean, routeName: string) => {
      let iconComponent = (
        <IconHome
          width={scale(30)}
          height={scale(30)}
          stroke={Colors.GREY_01}
        />
      );
      if (routeName === 'Home') {
        iconComponent = (
          <IconHome
            width={scale(30)}
            height={scale(30)}
            fill={focused ? Colors.PRIMARY_01 : Colors.GREY_06}
          />
        );
      } else if (routeName === 'Favorite') {
        iconComponent = (
          <IconFavorite
            width={scale(30)}
            height={scale(30)}
            fill={focused ? Colors.PRIMARY_01 : Colors.GREY_06}
          />
        );
      }
      return iconComponent;
    },
    [],
  );

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: Colors.PRIMARY_01,
        tabBarInactiveTintColor: Colors.GREY_01,
        headerShown: true,
        tabBarLabelStyle: styles.tabLabelStyle,
        tabBarIcon: ({focused}) => renderTabBarIcon(focused, route?.name),
        tabBarStyle: styles.tabBarStyle,
      })}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          header: () => {
            return (
              <HeaderHeightContext.Consumer>
                {() => {
                  return (
                    <Header
                      title={'Find your Movie'}
                      headerStyle={styles.containerHeader}
                      headerTintColor={Colors.WHITE}
                      headerTitleStyle={styles.headerTitleStyle}
                      headerTitleAlign="left"
                      headerStatusBarHeight={
                        Platform.OS === 'android' ? scale(23) : 0
                      }
                    />
                  );
                }}
              </HeaderHeightContext.Consumer>
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoritePage}
        options={{
          header: () => {
            return (
              <HeaderHeightContext.Consumer>
                {() => {
                  return (
                    <Header
                      title={'Your Favorite in here!!'}
                      headerStyle={styles.containerHeader}
                      headerTintColor={Colors.WHITE}
                      headerTitleStyle={styles.headerTitleStyle}
                      headerTitleAlign="left"
                      headerStatusBarHeight={
                        Platform.OS === 'android' ? scale(23) : 0
                      }
                    />
                  );
                }}
              </HeaderHeightContext.Consumer>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default DashboardPage;
