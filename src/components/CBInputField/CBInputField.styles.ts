import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    height: 45,
    padding: 0,
    marginBottom: 0,
  },
  mainView: {
    marginBottom: 10,
    width: '80%',
    alignSelf: 'center',
  },
  errorText: {
    fontFamily: 'Quicksand-bold',
    fontSize: 12,
    marginLeft: 4,
  },
  errorView: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.white,
    marginTop: 2,
    borderRadius: 2,
    padding: 1,
  },
});

export {styles};
