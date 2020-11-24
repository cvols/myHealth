import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Body, Button, Icon, Left, ListItem, Text, View } from 'native-base';
import { Image, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import firebase from 'firebase';

import styles from './Appointment.styles';
import { convertTime } from '../../Helpers';
import { Location } from './Components';
import { useContextValue } from '../../Context/Context';
import { TYPES } from '../../Context/types';

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
  const [{ user }, dispatch] = useContextValue();
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const [theNextVisit, setTheNextVisit] = useState(null);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const handleTimeChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const handleSelectDateTimeButton = () => {
    const db = firebase.firestore();
    db.collection('58E9mtBkSZOBTHOOQptM10tersh1')
      .doc('QHDQgMdAofeVu3OQQ1rn')
      .collection('doctorAppointments')
      .doc('6SDFzWnzSgpZVj7gd0KI')
      .update({
        nextVisit: date
      });

    dispatch({
      type: TYPES.UPDATE_DOC_APPOINTMENT,
      payload: date
    });

    setShow(false);
  };

  useEffect(() => {
    if (user.nextVisit) {
      return setTheNextVisit(convertTime(user.nextVisit));
    }

    return setTheNextVisit(convertTime(nextVisit));
  }, [user.nextVisit]);

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
              style={styles.icon}
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
              style={styles.icon}
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
              style={styles.icon}
            />
          </Left>
          <Body>
            <Text style={styles.barText}>Next Visit: {theNextVisit}</Text>
          </Body>
        </ListItem>
        <ListItem icon style={styles.bar}>
          <Left>
            <Icon type="FontAwesome" name="phone" style={styles.icon} />
          </Left>
          <Body>
            <Text style={styles.barText}>{phoneNumber}</Text>
          </Body>
        </ListItem>
        <ListItem icon style={styles.bar}>
          <Left>
            <Icon type="FontAwesome" name="map-marker" style={styles.icon} />
          </Left>
          <Body>
            <Location location={location} customStyle={styles.barText} />
          </Body>
        </ListItem>
      </View>
      <View style={styles.buttonContainer}>
        <Button iconLeft style={styles.button} onPress={() => setShow(true)}>
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
            style={styles.closeIcon}
          />
          {show && (
            <View style={styles.centeredView}>
              <View style={styles.dateTimePickerContainer}>
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
                  value={date}
                  mode={'time'}
                  is24Hour
                  display="default"
                  onChange={handleTimeChange}
                />
              </View>
              <View style={styles.selectButtonContainer}>
                <Button
                  style={styles.selectButton}
                  onPress={handleSelectDateTimeButton}
                >
                  <Text>Select Date and Time</Text>
                </Button>
              </View>
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
