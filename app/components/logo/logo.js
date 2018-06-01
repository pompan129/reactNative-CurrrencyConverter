import React from 'react';
import { View, Text, Image, Keyboard, Animated, StyleSheet, Platform } from 'react-native';
import Styles from './styles';

const ANIMATION_DURATION = 250;

class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.containerImageWidth = new Animated.Value(Styles.$largeContainerSize);
    this.imageWidth = new Animated.Value(Styles.$largeImageSize);
  }
  componentDidMount() {
    let showListener = 'keyboardWillShow';
    let hideListener = 'keyboardWillHide';
    if (Platform.OS === 'android') {
      showListener = 'keyboardDidShow';
      hideListener = 'keyboardDidHide';
    }
    this.keyboardShowListener = Keyboard.addListener(showListener, this.keyboardShow);
    this.keyboardHideListener = Keyboard.addListener(hideListener, this.keyboardHide);
  }
  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }
  keyboardShow = () => {
    Animated.parallel([
      Animated.timing(this.imageWidth, {
        toValue: Styles.$smallImageSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.containerImageWidth, {
        toValue: Styles.$smallContainerSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };
  keyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.imageWidth, {
        toValue: Styles.$largeImageSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.containerImageWidth, {
        toValue: Styles.$largeContainerSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
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
