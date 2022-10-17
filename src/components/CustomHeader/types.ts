import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import {StackHeaderProps} from '@react-navigation/stack';

export type ICustomHeader =
  | Pick<StackHeaderProps, 'back' | 'navigation' | 'route'>
  | Pick<BottomTabHeaderProps, 'navigation' | 'route'>;
