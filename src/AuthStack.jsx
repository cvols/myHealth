import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from '@react-navigation/stack';

import { Register, Welcome } from './Screens';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        options={{
          header: () => null
        }}
        name="Welcome"
        component={Welcome}
      />
      <Stack.Screen
        name="Register"
        options={{
          header: () => null
        }}
        component={Register}
      />
    </Stack.Navigator>
  );
};

AuthStack.defaultProps = {};
AuthStack.propTypes = {};

export default AuthStack;
