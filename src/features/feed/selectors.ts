import {RootState} from 'features/store/types';

const selectLikedFeed = (state: RootState) => state.feed.likedFeed;

export {selectLikedFeed};
