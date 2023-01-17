import CustomHeader from 'components/CustomHeader';
import FeedList from 'components/FeedList';
import React from 'react';
import {View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {IDashboardScreen} from 'screens/main/DashboardScreen/types';
import {styles} from './DashboardScreen.styles';

const DashboardScreen: IDashboardScreen = props => {
  const {colors} = useTheme();
  return (
    <View style={{...styles.container, backgroundColor: colors.primary}}>
      <CustomHeader {...props} />
      <FeedList />
    </View>
  );
};

export default DashboardScreen;
