import {View, Text, StyleSheet, Button, Alert, Dimensions} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const Day9Map = () => {
  const screen = Dimensions.get('window');
  const ASPECT_RATIO = screen.width / screen.height;
  const LATITUDE_DELTA = 0.04;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  const mapRef = useRef(null);

  const [coord, setCoord] = useState(null);

  const [coordValues, setCoordValues] = useState(null);

  const getCurrentLocation = () =>
    new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        position => {
          const cords = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            heading: position?.coords?.heading,
          };
          resolve(cords);
        },
        error => {
          reject(error.message);
        },
        {
          enableHighAccuracy: false, 
          timeout: 5000,
          maximumAge: 10000,
        },
      );
    });

  const getLiveLocation = async () => {
    const {latitude, longitude} = await getCurrentLocation();
    setCoord({
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    });
  };

  // Geolocation.getCurrentPosition(
  //   position => {
  //     const location = JSON.stringify(position);

  //     setCoordValues({location});
  //     console.warn(`Geolocation : ${location}`);
  //   },
  //   error => Alert.alert(error.message),
  //   {enableHighAccuracy: false, timeout: 15000, maximumAge: 5000},
  // );

  useEffect(() => {
    getLiveLocation();
  }, []);

  return (
    <View style={{flex: 1}}>
      <MapView
        style={StyleSheet.absoluteFill}
        initialRegion={coord}
        ref={mapRef}
        loadingEnabled={true}
        mapType="satellite">
        {coord && (
          <Marker
            coordinate={{
              latitude: coord.latitude,
              longitude: coord.longitude,
            }}
            pinColor="green"
            title="Your Location"
            description="This is where you are"
          />
        )}
      </MapView>
      <Text>Day9Map</Text>
    </View>
  );
};

export default Day9Map;
