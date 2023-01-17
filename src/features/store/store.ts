import {configureStore} from '@reduxjs/toolkit';
import userSlice from 'features/user/userSlice';

const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
  },
});

export default store;
