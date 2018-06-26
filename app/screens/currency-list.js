import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import Currencies from '../data/currencies';
import { ListItem, Seperator } from '../components/list';
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
  };
  handlePress = (currency) => {
    console.log('handel press- currency list', currency); // // TODO:
    const { type } = this.props.navigation.state.params;
    if (type === 'base') {
      this.props.dispatch(changeBaseCurrency(currency));
    } else if (type === 'quote') {
      this.props.dispatch(changeQuoteCurrency(currency));
    }
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
              onPress={() => this.handlePress(item)}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Seperator}
        />
      </View>
    );
  }
}

export default connect()(CurrencyList);
