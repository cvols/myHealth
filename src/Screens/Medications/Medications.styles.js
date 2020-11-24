import { StyleSheet } from 'react-native';

import theme from '../../../theme';

const { secondary } = theme.palette;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: secondary,
    paddingVertical: 20
  }
});

export default styles;
