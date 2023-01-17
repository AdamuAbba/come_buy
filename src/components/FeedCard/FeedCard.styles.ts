import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    margin: 6,
    elevation: 5,
    height: 300,
    width: 163,
    backgroundColor: 'white',
    borderRadius: 7,
  },

  titleView: {
    alignSelf: 'center',
    width: '88%',
    marginTop: 10,
  },
  imageView: {
    height: 170,
    justifyContent: 'flex-end',
    paddingLeft: 8,
  },
  price: {
    fontFamily: 'Quicksand-bold',
    fontSize: 17,
  },
  button: {
    width: '88%',
    alignSelf: 'center',
    marginTop: 10,
    elevation: 5,
  },

  buttonText: {
    fontSize: 13,
  },
});

export {styles};
