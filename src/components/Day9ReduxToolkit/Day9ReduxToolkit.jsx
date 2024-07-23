import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, incrementByAmount} from '../../redux/counterSlice';

// styles
import globalStyles from '../../styles/globalStyles';
import styles from '../../styles/components/Day9ReduxToolkit/Day9ReduxToolkit';

const Day9ReduxToolkit = ({navigation}) => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={[globalStyles.innerContainer, styles.container]}>
      <Text style={styles.title}>Counter: {count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Button
        title="Increment by 5"
        onPress={() => dispatch(incrementByAmount(5))}
      />

      {/* to child to get value there too */}
      <TouchableOpacity
        style={globalStyles.gotoButton}
        onPress={() => navigation.navigate('Day9ReduxChildScreen')}>
        <Text>Go to Child to get counter value there too</Text>
      </TouchableOpacity>
    </View>
  );
};


export default Day9ReduxToolkit;
