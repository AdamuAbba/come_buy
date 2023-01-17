import {IAuthStackScreenProps} from 'routes/AuthStack/types';

interface Props extends IAuthStackScreenProps<'signup-screen'> {}

type ISignUpScreen = React.FC<Props>;
export type {ISignUpScreen};
