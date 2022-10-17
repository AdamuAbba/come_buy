import LikedFeedCount from 'components/LikedFeedCount';
import React from 'react';
import {StatusBar} from 'react-native';
import {Appbar, Text, useTheme} from 'react-native-paper';
import {ICustomHeader} from './types';

const CustomHeader = ({
  navigation,
  back,
  route,
}: ICustomHeader): JSX.Element => {
  const TitleComp = ({title}: {title: string}): JSX.Element => {
    return <Text>{title}</Text>;
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
          <Appbar.Content title={<TitleComp title="Come buy" />} />
          <LikedFeedCount />
        </>
      ) : (
        <Appbar.Content title={<TitleComp title="Product details" />} />
      )}
    </Appbar.Header>
  );
};

export default CustomHeader;
