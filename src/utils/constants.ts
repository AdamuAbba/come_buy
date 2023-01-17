import {Dimensions, StatusBar} from 'react-native';
import {MessageOptions} from 'react-native-flash-message';
import Constants from 'expo-constants';

const BASE_URL = Constants.expoConfig?.extra?.API_URL;

const SCREEN_HEIGHT: number = Dimensions.get('window').height;
const SCREEN_WIDTH: number = Dimensions.get('window').width;
const NINETY_PERCENT_WIDTH = 0.9 * SCREEN_WIDTH;

const successConfig: MessageOptions = {
  type: 'success',
  duration: 3000,
  animated: true,
  icon: 'success',
  hideOnPress: true,
  autoHide: false,
  hideStatusBar: false,
  message: 'Success',
  floating: true,
  position: 'center',
  statusBarHeight: StatusBar.currentHeight,
  titleStyle: {
    fontFamily: 'Quicksand-bold',
    fontSize: 20,
  },
  textStyle: {
    fontFamily: 'Quicksand-medium',
    fontSize: 16,
  },
};

const errorConfig: MessageOptions = {
  ...successConfig,
  type: 'danger',
  icon: 'danger',
  message: 'Error',
};

export {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  successConfig,
  errorConfig,
  NINETY_PERCENT_WIDTH,
  BASE_URL,
};
