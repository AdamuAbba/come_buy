import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Env} from '../../../Env';

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: Env.BASE_URL,
  }),
  endpoints: () => ({}),
});

export default api;
