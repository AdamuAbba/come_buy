import {StackScreenProps} from '@react-navigation/stack';
import {Product} from 'features/feed/types';

type IRootStackParamsList = {
  'feed-tabs': undefined;
  'single-product-screen': {product: Product};
};

type IRootStackScreenProps<T extends keyof IRootStackParamsList> =
  StackScreenProps<IRootStackParamsList, T>;

export type {IRootStackParamsList, IRootStackScreenProps};
