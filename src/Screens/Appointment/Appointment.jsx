import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'native-base';

const Appointment = ({ location, doctorName, lastVisit, notes, type }) => {
  return (
    <View>
      <Text>appointment</Text>
    </View>
  );
};

Appointment.defaultProps = {
  location: {
    longitude: null,
    latitude: null,
    doctorName: null,
    lastVisit: null,
    notes: null,
    type: null
  }
};
Appointment.propTypes = {
  location: PropTypes.shape({
    longitude: PropTypes.number,
    latitude: PropTypes.number
  }),
  doctorName: PropTypes.string,
  lastVisit: PropTypes.shape({
    nanoSeconds: PropTypes.number,
    seconds: PropTypes.number
  }),
  notes: PropTypes.string,
  type: PropTypes.string
};
export default Appointment;
