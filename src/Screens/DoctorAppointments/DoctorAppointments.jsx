import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'native-base';
import firebase from 'firebase';

import { CenterView } from '../../Components';
import { Card } from './Components';
import styles from './DoctorAppointments.styles';

const DoctorAppointments = () => {
  const [doctorAppointments, setDoctorAppointments] = useState([]);

  useEffect(() => {
    (async () => {
      const db = firebase.firestore();
      const data = await db
        .collection('58E9mtBkSZOBTHOOQptM10tersh1')
        .doc('QHDQgMdAofeVu3OQQ1rn')
        .collection('doctorAppointments')
        .get();

      setDoctorAppointments(data.docs.map(doc => doc.data()));
    })();
  }, []);

  return (
    <CenterView style={styles.container}>
      <Text>Previous Doctor Appointments</Text>
      {doctorAppointments?.map((appointment, index) => {
        const { location, doctor, lastVisit, notes } = appointment;

        return (
          <Card
            key={index}
            location={location}
            doctorName={doctor}
            lastVisit={lastVisit}
            notes={notes}
          />
        );
      })}
    </CenterView>
  );
};

DoctorAppointments.defaultProps = {};
DoctorAppointments.propTypes = {};

export default DoctorAppointments;
