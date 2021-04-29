import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';
import { useAuthState } from 'react-firebase-hooks/auth';
import Firebase from './Firebase';
import Signup from './src/screens/Signup';

export default function App() {
  // const [user, loading, error] = useAuthState(Firebase.auth());

  return (
    <View style={styles.container}>
      <Signup />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
