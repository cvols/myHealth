import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Button, Icon } from 'native-base';
import * as Animatable from 'react-native-animatable';

import styles from './Welcome.styles';
import { CenterView } from '../../Components';

const Welcome = ({ navigation }) => {
  const handleClick = screen => {
    if (screen === 'Login') {
      return navigation.navigate('Register', { login: true });
    }

    return navigation.navigate(screen);
  };

  return (
    <CenterView style={styles.bgColor}>
      <View style={styles.container}>
        <View style={styles.myHealthContainer}>
          <Animatable.View
            animation="pulse"
            easing="ease-out"
            iterationCount="infinite"
          >
            <Icon type="FontAwesome" name="heart" style={styles.text} />
          </Animatable.View>
          <Text style={styles.text}>
            my<Text style={[styles.text, styles.health]}>health</Text>
          </Text>
        </View>
        <View>
          <View style={styles.buttonContainer}>
            <Button
              rounded
              bordered
              style={styles.secondaryButton}
              onPress={() => handleClick('Register')}
            >
              <Text style={[styles.secondaryButtonText, styles.uppercase]}>
                Sign Up
              </Text>
            </Button>
          </View>
          <View style={[styles.buttonContainer, styles.buttonMargin]}>
            <Button
              rounded
              bordered
              style={styles.primaryButton}
              onPress={() => handleClick('Login')}
            >
              <Text style={[styles.primaryButtonText, styles.uppercase]}>
                Login
              </Text>
            </Button>
          </View>
        </View>
      </View>
    </CenterView>
  );
};

Welcome.defaultProps = {};
Welcome.propTypes = {};

export default Welcome;
