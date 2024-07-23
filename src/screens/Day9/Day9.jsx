import {View,TouchableOpacity, Text, Linking} from 'react-native';
import React from 'react';
import globalStyles from '../../styles/globalStyles';

const Day9 = ({navigation}) => {
  return (
    <View style={globalStyles.container}>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate("Day9MapScreen")}
        >
        <Text>Day9 Maps</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('Day9ReduxToolkitScreen')}>
        <Text>Day9ReduxToolkit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Day9;
