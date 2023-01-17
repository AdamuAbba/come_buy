import * as yup from 'yup';

const LOGIN_SCHEMA = yup.object({
  email: yup.string().email('email is invalid').required('field is required'),
  password: yup
    .string()
    .min(8, 'password must be 8 characters')
    .required('field is required'),
});

export {LOGIN_SCHEMA};
