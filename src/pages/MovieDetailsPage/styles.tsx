import {StyleSheet} from 'react-native';
import {scale} from '@utils';
import Colors from '@theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(10),
    backgroundColor: Colors.WHITE_02,
  },
  poster: {
    width: '100%',
    height: scale(500),
    resizeMode: 'contain',
    borderRadius: scale(10),
    marginBottom: scale(20),
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: scale(20),
  },
  title: {
    fontSize: scale(24),
    fontWeight: 'bold',
  },
  year: {
    fontSize: scale(16),
    color: '#666',
    marginTop: scale(5),
  },
  genre: {
    fontSize: scale(14),
    color: '#888',
    marginTop: scale(5),
  },
  section: {
    marginBottom: scale(20),
  },
  sectionTitle: {
    fontSize: scale(18),
    fontWeight: 'bold',
    marginBottom: scale(10),
  },
  text: {
    fontSize: scale(14),
    marginBottom: scale(5),
  },
});

export default styles;
