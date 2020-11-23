import React from 'react';
import PropTypes from 'prop-types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Medications } from './Screens';
import { HomeStack } from './Stacks';
import theme from '../theme';

const Tabs = createBottomTabNavigator();
const { primary, darkGray } = theme.palette;

const AppTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Doctor Appointments') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Medications') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: primary,
        inactiveTintColor: darkGray
      }}
    >
      <Tabs.Screen name="Doctor Appointments" component={HomeStack} />
      <Tabs.Screen name="Medications" component={Medications} />
    </Tabs.Navigator>
  );
};

AppTabs.defaultProps = {};
AppTabs.propTypes = {};

export default AppTabs;
