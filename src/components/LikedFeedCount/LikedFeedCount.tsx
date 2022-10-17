import {View} from 'react-native';
import React from 'react';
import {Surface, Text, Colors, useTheme} from 'react-native-paper';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useAppSelector} from 'utils/hooks';
import {selectLikedFeed} from 'features/feed';
import {styles} from './LikedFeedCount.styles';

const LikedFeedCount = () => {
  const likedFeed = useAppSelector(selectLikedFeed);
  const {colors} = useTheme();
  return (
    <View style={styles.heartView}>
      {likedFeed.length < 1 ? null : (
        <Surface
          theme={{colors: {surface: Colors.white}}}
          style={styles.countView}>
          <Text
            style={styles.countText}
            theme={{colors: {text: colors.surface}}}>
            {likedFeed.length}
          </Text>
        </Surface>
      )}
      <MaterialCommunityIcons
        name="heart"
        size={25}
        color={likedFeed.length < 1 ? Colors.white : Colors.red400}
      />
    </View>
  );
};

export default LikedFeedCount;
