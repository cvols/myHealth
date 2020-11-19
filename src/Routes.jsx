import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NavigationContainer } from '@react-navigation/native';
import firebase from 'firebase';

import { useContextValue } from './Context/Context';
import { TYPES } from './Context/types';
import { ActivityIndicator } from 'react-native';
import { CenterView } from './Components';
import AppTabs from './AppTabs';
import AuthStack from './AuthStack';


const Routes = () => {
  const [{ user }, dispatch] = useContextValue();
  const [loading, setLoading] = useState(true);

  const authListener = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch({
          type: TYPES.SET_USER,
          payload: user.email
        });
      } else {
        dispatch({
          type: TYPES.CLEAR_USER
        });
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  if (loading) {
    return (
      <CenterView>
        <ActivityIndicator size="large" />
      </CenterView>
    );
  }

  return (
    <NavigationContainer>
      {user.email ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

Routes.defaultProps = {};
Routes.propTypes = {};

export default Routes;
