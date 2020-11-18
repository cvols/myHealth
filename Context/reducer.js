import firebase from 'firebase';
import { TYPES } from './types';

export const initialState = {
  login: (email, password) => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          console.log({ res });
          return resolve(res);
        })
        .catch(err => {
          return reject(err);
        });
    });
  },
  logout: () => firebase.auth().signOut,
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
        ...state
      };
    default:
      return state;
  }
};
