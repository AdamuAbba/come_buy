import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    elevation: 8,
  },
  cardImage: {
    height: 200,
  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageView: {
    backgroundColor: Colors.white,
  },
  avatarView: {
    borderWidth: 2,
    borderColor: Colors.white,
    borderRadius: 100,
    margin: 9,
  },
  avatarImage: {
    elevation: 5,
  },
  likeBtnView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export {styles};
