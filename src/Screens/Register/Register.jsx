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
import * as Animatable from 'react-native-animatable';
import firebase from 'firebase';
import { AsyncStorage } from 'react-native';

import styles from './Register.styles';
import { useContextValue } from '../../Context/Context';
import { TYPES } from '../../Context/types';
import { ErrorMessage } from '../../Components';

const Register = ({ navigation, route }) => {
  const [{ user }, dispatch] = useContextValue();
  const [email, setEmail] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const login = route?.params?.login;

  const handleEmailChange = text => {
    if (emailError) {
      setEmailError(null);
    }
    setEmail(text);
  };

  const handlePasswordChange = text => {
    if (passwordError) {
      setPasswordError(null);
    }
    setPassword(text);
  };

  const handleEyePress = () => {
    setShowPassword(!showPassword);
  };

  const handleClick = () => {
    login
      ? firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(res => {
            const { user } = res;

            dispatch({
              type: 'SET_USER',
              payload: {
                user
              }
            });

            return AsyncStorage.setItem('userToken: ', user.refreshToken);
          })
          .catch(err => {
            switch (err.code) {
              case 'auth/invalid-email':
              case 'auth/user-disabled':
              case 'auth/user-not-found':
                setEmailError(err.message);
                break;
              case 'auth/wrong-password':
                setPasswordError(err.message);
                break;
            }
          })
      : firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(res => {
            const { user } = res;

            dispatch({
              type: TYPES.SET_USER,
              payload: {
                user
              }
            });
          })
          .catch(err => {
            const { code, message } = err;

            switch (code) {
              case 'auth/email-already-in-use':
              case 'auth/invalid-email':
                setEmailError(message);
                break;
              case 'auth/weak-password':
                setPasswordError(message);
                break;
            }
          });
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Animatable.View
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
        >
          <Icon type="FontAwesome" name="heart" style={styles.icon} />
        </Animatable.View>
      </View>
      <View style={styles.bigContainer}>
        <Form style={styles.formContainer}>
          <Item floatingLabel style={styles.emailContainer}>
            <Label style={styles.label}>Email</Label>
            <Input
              autoCapitalize="none"
              onChangeText={text => handleEmailChange(text)}
              autoCompleteType="off"
              value={email}
              style={styles.input}
            />
          </Item>
          <View style={styles.errorMessageContainer}>
            {emailError && <ErrorMessage errorMessage={emailError} />}
          </View>
          <Item floatingLabel style={styles.passwordContainer}>
            <Label style={styles.label}>Password</Label>
            <Input
              autoCapitalize="none"
              secureTextEntry={!showPassword}
              autoCompleteType="off"
              onChangeText={text => handlePasswordChange(text)}
              value={password}
              style={styles.input}
              selectionColor="#000"
            />
            <Icon
              type="FontAwesome"
              name="eye"
              style={!showPassword ? styles.eyeIcon : styles.eyeIconRed}
              onPress={handleEyePress}
            />
          </Item>
          <View style={styles.errorMessageContainer}>
            {passwordError && <ErrorMessage errorMessage={passwordError} />}
          </View>
          <View style={styles.buttonContainer}>
            <Button
              rounded
              bordered
              style={styles.primaryButton}
              onPress={handleClick}
            >
              <Text style={[styles.buttonText, styles.uppercase]}>
                {login ? 'Login' : 'Sign Up'}
              </Text>
            </Button>
          </View>
        </Form>
      </View>
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
Register.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      login: PropTypes.bool
    })
  })
};

export default Register;
