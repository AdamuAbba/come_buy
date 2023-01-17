import {ICBInputField} from 'components/CBInputField/types';
import {useField} from 'formik';
import React from 'react';
import {View} from 'react-native';
import {TextInput, useTheme, Text} from 'react-native-paper';
import {styles} from './CBInputField.styles';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const CBInputField: ICBInputField = props => {
  const {colors} = useTheme();
  const [field, meta, helpers] = useField(props.name);

  const handleOnBlur = (): void => {
    helpers.setTouched(!meta.touched);
  };

  const iconSwap = (): string => {
    switch (props.label) {
      case 'email':
        return 'email';
      case 'first name':
        return 'account';
      case 'last name':
        return 'account-details';
      case 'phone':
        return 'cellphone';
      case 'password':
        return 'eye';
      default:
        return 'email';
    }
  };
  return (
    <View style={styles.mainView}>
      <TextInput
        mode="outlined"
        {...props}
        theme={{
          colors: {
            primary: colors.surface,
            text: colors.surface,
            placeholder: colors.surface,
          },
        }}
        onBlur={handleOnBlur}
        onChangeText={helpers.setValue}
        value={field.value}
        style={styles.container}
        error={meta.touched && meta.error ? true : false}
        right={
          <TextInput.Icon
            icon={iconSwap()}
            color={meta.touched && meta.error ? colors.error : colors.surface}
          />
        }
      />
      {meta.touched && meta.error && (
        <View style={styles.errorView}>
          <MaterialCommunityIcons
            name="information-outline"
            size={24}
            color={colors.error}
          />
          <Text style={styles.errorText} theme={{colors: {text: colors.error}}}>
            {meta.error}
          </Text>
        </View>
      )}
    </View>
  );
};

export default CBInputField;
