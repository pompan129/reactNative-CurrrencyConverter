import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar, KeyboardAvoidingView, Text } from 'react-native';
import { connect } from 'react-redux';

import { Container } from '../components/container';
import { Logo } from '../components/logo';
import { InputWithButton } from '../components/text-input';
import { ClearButton } from '../components/button';
import { LastConverted } from '../components/text';
import { Header } from '../components/header';
import { swapCurrency, changeCurrencyAmount } from '../actions/currencies';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GPB';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.75';
const TEMP_CONVERSION_RATE = 0.7975;
const TEMP_CONVERSION_DATE = new Date();

class Home extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
  };
  handleTextChange = (amount) => {
    this.props.dispatch(changeCurrencyAmount(amount));
  };
  handlePressQuoteCurrency = () => {
    console.log('press quote'); // // TODO
    this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency' });
  };
  handlePressBaseCurrency = () => {
    console.log('press base'); // TODO:
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency' });
  };

  handleSwapCurrency = () => {
    this.props.dispatch(swapCurrency());
  };

  handleOptionsPress = () => {
    console.log('press Options'); // TODO:
    this.props.navigation.navigate('Options');
  };

  render() {
    console.log('Home store=', this.props.currencies);
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            buttonText={TEMP_BASE_CURRENCY}
            onPress={this.handlePressBaseCurrency}
            defaultValue={TEMP_BASE_PRICE}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
          />
          <InputWithButton
            buttonText={TEMP_QUOTE_CURRENCY}
            onPress={this.handlePressQuoteCurrency}
            editable={false}
            defaultValue={TEMP_QUOTE_PRICE}
          />
          <LastConverted
            date={TEMP_CONVERSION_DATE}
            quote={TEMP_QUOTE_CURRENCY}
            base={TEMP_BASE_CURRENCY}
            conversionRate={TEMP_CONVERSION_RATE}
          />
          <ClearButton text="Reverse Currency" onPress={this.handleSwapCurrency} />
        </KeyboardAvoidingView>
        <Text>{this.props.currencies.amount}</Text>
      </Container>
    );
  }
}

function mapStateToProps({ currencies }) {
  // todo all needed?
  return { currencies };
}

export default connect(mapStateToProps)(Home);
