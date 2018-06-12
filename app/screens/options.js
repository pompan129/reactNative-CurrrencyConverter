import React from 'react';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StatusBar, Platform, Linking } from 'react-native';
import { ListItem, Seperator } from '../components/list';
import { ConnectAlert } from '../components/alert';

const ICON_COLOR = '#868686';
const ICON_SIZE = 23;
const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

class Options extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func,
  };
  handleThemePress = () => {
    console.log('press theme');
    this.props.navigation.navigate('Themes');
  };
  handleSitePress = () => {
    Linking.openURL('http://fixer.io').catch(() =>
      this.props.alertWithType('error', 'Sorry', "Fixer.io Can't be opened"));
  };

  render() {
    return (
      <ScrollView>
        <StatusBar barStyle="default" translucent={false} />
        <ListItem
          onPress={this.handleThemePress}
          text="Themes"
          customeIcon={
            <Ionicons color={ICON_COLOR} size={ICON_SIZE} name={`${ICON_PREFIX}-arrow-forward`} />
          }
        />
        <Seperator />
        <ListItem
          onPress={this.handleSitePress}
          text="Fixer.io"
          customeIcon={
            <Ionicons color={ICON_COLOR} size={ICON_SIZE} name={`${ICON_PREFIX}-link`} />
          }
        />
        <Seperator />
      </ScrollView>
    );
  }
}

export default ConnectAlert(Options);
