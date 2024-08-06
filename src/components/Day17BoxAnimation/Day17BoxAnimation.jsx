import {
  View,
  Text,
  ScrollView,
  Animated,
  TouchableOpacity,
  Easing,
} from 'react-native';
import React, {useRef, useState} from 'react';
import globalStyles from '../../styles/globalStyles';
import styles from '../../styles/components/Day17BoxAnimation/Day17BoxAnimation';

const Day17BoxAnimation = () => {
  const verticalAnimation = useRef(new Animated.Value(0)).current;
  const horizontalAnimation = useRef(new Animated.Value(0)).current;

  const fadeScaleAnimation = useRef(new Animated.Value(0)).current;

  const opacityAnimation = useRef(new Animated.Value(0)).current;
  const translateYAnimation = useRef(new Animated.Value(0)).current;

  // stagger
  const opacity1 = useRef(new Animated.Value(0)).current;
  const opacity2 = useRef(new Animated.Value(0)).current;
  const opacity3 = useRef(new Animated.Value(0)).current;

  const translationAnimation = useRef(new Animated.ValueXY({x: 0, y: 0}));

  const [btn1Clicked, setBtn1Clicked] = useState(false);
  const [btn2Clicked, setBtn2Clicked] = useState(false);
  const [btn3Clicked, setBtn3Clicked] = useState(false);
  const [btn4Clicked, setBtn4Clicked] = useState(false);

  const goVertical = () => {
    // verticalAnimation.setValue(0);
    Animated.spring(verticalAnimation, {
      toValue: btn1Clicked ? 0 : 1,
      useNativeDriver: true,
      friction: 2,
      tension: 590,
    }).start();
  };

  const goHorizontal = () => {
    // horizontalAnimation.setValue(0);
    Animated.sequence([
      Animated.spring(horizontalAnimation, {
        toValue: btn2Clicked ? 0 : 1,
        useNativeDriver: true,
      }),
      Animated.spring(horizontalAnimation, {
        toValue: btn2Clicked ? 1 : 0,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const animatedStyle1 = {
    opacity: fadeScaleAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0.4],
    }),
    transform: [
      {
        scale: fadeScaleAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.5],
        }),
      },
    ],
  };

  const goFadeScale = () => {
    Animated.timing(fadeScaleAnimation, {
      toValue: btn3Clicked ? 0 : 1,
      duration: 500,
      useNativeDriver: true,
      delay: 500,
      easing: Easing.bounce,
    }).start();
  };

  const startSequence = () => {
    opacityAnimation.setValue(0);
    translateYAnimation.setValue(0);
    Animated.sequence([
      Animated.timing(opacityAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(translateYAnimation, {
        toValue: 100,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnimation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(translateYAnimation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const startParallel = () => {
    opacityAnimation.setValue(0);
    translateYAnimation.setValue(0);
    Animated.parallel([
      Animated.timing(opacityAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(translateYAnimation, {
        toValue: 100,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const startStagger = () => {
    Animated.stagger(500, [
      Animated.timing(opacity1, {
        toValue: btn4Clicked ? 0 : 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(opacity2, {
        toValue: btn4Clicked ? 0 : 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(opacity3, {
        toValue: btn4Clicked ? 0 : 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <ScrollView style={[globalStyles.innerContainer]}>
      <Text style={styles.textDiv}>Day 17 Box Animation</Text>

      <View>
        {/* animation box */}
        <Animated.View
          style={[
            {
              width: 50,
              height: 50,
              backgroundColor: 'orange',
              alignSelf: 'center',
              zIndex: 100,
              margin: 10,
            },
            {
              transform: [
                {
                  translateY: verticalAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 100],
                  }),
                },
                {
                  translateX: horizontalAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 100],
                  }),
                },
              ],
            },
          ]}></Animated.View>

        <Animated.View
          style={[
            {
              width: 50,
              height: 50,
              backgroundColor: 'orange',
              alignSelf: 'center',
              zIndex: 100,
              margin: 10,
            },
            animatedStyle1,
          ]}></Animated.View>

        {/* sequence and parallel */}
        <Animated.View
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'red',
            alignSelf: 'center',
            zIndex: 100,
            opacity: opacityAnimation,
            transform: [{translateY: translateYAnimation}],
          }}
        />

        {/* stagger ankmation */}
        <View
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            gap: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Animated.View
            style={{
              width: 25,
              height: 25,
              backgroundColor: 'red',
              opacity: opacity1,
            }}
          />
          <Animated.View
            style={{
              width: 25,
              height: 25,
              backgroundColor: 'green',
              opacity: opacity2,
            }}
          />
          <Animated.View
            style={{
              width: 25,
              height: 25,
              backgroundColor: 'blue',
              opacity: opacity3,
            }}
          />
        </View>

        {/* buttons */}
        <TouchableOpacity
          style={globalStyles.gotoButton}
          onPress={() => {
            setBtn1Clicked(!btn1Clicked);
            goVertical();
          }}>
          <Text>Go Vertical</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={globalStyles.gotoButton}
          onPress={() => {
            setBtn2Clicked(!btn2Clicked);
            goHorizontal();
          }}>
          <Text>Go Horizontal</Text>
        </TouchableOpacity>

        {/* fade and scale */}
        <TouchableOpacity
          style={globalStyles.gotoButton}
          onPress={() => {
            setBtn3Clicked(!btn3Clicked);
            goFadeScale();
          }}>
          <Text>Go Fade Scale</Text>
        </TouchableOpacity>

        {/* sequence animation */}
        <TouchableOpacity
          style={globalStyles.gotoButton}
          onPress={() => {
            startSequence();
          }}>
          <Text>Go Sequence animation</Text>
        </TouchableOpacity>

        {/* parallel animation */}
        <TouchableOpacity
          style={globalStyles.gotoButton}
          onPress={() => {
            startParallel();
          }}>
          <Text>Go Parallel animation</Text>
        </TouchableOpacity>

        {/* parallel animation */}
        <TouchableOpacity
          style={globalStyles.gotoButton}
          onPress={() => {
            setBtn4Clicked(!btn4Clicked);
            startStagger();
          }}>
          <Text>Go stagger animation</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Day17BoxAnimation;
