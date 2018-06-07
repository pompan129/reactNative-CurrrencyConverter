import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, View, StatusBar } from 'react-native';
import Currencies from '../data/currencies';
import { ListItem, Seperator } from '../components/list';

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };
  handlePress = () => {
    console.log('row press');
    this.props.navigation.goBack(null);
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={Currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === TEMP_CURRENT_CURRENCY}
              onPress={this.handlePress}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Seperator}
        />
      </View>
    );
  }
}

export default CurrencyList;
