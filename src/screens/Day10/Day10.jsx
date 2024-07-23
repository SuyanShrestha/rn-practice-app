import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

import globalStyles from '../../styles/globalStyles'

const Day10 = ({navigation}) => {
  return (
    <ScrollView style={[globalStyles.innerContainer]}>
      <Text>Day10</Text>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('ReactMemoComponent')}>
        <Text>React Memo Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('ReactMemo2Component')}>
        <Text>React Memo With Custom Comparision</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('UseMemoExample1')}>
        <Text>UseMemoExample1</Text>
      </TouchableOpacity>

      
    </ScrollView>
  )
}

export default Day10