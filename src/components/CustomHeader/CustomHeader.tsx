import LikedFeedCount from 'components/LikedFeedCount';
import React from 'react';
import {StatusBar} from 'react-native';
import {Appbar, Text, useTheme} from 'react-native-paper';
import {ICustomHeader} from './types';
import {styles} from './CustomHeader.style';

const CustomHeader = ({
  navigation,
  back,
  route,
}: ICustomHeader): JSX.Element => {
  const TitleComp = (): JSX.Element => {
    return <Text>Come n' buy</Text>;
  };
  const {name} = route;
  const {colors} = useTheme();
  const tenPercentOfStatusBarHeight = 0.1 * StatusBar.currentHeight;
  return (
    <Appbar.Header
      statusBarHeight={tenPercentOfStatusBarHeight}
      theme={{colors: {primary: colors.surface}}}>
      <StatusBar backgroundColor={colors.surface} />
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      {name === 'feed-tabs' ? (
        <>
          <Appbar.Content title={<TitleComp />} />
          <LikedFeedCount />
        </>
      ) : (
        <Appbar.Content title="product details" />
      )}
    </Appbar.Header>
  );
};

export default CustomHeader;
