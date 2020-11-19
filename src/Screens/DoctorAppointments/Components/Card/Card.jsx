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

import { convertTime } from '../../../../Helpers';
import Location from '../Location';
import styles from './Card.styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Card = ({ location, doctorName, lastVisit, notes }) => {
  const handlePress = () => {
    console.log('pressed');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <ReactCard style={styles.card}>
        <View style={styles.dataContainer}>
          <CardItem header>
            <Text>Doctor: {doctorName}</Text>
          </CardItem>
          <CardItem style={styles.footerContainer}>
            <Text>{convertTime(lastVisit)}</Text>
            <Location location={location} />
          </CardItem>
        </View>
        <View style={styles.iconContainer}>
          <Icon name="chevron-right" type="Feather" style={styles.icon} />
        </View>
      </ReactCard>
    </TouchableOpacity>
  );
};

Card.defaultProps = {};
Card.propTypes = {};

export default Card;
