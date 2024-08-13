import React, {useState} from 'react';
import {View, Button, Text} from 'react-native';
import DatePicker from 'react-native-date-picker';
import notifee from '@notifee/react-native';

// Function to display notification
const onDisplayNotification = async () => {
  try {
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      sound: 'default',
    });

    await notifee.displayNotification({
      id: 'notification_id',
      title: 'Notification Scheduled',
      body: 'This notification was scheduled for the selected time.',
      android: {
        channelId,
        pressAction: {
          id: 'default',
        },
      },
    });

    console.log('Notification displayed.');
  } catch (error) {
    console.error('Failed to display notification:', error);
  }
};

// schedule a notification with delay nikaldai
const scheduleNotification = selectedDate => {
  const now = new Date().getTime();
  const selectedTime = selectedDate.getTime();
  const delay = selectedTime - now;

  console.log(`Current time (now): ${now}`);
  console.log(`Selected time: ${selectedTime}`);
  console.log(`Calculated delay: ${delay}`);

  if (delay > 0) {
    setTimeout(() => {
      onDisplayNotification();
    }, delay);
    console.log(
      'Notification scheduled to display in',
      delay / 1000,
      'seconds.',
    );
  } else {
    console.error('Selected time is in the past.');
  }
};

// Basic inline date picker
const InlinedDatePicker = () => {
  const [date, setDate] = useState(new Date());

  return (
    <View>
      <DatePicker date={date} onDateChange={setDate} />
      <Button
        title="Set Notification"
        onPress={() => scheduleNotification(date)}
      />
      <Text>Selected Date and Time: {date.toString()}</Text>
    </View>
  );
};

// Modal usage for date picker
const ModalDatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <View>
      <Button title="Open Modal Date Picker" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={selectedDate => {
          setOpen(false);
          setDate(selectedDate);
          scheduleNotification(selectedDate); 
        }}
        onCancel={() => setOpen(false)}
      />
    </View>
  );
};


// main
const DatePickerComponent = () => {
  return (
    <View>
      <InlinedDatePicker />
      <ModalDatePicker />
    </View>
  );
};

export default DatePickerComponent;
