import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { AsyncStorage } from 'react-native';

import { Context } from './src/Context/Context';
import reducer, { initialState } from './src/Context/reducer';
import Routes from './src/Rotues/Routes';

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
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font
      });

      setIsReady(true);
    })();
  }, []);

  return (
    <Context initialState={initialState} reducer={reducer}>
      {isReady ? <Routes /> : <AppLoading />}
    </Context>
  );
}
