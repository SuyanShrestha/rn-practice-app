import {StyleSheet} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDiv: {
    backgroundColor: '#bf23',
    borderWidth: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 5,
    marginBottom: 20,
    width: 300,
    alignSelf: 'center',
    textAlign: 'center',
  },
  buttonDiv: {
    backgroundColor: 'pink',
    borderWidth: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 100,
    marginBottom: 20,
    alignSelf: 'center',
    textAlign: 'center',
  },
  languageList: {
    backgroundColor: '#bf23',
    borderWidth: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 20,
    width: 300,
    alignSelf: 'center',
    textAlign: 'center',
  },
  language: {
    borderBottomColor: '#808080',
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginBottom: 20,
    textAlign: 'center',
  }
});

export default styles;
