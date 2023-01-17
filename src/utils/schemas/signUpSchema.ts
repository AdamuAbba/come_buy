import {LOGIN_SCHEMA} from 'utils/schemas/loginSchema';
import * as yup from 'yup';

const SIGN_UP_SCHEMA = LOGIN_SCHEMA.shape({
  firstName: yup.string().required('field is required'),
  lastName: yup.string().required('field is required'),
  phone: yup
    .number()
    .test({
      name: 'number test',
      test: (val, ctx) => {
        if (typeof val !== 'undefined' && val <= 0) {
          ctx.createError({
            path: 'phone',
            message: `${ctx.path}is invalid`,
          });
          return false;
        } else {
          return true;
        }
      },
    })
    .typeError('only digits allowed')
    .required('field is required'),
});

export {SIGN_UP_SCHEMA};
