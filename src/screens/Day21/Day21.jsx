import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import globalStyles from '../../styles/globalStyles'

const Day21 = ({navigation}) => {
  return (
    <View>
      <Text>Day21</Text>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('ProfileScreen')}>
        <Text>ProfileScreen</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Day21