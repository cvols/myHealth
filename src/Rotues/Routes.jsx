import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Login, Register, Welcome } from '../Screens';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // screenOptions={{
        // headerTitle: 'SignUp'
        // }}
        initialRouteName="Welcome"
      >
        <Stack.Screen
          options={{
            header: () => null
          }}
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Register"
          // options={{
          // header: () => null
          // }}
          component={Register}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

Routes.defaultProps = {};
Routes.propTypes = {};

export default Routes;
