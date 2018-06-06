import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import Styles from './styles';

const Icon = ({ visible, checkmark }) => {
  const iconStyles = [Styles.icon];
  if (visible) {
    iconStyles.push(Styles.iconVisible);
  }
  return (
    <View style={iconStyles}>
      {checkmark ? (
        <Image
          source={require('./images/check.png')}
          style={Styles.checkIcon}
          resizeMode="contain"
        />
      ) : null}
    </View>
  );
};

Icon.propTypes = {
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
};
export default Icon;
