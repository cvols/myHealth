import { StyleSheet } from 'react-native';
import theme from '../../../theme';

const { blue, midnightBlue, white, primary, secondary } = theme.palette;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 400 / 2
  },
  imageContainer: {
    alignItems: 'center',
    height: 250,
    justifyContent: 'center',
    backgroundColor: secondary
  },
  doctorNameContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: midnightBlue
  },
  text: {
    color: white
  },
  barText: {
    color: primary
  },
  listContainer: {
    flex: 2,
    justifyContent: 'center'
  },
  buttonContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 1
  },
  button: {
    backgroundColor: midnightBlue
  },
  buttonText: {
    color: white
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center'
  },
  modalView: {
    borderWidth: 10,
    borderColor: 'black',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  icon: {
    marginTop: '10%',
    marginLeft: 10
  }
});

export default styles;
