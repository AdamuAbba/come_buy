import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './SignUpForm.styles';
import CBInputField from 'components/CBInputField';
import {Button, useTheme, Text} from 'react-native-paper';
import {Formik} from 'formik';
import type {ISignUpForm, ISingUpFormValues} from 'components/SignUpForm/types';
import {SIGN_UP_SCHEMA} from 'utils/schemas';
import {useAppDispatch} from 'utils/hooks';
import {setUserData} from 'features/user/userSlice';

const SignUpForm: ISignUpForm = props => {
  const dispatch = useAppDispatch();
  const {colors} = useTheme();

  const InitialValues: ISingUpFormValues = {
    firstName: '',
    lastName: '',
    phone: 0,
    email: '',
    password: '',
  };

  const handleOnSubmit = (values: ISingUpFormValues): void => {
    dispatch(setUserData(values));
    props.navigation.navigate('signin-screen');
    console.log(values);
  };

  const handleLoginPress = () => props.navigation.navigate('signin-screen');

  return (
    <Formik
      validateOnBlur={true}
      initialValues={InitialValues}
      onSubmit={handleOnSubmit}
      validationSchema={SIGN_UP_SCHEMA}>
      {({isValid, handleSubmit}) => (
        <View style={styles.container}>
          <View style={styles.inputView}>
            <CBInputField label="first name" name="firstName" />
            <CBInputField label="last name" name="lastName" />
            <CBInputField
              keyboardType="email-address"
              label="email"
              name="email"
            />
            <CBInputField keyboardType="phone-pad" label="phone" name="phone" />
            <CBInputField
              keyboardType="visible-password"
              label="password"
              name="password"
            />
          </View>
          <View style={styles.btnView}>
            <Button
              onPress={handleSubmit}
              color={isValid ? colors.surface : colors.error}
              mode="contained"
              style={styles.button}>
              Create Account
            </Button>
            <View style={styles.loginView}>
              <Text style={styles.text}>Already have an account? </Text>
              <TouchableOpacity onPress={handleLoginPress}>
                <Text
                  style={styles.link}
                  theme={{
                    colors: {text: colors.surface},
                  }}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default SignUpForm;
