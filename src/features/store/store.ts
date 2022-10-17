import {configureStore} from '@reduxjs/toolkit';
import api from 'services/api';
import feedSlice from 'features/feed/feedSlice';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [feedSlice.name]: feedSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
