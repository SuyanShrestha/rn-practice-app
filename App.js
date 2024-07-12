import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import globalStyles from './styles/globalStyles';

// components
import Day1 from './src/components/Day1/Day1';
import Day2 from './src/components/Day2/Day2';
import Day3 from './src/components/Day3/Day3';

const App = () => {
  return (
    <View style={globalStyles.container}>
      {/* <Day1/> */}
      {/* <Day2/> */}
      <Day3/>
    </View>
  );
};

export default App;
