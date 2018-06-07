import React from 'react';
import { ScrollView, StatusBar, Platform } from 'react-native';
import { ListItem, Seperator } from '../components/list';
import { Ionicons } from '@expo/vector-icons';

const ICON_COLOR = '#868686';
const ICON_SIZE = 23;
const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

class Options extends React.Component {
  handleThemePress = () => {
    console.log('press theme');
  };
  handleSitePress = () => {
    console.log('press site');
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

export default Options;