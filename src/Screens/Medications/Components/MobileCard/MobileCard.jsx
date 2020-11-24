import React from 'react';
import PropTypes from 'prop-types';
import { Body, Card, CardItem, Icon, Text, View } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './MobileCard.styles';

const MobileCard = ({
  dosage,
  frequency,
  name,
  pricePerDosage,
  startDate,
  strength
}) => {
  const navigation = useNavigation();
  console.log('navigation: ', navigation);
  const handlePress = () => {
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
          <Icon type="FontAwesome5" name="pills" style={styles.icon} />
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
