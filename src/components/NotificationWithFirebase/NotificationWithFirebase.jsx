import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import { PermissionsAndroid } from 'react-native';

const NotificationWithFirebase = () => {
  async function requestUserPermission() {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
      const token = await messaging().getToken();
      console.log('FCM Token: ', token);
    }
  }

  useEffect(() => {
    console.log('bac')
    requestUserPermission();
  }, []);
  return (
    <View>
      <Text>NotificationWithFirebase</Text>
    </View>
  );
};

export default NotificationWithFirebase;
