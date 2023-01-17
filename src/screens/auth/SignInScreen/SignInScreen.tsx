import GreetingView from 'components/GreetingView';
import SignInForm from 'components/SignInForm';
import React from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {ISignInScreen} from 'screens/auth/SignInScreen/types';
import {styles} from './SignInScreen.styles';

const SignInScreen: ISignInScreen = props => {
  const {colors} = useTheme();

  return (
    <View style={{...styles.container, backgroundColor: colors.primary}}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <ScrollView scrollEnabled contentContainerStyle={styles.scrollView}>
        <GreetingView
          title="Welcome Back"
          description="Log back into your ComeBuy account"
        />
        <SignInForm {...props} />
      </ScrollView>
    </View>
  );
};

export default SignInScreen;
