import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from "./src/screens/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import Firebase from "./Firebase";


export default function App() {

    const [user, loading, error] = useAuthState(Firebase.auth());
    console.log('user', user)
    console.log('loading :', loading)
    console.log('error :', error  )
  return (
    <View style={styles.container}>
      <Login />
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
