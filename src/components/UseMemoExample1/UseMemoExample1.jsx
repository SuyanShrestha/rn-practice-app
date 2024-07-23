import React, {useMemo, useState} from 'react';
import {View, Text, Button, ScrollView, FlatList} from 'react-native';
import globalStyles from '../../styles/globalStyles';

// EXAMPLE 1
// FOR BASIC EXPENSIVE CALCULATION

const ExpensiveComponent = ({number}) => {
  const computeExpensiveValue = num => {
    console.log('Computing expensive value...');
    // Simulate a heavy computation
    return num * num;
  };

  const memoizedValue = useMemo(() => computeExpensiveValue(number), [number]);

  return (
    <View>
      <Text>Number: {number}</Text>
      <Text>Computed Value: {memoizedValue}</Text>
    </View>
  );
};

const BasicExample1 = () => {
  const [number, setNumber] = useState(1);

  const handlePress = () => {
    const randomValue = Math.random() < 0.5 ? 1 : 2;
    setNumber(randomValue);
  };

  return (
    <View>
      <ExpensiveComponent number={number} />
      <Button title="Randomize Number 1 or 2" onPress={handlePress} />
    </View>
  );
};

// EXAMPLE 2
// FILTERING DATA
const data = [
  {id: 1, name: 'Suyan', category: 'A'},
  {id: 2, name: 'Shristi', category: 'B'},
  {id: 3, name: 'Bitisha', category: 'A'},
  {id: 4, name: 'Swornim', category: 'B'},
  {id: 5, name: 'Prekshya', category: 'C'},
];

const filterCriteria = 'A';

const FilterDataExample = ({data, filterCriteria}) => {
  const filteredData = useMemo(() => {
    return data.filter(item => (item.category = filterCriteria));
  }, [data, filterCriteria]);

  return (
    <FlatList
      data={filteredData}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => <Text>{item.name}</Text>}
    />
  );
};

// EXAMPLE 3
//  CUSTOM HOOK FOR FETCHING DATA AND MEMOIZING IT
const useDataFetching = url => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, [url]);

  // only save data when data changes
  const memoizedData = useMemo(() => data, [data]);

  return memoizedData;
};

const CustomHookExample = () => {
  const url = 'https://reqres.in/api/products/3';
  const data = useDataFetching(url);

  if (!data) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>Fetched Data:</Text>
      {data && (
        <View>
          <Text>{data.data.name}</Text>
          <Text>{data.data.color}</Text>
        </View>
      )}
    </View>
  );
};

const UseMemoExample1 = () => {
  return (
    <ScrollView contentContainerStyle={globalStyles.innerContainer}>
      <BasicExample1 />
      <FilterDataExample data={data} filterCriteria={filterCriteria} />
      <CustomHookExample />
    </ScrollView>
  );
};

export default UseMemoExample1;
