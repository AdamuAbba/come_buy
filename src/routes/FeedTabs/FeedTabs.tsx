import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import {Colors, useTheme} from 'react-native-paper';
import LikedFeedScreen from 'screens/feed/LikedFeedScreen';
import MainFeedScreen from 'screens/feed/MainFeedScreen';
import {styles} from './FeedTabs.style';
import {IFeedTabsParamsList, ITabIcon} from './types';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const Tabs = createMaterialBottomTabNavigator<IFeedTabsParamsList>();

const {Navigator, Screen} = Tabs;

const FeedTabs = () => {
  const TabIcon = ({focused, name, color}: ITabIcon) => {
    return <MaterialCommunityIcons name={name} color={color} size={23} />;
  };
  const {colors} = useTheme();
  return (
    <Navigator
      shifting={true}
      initialRouteName="main-feed-screen"
      activeColor={colors.primary}
      inactiveColor={Colors.white}
      barStyle={{...styles.barStyle, backgroundColor: colors.surface}}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => {
          if (route.name === 'main-feed-screen') {
            return <TabIcon color={color} focused={focused} name="home" />;
          } else {
            return <TabIcon color={color} focused={focused} name="heart" />;
          }
        },
        tabBarLabel: route.name === 'main-feed-screen' ? 'Feed' : 'Liked Feed',
      })}>
      <Screen options={{}} name="main-feed-screen" component={MainFeedScreen} />
      <Screen name="liked-feed-screen" component={LikedFeedScreen} />
    </Navigator>
  );
};

export default FeedTabs;
