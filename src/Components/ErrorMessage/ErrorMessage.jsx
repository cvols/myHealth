import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'native-base';

import styles from './ErrorMessage.styles';

const ErrorMessage = ({ errorMessage }) => {
  return (
    <View>
      <Text style={styles.error}>{errorMessage}</Text>
    </View>
  );
};

ErrorMessage.defaultProps = {};
ErrorMessage.propTypes = {
  errorMessage: PropTypes.string.isRequired
};

export default ErrorMessage;
