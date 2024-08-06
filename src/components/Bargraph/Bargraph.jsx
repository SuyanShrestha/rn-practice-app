import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {BarChart} from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'], 
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43], // First set of bars
      color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, 
    },
    {
      data: [25, 50, 35, 90, 85, 60], // Second set of bars
      color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, 
    },
  ],
};

const Bargraph = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text>Monthly Sales Data</Text>
      <BarChart
        data={data}
        width={screenWidth - 32} 
        height={220}
        yAxisLabel="$"
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#fefefe',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          barPercentage: 0.5,
        }}
        verticalLabelRotation={30}
        style={{marginVertical: 8}}
      />
    </View>
  );
};

export default Bargraph;
