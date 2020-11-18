import React from 'react';
import firebase from 'firebase';

import { Context } from './Context/Context';
import reducer, { initialState } from './Context/reducer';
import Router from './Router';

const firebaseConfig = {
  apiKey: 'AIzaSyByUmoogR9Y_iuQG1Q4ApgcQixDPrmXIK4',
  authDomain: 'myhealth-ee85a.firebaseapp.com',
  databaseURL: 'https://myhealth-ee85a.firebaseio.com',
  projectId: 'myhealth-ee85a',
  storageBucket: 'myhealth-ee85a.appspot.com',
  messagingSenderId: '836407762335',
  appId: '1:836407762335:web:4b7e322b969848dd5db1aa'
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <Context initialState={initialState} reducer={reducer}>
      <Router />
    </Context>
  );
}
