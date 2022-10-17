import LottieView from 'lottie-react-native';
import React from 'react';
import {View} from 'react-native';
import {styles} from './LoadingComp.style';

const LoadingComp = () => {
  return (
    <View style={styles.container} testID="main-view">
      <LottieView
        autoPlay={true}
        loop={true}
        style={styles.lottie}
        source={require('assets/images/loader.json')}
      />
    </View>
  );
};

export default LoadingComp;
