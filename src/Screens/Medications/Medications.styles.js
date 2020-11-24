import { StyleSheet } from 'react-native';

import theme from '../../../theme';

const { primary } = theme.palette;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'orange',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flex: 1,
    alignContent: 'center',
    backgroundColor: primary
  }
});

export default styles;
