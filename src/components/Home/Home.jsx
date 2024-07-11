import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';

import globalStyles from '../../../styles/globalStyles';

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={globalStyles.innerContainer}>
        
        {/* buttons div */}
        <View style={globalStyles.mainDiv}>
          <Text>Home</Text>
          <Button
            title="Normal Button"
            style={globalStyles.button}
            onPress={() => console.warn('Normal Button1')}></Button>
          <Button
            title="Normal Button2"
            color="red"
            onPress={() => console.warn('Normal Button2')}></Button>
        </View>

        {/* touchable div */}
        <View style={globalStyles.mainDiv}>
          <TouchableOpacity style={styles.touchables}>
            <Text>Touchable Opacity</Text>
          </TouchableOpacity>
          <TouchableHighlight
            style={styles.touchables}
            onPress={() => console.warn('Touchable Highlight pressed')}>
            <Text>Touchable Highlight</Text>
          </TouchableHighlight>
          <TouchableWithoutFeedback>
            <View style={styles.touchables}>
              <Text>Touchable Without Feedback</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        {/* Image div */}
        <View style={globalStyles.mainDiv}>
          <Text>Image</Text>
          <Image
            style={styles.imageDiv}
            source={require('../../assets/images/chibi1.jpeg')}
          />
          <TouchableOpacity>
            <Image
              style={styles.imageDiv}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
          </TouchableOpacity>

          {/* Image Background */}
          <ImageBackground
            source={require('../../assets/images/chibi2.png')}
            style={styles.imageDiv}
            resizeMode="cover">
            <Text>I am inside the Image hululu imagebackground</Text>
          </ImageBackground>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    color: 'red',
  },
  touchables: {
    padding: 10,
    backgroundColor: 'white',
    color: 'white',
    borderRadius: 20,
    margin: 10,
  },
  imageDiv: {
    width: 200,
    height: 200,
    borderRadius: 10,
    justifyContent: 'center',
  },
});

export default Home;
