import React, {useState, useEffect} from 'react';
import {FlatList, Text, View, ActivityIndicator, Image, StyleSheet, ScrollView} from 'react-native';

const PaginationExample = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchUsers = (page) => {
    setLoading(true);
    fetch(`https://randomuser.me/api/?page=${page}&results=5`)
      .then(res => res.json())
      .then(res => {
        setUsers(res.results);
        setLoading(false);
      });
  };

  const loadMoreUsers = () => {
    setPage(page => page + 1);
  };

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const renderItem = ({item}) => {
    return (
      <ScrollView style={styles.userDiv}>
        <Image source={{uri: item.picture.large}} />
        <View>
          <Text>{`${item.name.first} ${item.name.last}`}</Text>
          <Text>{item.email}</Text>
        </View>
      </ScrollView>
    );
  };

  return (
    <FlatList
      data={users}
      keyExtractor={item => item.email}
      renderItem={renderItem}
      onEndReached={fetchUsers}
      onEndReachedThreshold={0.5}
      ListFooterComponent={() =>
        loading ? <ActivityIndicator size="large" /> : null
      }
    />
  );
};

const styles = StyleSheet.create({
  userDiv: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'skyblue',
    borderRadius: 10,
  },
})

export default PaginationExample;
