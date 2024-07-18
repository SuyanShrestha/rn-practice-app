import {StyleSheet} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  mainDiv: {
    gap: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
  },
  textDiv: {
    backgroundColor: '#bf23',
    borderWidth: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 30,
    marginBottom: 20,
    width: 300
  },
  submitButton: {
    backgroundColor: 'orange',
    maxWidth: 100,
    textAlign: 'center',
  },
});

export default styles;
