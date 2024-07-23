import {
  View,
  Text,
  useColorScheme,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useState} from 'react';
import ThemeContext from '../../context/ThemeContext';
import globalStyles from '../../styles/globalStyles';

const Day9Theming = () => {
  const systemTheme = useColorScheme();

  const {theme, toggleTheme, useSystemTheme} = useContext(ThemeContext);

  const handleToggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    toggleTheme(newTheme);
  };

  return (
    <ScrollView style={globalStyles.innerContainer}>
      <Text>Day9Theming</Text>
      <Text>Current Theme: {theme}</Text>
      <Text>System Theme: {systemTheme}</Text>

      <View>
        <TouchableOpacity
          style={globalStyles.gotoButton}
          onPress={handleToggleTheme}>
          <Text>
            {theme === 'light' ? 'Dark' : 'Light'} Theme
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={globalStyles.gotoButton}
          onPress={useSystemTheme}>
          <Text>System Theme</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Day9Theming;
