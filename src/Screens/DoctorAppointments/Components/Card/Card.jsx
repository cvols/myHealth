import React from 'react';
import PropTypes from 'prop-types';
import {
  Body,
  Card as ReactCard,
  CardItem,
  Icon,
  Text,
  View
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './Card.styles';

const Card = ({
  location,
  doctorName,
  lastVisit,
  notes,
  type,
  image,
  nextVisit,
  phoneNumber
}) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('Appointment', {
      doctorName,
      image,
      lastVisit,
      location,
      notes,
      type,
      nextVisit,
      phoneNumber
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <ReactCard style={styles.card}>
        <View style={styles.dataContainer}>
          <CardItem>
            <Text style={styles.title}>{doctorName}</Text>
          </CardItem>
          <CardItem>
            <Text style={styles.type}>{type}</Text>
          </CardItem>
        </View>
        <View style={styles.iconContainer}>
          <Icon name="chevron-right" type="Feather" style={styles.icon} />
        </View>
      </ReactCard>
    </TouchableOpacity>
  );
};

Card.defaultProps = {
  location: {
    longitude: null,
    latitude: null,
    doctorName: null,
    lastVisit: null,
    notes: null,
    type: null
  }
};
Card.propTypes = {
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
  type: PropTypes.string,
  image: PropTypes.string
};

export default Card;
