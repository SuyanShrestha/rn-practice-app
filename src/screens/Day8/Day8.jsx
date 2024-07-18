import {View, Text, StyleSheet, Button} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

import MapView from 'react-native-maps';
import {Marker, Heatmap} from 'react-native-maps';

import globalStyles from '../../styles/globalStyles';

const Day8 = () => {
  const mapRef = useRef(null);

  const INITIAL_REGION = {
    latitude: 27.7043,
    longitude:  85.3075,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const [region, setRegion] = useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  useEffect(() => console.log(region), [region]);

  const bajraCoordinates = {
    latitude: 27.7068,
    longitude: 85.3254,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const ranipokhariCoordinates = {
    latitude: 27.708,
    longitude: 85.3157,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const goToLocation = location => {
    mapRef.current?.animateToRegion(location, 3000);
  };

  const goByCamera = location => {
    mapRef.current.animateCamera(
      {
        center: location,
        pitch: 2,
        heading: 20,
        altitude: 200,
        zoom: 30,
      },
      {duration: 3000},
    );
  };

  // for heatmaps
  const heatmapPoints = [
    {latitude: 27.7068, longitude: 85.3254, weight: 1},
    {latitude: 27.7069, longitude: 85.3255, weight: 2},
    {latitude: 27.707, longitude: 85.3256, weight: 3},
  ];

  return (
    <View style={{flex: 1}}>
      <MapView
        style={StyleSheet.absoluteFill}
        initialRegion={INITIAL_REGION}
        // region={region}
        onRegionChangeComplete={area => setRegion(area)}
        ref={mapRef}
        mapType="satellite"
        // zoomEnabled={false}
        loadingEnabled={true}>
        {/* PRACTICING MARKERS */}
        {/* <Marker
          coordinate={ranipokhariCoordinates}
          pinColor="blue"
          image={{
            uri: 'https://icon2.cleanpng.com/20240211/wkb/transparent-location-symbol-red-map-marker-with-white-o-1710881241187.webp',
          }}>
          <Text>Suyan@Bajra</Text>
        </Marker> */}

        <Marker
          coordinate={bajraCoordinates}
          pinColor="green"
          title="Bajra"
          description="suyan heroheeralal yeta coding gariraxa"
          onPress={() => console.warn('Title and description shown')}
          draggable={true}
          calloutAnchor={{x: 0.5, y: -0.3}}
          anchor={{x: 1.5, y: 0.5}}
          flat={true}
          onCalloutPress={() => console.warn('Callout pressed')}
        />

        <Heatmap
          points={heatmapPoints}
          radius={20}
          opacity={0.6}
          gradient={{
            colors: ['aqua', 'black', 'white', 'yellow'],
            startPoints: [0.1, 0.3, 0.5, 0.7],
            colorMapSize: 256,
          }}
        />


      </MapView>
      <View>
        <Button
          title="Go to Bajra"
          onPress={() => goToLocation(bajraCoordinates)}
        />
        <Button
          title="Go by camera"
          onPress={() => goByCamera(bajraCoordinates)}
        />
      </View>
    </View>
  );
};

export default Day8;
