import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from '@react-navigation/stack';

import { Appointment, DoctorAppointments } from '../Screens';
import { Logout } from '../Components';

const Stack = createStackNavigator();

const DoctorStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Doctor Appointments"
      screenOptions={{
        headerRight: () => {
          return <Logout />;
        }
      }}
    >
      <Stack.Screen
        options={{
          title: 'Most Recent Appointments'
        }}
        name="Doctor Appointments"
        component={DoctorAppointments}
      />
      <Stack.Screen name="Appointment" component={Appointment} />
    </Stack.Navigator>
  );
};

DoctorStack.defaultProps = {};
DoctorStack.propTypes = {};

export default DoctorStack;
