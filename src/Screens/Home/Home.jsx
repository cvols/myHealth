import React from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'firebase';

import { useContextValue } from '../../Context/Context';
import { TYPES } from '../../Context/types';

const Home = ({ navigation }) => {
  const [{ user, logout }, dispatch] = useContextValue();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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

Home.defaultProps = {};
Home.propTypes = {};

export default Home;
