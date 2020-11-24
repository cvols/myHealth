import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardItem, Text, View } from 'native-base';

import styles from './Medication.styles';
import { CenterView } from '../../Components';
import { convertTime } from '../../Helpers';

const Medication = ({ route }) => {
  const {
    dosage,
    frequency,
    name,
    pricePerDosage,
    startDate,
    strength
  } = route.params;

  const getTotalCost = (dosage, frequency, pricePerDosage) => {
    let number = 1;
    switch (frequency) {
      case 'daily':
        number = 30;
        break;
      case 'weekly':
        number = 4;
        break;
      default:
        number = 1;
        break;
    }
    const total = dosage * pricePerDosage * number;

    return <Text style={styles.dollar}>${total.toFixed(2)}</Text>;
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Card>
          <CardItem>
            <Text>Dosage: {dosage}mg</Text>
          </CardItem>
          <CardItem>
            <Text style={styles.text}>Frequency: {frequency}</Text>
          </CardItem>
          <CardItem>
            <Text>Price Per Dosage: ${pricePerDosage}</Text>
          </CardItem>
          <CardItem>
            <Text>
              Start Date: {convertTime(startDate).toString().substr(0, 10)}
            </Text>
          </CardItem>
          <CardItem>
            <Text style={styles.text}>Strength: {strength}</Text>
          </CardItem>
        </Card>
      </View>
      <View style={styles.view}>
        <Text style={styles.warning}>
          You will spend {getTotalCost(dosage, frequency, pricePerDosage)}&nbsp;
          on {name} every month.
        </Text>
      </View>
    </View>
  );
};

Medication.defaultProps = {
  dosage: null,
  frequency: null,
  name: null,
  pricePerDosage: null,
  startDate: {
    nanoseconds: null,
    seconds: null
  },
  strength: null
};
Medication.propTypes = {
  dosage: PropTypes.number,
  frequency: PropTypes.oneOf(['daily', 'weekly', 'monthly']),
  name: PropTypes.string,
  pricePerDosage: PropTypes.number,
  startDate: PropTypes.shape({
    nanoseconds: PropTypes.number,
    seconds: PropTypes.number
  }),
  strength: PropTypes.oneOf(['mild', 'medium', 'high'])
};

export default Medication;
