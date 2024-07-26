import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';

import globalStyles from '../../styles/globalStyles';
import LocalNotificationFirebase from '../../components/LocalNotificationFirebase/LocalNotificationFirebase';
import LocalNotificationNotifee from '../../components/LocalNotificationNotifee/LocalNotificationNotifee';

const Day13 = ({navigation}) => {
  return (
    <ScrollView style={[globalStyles.innerContainer]}>
      <Text>Day13</Text>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('NotificationWithFirebaseScreen')}>
        <Text>NotificationWithFirebase</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={LocalNotificationFirebase}>
        <Text>Local Notification Firebase</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('LocalNotificationNotifeeScreen')}>
        <Text>Local Notification Notifee</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Day13;
