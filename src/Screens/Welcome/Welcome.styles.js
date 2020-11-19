import { StyleSheet } from 'react-native';
import theme from '../../../theme';

const { primary, white } = theme.palette;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: primary
  },
  myHealthContainer: {
    alignItems: 'center'
  },
  text: {
    color: white,
    fontSize: 40
  },
  health: {
    fontWeight: 'bold'
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  buttonMargin: {
    marginTop: 20
  },
  secondaryButton: {
    borderColor: white,
    width: '100%',
    justifyContent: 'center'
  },
  secondaryButtonText: {
    color: white
  },
  primaryButton: {
    borderColor: white,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: white
  },
  primaryButtonText: {
    color: primary
  },
  uppercase: {
    textTransform: 'uppercase'
  },
  bgColor: {
    backgroundColor: primary
  }
});

export default styles;
