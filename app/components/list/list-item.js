import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';
import Icon from './icon';
import Styles from './styles';

const ListItem = ({
  text,
  onPress,
  selected = false,
  visible = true,
  checkmark = true,
  customeIcon = null,
  iconBackground,
}) => (
  <TouchableHighlight onPress={onPress} underlayColor={Styles.$underlayColor}>
    <View style={Styles.row}>
      <Text style={Styles.text}>{text}</Text>
      {selected ? (
        <Icon visible={visible} checkmark={checkmark} iconBackground={iconBackground} />
      ) : (
        <Icon />
      )}
      {customeIcon}
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  selected: PropTypes.bool,
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  customeIcon: PropTypes.element,
  iconBackground: PropTypes.string,
};

export default ListItem;
