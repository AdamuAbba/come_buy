import {View, Image} from 'react-native';
import React from 'react';
import {IGreetingView} from 'components/GreetingView/types';
import {Text} from 'react-native-paper';
import {styles} from './GreetingView.styles';

const GreetingView: IGreetingView = props => {
  const Logo = require('assets/images/eCommerce.png');
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Logo} />
      <View style={styles.textView}>
        <Text>{props.title}</Text>
        <Text>{props.description}</Text>
      </View>
    </View>
  );
};

export default GreetingView;
