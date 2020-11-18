import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text, View } from 'react-native';

const Register = ({ navigation, route }) => {
  console.log({ route });
  return (
    <View>
      <Text>I am register</Text>
      <Button
        title="go to login"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </View>
  );
};

Register.defaultProps = {};
Register.propTypes = {};

export default Register;
