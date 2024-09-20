import {StyleSheet} from 'react-native';
import {scale} from '@utils';
import Colors from '@theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE_02,
    paddingBottom: scale(80),
  },
  itemContainer: {
    flexDirection: 'row',
    padding: scale(10),
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  poster: {
    width: scale(100),
    height: scale(150),
    borderRadius: scale(8),
  },
  infoContainer: {
    flex: 1,
    marginLeft: scale(10),
    justifyContent: 'center',
  },
  title: {
    fontSize: scale(18),
    fontWeight: 'bold',
  },
  year: {
    fontSize: scale(14),
    color: '#888',
  },
});

export default styles;
