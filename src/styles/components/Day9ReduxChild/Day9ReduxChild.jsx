import {View, Text} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import globalStyles from '../../../styles/globalStyles';

const Day9ReduxChild = () => {
  const count = useSelector(state => state.counter.value);

  return (
    <View
      style={[
        globalStyles.innerContainer,
        {flex: 1, alignItems: 'center', justifyContent: 'center'},
      ]}>
      <Text style={{fontSize: 30}}>Day9ReduxChild</Text>
      <Text style={{fontSize: 25}}>Counter value from parent: {count}</Text>
    </View>
  );
};

export default Day9ReduxChild;
