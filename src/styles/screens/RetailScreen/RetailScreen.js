import {StyleSheet} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dfe6ec',
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  productItem: {
    backgroundColor: '#FFF',
    marginBottom: 32,
    padding: 12,
    borderRadius: 10,
    width: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  productImage: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    marginBottom: 12,
  },
  title: {
    fontSize: 15,
    alignSelf: 'center',
    fontWeight: '700',
  },
  description: {
    fontSize: 12,
    textAlign: 'center',
  },
  category: {
    fontSize: 12,
    fontWeight: '300',
    marginTop: 8,
    color: '#797979',
    alignSelf: 'flex-start'
  },
  buyDetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 250
  },
  rating: {
    fontSize: 15,
  },
  price: {
    fontSize: 15,
    fontWeight: '700'
  },
  addToCart: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    marginVertical: 10
  },
  countText: {
    fontSize: 25,
    fontWeight: '700'
  },
  iconsDiv: {
    borderRadius: 50,
    width: 50,
    backgroundColor: '#cf4307',
    aspectRatio: '1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconsText: {
    fontSize: 30,
    color: 'white'
  }
});

export default styles;
