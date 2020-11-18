import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import firebase from 'firebase';

import { Login, Register, Welcome } from '../Screens';
import { useContextValue } from '../Context/Context';
import { TYPES } from '../Context/types';

const Stack = createStackNavigator();

const Routes = () => {
  const [{ user }, dispatch] = useContextValue();
  const authListener = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        return dispatch({
          type: TYPES.SET_USER,
          payload: {
            user
          }
        });
      } else {
        return dispatch({
          type: TYPES.CLEAR_USER
        });
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <React.Fragment>
      {user ? (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTitle: 'Welcome'
            }}
            initialRouteName="Login"
          >
            <Stack.Screen
              options={{
                header: () => null
              }}
              name="Login"
              component={Login}
            />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
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
        </NavigationContainer>
      )}
    </React.Fragment>
  );
};

Routes.defaultProps = {};
Routes.propTypes = {};

export default Routes;
