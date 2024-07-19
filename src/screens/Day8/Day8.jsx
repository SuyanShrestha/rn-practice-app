import {View, Text, StyleSheet, Button} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

import MapView from 'react-native-maps';
import {Marker, Heatmap, Polygon, Circle, Polyline} from 'react-native-maps';

import globalStyles from '../../styles/globalStyles';

const Day8 = () => {
  const mapRef = useRef(null);

  const INITIAL_REGION = {
    latitude: 27.6863,
    longitude: 85.2415,
    latitudeDelta: 0.0122,
    longitudeDelta: 0.0121,
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
    {latitude: 27.7071, longitude: 85.3257, weight: 4},
    {latitude: 27.7072, longitude: 85.3258, weight: 5},
    {latitude: 27.7073, longitude: 85.3259, weight: 6},
    {latitude: 27.7074, longitude: 85.326, weight: 7},
    {latitude: 27.7075, longitude: 85.3261, weight: 8},
    {latitude: 27.7076, longitude: 85.3262, weight: 9},
    {latitude: 27.7077, longitude: 85.3263, weight: 10},
  ];

  // for polygon
  const polygonCoordinates = [
    {latitude: 27.6858, longitude: 85.2405},
    {latitude: 27.6862, longitude: 85.2415},
    {latitude: 27.6859, longitude: 85.242},
    {latitude: 27.6864, longitude: 85.2425},
    {latitude: 27.6857, longitude: 85.243},
    {latitude: 27.6855, longitude: 85.2422},
    {latitude: 27.685, longitude: 85.2418},
    {latitude: 27.6853, longitude: 85.2408},
    {latitude: 27.6858, longitude: 85.2405}, // Closing the polygon
  ];

  // for circle
  const circleCenter = {
    latitude: 27.687,
    longitude: 85.243,
  };

  // for polyline
  const [isDashed, setIsDashed] = useState(false);

  const polylineCoordinates = [
    {latitude: 27.6858, longitude: 85.2405},
    {latitude: 27.708, longitude: 85.3157},
    {latitude: 27.7068, longitude: 85.3254},
  ];

  const handleDashedPress = () => {
    setIsDashed(!isDashed);
    console.warn('Dashed');
  }

  return (
    <View style={{flex: 1}}>
      <MapView
        style={StyleSheet.absoluteFill}
        initialRegion={INITIAL_REGION}
        // region={region}
        onRegionChangeComplete={area => setRegion(area)}
        ref={mapRef}
        mapType="hybrid"
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

        {/* polygon */}
        <Polygon
          coordinates={polygonCoordinates}
          strokeColor="black"
          fillColor="rgba(255,0,0,0.5)"
          strokeWidth={5}
          tappable={true}
          onPress={() => console.warn('Polygon 1 got pressed.')}
          lineCap="butt"
        />

        {/* circle */}
        <Circle
          center={circleCenter}
          radius={1000}
          strokeColor="#000"
          fillColor="rgba(255,0,255,0.2)"
          strokeWidth={2}
          zIndex={-1}
          tappable={true}
          onPress= {() => console.warn('circle got pressed')}
        />

        {/* Polyline */}
        <Polyline
          coordinates={polylineCoordinates}
          strokeColor="#000" 
          strokeWidth={5}
          lineDashPattern={isDashed ? [200, 50] : null}
          tappable={true}
          onPress={() => handleDashedPress}
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
