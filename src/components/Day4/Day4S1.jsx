import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import globalStyles from '../../styles/globalStyles';

const Day4S1 = ({navigation, route}) => {
  const [firstName, setFirstName] = useState('');

  return (
    <View style={globalStyles.container}>
      <Text>Home</Text>
      <TextInput
        placeholder="Enter your first name"
        value={firstName}
        onChangeText={text => setFirstName(text)}
      />
      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('Day4S2', { name: firstName})}>
        <Text>Day 4 Screen 2</Text>
      </TouchableOpacity>
      
      <Text>{route.params?.sentData}</Text>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('Day4S3', {itemId: 'suyan123'})}>
        <Text>Day 4 Screen 3</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('Day4S4')}>
        <Text>Day 4 Screen 4</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Day4S1;
