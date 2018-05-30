import React from 'react';
import { View, Text, Image, ImageBackground, Keyboard, Animated } from 'react-native';
import Styles from './styles';

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
    console.log('keyboard did show');
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
        <Animated.Image
          style={containerImageStyle}
          resizeMode="contain"
          source={require('./images/background.png')}
        />
        <Animated.Image
          resizeMode="contain"
          style={imageStyle}
          source={require('./images/logo.png')}
        />

        <Text style={Styles.text}>Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;
