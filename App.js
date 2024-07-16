import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import globalStyles from './src/styles/globalStyles';

// components
import Home from './src/screens/Home/Home';
import Day1 from './src/screens/Day1/Day1';
import Day2 from './src/screens/Day2/Day2';
import Day3 from './src/screens/Day3/Day3';
import Day4 from './src/screens/Day4/Day4';
import Day5 from './src/screens/Day5/Day5';
import RetailScreen from './src/screens/RetailScreen/RetailScreen.jsx'

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="Day1Screen" component={Day1} />
        <Stack.Screen name="Day2Screen" component={Day2} />
        <Stack.Screen name="Day3Screen" component={Day3} />      
        <Stack.Screen name="Day4Screen" component={Day4} />    
        <Stack.Screen name='Day5Screen' component={Day5}/>
        <Stack.Screen name="RetailScreen" component={RetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
