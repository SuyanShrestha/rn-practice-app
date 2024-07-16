import {View, Text} from 'react-native';
import React from 'react';

const Day4S2 = ({route, navigation}) => {
  const {name} = route.params;
  return (
    <View>
      <Text>Day4S2</Text>
      <Text>So you are {name}</Text>

      {/*  update data here */}
      <Button
        title="Make it anonymous"
        onPress={() => navigation.setParams({name: 'Mr. Anonymous'})}
      />

      {/* send data back */}
      <Button
        title="Send data to screen 1"
        onPress={() =>
          navigation.navigate('Day4S1', {sentData: 'data from screen 2'})
        }
      />
    </View>
  );
};

export default Day4S2;
