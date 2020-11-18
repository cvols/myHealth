import firebase from 'firebase';
import { TYPES } from './types';

export const initialState = {
  logout: () => firebase.auth().signOut(),
  user: null
};

export default (state, action) => {
  const { SET_USER, CLEAR_USER } = TYPES;

  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload.user
      };
    case CLEAR_USER:
      return {
        ...initialState
      };
    default:
      return state;
  }
};
