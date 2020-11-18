import React from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'firebase';

import { useContextValue } from '../../Context/Context';
import { TYPES } from '../../Context/types';

const Login = ({ navigation }) => {
  const [{ user, logout }, dispatch] = useContextValue();
  return (
    <View>
      <Text>I am a login screen</Text>
      <Button
        title="logout"
        onPress={() => {
          logout();
          dispatch({
            type: 'CLEAR_USER'
          });
        }}
      />
    </View>
  );
};

Login.defaultProps = {};
Login.propTypes = {};

export default Login;
