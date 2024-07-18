import { View, Text } from 'react-native'
import React from 'react'
import styles from '../../styles/components/DeepLinkPractice/DeepLinkPractice'

const SettingsDeepLink = () => {
  return (
    <View style={[globalStyles.innerContainer, styles.mainDiv]}>
      <Text>Settings Deep Link</Text>
    </View>
  )
}

export default SettingsDeepLink