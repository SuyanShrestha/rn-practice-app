import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import globalStyles from '../../styles/globalStyles'

const Day20 = ({navigation}) => {
  return (
    <View>
      <Text>Day20</Text>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('BargraphScreen')}>
        <Text>Bargraph</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('SignInScreen')}>
        <Text>Firebase</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('DatePickerScreen')}>
        <Text>DatePickerScreen</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Day20