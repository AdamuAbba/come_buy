import {Product} from 'features/feed/types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IInitialState} from './types';

const initialState: IInitialState = {
  likedFeed: [],
};

export const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    addToLikedFeed: (state, {payload}: PayloadAction<Product>) => {
      const itemSearch = state.likedFeed.find(item => item)?.id;
      if (itemSearch === payload.id) {
        state.likedFeed = state.likedFeed.filter(
          item => item.id !== payload.id,
        );
        console.log('item id deleted : ', payload.id);
      } else {
        state.likedFeed = [...state.likedFeed, payload];
        console.log('item id added : ', payload.id);
      }
    },
  },
});

export const {addToLikedFeed} = feedSlice.actions;

export default feedSlice;
