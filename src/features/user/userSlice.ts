import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {IInitialState} from './types';

const initialState: IInitialState = {
  userData: {email: '', password: ''},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (
      state,
      {payload}: PayloadAction<IInitialState['userData']>,
    ) => {
      state.userData = payload;
    },
  },
});

export const {setUserData} = userSlice.actions;

export default userSlice;
