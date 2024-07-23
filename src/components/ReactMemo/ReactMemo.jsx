import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';

const MyComponent = ({value}) => {
  console.log(`Rendering MyComponent: ${value}`);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Value: {value}</Text>
    </View>
  );
};

const ReactMemo = () => {
  const [count, setCount] = React.useState(0);
  const [otherState, setOtherState] = React.useState(false);

  return (
    <View style={styles.parentContainer}>
      <MyComponent value={count} />
      <Button title="Increment" onPress={() => setCount(count + 1)} />
      <Button
        title="Toggle"
        onPress={() => {
          setOtherState(!otherState);
          console.log('Toggled');
        }}
      />
      <Text style={styles.text}>
        Other state: {otherState ? 'True' : 'False'}
      </Text>
    </View>
  );
};

export default ReactMemo;

const styles = StyleSheet.create({
  parentContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  childContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  text: {
    fontSize: 18,
  },
});
