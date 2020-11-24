import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from '@react-navigation/stack';

import { Appointment, DoctorAppointments, Medications } from '../Screens';
import { useContextValue } from '../Context/Context';

const Stack = createStackNavigator();

const HomeStack = () => {
  const [{ user }] = useContextValue();

  return (
    <Stack.Navigator initialRouteName="Medications">
      <Stack.Screen
        options={{
          title: `Welcome ${user.email}`
        }}
        name="Doctor Appointments"
        component={DoctorAppointments}
      />
      <Stack.Screen name="Medications" component={Medications} />
      <Stack.Screen name="Appointment" component={Appointment} />
    </Stack.Navigator>
  );
};

HomeStack.defaultProps = {};
HomeStack.propTypes = {};

export default HomeStack;
