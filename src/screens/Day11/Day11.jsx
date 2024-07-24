import {View, Text, ScrollView} from 'react-native';
import React from 'react';

import globalStyles from '../../styles/globalStyles';

const Day11 = ({navigation}) => {
  // map
  const ParentMap = ({children}) => {
    const childrenArray = React.Children.map(children, (child, index) => (
      <View key={index} style={{margin: 10, backgroundColor: 'lightblue'}}>
        {child}
      </View>
    ));

    return <View>{childrenArray}</View>;
  };

  // forEach
  const ParentForEach = ({children}) => {
    React.Children.forEach(children, (child, index) => {
      console.log(`Child ${index}: ${child.props.children}`);
    });

    return <View>{children}</View>;
  };

  // count
  const ParentCount = ({children}) => {
    const childCount = React.Children.count(children);

    return (
      <View>
        <Text>Total Children: {childCount}</Text>
        {children}
      </View>
    );
  };

  // toArray
  const ParentToArray = ({children}) => {
    const childrenArray = React.Children.toArray(children);

    return (
      <View>
        {childrenArray.map((child, index) => (
          <View key={index} style={{margin: 10, backgroundColor: 'lightgreen'}}>
            {child}
          </View>
        ))}
      </View>
    );
  };

  // check if there is only one child, otherwise throw error
  const ParentSingleChild = ({children}) => {
    const singleChild = React.Children.only(children);

    return (
      <View style={{padding: 20, backgroundColor: 'lightcoral'}}>
        {singleChild}
      </View>
    );
  };

  const SuperParentComponent = ({Component}) => (
    <Component>
      <Text>Suyan</Text>
      <Text>Shristi</Text>
      <Text>Bitisha</Text>
      <Text>Swornim</Text>
      <Text>Prekshya</Text>
    </Component>
  );

  return (
    <ScrollView style={[globalStyles.innerContainer]}>
      <Text>Day11</Text>

      {/* using map */}
      <SuperParentComponent Component={ParentMap} />
      <SuperParentComponent Component={ParentForEach} />
      <SuperParentComponent Component={ParentCount} />
      <SuperParentComponent Component={ParentToArray} />
      {/* <SuperParentComponent Component={ParentSingleChild} /> */}
    </ScrollView>
  );
};

export default Day11;
