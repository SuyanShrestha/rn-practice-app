import { View, Text } from 'react-native'
import React from 'react'
import globalStyles from '../../styles/globalStyles'
import styles from '../../styles/components/DeepLinkPractice/DeepLinkPractice'

const ProfileDeepLink = ({route}) => {
  const id = route.params();
  return (
    <View style={[globalStyles.innerContainer, styles.mainDiv]}>
      <Text>ProfileDeepLink</Text>
      <Text>I am hero with id {id}</Text>
    </View>
  )
}

export default ProfileDeepLink