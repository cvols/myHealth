import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'native-base';
import axios from 'axios';

import styles from './Location.styles';

const Location = ({ location, customStyle }) => {
  const { longitude, latitude } = location;
  const [state, setState] = useState({
    city: null,
    state: null,
    postcode: null
  });
  useEffect(() => {
    axios
      .get(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
      )
      .then(res => {
        const { city, locality, principalSubdivision, postcode } = res.data;

        setState({
          city: city || locality,
          state: principalSubdivision,
          postcode
        });
      })
      .catch(console.error);
  }, []);
  return (
    <View style={styles.container}>
      <Text
        style={customStyle}
      >{`${state.city}, ${state.state}, ${state.postcode}`}</Text>
    </View>
  );
};

Location.defaultProps = {};
Location.propTypes = {
  location: PropTypes.shape({
    longitude: PropTypes.string.isRequired,
    latitude: PropTypes.string.isRequired
  }).isRequired
};

export default Location;
