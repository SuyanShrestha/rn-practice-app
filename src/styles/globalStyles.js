import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bf23',
    paddingTop: 50,
    display: 'flex',
    alignItems: 'center',
    minHeight: '100vh',
    // height: 300,
    flexGrow: 1,
  },
  innerContainer: {
    display: 'flex',
    gap: 20,
  },
  mainDiv: {
    borderRadius: 10,
    backgroundColor: 'wheat',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  gotoButton: {
    borderRadius: 20,
    backgroundColor: 'wheat',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  button: {
    backgroundColor: 'red',
    width: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
});
