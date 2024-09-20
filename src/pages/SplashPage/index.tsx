import React, {useEffect} from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';

// models
import {NavigationProps} from '@models/Splash';

// View Models
import {useSplashViewModel} from '@viewModels/Splash';

// assets
import LottieSplash from '@assets/lottie_splash.json';

// styles
import styles from './styles';

const SplashPage: React.FC<NavigationProps> = ({navigation}) => {
  const useSplash = useSplashViewModel({navigation});

  useEffect(() => {
    useSplash;
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        style={styles.splash}
        source={LottieSplash}
        autoPlay
        loop={true}
      />
    </View>
  );
};

export default SplashPage;
