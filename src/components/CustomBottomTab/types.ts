import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

type ICustomBottomTab<T extends keyof BottomTabBarProps> = Pick<
  BottomTabBarProps,
  T
>;

export type {ICustomBottomTab};
