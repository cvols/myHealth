import firebase from 'firebase';
import { TYPES } from './types';

export const initialState = {
  logout: () => firebase.auth().signOut(),
  user: {
    email: null,
    nextVisit: null
  },
  medication: null
};

export default (state, action) => {
  const {
    SET_USER,
    CLEAR_USER,
    UPDATE_DOC_APPOINTMENT,
    SET_MEDICATION
  } = TYPES;

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
    case UPDATE_DOC_APPOINTMENT:
      return {
        ...state,
        user: {
          ...state.user,
          nextVisit: action.payload
        }
      };
    case SET_MEDICATION:
      return {
        ...state,
        medication: action.payload
      };
    default:
      return state;
  }
};
