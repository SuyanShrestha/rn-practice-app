import React, {useState, useEffect, useRef} from 'react';
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
  FlatList,
  SectionList,
  ActivityIndicator,
  Vibration,
  Button,
  TouchableNativeFeedback,
  DrawerLayoutAndroid
} from 'react-native';

import globalStyles from '../../../styles/globalStyles';
// import PaginationExample from './PaginationExample';

const Day3 = () => {
  // for infinite flatlist
  const initialPeople = [
    {id: '1', name: 'Suyan'},
    {id: '2', name: 'Shristi'},
    {id: '3', name: 'Bitisha'},
    {id: '4', name: 'Swornim'},
    {id: '5', name: 'Prekshya'},
    {id: '6', name: 'Prajwal'},
    {id: '7', name: 'Nikhil'},
    {id: '8', name: 'Samik'},
    {id: '9', name: 'Bikash'},
  ];

  const [people, setPeople] = useState(initialPeople);

  const loadMorePeople = () => {
    const newPeople = initialPeople.map((person, index) => ({
      ...person,
      id: person.id + people.length + index,
    }));

    setPeople(people.concat(newPeople));
  };

  //   for vibration
  const [isVibrating, setIsVibrating] = useState(false);

  const toggleVibration = () => {
    if (isVibrating) {
      Vibration.cancel();
    } else {
      Vibration.vibrate([1000, 2000, 3000, 4000], true);
    }

    setIsVibrating(!isVibrating);
  };

  // for touchable native feedback
  const [color, setColor] = useState('#000000');
  const [rippleOverflow, setRippleOverflow] = useState(false);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setColor(color);
  };

  // for drawer layout android
  const drawer = useRef(null);

  const navView = () => {
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>
          Heyheyhey!
        </Text>
        <Button title='Close' onPress={() => drawer.current.closeDrawer()}/>
      </View>
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <ScrollView style={globalStyles.innerContainer}>
        <Text>Hey there, welcome to day3</Text>

        {/* ACTIVITY INDICATORS */}
        <View
          style={[
            globalStyles.mainDiv,
            {display: 'flex', flexDirection: 'row', gap: 20},
          ]}>
          <Text>Activity Indicators :</Text>
          <ActivityIndicator />
          <ActivityIndicator size="large" color="red" />
          <ActivityIndicator size="small" color="green" />
        </View>

        {/* INFINITE SCROLL IN FLATLIST */}
        <View style={globalStyles.mainDiv}>
          <Text>Infinite Scroll in Flatlist</Text>
          <FlatList
            data={people}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Text style={styles.item}>{item.name}</Text>
            )}
            horizontal
            ItemSeparatorComponent={() => (
              <View style={{width: 2, backgroundColor: 'green'}} />
            )}
            onEndReached={loadMorePeople}
            onEndReachedThreshold={0.5}
          />
        </View>

        {/* VIBRATION API */}
        <View
          style={[
            globalStyles.mainDiv,
            {display: 'flex', flexDirection: 'column', gap: 10},
          ]}>
          <Text>Vibration API</Text>
          {/* normal vibration */}
          <Button title="Vibrate" onPress={() => Vibration.vibrate()} />
          <Button
            title="Vibrate for 3 sec"
            onPress={() => Vibration.vibrate(3000)}
          />

          {/* pattern vibration */}
          <Button
            title="Vibrate with pattern"
            onPress={() => Vibration.vibrate([1000, 2000, 3000, 4000, 5000])}
          />

          {/* repeating vibration */}
          <Button
            title={isVibrating ? 'Stop Vibration' : 'Start Vibration'}
            onPress={toggleVibration}
          />
        </View>

        {/* touchablenativefeedback */}
        <View style={[globalStyles.mainDiv, styles.touchableDiv]}>
          {/* simple one */}
          <TouchableNativeFeedback>
            <View style={styles.touchableChild}>
              <Text>touchablenativefeedback</Text>
            </View>
          </TouchableNativeFeedback>

          {/* ripple effect */}
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('red', true)}>
            <View style={styles.touchableChild}>
              <Text>touchablenativefeedback with ripple</Text>
            </View>
          </TouchableNativeFeedback>

          {/* changing color */}
          <TouchableNativeFeedback
            onPress={getRandomColor}
            background={TouchableNativeFeedback.Ripple(color, rippleOverflow)}>
            <View style={styles.touchableChild}>
              <Text>touchablenativefeedback with color change</Text>
            </View>
          </TouchableNativeFeedback>
        </View>

        {/* drawer layout android */}
        <DrawerLayoutAndroid
          ref={drawer}
          drawerWidth={300}
          drawerPosition="left"
          renderNavigationView={navView}
        >
          <View style={globalStyles.mainDiv}>
            <Text>Drawer Layout Android</Text>
            <Button title='Open Drawer' onPress={() => drawer.current.openDrawer()}/>
          </View>
        </DrawerLayoutAndroid>

        {/* rtandom test */}
        <Text>HEy</Text>
        <Text>HEy</Text>
        <Text>HEy</Text>
        <Text>HEy</Text>
        <Text>HEy</Text>
        <Text>HEy</Text>
        <Text>HEy</Text>
        <Text>HEy</Text>

      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'skyblue',
    padding: 10,
    margin: 5,
  },

  touchableDiv: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    padding: 10,
    },

  touchableChild: {
    borderColor: 'black',
    borderWidth: 1,
    height: 50,
  },
});

export default Day3;
