import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import firebase from 'firebase';

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
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
