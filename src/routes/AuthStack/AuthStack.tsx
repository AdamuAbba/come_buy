import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import {IAuthStackParamsList} from 'routes/AuthStack/types';
import SignInScreen from 'screens/auth/SignInScreen';
import SignUpScreen from 'screens/auth/SignUpScreen';

const AuthStack = () => {
  const Stack = createStackNavigator<IAuthStackParamsList>();

  const {Navigator, Screen} = Stack;

  return (
    <Navigator
      initialRouteName="signup-screen"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Screen name="signup-screen" component={SignUpScreen} />
      <Screen name="signin-screen" component={SignInScreen} />
    </Navigator>
  );
};

export default AuthStack;
