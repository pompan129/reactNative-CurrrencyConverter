import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StatusBar, Platform } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ListItem, Seperator } from '../components/list';

const Styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $green: '$primaryGreen',
  $orange: '$primaryOrange',
  $purple: '$primaryPurple',
});

class Themes extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };
  handleThemePress = (color) => {
    console.log('press theme', color);
    this.props.navigation.goBack(null);
  };

  render() {
    return (
      <ScrollView>
        <StatusBar barStyle="default" translucent={false} />
        <ListItem
          onPress={() => this.handleThemePress(Styles.$blue)}
          text="Blue"
          selected
          checkmark={false}
          iconBackground={Styles.$blue}
        />
        <Seperator />
        <ListItem
          onPress={() => this.handleThemePress(Styles.$orange)}
          text="Orange"
          selected
          checkmark={false}
          iconBackground={Styles.$orange}
        />
        <Seperator />
        <ListItem
          onPress={() => this.handleThemePress(Styles.$green)}
          text="Green"
          selected
          checkmark={false}
          iconBackground={Styles.$green}
        />
        <Seperator />
        <ListItem
          onPress={() => this.handleThemePress(Styles.$purple)}
          text="Purple"
          selected
          checkmark={false}
          iconBackground={Styles.$purple}
        />
        <Seperator />
      </ScrollView>
    );
  }
}

export default Themes;
