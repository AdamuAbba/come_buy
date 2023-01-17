import {
  IRootStackScreenProps,
  IRootStackParamsList,
} from 'routes/RootStack/types';
import {CompositeScreenProps} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
type IAuthStackParamsList = {
  'signup-screen': undefined;
  'signin-screen': undefined;
};

type IAuthStackScreenProps<T extends keyof IAuthStackParamsList> =
  CompositeScreenProps<
    StackScreenProps<IAuthStackParamsList, T>,
    IRootStackScreenProps<keyof IRootStackParamsList>
  >;

export type {IAuthStackParamsList, IAuthStackScreenProps};
