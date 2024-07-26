import {View, Text, Button, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import notifee from '@notifee/react-native';
import styles from '../../styles/components/LocalNotificationNotifee/LocalNotificationNotifee';
import globalStyles from '../../styles/globalStyles';

const LocalNotificationNotifee = () => {
  const onDisplayNotification = async () => {
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      sound: 'default'
    });

    await notifee.displayNotification({
      id: '1', // id is given by default too, but we give it here, so that we can test updating and cancelling
      title: 'Simple Notification',
      body: 'JUst title and body only vako wala',
      android: {
        channelId,
        pressAction: {
          id: 'default',
        },
      },
    });

    await notifee.displayNotification({
      id: '1',
      title: 'Eutai maa arko update handya',
      body: 'Updated main body',
      android: {
        channelId,
      },
    });
  };

  const onDisplayImageNotification = async () => {
    const channelId = await notifee.createChannel({
      id: 'channel2',
      name: 'Channel 2',
      sound: 'default',
      vibrate: [3000, 500, 3000],
      priority: 'high',
    });

    await notifee.displayNotification({
      title: 'Image Notification',
      body: 'Image, title, body vako wala',
      android: {
        channelId,
        pressAction: {
          id: 'default',
        },
      },
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.textDiv}>LocalNotificationNotifee</Text>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => onDisplayNotification()}>
        <Text>Display simple notification</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => onDisplayImageNotification()}>
        <Text>Display image wala notification</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LocalNotificationNotifee;
