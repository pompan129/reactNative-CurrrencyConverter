import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, Text, View, TouchableHighlight } from 'react-native';
import Color from 'color';

import Styles from './styles';

const InputWithButton = (props) => {
  const { onPress, buttonText, editable = true } = props;
  const containerStyles = [Styles.container];
  const underlayColor = 'green';

  if (editable === false) {
    containerStyles.push(Styles.containerDisabled);
  }
  return (
    <View style={containerStyles}>
      <TouchableHighlight
        onPress={onPress}
        style={Styles.buttonContainer}
        underlayColor={underlayColor}
      >
        <Text style={Styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={Styles.border} />
      <TextInput style={Styles.input} underlineColorAndroid="transparent" {...props} />
    </View>
  );
};
InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
};

export default InputWithButton;
