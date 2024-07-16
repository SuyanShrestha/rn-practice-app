import { View, Text } from 'react-native'
import React, {useState} from 'react'

const PaginationExample = () => {
  const BASE_URL = 'https://source.unsplash.com/random?sig=';

  const [data, setData] = useState([]);
  return (
    <View>
      <Text>PaginationExample</Text>
      <FlatList
        data={data}
        numColumns={3}
        onEndReached={fetchMore}
        keyExtractor={e => e}
        renderItem={({item}) => (
          <Image source={{uri: BASE_URL + item}} style={styles.item} />
        )}
      />
    </View>
  )
}

export default PaginationExample