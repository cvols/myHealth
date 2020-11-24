import { StyleSheet } from 'react-native';

import theme from '../../../../../theme';

const { primary, white } = theme.palette;

const styles = StyleSheet.create({
  card: {
    height: 200,
    width: '45%'
  },
  iconContainer: {
    justifyContent: 'center',
    backgroundColor: primary
  },
  icon: {
    color: white,
    fontSize: 48,
    width: 'auto'
  },
  name: {
    alignSelf: 'center',
    backgroundColor: primary,
    color: white
  },
  nameContainer: {
    backgroundColor: primary
  },
  button: {
    backgroundColor: primary,
    height: '100%',
    minWidth: '100%',
    justifyContent: 'center'
  }
});

export default styles;
