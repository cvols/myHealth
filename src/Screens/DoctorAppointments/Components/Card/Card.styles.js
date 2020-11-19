import { StyleSheet } from 'react-native';
import theme from '../../../../../theme';

const { primary } = theme.palette;

const styles = StyleSheet.create({
  container: {
    width: '90%'
  },
  card: {
    borderLeftWidth: 10,
    borderLeftColor: primary,
    flexDirection: 'row',
    width: '100%'
  },
  footerContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  dataContainer: {
    flex: 9
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  icon: {
    color: primary
  }
});

export default styles;
