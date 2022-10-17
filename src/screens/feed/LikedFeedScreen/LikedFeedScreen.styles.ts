import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {flex: 1},
  listFooter: {height: 100},
  likedPostView: {
    width: 100,
    padding: 3,
    elevation: 9,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  lottieContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottie: {
    width: 300,
  },
  emptyCompTextView: {
    padding: 11,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});

export {styles};
