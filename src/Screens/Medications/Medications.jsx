import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Spinner, Text, View } from 'native-base';
import { ScrollView } from 'react-native';
import firebase from 'firebase';

import styles from './Medications.styles';
import { MobileCard } from './Components';
import theme from '../../../theme';
import CenterView from '../../Components/CenterView/CenterView';

const { primary } = theme.palette;

const Medications = () => {
  const [medications, setMedications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const db = firebase.firestore();
      const data = await db
        .collection('58E9mtBkSZOBTHOOQptM10tersh1')
        .doc('dDyvr3qlimyUERgwBcIK')
        .collection('medications')
        .get();

      if (data) {
        setLoading(false);
        setMedications(data.docs.map(doc => doc.data()));
      }
    })();
  }, []);

  if (loading) {
    return (
      <CenterView>
        <Text>
          <Spinner color={primary} />
        </Text>
      </CenterView>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {medications?.map((medication, index) => {
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
            key={index}
            dosage={dosage}
            frequency={frequency}
            name={name}
            pricePerDosage={pricePerDosage}
            startDate={startDate}
            strength={strength}
          />
        );
      })}
    </ScrollView>
  );
};

Medications.defaultProps = {};
Medications.propTypes = {};

export default Medications;
