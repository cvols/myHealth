import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Text } from 'native-base';
import firebase from 'firebase';

import { CenterView } from '../../Components';
import { Card } from './Components';
import styles from './DoctorAppointments.styles';
import { useContextValue } from '../../Context/Context';

const DoctorAppointments = () => {
  const [{ logout }, dispatch] = useContextValue();
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
    <CenterView style={styles.container} noPadding>
      <Button
        onPress={() => {
          try {
            logout();
            dispatch({
              type: 'CLEAR_USER'
            });
          } catch (err) {
            console.error(err);
          }
        }}
      >
        <Text>logout</Text>
      </Button>
      <Text>Your 3 most recent appointments</Text>
      {doctorAppointments
        ?.sort((a, b) => a.lastVisit < b.lastVisit)
        .slice(0, 3)
        .map((appointment, index) => {
          const {
            location,
            doctor,
            lastVisit,
            notes,
            type,
            image,
            nextVisit,
            phoneNumber
          } = appointment;

          return (
            <Card
              key={index}
              location={location}
              doctorName={doctor}
              lastVisit={lastVisit}
              notes={notes}
              type={type}
              image={image}
              nextVisit={nextVisit}
              phoneNumber={phoneNumber}
            />
          );
        })}
    </CenterView>
  );
};

DoctorAppointments.defaultProps = {};
DoctorAppointments.propTypes = {};

export default DoctorAppointments;
