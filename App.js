import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Login from './src/screens/Login';
import { useAuthState } from 'react-firebase-hooks/auth';
import Firebase from './Firebase';
import Signup from './src/screens/Signup';
import Home from './src/screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import EventProfile from './src/screens/EventProfile';

const RootStack = createStackNavigator();

const App = () => {
  // const [user, loading, error] = useAuthState(Firebase.auth());

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Signup" component={Signup} />
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="EventProfile" component={EventProfile} />
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
