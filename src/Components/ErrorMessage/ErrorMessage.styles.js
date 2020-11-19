import { StyleSheet } from 'react-native';
import theme from '../../../theme';

const { error } = theme.palette;

const styles = StyleSheet.create({
  error: {
    color: error,
    fontStyle: 'italic'
  }
});

export default styles;
