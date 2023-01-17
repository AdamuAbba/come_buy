import {RootState} from 'features/store/types';

const selectUser = (state: RootState) => state.user.userData;

export {selectUser};
