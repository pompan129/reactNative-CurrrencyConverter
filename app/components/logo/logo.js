import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import Styles from './styles';

const Logo = () => (
  <View style={Styles.container}>
    <ImageBackground
      style={Styles.containerImage}
      resizeMode="contain"
      source={require('./images/background.png')}
    >
      <Image resizeMode="contain" style={Styles.image} source={require('./images/logo.png')} />
    </ImageBackground>
    <Text style={Styles.text}>Currency Converter</Text>
  </View>
);

export default Logo;
