import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from '@react-navigation/stack';

import { Medications, Medication } from '../Screens';
import { useContextValue } from '../Context/Context';

const Stack = createStackNavigator();

const MedicationStack = () => {
  const [{ medication }] = useContextValue();

  return (
    <Stack.Navigator initialRouteName="Medications">
      <Stack.Screen
        options={{
          title: 'Medications'
        }}
        name="Medications"
        component={Medications}
      />
      <Stack.Screen
        options={{
          title: medication
        }}
        name="Medication"
        component={Medication}
      />
    </Stack.Navigator>
  );
};

MedicationStack.defaultProps = {};
MedicationStack.propTypes = {};

export default MedicationStack;
