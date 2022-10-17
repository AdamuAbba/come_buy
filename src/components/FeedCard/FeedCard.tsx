import {IFeedCard} from './types';
import React, {memo, useCallback, useRef} from 'react';
import {Image, View} from 'react-native';
import {Avatar, Colors, IconButton, Surface, Text} from 'react-native-paper';
import {styles} from './FeedCard.styles';
import {
  GestureDetector,
  Gesture,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import {useAppDispatch, useAppSelector} from 'utils/hooks';
import {addToLikedFeed, selectLikedFeed} from 'features/feed';
import Animated from 'react-native-reanimated';

const FeedCard = ({item, navigation}: IFeedCard) => {
  const {id, image, price, title} = item;
  const shortTitle = title.split(' ', 3).join(' ');
  const likedFeed = useAppSelector(selectLikedFeed);
  const dispatch = useAppDispatch();

  const handleAddToLikePress = useCallback(() => {
    dispatch(addToLikedFeed(item));
  }, []);
  const handleSingleProductPress = useCallback(() => {
    navigation.navigate('single-product-screen', {product: item});
  }, []);

  const doubleTapRef = useRef<TapGestureHandler>(null);

  const randomUser = () => {
    if (id % 2 === 0) {
      return require('assets/images/oga_monday.png');
    } else if (id % 2 !== 0) {
      return require('assets/images/iya_bisi.png');
    }
  };
  return (
    <Surface style={styles.container}>
      <View style={styles.titleView}>
        <View style={styles.avatarView}>
          <Avatar.Image
            source={randomUser()}
            style={styles.avatarImage}
            size={40}
          />
        </View>
        <View>
          <Text>{id % 2 === 0 ? 'Oga monday' : 'iya bisi'}</Text>
          <Text>{shortTitle}...</Text>
        </View>
      </View>
      <TapGestureHandler
        waitFor={doubleTapRef}
        numberOfTaps={1}
        onActivated={handleSingleProductPress}>
        <TapGestureHandler
          maxDelayMs={250}
          ref={doubleTapRef}
          numberOfTaps={2}
          onActivated={handleAddToLikePress}>
          <Animated.View style={styles.imageView}>
            <Image
              source={{
                uri: image,
              }}
              style={styles.cardImage}
              resizeMode="contain"
            />
          </Animated.View>
        </TapGestureHandler>
      </TapGestureHandler>
      <View style={styles.likeBtnView}>
        <IconButton
          icon="heart"
          color={likedFeed.includes(item) ? Colors.red500 : Colors.white}
          size={20}
          onPress={() => console.log('Pressed')}
        />
        <Text>₦{price}</Text>
      </View>
    </Surface>
  );
};

export default memo(FeedCard);
