import {Product} from 'features/feed/types';
import api from 'services/api';

const products = api.injectEndpoints({
  endpoints: builder => ({
    getProducts: builder.query<Product[], {limit: number}>({
      query: ({limit}) => ({
        url: `/products?limit=${limit}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {useGetProductsQuery} = products;
