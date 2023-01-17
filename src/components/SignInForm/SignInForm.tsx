import CBInputField from 'components/CBInputField';
import {ISignInForm, ISingInFormValues} from 'components/SignInForm/types';
import {selectUser} from 'features/user/helpers';
import {Formik} from 'formik';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Button, Text, useTheme} from 'react-native-paper';
import {useAppSelector} from 'utils/hooks';
import {LOGIN_SCHEMA} from 'utils/schemas';
import {styles} from './SignInForm.styles';

const SignInForm: ISignInForm = props => {
  const user = useAppSelector(selectUser);

  const {email, password} = user;
  const {colors} = useTheme();

  const InitialValues: ISingInFormValues = {
    email,
    password,
  };

  const handleOnSubmit = (values: ISingInFormValues): void => {
    props.navigation.navigate('dashboard-screen');
    console.log(values);
  };

  return (
    <Formik
      validateOnBlur={true}
      validateOnMount={true}
      initialValues={InitialValues}
      onSubmit={handleOnSubmit}
      validationSchema={LOGIN_SCHEMA}>
      {({isValid, handleSubmit}) => (
        <View style={styles.container}>
          <View style={styles.inputView}>
            <CBInputField
              keyboardType="email-address"
              label="email"
              name="email"
            />
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
              Login
            </Button>
            <TouchableOpacity>
              <Text
                style={{...styles.link, ...styles.text}}
                theme={{
                  colors: {text: colors.surface},
                }}>
                Forgot your password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default SignInForm;
