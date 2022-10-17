import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import CustomHeader from 'components/CustomHeader';
import React from 'react';
import FeedTabs from 'routes/FeedTabs';
import SingleProductScreen from 'screens/other/SingleProductScreen';
import {IRootStackParamsList} from './types';

const Tabs = createStackNavigator<IRootStackParamsList>();

const {Navigator, Screen} = Tabs;

const RootStack = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          header: props => <CustomHeader {...props} />,
          cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid,
        }}>
        <Screen name="feed-tabs" component={FeedTabs} />
        <Screen name="single-product-screen" component={SingleProductScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
