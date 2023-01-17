import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 122,
    marginRight: 20,
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
  },
  titleText: {
    fontSize: 19,
    marginLeft: 9,
    fontFamily: 'Quicksand-bold',
  },
  listHeader: {
    borderTopWidth: 1,
    borderTopColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  filterPointView: {
    paddingVertical: 8,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: Colors.white,
    flexDirection: 'row',
    paddingLeft: 14,
    paddingRight: 6,
  },
  filterText: {
    fontSize: 16,
    fontFamily: 'Quicksand-medium',
    textAlign: 'center',
  },
  filterView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  menuView: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {styles};
