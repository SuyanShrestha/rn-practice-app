import React, {createContext, useState, useEffect} from 'react';
import {useColorScheme} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(colorScheme || 'light');

  // on initial render, we need to get theme from storage
  useEffect(() => {
    const getTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('theme');
        if (savedTheme) {
          setTheme(savedTheme);
        }
      } catch (error) {
        console.warn('Error loading theme: ' + error);
      }
    };
    getTheme();
  }, []);

  //   for light or dark theme, also i save it to storage
  const toggleTheme = newTheme => {
    setTheme(newTheme);
    AsyncStorage.setItem('theme', newTheme);
  };

  //   set theme just as colorScheme says
  const useSystemTheme = () => {
    setTheme(colorScheme);
    AsyncStorage.setItem('theme', colorScheme);
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme, useSystemTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;