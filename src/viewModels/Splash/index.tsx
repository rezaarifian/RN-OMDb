import {useEffect, useRef} from 'react';
import {CommonActions} from '@react-navigation/native';

// models
import {NavigationProps} from '@models/Splash';

export function useSplashViewModel({navigation}: NavigationProps) {
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      redirectionPage();
    }, 3000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const redirectionPage = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Dashboard'}],
      }),
    );
  };

  return {};
}
