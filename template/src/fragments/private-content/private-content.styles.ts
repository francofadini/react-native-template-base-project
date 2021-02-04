import { StyleSheet } from 'react-native';
import colors from 'constants/colors';

export default StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 60,
  },
  image: {
    height: 150,
    margin: 30,
    resizeMode: 'contain',
  },
  imageLoading: {
    height: 50,
    margin: 30,
    resizeMode: 'contain',
  },
  label: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 50,
    color: colors.primary,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    width: 300,
  },
  buttonLabel: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
