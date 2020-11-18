import { StyleSheet } from 'react-native';
import theme from '../../../theme';

const { primary, secondary, white, darkGray, facebook, google } = theme.palette;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: secondary,
    paddingLeft: 20,
    paddingRight: 20
  },
  icon: {
    color: primary,
    fontSize: 60
  },
  iconContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  primaryButton: {
    borderColor: white,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: white
  },
  buttonText: {
    color: primary,
    fontWeight: 'bold'
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  horizontalLine: {
    borderBottomColor: darkGray,
    borderBottomWidth: 1,
    flex: 2,
    marginBottom: 5
  },
  connectText: {
    flex: 2,
    textAlign: 'center',
    color: darkGray,
    fontSize: 10
  },
  horizontalContainer: {
    flexDirection: 'row',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  connectContainer: {
    flexDirection: 'row',
    width: '90%'
  },
  uppercase: {
    textTransform: 'uppercase'
  },
  facebookButton: {
    backgroundColor: facebook,
    borderColor: facebook
  },
  googleButton: {
    backgroundColor: google,
    borderColor: google
  },
  socialText: {
    color: white
  },
  socialIcon: {
    color: white
  },
  socialButtonContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    marginTop: 10
  },
  socialButtons: {
    flexDirection: 'row',
    width: '90%',
    alignContent: 'center',
    justifyContent: 'space-between'
  },
  formContainer: {
    justifyContent: 'space-evenly',
    width: '90%'
  },
  bigContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  socialsContainer: {
    flex: 1
  },
  passwordContainer: {
    marginTop: -10,
    marginLeft: 0
  },
  emailContainer: {
    marginLeft: 0
  },
  input: {
    color: primary
  },
  eyeIcon: {
    color: white
  },
  eyeIconRed: {
    color: primary
  },
  errorMessageContainer: {
    alignItems: 'center',
    height: 50
  },
  label: {
    color: primary
  }
});

export default styles;
