import {StackScreenProps} from '@react-navigation/stack';

type IRootStackParamsList = {
  'auth-stack': undefined;
  'dashboard-screen': undefined;
};

type IRootStackScreenProps<T extends keyof IRootStackParamsList> =
  StackScreenProps<IRootStackParamsList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends IRootStackParamsList {}
  }
}

export type {IRootStackParamsList, IRootStackScreenProps};
