import {StackScreenProps} from '@react-navigation/stack';
import {MaterialBottomTabScreenProps} from '@react-navigation/material-bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {IRootStackParamsList} from 'routes/RootStack/types';

type IFeedTabsParamsList = {
  'main-feed-screen': undefined;
  'liked-feed-screen': undefined;
};

interface ITabIcon {
  name: keyof typeof MaterialCommunityIcons.glyphMap;
  color: string;
  focused: boolean;
}

type IFeedTabsScreenProps<T extends keyof IFeedTabsParamsList> =
  CompositeScreenProps<
    MaterialBottomTabScreenProps<IFeedTabsParamsList, T>,
    StackScreenProps<IRootStackParamsList, 'feed-tabs'>
  >;

export type {IFeedTabsScreenProps, ITabIcon, IFeedTabsParamsList};
