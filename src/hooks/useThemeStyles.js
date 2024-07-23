import {useContext} from 'react';
import ThemeContext from '../context/ThemeContext';
import {StyleSheet} from 'react-native';

export default useThemeStyles = () => {
  const {theme} = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme === 'dark' ? '#333' : '#fff',
    },
    innerContainer: {
        backgroundColor: theme === 'dark' ? '#1a1a1a' : '#fff',

    },
    mainDiv: {
      backgroundColor: theme === 'dark' ? '#444' : 'wheat',
    },
    goToButton: {
      backgroundColor: theme === 'dark' ? '#555' : 'wheat',
    },
    button: {
      backgroundColor: theme === 'dark' ? '#f00' : 'red',
    },
  });

  return styles;
};
