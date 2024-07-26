import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';

import globalStyles from '../../styles/globalStyles';
import LocalNotificationFirebase from '../../components/LocalNotificationFirebase/LocalNotificationFirebase';
import LocalNotificationNotifee from '../../components/LocalNotificationNotifee/LocalNotificationNotifee';
import styles from '../../styles/components/LocalNotificationNotifee/LocalNotificationNotifee';

const Day14 = ({navigation}) => {
  return (
    <ScrollView style={[globalStyles.innerContainer]}>
      <Text style={styles.textDiv}>Day14</Text>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('LocalNotificationNotifeeScreen')}>
        <Text>Local Notification Notifee</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Day14;
