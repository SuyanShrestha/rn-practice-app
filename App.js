import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import globalStyles from './src/styles/globalStyles';

// screens
import Home from './src/screens/Home/Home';
import Day1 from './src/screens/Day1/Day1';
import Day2 from './src/screens/Day2/Day2';
import Day3 from './src/screens/Day3/Day3';
import Day4 from './src/screens/Day4/Day4';
import Day5 from './src/screens/Day5/Day5';
import Day6 from './src/screens/Day6/Day6';
import Day7 from './src/screens/Day7/Day7';
import Day8 from './src/screens/Day8/Day8';
import Day9 from './src/screens/Day9/Day9';


import RetailScreen from './src/screens/RetailScreen/screens/RetailScreen.jsx';

// compoenents
import Day7Remain from './src/components/Day7Remain/Day7Remain';

// global (for deeplinking)
import linking from './src/global/linking.js';
import ProfileDeepLink from './src/components/DeepLinkPractice/ProfileDeepLink.jsx';
import SettingsDeepLink from './src/components/DeepLinkPractice/SettingsDeepLink.jsx';
import Day9Map from './src/components/Day9Map/Day9Map.jsx';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="Day1Screen" component={Day1} />
        <Stack.Screen name="Day2Screen" component={Day2} />
        <Stack.Screen name="Day3Screen" component={Day3} />
        <Stack.Screen name="Day4Screen" component={Day4} />
        <Stack.Screen name="Day5Screen" component={Day5} />
        <Stack.Screen name="Day6Screen" component={Day6} />

        <Stack.Screen name="Day7Screen" component={Day7} />
        <Stack.Screen name="Day7RemainScreen" component={Day7Remain} />

        {/* for deep link */}
        <Stack.Screen name="Profile" component={ProfileDeepLink} initialParams={{id: 0}}/>
        <Stack.Screen name="Settings" component={SettingsDeepLink} />

        <Stack.Screen name="Day8Screen" component={Day8} />
        <Stack.Screen name="Day9Screen" component={Day9} />
        <Stack.Screen name="Day9MapScreen" component={Day9Map}/>


        <Stack.Screen name="RetailScreen" component={RetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
