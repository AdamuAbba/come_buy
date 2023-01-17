import {MaterialCommunityIcons} from '@expo/vector-icons';
import React, {memo} from 'react';
import {ImageBackground, View} from 'react-native';
import {Button, Colors, Text, useTheme} from 'react-native-paper';
import {getImage, validateLocation} from 'utils/functions';
import {styles} from './FeedCard.styles';
import {IFeedCard} from './types';

const FeedCard = ({item}: IFeedCard) => {
  const {colors} = useTheme();
  const {price, title, image} = item;

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={getImage(image)}
        style={styles.imageView}>
        <MaterialCommunityIcons
          name="cards-heart-outline"
          size={24}
          color={colors.error}
        />
      </ImageBackground>
      <View style={styles.titleView}>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          theme={{colors: {text: Colors.black}}}>
          {title}
        </Text>
        <View>
          <Text style={styles.price} theme={{colors: {text: Colors.black}}}>
            $ {price}
          </Text>
        </View>
      </View>
      <Button
        onPress={validateLocation}
        labelStyle={styles.buttonText}
        style={styles.button}
        mode="contained"
        color={colors.surface}>
        PLACE ORDER
      </Button>
    </View>
  );
};

export default memo(FeedCard);
