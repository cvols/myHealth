import React from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

const Login = ({ navigation }) => {
  return (
    <View>
      <Text>I am a login screen</Text>
      <Button
        title="go to register"
        onPress={() => {
          navigation.navigate('Register');
        }}
      />
    </View>
  );
};

Login.defaultProps = {};
Login.propTypes = {};

export default Login;
