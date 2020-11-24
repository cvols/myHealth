import React from 'react';
import PropTypes from 'prop-types';
import { Body, Card, CardItem, Icon, Text, View } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './MobileCard.styles';
import { useContextValue } from '../../../../Context/Context';
import { TYPES } from '../../../../Context/types';

const icons = [
  'book-medical',
  'briefcase-medical',
  'clinic-medical',
  'comment-medical',
  'file-medical-alt',
  'file-medical',
  'laptop-medical',
  'medkit',
  'notes-medical',
  'pills'
];

const MobileCard = ({
  dosage,
  frequency,
  name,
  pricePerDosage,
  startDate,
  strength
}) => {
  const [{}, dispatch] = useContextValue();
  const navigation = useNavigation();
  const handlePress = () => {
    dispatch({
      type: TYPES.SET_MEDICATION,
      payload: name
    });

    navigation.navigate('Medication', {
      dosage,
      frequency,
      name,
      pricePerDosage,
      startDate,
      strength
    });
  };

  return (
    <Card style={styles.card}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <CardItem style={styles.iconContainer}>
          <Icon
            type="FontAwesome5"
            name={icons[Math.floor(Math.random() * icons.length)]}
            style={styles.icon}
          />
        </CardItem>
        <CardItem style={styles.nameContainer}>
          <Body>
            <Text style={styles.name}>{name}</Text>
          </Body>
        </CardItem>
      </TouchableOpacity>
    </Card>
  );
};

MobileCard.defaultProps = {};
MobileCard.propTypes = {
  dosage: PropTypes.number.isRequired,
  frequency: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pricePerDosage: PropTypes.number.isRequired,
  startDate: PropTypes.shape({
    nanoseconds: PropTypes.number.isRequired,
    seconds: PropTypes.number.isRequired
  }).isRequired,
  strength: PropTypes.string.isRequired
};

export default MobileCard;
