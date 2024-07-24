import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';

import { useTranslation } from 'react-i18next';

import globalStyles from '../../styles/globalStyles';

const Day12 = ({navigation}) => {
  const {t} = useTranslation();
  return (
    <ScrollView style={[globalStyles.innerContainer]}>
      <Text>Day12</Text>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('MemoryLeak')}>
        <Text>MemoryLeak</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('RNLocalize')}>
        <Text>ReactNative Localize</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('LanguageChanger')}>
        <Text>i18next practice</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('LanguageChanger')}>
        <Text>{t('example')}</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

export default Day12;
