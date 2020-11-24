import { StyleSheet } from 'react-native';

import theme from '../../../theme';

const { primary } = theme.palette;

const styles = StyleSheet.create({
  text: {
    textTransform: 'capitalize'
  },
  card: {
    flex: 1
  },
  view: {
    justifyContent: 'flex-end',
    flex: 1,
    marginBottom: 20,
    alignItems: 'center'
  },
  container: {
    flex: 1
  },
  warning: {
    fontStyle: 'italic'
  },
  dollar: {
    color: primary
  }
});

export default styles;
