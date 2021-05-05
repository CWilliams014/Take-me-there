import React from 'react';

import {
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-elements';
import Firebase from '../../Firebase';
import { login } from '../store/AuthReducer';
import { useDispatch, useSelector } from 'react-redux';
// componentize w Signup
const Login = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  function handleLogin() {
    dispatch(login(email, password));

    // Firebase.auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then((response) => {
    //     const { email, uid } = response.user;
    //
    //     const idTokenResult = async () => {
    //       const result = await response.user.getIdTokenResult();
    //       console.warn('Token Result', result);
    //     };
    //
    //     console.warn('Login user:', idTokenResult());
    //     navigation.navigate('Home', { email, uid });
    //   })
    //   .catch((error) => {
    //     console.warn('Login Error :', error);
    //   });
  }
  React.useEffect(() => {
    console.log('useEffect auth :', authState);
    if (authState.status === 'resolved') {
      // { email, uid }
      navigation.navigate('Home');
    }
  }, [authState.status]);

  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.logoText}>Take Me There</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
            />
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              secureTextEntry={true}
            />
            <Button
              buttonStyle={styles.loginButton}
              onPress={handleLogin}
              title="Login"
            />
            <Button
              buttonStyle={styles.signupButton}
              title="New User? Sign Up"
              onPress={() => navigation.navigate('Signup')}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: '800',
    marginTop: 150,
    marginBottom: 30,
    textAlign: 'center',
  },
  loginFormView: {
    flex: 1,
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  loginButton: {
    backgroundColor: '#3897f1',
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  signupButton: {
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 5,
    marginLeft: 15,
    marginRight: 15,
    alignItems: 'center',
    backgroundColor: '#FFA611',
    borderColor: '#FFA611',
    borderWidth: 1,
    borderRadius: 5,
    height: 55,
  },
  signupButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Login;
