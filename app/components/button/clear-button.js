import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import Styles from './styles';

const ClearButton = ({ text, onPress }) => (
  <TouchableOpacity style={Styles.container} onPress={onPress}>
    <View style={Styles.wrapper}>
      <Image resizeMode="contain" source={require('./images/icon.png')} style={Styles.icon} />
      <Text style={Styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

export default ClearButton;

ClearButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};
