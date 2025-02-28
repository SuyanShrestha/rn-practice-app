import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import globalStyles from './src/styles/globalStyles';

import {I18nextProvider} from 'react-i18next';
import i18next from './src/services/i18next';

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
import Day9Theming from './src/screens/Day9Theming/Day9Theming.jsx';
import Day10 from './src/screens/Day10/Day10';

import Day13 from './src/screens/Day13/Day13.jsx';
import Day14 from './src/screens/Day14/Day14.jsx';

import RetailScreen from './src/screens/RetailScreen/screens/RetailScreen.jsx';

// compoenents
import Day7Remain from './src/components/Day7Remain/Day7Remain';
import Day9ReduxToolkit from './src/components/Day9ReduxToolkit/Day9ReduxToolkit.jsx';
import ReactMemo from './src/components/ReactMemo/ReactMemo.jsx';
import ReactMemo2 from './src/components/ReactMemo2/ReactMemo2.jsx';
import NotificationWithFirebase from './src/components/NotificationWithFirebase/NotificationWithFirebase';

// global (for deeplinking)
import linking from './src/global/linking.js';
import ProfileDeepLink from './src/components/DeepLinkPractice/ProfileDeepLink.jsx';
import SettingsDeepLink from './src/components/DeepLinkPractice/SettingsDeepLink.jsx';
import Day9Map from './src/components/Day9Map/Day9Map.jsx';

// context
import ThemeContext from './src/context/ThemeContext.js';
import {ThemeProvider} from './src/context/ThemeContext';
import {store} from './src/redux/store.js';
import {Provider} from 'react-redux';
import Day9ReduxChild from './src/styles/components/Day9ReduxChild/Day9ReduxChild.jsx';
import UseMemoExample1 from './src/components/UseMemoExample1/UseMemoExample1.jsx';
import Day11 from './src/screens/Day11/Day11.jsx';
import Day12 from './src/screens/Day12/Day12.jsx';
import MemoryLeak from './src/components/MemoryLeak/MemoryLeak.jsx';
import RNLocalize from './src/components/RNLocalize/RNLocalize.jsx';
import LanguageChanger from './src/components/LanguageChanger/LanguageChanger.jsx';
import LocalNotificationNotifee from './src/components/LocalNotificationNotifee/LocalNotificationNotifee.jsx';
import Day17 from './src/screens/Day17/Day17.jsx';
import Day17BoxAnimation from './src/components/Day17BoxAnimation/Day17BoxAnimation.jsx';
import Day18LayoutAnimations from './src/components/Day18LayoutAnimations/Day18LayoutAnimations.jsx';
import Day20 from './src/screens/Day20/Day20.jsx';
import Bargraph from './src/components/Bargraph/Bargraph.jsx';
import SignInScreen from './src/components/SignInScreen/SignInScreen.jsx';
import VictoryChartExample1 from './src/components/DatePickerComponent/DatePickerComponent.jsx';
import DatePicker from 'react-native-date-picker';
import DatePickerComponent from './src/components/DatePickerComponent/DatePickerComponent.jsx';
import Day21 from './src/screens/Day21/Day21.jsx';
import ProfileScreen from './src/components/ProfileScreen/ProfileScreen.jsx';
import EditProfileScreen from './src/components/ProfileScreen/EditProfileScreen.jsx';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <ThemeProvider>
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
              <Stack.Screen
                name="Profile"
                component={ProfileDeepLink}
                initialParams={{id: 0}}
              />
              <Stack.Screen name="Settings" component={SettingsDeepLink} />
              <Stack.Screen name="Day8Screen" component={Day8} />
              {/* day9 */}
              <Stack.Screen name="Day9Screen" component={Day9} />
              <Stack.Screen name="Day9MapScreen" component={Day9Map} />
              <Stack.Screen name="Day9ThemingScreen" component={Day9Theming} />
              <Stack.Screen
                name="Day9ReduxToolkitScreen"
                component={Day9ReduxToolkit}
              />
              <Stack.Screen
                name="Day9ReduxChildScreen"
                component={Day9ReduxChild}
              />
              {/* day10 */}
              <Stack.Screen name="Day10Screen" component={Day10} />
              <Stack.Screen name="ReactMemoComponent" component={ReactMemo} />
              <Stack.Screen name="ReactMemo2Component" component={ReactMemo2} />
              <Stack.Screen
                name="UseMemoExample1Component"
                component={UseMemoExample1}
              />
              {/* day11 */}
              <Stack.Screen name="Day11Screen" component={Day11} />
              {/* day12 */}
              <Stack.Screen name="Day12Screen" component={Day12} />
              <Stack.Screen name="MemoryLeak" component={MemoryLeak} />
              <Stack.Screen name="RNLocalize" component={RNLocalize} />
              <Stack.Screen
                name="LanguageChanger"
                component={LanguageChanger}
              />
              <Stack.Screen name="RetailScreen" component={RetailScreen} />

              {/* day13 */}
              <Stack.Screen name="Day13Screen" component={Day13} />
              <Stack.Screen
                name="NotificationWithFirebaseScreen"
                component={NotificationWithFirebase}
              />
              <Stack.Screen
                name="LocalNotificationNotifeeScreen"
                component={LocalNotificationNotifee}
              />

              {/* day14 */}
              <Stack.Screen name="Day14Screen" component={Day14} />

              {/* day17 */}
              <Stack.Screen name="Day17Screen" component={Day17} />
              <Stack.Screen
                name="Day17BoxAnimationScreen"
                component={Day17BoxAnimation}
              />
              <Stack.Screen
                name="LayoutAnimationScreen"
                component={Day18LayoutAnimations}
              />

              {/* day20 and 21 */}
              <Stack.Screen name="Day20Screen" component={Day20} />
              <Stack.Screen name="BargraphScreen" component={Bargraph} />
              <Stack.Screen name="SignInScreen" component={SignInScreen} />
              <Stack.Screen
                name="DatePickerScreen"
                component={DatePickerComponent}
              />

              {/* day22 */}
              <Stack.Screen name="Day21Screen" component={Day21} />
              <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
              <Stack.Screen
                name="EditProfileScreen"
                component={EditProfileScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </Provider>
    </I18nextProvider>
  );
};

export default App;
