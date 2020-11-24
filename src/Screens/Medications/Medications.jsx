import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'native-base';
import firebase from 'firebase';

import styles from './Medications.styles';
import { CenterView } from '../../Components';
import { MobileCard } from './Components';

const Medications = () => {
  const [medications, setMedications] = useState([]);

  useEffect(() => {
    (async () => {
      const db = firebase.firestore();
      const data = await db
        .collection('58E9mtBkSZOBTHOOQptM10tersh1')
        .doc('dDyvr3qlimyUERgwBcIK')
        .collection('medications')
        .get();

      setMedications(data.docs.map(doc => doc.data()));
    })();
  }, []);
  return (
    <View style={styles.container}>
      {medications?.map(medication => {
        console.log('medication: ', medication);
        const {
          dosage,
          frequency,
          name,
          pricePerDosage,
          startDate,
          strength
        } = medication;
        return (
          <MobileCard
            dosage={dosage}
            frequency={frequency}
            name={name}
            pricePerDosage={pricePerDosage}
            startDate={startDate}
            strength={strength}
          />
        );
      })}
    </View>
  );
};

Medications.defaultProps = {};
Medications.propTypes = {};

export default Medications;
