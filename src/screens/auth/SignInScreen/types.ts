import {IAuthStackScreenProps} from 'routes/AuthStack/types';

interface Props extends IAuthStackScreenProps<'signin-screen'> {}

type ISignInScreen = React.FC<Props>;
export type {ISignInScreen};
