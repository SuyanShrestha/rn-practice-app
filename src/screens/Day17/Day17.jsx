import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import globalStyles from '../../styles/globalStyles'

const Day17 = ({navigation}) => {
  return (
    <ScrollView style={[globalStyles.innerContainer]}>
      <Text>Day17</Text>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('Day17BoxAnimationScreen')}>
        <Text>Box Animation</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('LayoutAnimationScreen')}>
        <Text>Layout Animation Practice</Text>
      </TouchableOpacity>

    </ScrollView>
  )
}

export default Day17