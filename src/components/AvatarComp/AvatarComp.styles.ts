import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    margin: 5,
    borderRadius: 100,
    borderWidth: 3,
    elevation: 10,
  },
  avatar: {
    borderWidth: 4,
    borderColor: Colors.white,
    borderRadius: 100,
  },
  name: {
    alignSelf: 'center',
  },
  avatarImage: {
    elevation: 5,
  },
});

export {styles};
