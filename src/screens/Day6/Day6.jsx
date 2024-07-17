import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  PermissionsAndroid,
  Linking,
} from 'react-native';
import React, {useState} from 'react';
import globalStyles from '../../styles/globalStyles';
import styles from '../../styles/screens/Day6/Day6';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Day6 = () => {
  const [name, setName] = useState('');
  const [showData, setShowData] = useState(false);
  const [userData, setUserData] = useState('');

  const [data1, setData1] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  const [showData2, setShowData2] = useState(false);

  const [keys, setKeys] = useState([]);
  const [showData3, setShowData3] = useState(false);

  const [removableItem, setRemovableItem] = useState('');
  const [remainingKeys, setRemainingKeys] = useState([]);

  // storing data
  const storeUser = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      console.warn('Data saved successfully');
    } catch (error) {
      console.warn(error);
    }
  };

  // getting data
  const getUser = async key => {
    try {
      const userData = JSON.parse(await AsyncStorage.getItem(key));
      console.warn(userData);
      return userData;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaveData = (nameKey, nameValue) => {
    storeUser(nameKey, nameValue);
  };

  const handleShowData = async (key, value) => {
    const data = await getUser(key);
    setUserData(data);
    setShowData(true);
  };

  //  merging data
  const USER_1 = {
    name: 'Suyan',
    age: 20,
    traits: {
      hair: 'black',
      eyes: 'blue',
    },
  };

  const USER_2 = {
    name: 'Shristi',
    age: 21,
    hobby: 'cars',
    traits: {
      eyes: 'green',
    },
  };

  const mergeData = async () => {
    await AsyncStorage.setItem('newUser', JSON.stringify(USER_1));
    const data1 = await AsyncStorage.getItem('newUser');

    await AsyncStorage.mergeItem('newUser', JSON.stringify(USER_2));
    const currentUser = await AsyncStorage.getItem('newUser');

    setData1(data1);
    setCurrentUser(currentUser);
    setShowData2(true);
  };

  //   get keys
  const getKeys = async () => {
    const keys = await AsyncStorage.getAllKeys();
    setKeys(keys);
    setShowData3(true);
  };

  //   remove Item
  const removeUser = async key => {
    try {
      await AsyncStorage.removeItem(key);
      const remaining = await AsyncStorage.getAllKeys();
      setRemainingKeys(remaining);
      return true;
    } catch (exception) {
      return false;
    }
  };

  //   clearAll
  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
      return true;
    } catch (e) {
      return false;
    }
  };

  //   PERMISSIONS ANDROID

  // requesting single permission
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Heroheeralal Camera Access Permission',
          message: 'Heroheeralal Camera wants to access your camera.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.warn('Camera permission granted.');
      } else {
        console.warn('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  // checking permission
  const checkCameraPermission = async () => {
    const granted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted) {
      console.warn('CHECK : You can use the camera.');
    } else {
      console.warn('CHECK : You cannot use the camera.');
    }
  };

  // requestMultiple
  const requestMultiplePermissions = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]);
      if (
        granted['android.permission.CAMERA'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.WRITE_EXTERNAL_STORAGE'] ===
          PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.warn('Camera and Storage permission granted.');
      } else {
        console.warn('Camera and Storage permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  // LINKING

  // canOpenURL and openURL
  const handleBrowser = async url => {
    const isSupported = await Linking.canOpenURL(url);
    console.warn(isSupported);
    Linking.openURL(url);
  };

  const expoDocsUrl = 'https://docs.expo.dev/guides/linking/';
  const youtubeWebUrl = "https://www.youtube.com/watch?v=BBJa32lCaaY";
  const youtubeAppUrl = "vnd.youtube://BBJa32lCaaY"; 

  // settings open
  const openSettingsURL = async () => {
    Linking.openSettings();
  }

  return (
    <ScrollView contentContainerStyle={globalStyles.container}>
      <Text>Day6</Text>

      {/* ASYNC STORAGE 1 */}
      <ScrollView style={[globalStyles.mainDiv, {backgroundColor: 'skyblue'}]}>
        <TextInput
          value={name}
          onChangeText={text => setName(text)}
          placeholder="Enter your data to be stored first"
          style={styles.textDiv}
        />

        <TouchableOpacity
          style={globalStyles.gotoButton}
          onPress={() => handleSaveData('userName', name)}>
          <Text>Store Data</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={globalStyles.gotoButton}
          onPress={() => handleShowData('userName')}>
          <Text>Show Data</Text>
        </TouchableOpacity>

        {showData && (
          <Text style={styles.textDiv}>
            Data from AsyncStorage : {userData}
          </Text>
        )}

        {/* merge items */}
        <TouchableOpacity style={globalStyles.gotoButton} onPress={mergeData}>
          <Text>Merge Data</Text>
        </TouchableOpacity>

        {showData2 && (
          <View>
            <Text style={styles.textDiv}>Data before merged : {data1}</Text>
            <Text style={styles.textDiv}>
              Data after merged : {currentUser}
            </Text>
          </View>
        )}

        {/* get all keys */}
        <TouchableOpacity style={globalStyles.gotoButton} onPress={getKeys}>
          <Text>Get Keys</Text>
        </TouchableOpacity>
        {showData3 && (
          <View>
            <Text style={styles.textDiv}>All the keys are: {keys}</Text>
          </View>
        )}

        {/* removing keys */}
        <TextInput
          value={removableItem}
          onChangeText={text => setRemovableItem(text)}
          placeholder="Enter your data to be removed first"
          style={styles.textDiv}
        />
        {removableItem && (
          <TouchableOpacity
            style={globalStyles.gotoButton}
            onPress={() => removeUser(removableItem.trim())}>
            <Text>Remove Item</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.textDiv}>
          Remaining Keys:{'\n'}
          {remainingKeys}
        </Text>

        {/* CLEAR */}
        <TouchableOpacity style={globalStyles.gotoButton} onPress={clearAll}>
          <Text>Clear all</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* PERMISSIONS ANDROID */}
      <View style={[globalStyles.mainDiv, {backgroundColor: 'skyblue'}]}>
        {/* single permission example */}
        <TouchableOpacity
          style={globalStyles.gotoButton}
          onPress={requestCameraPermission}>
          <Text>Request Camera Permissions</Text>
        </TouchableOpacity>

        {/* checking permission example */}
        <TouchableOpacity
          style={globalStyles.gotoButton}
          onPress={checkCameraPermission}>
          <Text>Check Camera Permissions</Text>
        </TouchableOpacity>

        {/* multiple permissions */}
        <TouchableOpacity
          style={globalStyles.gotoButton}
          onPress={requestMultiplePermissions}>
          <Text>Request Multiple Permissions</Text>
        </TouchableOpacity>
      </View>

      {/* LINKING */}
      <ScrollView
        style={[
          globalStyles.mainDiv,
          {backgroundColor: 'skyblue', minHeight: 100},
        ]}>
        {/* true webURL */}
        <TouchableOpacity
          style={globalStyles.gotoButton}
          onPress={() => handleBrowser(expoDocsUrl)}>
          <Text>Open Link to Expo Docs</Text>
        </TouchableOpacity>

        {/* youtube web url, but returns false due to app */}
        <TouchableOpacity
          style={globalStyles.gotoButton}
          onPress={() => handleBrowser(youtubeWebUrl)}>
          <Text>Open Link to Youtube Web</Text>
        </TouchableOpacity>

        {/* youtube app url direct */}
        <TouchableOpacity
          style={globalStyles.gotoButton}
          onPress={() => handleBrowser(youtubeAppUrl)}>
          <Text>Open Link to Youtube App</Text>
        </TouchableOpacity>

        {/* open settings */}
        <TouchableOpacity
          style={globalStyles.gotoButton}
          onPress={openSettingsURL}>
          <Text>Open Settings of this app</Text>
        </TouchableOpacity>
      </ScrollView>
    </ScrollView>
  );
};

export default Day6;
