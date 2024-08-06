import {View, Text, Button, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import notifee, {AndroidImportance, AndroidStyle} from '@notifee/react-native';
import styles from '../../styles/components/LocalNotificationNotifee/LocalNotificationNotifee';
import globalStyles from '../../styles/globalStyles';

const LocalNotificationNotifee = () => {
  const onDisplayNotification = async () => {
    const channelId = await notifee.createChannel({
      id: 'abc',
      name: 'Default Channel',
      sound: 'default',
      importance: AndroidImportance.HIGH,
    });

    const notifiID = await notifee.displayNotification({
      id: '1', // id is given by default too, but we give it here, so that we can test updating and cancelling
      title: 'Simple Notification',
      body: 'JUst title and body only vako wala',
      android: {
        channelId: 'abc',
        pressAction: {
          id: 'default',
        },
      },
    });

    await notifee.displayNotification({
      id: '1', // same id is used, so contents of previous will be updated.
      title: 'Eutai maa arko update handya',
      body: 'Updated main body',
      android: {
        channelId,
      },
    });
  };

  async function cancel(notifiID) {
    await notifee.cancelNotification(notifiID);
  }

  const onDisplayImageNotification = async () => {
    const channelId = await notifee.createChannel({
      id: 'sound2',
      name: 'Channel 2',
      vibrate: [3000, 500, 3000],
      priority: 'high',
      sound: 'crash',
    });

    await notifee.displayNotification({
      id: 'notification2',
      title: 'Image Notification',
      body: 'Image, title, body vako wala',
      android: {
        channelId,
        pressAction: {
          id: 'default',
        },
        sound: 'crash',
        style: {
          type: AndroidStyle.BIGPICTURE,
          picture:
            'https://media1.tenor.com/m/NVwxxoyoyGgAAAAC/racoon-pedro.gif',
        },
      },
    });
  };

  const onDisplayThirdNotification = async () => {
    const channelId = await notifee.createChannel({
      id: 'channel3b',
      name: 'Channel 3',
      // vibrate: [3000, 500, 3000],
      priority: 'high',
      sound: 'crash',
    });

    await notifee.displayNotification({
      id: 'notification3',
      title: 'Third Notification',
      body: 'Image, title, body vako wala',
      vibrate: [5000, 2000, 3000],
      android: {
        channelId,
        pressAction: {
          id: 'default',
        },
        sound: 'crash',
        style: {
          type: AndroidStyle.BIGPICTURE,
          picture:
            'https://www.shutterstock.com/image-vector/computer-cat-animal-meme-pixel-260nw-2415076223.jpg',
        },
      },
    });
  };

  const onDisplayChattingContent = async () => {
    const channelId = await notifee.createChannel({
      id: 'channel4',
      name: 'Channel 4',
      // vibrate: [3000, 500, 3000],
      priority: 'high',
      sound: 'crash',
    });

    notifee.displayNotification({
      title: 'Shristi Koju',
      body: 'Oi k garira?',
      android: {
        channelId,
        style: {
          type: AndroidStyle.MESSAGING,
          person: {
            name: 'Suyan Shrestha',
            icon: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/177859796/original/556aa426fbc24003aec25d0e8b43c5809f3ecddd/draw-a-cute-chibi-icon-for-your-profile-picture.jpg',
          },
          messages: [
            {
              text: 'Hii, first msg maile pathaye la?',
              timestamp: Date.now() - 600000, // 10 minutes ago
            },
            {
              text: 'La tara ma msg herdina',
              timestamp: Date.now() - 300000, // 5 mins ago
              person: {
                name: 'Shristi Koju',
                icon: 'https://i.pinimg.com/736x/fa/ce/88/face889f192b325a499a93c0dcbc4a84.jpg',
              },
            },
            {
              text: 'HUsu husu husu husu no way',
              timestamp: Date.now() - 150000,
            },
            {
              text: 'Suta suta',
              timestamp: Date.now(), // now
              person: {
                name: 'Shristi Koju',
                icon: 'https://i.pinimg.com/736x/fa/ce/88/face889f192b325a499a93c0dcbc4a84.jpg',
              },
            },
          ],
        },
      },
    });
  };

  const onDisplayInboxContent = async () => {
    const channelId = await notifee.createChannel({
      id: 'channel5',
      name: 'Channel 5',
      // vibrate: [3000, 500, 3000],
      priority: 'high',
      sound: 'crash',
    });

    await notifee.displayNotification({
      id: 'notification5',
      title: 'Messages list',
      android: {
        channelId,
        style: {
          type: AndroidStyle.INBOX,
          lines: [
            'First Message',
            'Second Message',
            'Third Message',
            'Forth Message',
          ],
        },
      },
    });
  };

  const onDisplayBigTextNotification = async () => {
    const channelId = await notifee.createChannel({
      id: 'channel6',
      name: 'Channel 6',
      // vibrate: [3000, 500, 3000],
      priority: 'high',
      sound: 'crash',
    });

    await notifee.displayNotification({
      title: 'Important Update',
      body: 'You have an important update',
      android: {
        channelId,
        style: {
          type: AndroidStyle.BIGTEXT,
          text: 'This is a detailed message that explains the update in more depth. It provides all the necessary information that the user needs to know about the update.',
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

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => onDisplayThirdNotification()}>
        <Text>Third wala notification</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => onDisplayChattingContent()}>
        <Text>Chatting notification</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => onDisplayInboxContent()}>
        <Text>Inbox notification</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={onDisplayBigTextNotification}>
        <Text>Display big text notification</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LocalNotificationNotifee;
