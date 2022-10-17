import {AvatarImageSource} from 'react-native-paper/lib/typescript/components/Avatar/AvatarImage';

interface IUser {
  imgUrl: AvatarImageSource;
  id?: number;
  name: string;
  bgColor: string;
  size?: number;
}

export type {IUser};
