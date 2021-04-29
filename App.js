import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Login from './src/screens/Login';
import { useAuthState } from 'react-firebase-hooks/auth';
import Firebase from './Firebase';
import Signup from './src/screens/Signup';
import { createStackNavigator } from '@react-navigation/stack';

const RootStack = createStackNavigator();

const App = () => {
  // const [user, loading, error] = useAuthState(Firebase.auth());

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Signup" component={Signup} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
