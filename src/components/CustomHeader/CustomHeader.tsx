import {StatusBar, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ICustomHeader} from 'components/CustomHeader/types';
import {styles} from './CustomHeader.style';
import {Surface, useTheme, Text} from 'react-native-paper';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const CustomHeader: ICustomHeader = props => {
  const {colors} = useTheme();

  const handleOnBackArrowPress = (): void => {
    props.navigation.navigate('auth-stack');
  };

  return (
    <Surface>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.surface} />
        <View style={styles.titleView}>
          <TouchableOpacity onPress={handleOnBackArrowPress}>
            <MaterialCommunityIcons name="arrow-left" size={27} color="white" />
          </TouchableOpacity>
          <Text style={styles.titleText}>All products</Text>
        </View>
        <View style={styles.iconView}>
          <MaterialCommunityIcons name="magnify" size={27} color="white" />
          <MaterialCommunityIcons name="cart-outline" size={27} color="white" />
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={27}
            color="white"
          />
        </View>
      </View>
      <View style={styles.listHeader}>
        <View style={styles.menuView}>
          <MaterialCommunityIcons name="menu" size={27} color="white" />
        </View>
        <View style={styles.filterPointView}>
          <Text style={styles.filterText}>POPULARITY</Text>
          <MaterialCommunityIcons name="chevron-down" size={27} color="white" />
        </View>
        <View style={styles.filterView}>
          <Text style={styles.filterText}>FILTERS</Text>
        </View>
      </View>
    </Surface>
  );
};

export default CustomHeader;
