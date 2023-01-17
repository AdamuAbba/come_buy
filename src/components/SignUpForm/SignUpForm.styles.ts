import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  button: {
    padding: 7,
  },
  inputView: {
    marginBottom: 30,
    marginTop: 10,
  },
  btnView: {
    alignSelf: 'center',
    width: '80%',
    marginBottom: 20,
  },
  text: {
    textAlign: 'center',
  },
  link: {
    fontFamily: 'Quicksand-bold',
    fontSize: 16,
  },

  loginView: {
    flexDirection: 'row',
    marginTop: 15,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {styles};
