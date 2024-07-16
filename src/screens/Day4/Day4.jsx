import {View, Text} from 'react-native';
import React from 'react';
import globalStyles from '../../styles/globalStyles';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Day4S1 from '../../components/Day4/Day4S1';
import Day4S2 from '../../components/Day4/Day4S2';
import Day4S3 from '../../components/Day4/Day4S3';
import Day4S4 from '../../components/Day4/Day4S4';

const Day4 = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Text>Cannot show results, because i have one navigationContainer inside another</Text>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Day4S1">
    //     <Stack.Screen name="Day4S1" component={Day4S1} />

    //     <Stack.Screen name="Day4S2" component={Day4S2}
    //      initialParams={{name: 'Guest'}}
    //      options={{
    //       headerStyle: {
    //         backgroundColor: "#000"
    //       },
    //       headerTintColor: "#fff",
    //       headerTitleStyle: {fontWeight: "bold"},
    //       headerRight: () => <Text>Suyan ko header ko right patti</Text>
    //       }}
    //     />

    //     <Stack.Screen 
    //       name="Day4S3" 
    //       component={Day4S3}
    //       options={({ route }) => ({
    //         title: `Item ID: ${route.params.itemId}`,
    //       })} 
    //     />

    //     <Stack.Screen name="Day4S4" component={Day4S4} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default Day4;
