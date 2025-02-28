import {View, Text, Touchable, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import globalStyles from '../../styles/globalStyles';

import useThemeStyles from '../../hooks/useThemeStyles';

const Home = ({navigation}) => {

  const themeStyles = useThemeStyles();

  return (
    <ScrollView style={[globalStyles.innerContainer, themeStyles.innerContainer]}>
      <Text>Home</Text>
      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('Day1Screen')}>
        <Text>Day 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('Day2Screen')}>
        <Text>Day 2</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('Day3Screen')}>
        <Text>Day 3</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('Day4Screen')}>
        <Text>Day 4</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('Day5Screen')}>
        <Text>Day 5</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('RetailScreen')}>
        <Text>Retail Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('Day6Screen')}>
        <Text>Day 6</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('Day7Screen')}>
        <Text>Day 7</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('Day8Screen')}>
        <Text>Day 8</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('Day9Screen')}>
        <Text>Day 9</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('Day9ThemingScreen')}>
        <Text>Change theme - Day 9</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('Day10Screen')}>
        <Text>Day 10</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('Day10Screen')}>
        <Text>Day 10</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('Day11Screen')}>
        <Text>Day 11</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('Day12Screen')}>
        <Text>Day 12</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('Day13Screen')}>
        <Text>Day 13</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('Day14Screen')}>
        <Text>Day 14</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('Day17Screen')}>
        <Text>Day 17-19</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('Day20Screen')}>
        <Text>Day 20</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('Day21Screen')}>
        <Text>Day 21</Text>
      </TouchableOpacity>
      
    </ScrollView>
  );
};

export default Home;
