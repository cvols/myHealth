import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { View } from 'native-base';

import styles from './CenterView.styles';

const CenterView = ({ children, style, noPadding }) => {
  return (
    <View
      style={noPadding ? [styles.noPadding, style] : [styles.center, style]}
    >
      {children}
    </View>
  );
};

CenterView.defaultProps = {
  noPadding: false
};
CenterView.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({}),
  noPadding: PropTypes.bool
};

export default CenterView;
