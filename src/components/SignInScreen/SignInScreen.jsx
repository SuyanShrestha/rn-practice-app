import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import {authentication} from '../../../config';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {signInWithEmailAndPassword} from 'firebase/auth';

const LoginScreen = ({navigation}) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then(res => {
        console.warn(res);
        setIsSignedIn(true);
      })
      .catch(err => console.warn(err));
  };

  const signInUser = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then(res => {
        console.warn(res);
        setIsSignedIn(true);
      })
      .catch(err => alert(err));
  };
 
  const signOutUser = () => {
    authentication.signOut();
    setIsSignedIn(false);
  };

  if (isSignedIn) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
        }}>
        <Text>Logged In</Text>
        <Button title='User Profile' onPress={() => navigation.navigate("ProfileScreen")}/>
        <Button onPress={signOutUser} title="Sign out" />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
      }}>
      <Text>LoginScreen</Text>
      <View>
        <TextInput
          placeholder="Enter email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          placeholder="Enter password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
      </View>
      <Button title="Register" onPress={registerUser} />
      <Button title="Sign In" onPress={signInUser} />
    </View>
  );
};

export default LoginScreen;
