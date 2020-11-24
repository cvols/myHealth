import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from 'firebase';

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
    <ScrollView contentContainerStyle={styles.container} noPadding>
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
    </ScrollView>
  );
};

DoctorAppointments.defaultProps = {};
DoctorAppointments.propTypes = {};

export default DoctorAppointments;
