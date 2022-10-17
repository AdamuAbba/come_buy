import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  heartView: {
    marginRight: 30,
  },
  countView: {
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -13,
    right: -18,
    zIndex: 1,
    height: 20,
    width: 20,
    elevation: 10,
  },
  countText: {
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export {styles};
