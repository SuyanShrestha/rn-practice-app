import {View, Text, ScrollView, TouchableOpacity, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import globalStyles from '../../../styles/globalStyles';

import styles from '../../../styles/screens/RetailScreen/RetailScreen';

import {getProducts, truncateText} from '../service/productService';

const RetailScreen = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchData();
  }, []);

  const incrementCount = () => {
    setCount(count => count + 1);
  }

  const decrementCount = () => {
    if(count > 0)(
      setCount(count => count - 1)
    )
    return;
  }

  return (
    <ScrollView
      contentContainerStyle={[globalStyles.container, styles.container]}>
      <Text>RetailScreen</Text>
      {products.length > 0 ? ( 
        <FlatList
          data={products}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.productItem}>
              <Image source={{uri: item.image}} style={styles.productImage} />
              <Text style={styles.title}>{truncateText(item.title, 30)}</Text>
              <Text style={styles.description}>{truncateText(item.description, 60)}</Text>
              <Text style={styles.category}>{item.category.toUpperCase()}</Text>
              <View style={styles.buyDetails}>
                <Text style={styles.rating}>Rating : {item.rating.rate}</Text>
                <Text style={styles.price}>Price : ${item.price}</Text>
              </View>
              <View style={styles.addToCart}>
                <TouchableOpacity style={styles.iconsDiv} onPress={decrementCount}><Text style={styles.iconsText}>-</Text></TouchableOpacity>
                <Text style={styles.countText}>{count}</Text>
                <TouchableOpacity style={styles.iconsDiv} onPress={incrementCount}><Text style={styles.iconsText}>+</Text></TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text>Loading products...</Text>
      )}
    </ScrollView>
  );
};

export default RetailScreen;
