import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Text,
  View,
  Icon,
  Form,
  Item,
  Label,
  Input
} from 'native-base';

import styles from './Register.styles';

const Register = ({ navigation, route }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = text => {
    setEmail(text);
  };

  const handlePasswordChange = text => {
    setPassword(text);
  };

  const handleEyePress = () => {
    setShowPassword(!showPassword);
  };

  console.log({ email });
  console.log({ password });

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon type="FontAwesome" name="heart" style={styles.icon} />
      </View>
      <Form style={styles.formContainer}>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input
            autoCapitalize="none"
            onChangeText={text => handleEmailChange(text)}
            autoCompleteType="off"
            value={email}
            style={styles.input}
          />
        </Item>
        <Item floatingLabel last style={styles.passwordContainer}>
          <Label>Password</Label>
          <Input
            autoCapitalize="none"
            secureTextEntry={!showPassword}
            autoCompleteType="off"
            onChangeText={text => handlePasswordChange(text)}
            value={password}
            style={styles.input}
          />
          <Icon
            type="FontAwesome"
            name="eye"
            style={!showPassword ? styles.eyeIcon : styles.eyeIconRed}
            onPress={handleEyePress}
          />
        </Item>
        <View style={styles.buttonContainer}>
          <Button rounded bordered style={styles.primaryButton}>
            <Text style={[styles.buttonText, styles.uppercase]}>Sign Up</Text>
          </Button>
        </View>
      </Form>
      <View style={styles.socialsContainer}>
        <View style={styles.horizontalContainer}>
          <View style={styles.connectContainer}>
            <View style={styles.horizontalLine} />
            <Text style={[styles.connectText, styles.uppercase]}>
              or connect with
            </Text>
            <View style={styles.horizontalLine} />
          </View>
        </View>
        <View style={styles.socialButtonContainer}>
          <View style={styles.socialButtons}>
            <Button rounded iconLeft bordered style={styles.facebookButton}>
              <Icon
                type="FontAwesome"
                name="facebook-f"
                style={styles.socialIcon}
              />
              <Text style={[styles.socialText, styles.uppercase]}>
                Facebook
              </Text>
            </Button>
            <Button rounded iconLeft bordered style={styles.googleButton}>
              <Icon
                type="FontAwesome"
                name="google"
                style={styles.socialIcon}
              />
              <Text style={[styles.socialText, styles.uppercase]}>Google</Text>
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

Register.defaultProps = {};
Register.propTypes = {};

export default Register;
