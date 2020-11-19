import firebase from 'firebase';
import { TYPES } from './types';

export const initialState = {
  logout: () => firebase.auth().signOut(),
  user: {
    email: null,
    doctorAppointments: []
  }
};

export default (state, action) => {
  const { SET_USER, CLEAR_USER, SET_DOCTOR_APPOINTMENTS } = TYPES;

  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.payload
        }
      };
    case CLEAR_USER:
      return {
        ...initialState
      };
    default:
      return state;
  }
};
