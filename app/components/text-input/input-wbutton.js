import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, Text, View, TouchableHighlight } from 'react-native';
import Color from 'color';

import Styles from './styles';

const InputWithButton = (props) => {
  const { onPress, buttonText, editable = true } = props;
  const containerStyles = [Styles.container];
  // prettier-ignore
  const underlayColor = Color(Styles.$buttonBackgroundColor)
    .darken(Styles.$buttonBackgroundColorModifier);

  if (editable === false) {
    containerStyles.push(Styles.containerDisabled);
  }

  const buttonTextStyles = [Styles.buttonText];
  if (props.textColor) {
    buttonTextStyles.push({ color: props.textColor });
  }
  return (
    <View style={containerStyles}>
      <TouchableHighlight
        onPress={onPress}
        style={Styles.buttonContainer}
        underlayColor={underlayColor}
      >
        <Text style={buttonTextStyles}>{buttonText}</Text>
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
  textColor: PropTypes.string,
};

export default InputWithButton;
