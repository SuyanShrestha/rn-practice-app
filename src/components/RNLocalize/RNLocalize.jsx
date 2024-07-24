import {View, Text, ScrollView} from 'react-native';
import React from 'react';

import styles from '../../styles/components/RNLocalize/RNLocalize';
import globalStyles from '../../styles/globalStyles';

import * as LocalizeMethods from 'react-native-localize';

const RNLocalize = () => {
  return (
    <ScrollView style={[globalStyles.innerContainer]}>
      <Text style={styles.textDiv}>RNLocalize</Text>

      {/* calendar, locale, country, timeZone, temperatureunit */}
      <Text style={styles.textDiv}>
        Calendar: {LocalizeMethods.getCalendar()}
      </Text>
      <Text style={styles.textDiv}>
        Locales after stringify: {JSON.stringify(LocalizeMethods.getLocales())}
      </Text>
      <Text style={styles.textDiv}>
        Country: {LocalizeMethods.getCountry()}
      </Text>
      <Text style={styles.textDiv}>
        Time Zone : {LocalizeMethods.getTimeZone()}
      </Text>
      <Text style={styles.textDiv}>
        Temperature Unit : {LocalizeMethods.getTemperatureUnit()}
      </Text>

      {/* booleans */}
      <Text style={styles.textDiv}>
        24 hour clock format? :{' '}
        {JSON.stringify(LocalizeMethods.uses24HourClock())}
      </Text>
      <Text style={styles.textDiv}>
        Auto DateTime format? :{' '}
        {JSON.stringify(LocalizeMethods.usesAutoDateAndTime())}
      </Text>
      <Text style={styles.textDiv}>
        Metric System format? :{' '}
        {JSON.stringify(LocalizeMethods.usesMetricSystem())}
      </Text>
      <Text style={styles.textDiv}>
        Auto Timezone format? :{' '}
        {JSON.stringify(LocalizeMethods.usesAutoTimeZone())}
      </Text>

    </ScrollView>
  );
};

export default RNLocalize;
