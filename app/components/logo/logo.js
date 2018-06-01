import React from 'react';
import { View, Text, Image, ImageBackground, Keyboard, Animated, StyleSheet } from 'react-native';
import Styles from './styles';

const ANIMATION_DURATION = 250;

class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.containerImageWidth = new Animated.Value(Styles.$largeContainerSize);
    this.imageWidth = new Animated.Value(Styles.$largeImageSize);
  }
  componentDidMount() {
    this.keyboardShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardShow);
    this.keyboardHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardHide);
  }
  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }
  keyboardShow = () => {
    Animated.timing(this.imageWidth, {
      toValue: Styles.$smallImageSize,
      duration: ANIMATION_DURATION,
    }).start();

    Animated.timing(this.containerImageWidth, {
      toValue: Styles.$smallContainerSize,
      duration: ANIMATION_DURATION,
    }).start();

    /* Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: Styles.$smallContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.ImageWidth, {
        toValue: Styles.$smallImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start(); */
  };
  keyboardHide = () => {
    console.log('keyboard did hide');
  };
  render() {
    const containerImageStyle = [
      Styles.containerImage,
      { width: this.containerImageWidth, height: this.containerImageWidth },
    ];
    const imageStyle = [Styles.logo, { width: this.imageWidth }];
    return (
      <View style={Styles.container}>
        <Animated.View style={containerImageStyle}>
          <Animated.Image
            style={[StyleSheet.absoluteFill, containerImageStyle]}
            resizeMode="contain"
            source={require('./images/background.png')}
          />
          <Animated.Image
            resizeMode="contain"
            style={imageStyle}
            source={require('./images/logo.png')}
          />
        </Animated.View>
        <Text style={Styles.text}>Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;
