import {View,TouchableOpacity, Text, Linking} from 'react-native';
import React from 'react';
import globalStyles from '../../styles/globalStyles';

const Day7 = ({navigation}) => {
  return (
    <View style={globalStyles.container}>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => Linking.openURL("https://www.youtube.com/watch?v=3r-qDvD3F3c")}
        >
        <Text>Normal Linking</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('Day7RemainScreen')}>
        <Text>Day 7 remains</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Day7;
