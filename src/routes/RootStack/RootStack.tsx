import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import AuthStack from 'routes/AuthStack';
import DashboardScreen from 'screens/main/DashboardScreen';
import {IRootStackParamsList} from './types';

const Tabs = createStackNavigator<IRootStackParamsList>();

const {Navigator, Screen} = Tabs;

const RootStack = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="auth-stack"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerShown: false,
        }}>
        <Screen name="auth-stack" component={AuthStack} />
        <Screen name="dashboard-screen" component={DashboardScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
