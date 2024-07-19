import {View, Text, StyleSheet, Button} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {Marker} from 'react-native-maps';

const Day9Map = () => {
  const mapRef = useRef(null);

  const [coord, setCoord] = useState(null);

  const INITIAL_REGION = {
    latitude: 27.6863,
    longitude: 85.2415,
    latitudeDelta: 0.0122,
    longitudeDelta: 0.0121,
  };

  const getCurrentLocation = () =>
    new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        position => {
          // const cords = {
          //   latitude: position.coords.latitude,
          //   longitude: position.coords.longitude,
          //   heading: position?.coords?.heading,
          // };
          const cords = position.coords;
          resolve(cords);
        },
        error => {
          reject(error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    });

    const getLiveLocation = async () => {
      const coordinates = await getCurrentLocation();
      setCoord(coordinates);
      console.log(coordinates);
    }

    getLiveLocation();

  return (
    <View style={{flex: 1}}>
      <MapView
        style={StyleSheet.absoluteFill}
        initialRegion={INITIAL_REGION}
        ref={mapRef}
        loadingEnabled={true}></MapView>
      <Text>Day9Map</Text>
      <Button onPress={() => {
        getLiveLocation();
        console.log(coord);
      }} title="Get current location"/>
    </View>
  );
};

export default Day9Map;
