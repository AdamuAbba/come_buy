import {IRootStackParamsList} from 'routes/RootStack/types';
import {StackScreenProps} from '@react-navigation/stack';
import {CompositeScreenProps} from '@react-navigation/native';
import {IAuthStackScreenProps} from 'routes/AuthStack/types';
import {LOGIN_SCHEMA} from 'utils/schemas';
import * as yup from 'yup';

type Props = IAuthStackScreenProps<'signin-screen'>;

interface ISingInFormValues extends yup.InferType<typeof LOGIN_SCHEMA> {}

type ISignInForm = React.FC<Props>;
export type {ISignInForm, ISingInFormValues};
