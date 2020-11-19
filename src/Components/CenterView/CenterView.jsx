import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'native-base';

import styles from './CenterView.styles';

const CenterView = ({ children, style }) => {
  return <View style={[styles.center, style]}>{children}</View>;
};

CenterView.defaultProps = {};
CenterView.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({})
};

export default CenterView;
