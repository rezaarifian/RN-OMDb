import {StyleSheet} from 'react-native';
import {scale} from '@utils';
import Colors from '@theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: scale(16),
    paddingTop: scale(20),
  },
  header: {
    fontSize: scale(24),
    fontWeight: 'bold',
    marginBottom: scale(20),
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: scale(20),
  },
  movieCard: {
    flexDirection: 'row',
    marginBottom: scale(20),
    padding: scale(10),
    backgroundColor: Colors.WHITE_02,
    borderRadius: scale(10),
  },
  poster: {
    width: scale(100),
    height: scale(150),
    borderRadius: scale(4),
    marginRight: scale(10),
  },
  movieInfo: {
    flex: 1,
  },
  title: {
    fontSize: scale(18),
    fontWeight: 'bold',
    marginBottom: scale(8),
  },
  text: {
    fontSize: scale(14),
    marginBottom: scale(4),
  },
});

export default styles;
