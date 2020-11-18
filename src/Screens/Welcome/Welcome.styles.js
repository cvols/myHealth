import { StyleSheet } from 'react-native';
import theme from '../../../theme';

const { main, secondary } = theme.palette;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: main
  },
  myHealthContainer: {
    alignItems: 'center'
  },
  text: {
    color: secondary,
    fontSize: 40
  },
  icon: {
    color: secondary,
    fontSize: 60
  },
  health: {
    fontWeight: 'bold'
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  buttonMargin: {
    marginTop: 20
  },
  secondaryButton: {
    borderColor: secondary,
    width: '80%',
    justifyContent: 'center'
  },
  secondaryButtonText: {
    color: secondary
  },
  primaryButton: {
    borderColor: secondary,
    width: '80%',
    justifyContent: 'center',
    backgroundColor: secondary
  },
  primaryButtonText: {
    color: main
  }
});

export default styles;
