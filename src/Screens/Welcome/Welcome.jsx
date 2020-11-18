import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Button, Icon } from 'native-base';

import styles from './Welcome.styles';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.myHealthContainer}>
        <Icon type="FontAwesome" name="heart" style={styles.text} />
        <Text style={styles.text}>
          my<Text style={[styles.text, styles.health]}>health</Text>
        </Text>
      </View>
      <View>
        <View style={styles.buttonContainer}>
          <Button rounded bordered style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>SIGN UP</Text>
          </Button>
        </View>
        <View style={[styles.buttonContainer, styles.buttonMargin]}>
          <Button rounded bordered style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>LOGIN</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

Welcome.defaultProps = {};
Welcome.propTypes = {};

export default Welcome;
