import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';
import globalStyles from '../../styles/globalStyles';

const Home = ({navigation}) => {
  return (
    <View style={globalStyles.container}>
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
    </View>
  );
};

export default Home;
