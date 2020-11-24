import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from '@react-navigation/stack';

import { Appointment, DoctorAppointments } from '../Screens';
import { useContextValue } from '../Context/Context';

const Stack = createStackNavigator();

const DoctorStack = () => {
  const [{ user }] = useContextValue();

  return (
    <Stack.Navigator initialRouteName="Doctor Appointments">
      <Stack.Screen
        options={{
          title: `Welcome ${user.email}`
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
