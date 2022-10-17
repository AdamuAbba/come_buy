import React from 'react';
import {View} from 'react-native';
import {Avatar, Text, useTheme} from 'react-native-paper';
import {IUser} from 'utils/types';
import {styles} from './AvatarComp.styles';

const AvatarComp = ({imgUrl, name, bgColor, size}: IUser) => {
  const {colors} = useTheme();
  return (
    <View>
      <View style={{...styles.container, borderColor: colors.surface}}>
        <View style={styles.avatar}>
          <Avatar.Image
            size={size ? size : 65}
            source={imgUrl}
            style={{...styles.avatarImage, backgroundColor: bgColor}}
          />
        </View>
      </View>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default AvatarComp;
