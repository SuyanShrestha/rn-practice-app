import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Dimensions,
} from 'react-native';

import globalStyles from '../../../styles/globalStyles';

const Day2 = () => {
  // for text inputs
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (name, value) => {
    setForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  //   for pressables
  const [pressStatus, setPressStatus] = useState('Not Pressed');

  // for dimensions
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get('window'),
    screen: Dimensions.get('screen'),
  });

  useEffect(() => {
    const handleChange = ({window, screen}) => {
      setDimensions({window, screen});
    };

    Dimensions.addEventListener('change', handleChange);
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <ScrollView style={globalStyles.innerContainer}>
        <Text>Hey there, welcome to day2</Text>

        {/* Text inputs */}
        <View style={globalStyles.mainDiv}>
          <TextInput
            placeholder="Enter your name"
            value={form.name}
            onChangeText={text => handleChange('name', text)}
            style={styles.inputDiv}
            selectionColor={'yellow'}
            onFocus={() => console.warn('Focused')}
            onBlur={() => console.warn('Blurred')}
          />

          <TextInput
            placeholder="Enter your email"
            value={form.email}
            onChangeText={text => handleChange('email', text)}
            style={styles.inputDiv}
          />

          <TextInput
            placeholder="Enter your password"
            value={form.password}
            secureTextEntry={true}
            onChangeText={text => handleChange('password', text)}
            style={styles.inputDiv}
          />
        </View>

        {/* PLATFORM DIV */}
        <View style={globalStyles.mainDiv}>
          <Text>{Platform.OS}</Text>
          <Text>{Platform.Version}</Text>

          {/* platform.select */}
          <Text>
            {Platform.select({
              ios: 'This is iOS',
              android: 'This is Android',
            })}
          </Text>
        </View>

        {/* PRESSABLES */}
        <Pressable
          onPressIn={() => setPressStatus('Pressed In')}
          onPressOut={() => setPressStatus('Pressed Out')}
          onLongPress={() => setPressStatus('Long Pressed')}
          hitSlop={100}
          pressRetentionOffset={{top: 200, left: 200, right: 200, bottom: 200}}
          android_ripple={{color: 'yellow'}}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'blue' : 'wheat',
            },
            styles.mainDiv,
            styles.pressableDiv,
          ]}>
          {({pressed}) => (
            <Text style={[styles.text, {color: pressed ? 'white' : 'black'}]}>
              {pressStatus}
            </Text>
          )}
        </Pressable>

        {/* DIMENSIONS */}
        <View style={globalStyles.mainDiv}>
          <Text>Window Width: {dimensions.window.width}</Text>
          <Text>Window Height: {dimensions.window.height}</Text>
          <Text>Screen Width: {dimensions.screen.width}</Text>
          <Text>Screen Height: {dimensions.screen.height}</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputDiv: {
    padding: 10,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',

    ...Platform.select({
      ios: {
        backgroundColor: 'lightblue',
      },
      android: {
        backgroundColor: 'transparent',
      },
    }),
  },

  pressableDiv: {
    padding: 10,
  },
});

export default Day2;
