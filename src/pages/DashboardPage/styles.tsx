import {StyleSheet} from 'react-native';
import {scale} from '@utils';
import Colors from '@theme/Colors';

const styles = StyleSheet.create({
  tabBarStyle: {
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    height: scale(75),
    paddingBottom: scale(10),
    fontFamily: 'PlusJakartaBold',
    borderWidth: 1,
    borderColor: Colors.GREY_05,
  },
  headerTitleStyle: {
    textAlign: 'left',
    fontSize: scale(18),
    fontFamily: 'PlusJakartaBold',
  },
  tabLabelStyle: {
    fontSize: scale(12),
  },
  containerHeader: {
    backgroundColor: Colors.PRIMARY_01,
  },
});

export default styles;
