import React from 'react';
import PropTypes from 'prop-types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Medications, DoctorAppointments } from './Screens';

const Tabs = createBottomTabNavigator();

const AppTabs = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Doctor Appointments" component={DoctorAppointments} />
      <Tabs.Screen name="Medications" component={Medications} />
    </Tabs.Navigator>
  );
};

AppTabs.defaultProps = {};
AppTabs.propTypes = {};

export default AppTabs;
