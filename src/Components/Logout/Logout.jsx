import React from 'react';
import PropTypes from 'prop-types';

import styles from './Logout.styles';
import { useContextValue } from '../../Context/Context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'native-base';

const Logout = () => {
  const [{ logout }] = useContextValue();

  return (
    <TouchableOpacity onPress={logout} style={styles.button}>
      <Icon name="logout" type="AntDesign" style={styles.icon} />
    </TouchableOpacity>
  );
};

Logout.defaultProps = {};
Logout.propTypes = {};

export default Logout;
