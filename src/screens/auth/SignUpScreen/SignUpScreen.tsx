import {ScrollView, StatusBar, View} from 'react-native';
import React from 'react';
import {ISignUpScreen} from 'screens/auth/SignUpScreen/types';
import {styles} from './SignUpScreen.styles';
import {useTheme} from 'react-native-paper';
import GreetingView from 'components/GreetingView';
import SignUpForm from 'components/SignUpForm';

const SignUpScreen: ISignUpScreen = props => {
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <ScrollView
        scrollEnabled={true}
        contentContainerStyle={{
          ...styles.scrollView,
          backgroundColor: colors.primary,
        }}>
        <GreetingView
          title="Hey there"
          description="Create a come buy account"
        />
        <SignUpForm {...props} />
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;
