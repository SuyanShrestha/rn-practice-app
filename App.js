import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import globalStyles from './styles/globalStyles';

// components
import Home from './src/components/Home/Home';
import Day2 from './src/components/Day2/Day2';

const App = () => {
  return (
    <View style={globalStyles.container}>
      {/* <Home/> */}
      <Day2/>
    </View>
  );
};

export default App;
