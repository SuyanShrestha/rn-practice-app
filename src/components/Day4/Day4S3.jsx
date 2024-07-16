import {View, Text} from 'react-native';
import React, {useLayoutEffect} from 'react';

const Day4S3 = ({route}) => {
  const {itemId} = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Item ID: ${itemId}`,
      headerRight: () => (
        <Button
          onPress={() => alert('This is a button!')}
          title="Info"
          color="#00cc00"
        />
      ),
    });
  }, [navigation, itemId]);

  return (
    <View>
      <Text>Day4S3</Text>
      <Text>{itemId}</Text>
    </View>
  );
};

export default Day4S3;
