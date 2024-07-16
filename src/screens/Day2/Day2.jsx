import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Dimensions,
  FlatList,
  SectionList,
} from 'react-native';

import globalStyles from '../../styles/globalStyles';

const Day2 = () => {
  // for text inputs
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (name, value) => {
    setForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  //   for pressables
  const [pressStatus, setPressStatus] = useState('Not Pressed');

  // for dimensions
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get('window'),
    screen: Dimensions.get('screen'),
  });

  useEffect(() => {
    const handleChange = ({window, screen}) => {
      setDimensions({window, screen});
    };

    Dimensions.addEventListener('change', handleChange);
  }, []);

  // for flatlist
  const people = [
    {id: '1', name: 'Suyan'},
    {id: '2', name: 'Shristi'},
    {id: '3', name: 'Bitisha'},
    {id: '4', name: 'Swornim'},
    {id: '5', name: 'Prekshya'},
    {id: '6', name: 'Prajwal'},
    {id: '7', name: 'Nikhil'},
    {id: '8', name: 'Samik'},
    {id: '9', name: 'Bikash'},
    {id: '10', name: 'Name10'},
    {id: '11', name: 'Name11'},
    {id: '12', name: 'Name12'},
    {id: '13', name: 'Name13'},
    {id: '14', name: 'Name14'},
    {id: '15', name: 'Name15'},
    {id: '16', name: 'Name16'},
    {id: '17', name: 'Name17'},
    {id: '18', name: 'Name18'},
    {id: '19', name: 'Name19'},
    {id: '20', name: 'Name20'},
  ];

  // Section List data
  const food = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <ScrollView style={globalStyles.innerContainer}>
        <Text>Hey there, welcome to day2</Text>

        {/* Text inputs */}
        <View style={globalStyles.mainDiv}>
          <TextInput
            placeholder="Enter your name"
            value={form.name}
            onChangeText={text => handleChange('name', text)}
            style={styles.inputDiv}
            selectionColor={'yellow'}
            onFocus={() => console.warn('Focused')}
            onBlur={() => console.warn('Blurred')}
          />

          <TextInput
            placeholder="Enter your email"
            value={form.email}
            onChangeText={text => handleChange('email', text)}
            style={styles.inputDiv}
          />

          <TextInput
            placeholder="Enter your password"
            value={form.password}
            secureTextEntry={true}
            onChangeText={text => handleChange('password', text)}
            style={styles.inputDiv}
          />
        </View>

        {/* PLATFORM DIV */}
        <View style={globalStyles.mainDiv}>
          <Text>{Platform.OS}</Text>
          <Text>{Platform.Version}</Text>

          {/* platform.select */}
          <Text>
            {Platform.select({
              ios: 'This is iOS',
              android: 'This is Android',
            })}
          </Text>
        </View>

        {/* PRESSABLES */}
        <Pressable
          onPressIn={() => setPressStatus('Pressed In')}
          onPressOut={() => setPressStatus('Pressed Out')}
          onLongPress={() => setPressStatus('Long Pressed')}
          hitSlop={100}
          pressRetentionOffset={{top: 200, left: 200, right: 200, bottom: 200}}
          android_ripple={{color: 'yellow', radius: 50}}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'blue' : 'wheat',
            },
            styles.mainDiv,
            styles.pressableDiv,
          ]}>
          {({pressed}) => (
            <Text style={[styles.text, {color: pressed ? 'white' : 'black'}]}>
              {pressStatus}
            </Text>
          )}
        </Pressable>

        {/* DIMENSIONS */}
        <View style={globalStyles.mainDiv}>
          <Text>Window Width: {dimensions.window.width}</Text>
          <Text>Window Height: {dimensions.window.height}</Text>
          <Text>Screen Width: {dimensions.screen.width}</Text>
          <Text>Screen Height: {dimensions.screen.height}</Text>
        </View>

        {/* FLATLIST */}
        <FlatList
          data={people}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
          style={globalStyles.mainDiv}
          numColumns={2}
          horizontal={false}
        />

        {/* SECTIONLIST */}
        <SectionList
          sections={food}
          keyExtractor={(item, index) => {
            console.log(item + index);
            return item + index;
          }}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
          renderSectionFooter={({section}) => (
            <Text style={styles.footer}>Total: {section.data.length}</Text>
          )}
          style={[globalStyles.mainDiv, styles.sectionDiv]}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputDiv: {
    padding: 10,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',

    ...Platform.select({
      ios: {
        backgroundColor: 'lightblue',
      },
      android: {
        backgroundColor: 'transparent',
      },
    }),
  },

  pressableDiv: {
    padding: 10,
  },

  item: {
    backgroundColor: 'skyblue',
    padding: 10,
    margin: 5,
  },

  sectionDiv: {
    marginBottom: 20,
  },
});

export default Day2;
