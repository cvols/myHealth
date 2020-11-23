import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Body,
  Button,
  DatePicker,
  Icon,
  Item,
  Left,
  ListItem,
  Picker,
  Text,
  View
} from 'native-base';
import { Image, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './Appointment.styles';
import { convertTime } from '../../Helpers';
import { Location } from './Components';

const Appointment = ({ route }) => {
  const {
    image,
    doctorName,
    type,
    lastVisit,
    phoneNumber,
    notes,
    nextVisit,
    location
  } = route.params;
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [show, setShow] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    console.log('date: ', currentDate);

    setDate(currentDate);
  };

  const handleTimeChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    console.log('time: ', currentDate);
    setTime(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  console.log('date: ', date.toString().substr(0, 15));

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.doctorNameContainer}>
        <Text style={styles.text}>Doctor: {doctorName}</Text>
        <Text style={styles.text}>{type}</Text>
      </View>
      <View style={styles.listContainer}>
        <ListItem icon style={styles.bar}>
          <Left>
            <Icon
              type="FontAwesome"
              name="calendar-check-o"
              style={styles.barText}
            />
          </Left>
          <Body>
            <Text style={styles.barText}>
              Last Visit: {convertTime(lastVisit)}
            </Text>
          </Body>
        </ListItem>
        <ListItem icon style={styles.bar}>
          <Left>
            <Icon
              type="FontAwesome5"
              name="notes-medical"
              style={styles.barText}
            />
          </Left>
          <Body>
            <Text style={styles.barText}>{notes}</Text>
          </Body>
        </ListItem>
        <ListItem icon style={styles.bar}>
          <Left>
            <Icon
              type="FontAwesome"
              name="calendar-minus-o"
              style={styles.barText}
            />
          </Left>
          <Body>
            <Text style={styles.barText}>
              Next Visit: {convertTime(nextVisit)}
            </Text>
          </Body>
        </ListItem>
        <ListItem icon style={styles.bar}>
          <Left>
            <Icon type="FontAwesome" name="phone" style={styles.barText} />
          </Left>
          <Body>
            <Text style={styles.barText}>{phoneNumber}</Text>
          </Body>
        </ListItem>
        <ListItem icon style={styles.bar}>
          <Left>
            <Icon type="FontAwesome" name="map-marker" style={styles.barText} />
          </Left>
          <Body>
            <Location location={location} customStyle={styles.barText} />
          </Body>
        </ListItem>
      </View>
      <View style={styles.buttonContainer}>
        <Button iconLeft style={styles.button} onPress={showDatepicker}>
          <Icon
            type="FontAwesome"
            name="calendar-plus-o"
            style={styles.buttonText}
          />
          <Text style={styles.buttonText}>Book an appointment</Text>
        </Button>
      </View>
      <View>
        <Modal animationType="slide" visible={show}>
          <Icon
            onPress={() => setShow(false)}
            type="FontAwesome"
            name="close"
            style={styles.icon}
          />
          {show && (
            <View style={styles.centeredView}>
              <DateTimePicker
                testId="dateTimePicker"
                value={date}
                mode={'date'}
                is24Hour
                display="default"
                onChange={handleDateChange}
              />
              <DateTimePicker
                testId="dateTimePicker"
                value={time}
                mode={'time'}
                is24Hour
                display="default"
                onChange={handleTimeChange}
              />
            </View>
          )}
        </Modal>
      </View>
    </View>
  );
};

Appointment.defaultProps = {
  location: {
    longitude: null,
    latitude: null,
    doctorName: null,
    lastVisit: null,
    notes: null,
    type: null
  }
};
Appointment.propTypes = {
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
export default Appointment;
