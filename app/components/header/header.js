import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image } from 'react-native';
import Styles from './styles';

const Header = ({ onPress }) => (
  <View style={Styles.container}>
    <TouchableOpacity style={Styles.button} onPress={onPress}>
      <Image resizeMode="contain" source={require('./images/gear.png')} style={Styles.icon} />
    </TouchableOpacity>
  </View>
);
Header.propTypes = {
  onPress: PropTypes.func,
};

export default Header;
