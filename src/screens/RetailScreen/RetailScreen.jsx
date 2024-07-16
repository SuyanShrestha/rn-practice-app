import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import globalStyles from '../../styles/globalStyles'

import styles from '../../styles/screens/RetailScreen/RetailScreen'

const RetailScreen = () => {
  return (
    <ScrollView contentContainerStyle={[globalStyles.container, styles.container]}>
      <Text>RetailScreen</Text>
    </ScrollView>
  )
}

export default RetailScreen