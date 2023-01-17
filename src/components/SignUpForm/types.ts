import {IAuthStackScreenProps} from 'routes/AuthStack/types';
import {SIGN_UP_SCHEMA} from 'utils/schemas';
import * as yup from 'yup';

type Props = IAuthStackScreenProps<'signup-screen'>;

interface ISingUpFormValues extends yup.InferType<typeof SIGN_UP_SCHEMA> {}

type ISignUpForm = React.FC<Props>;
export type {ISignUpForm, ISingUpFormValues};
