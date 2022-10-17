import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 30,
    borderRadius: 10,
    elevation: 10,
    height: 200,
  },
  paragraphText: {
    textAlign: 'justify',
  },
  titleView: {
    padding: 8,
  },
  listView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listIcon: {
    marginRight: 10,
  },
  titleText: {
    width: '80%',
  },
  descriptionView: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 10,
    elevation: 10,
    padding: 15,
  },
});

export {styles};
