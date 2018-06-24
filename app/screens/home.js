import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';

import { Container } from '../components/container';
import { Logo } from '../components/logo';
import { InputWithButton } from '../components/text-input';
import { ClearButton } from '../components/button';
import { LastConverted } from '../components/text';
import { Header } from '../components/header';
import { swapCurrency, changeCurrencyAmount } from '../actions/currencies';

const TEMP_QUOTE_PRICE = '79.75';
const TEMP_CONVERSION_RATE = 0.7975;
const TEMP_CONVERSION_DATE = new Date();

class Home extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    amount: PropTypes.number,
    conversionRate: PropTypes.number,
    isFetching: PropTypes.bool,
    conversionDate: PropTypes.object,
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
    let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
    if (this.props.isFetching) {
      quotePrice = '...';
    }
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            buttonText={this.props.baseCurrency}
            onPress={this.handlePressBaseCurrency}
            defaultValue={this.props.amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
          />
          <InputWithButton
            buttonText={this.props.quoteCurrency}
            onPress={this.handlePressQuoteCurrency}
            editable={false}
            defaultValue={quotePrice.toString()}
          />
          <LastConverted
            date={this.props.conversionDate}
            quote={this.props.quoteCurrency}
            base={this.props.baseCurrency}
            conversionRate={this.props.conversionRate}
          />
          <ClearButton text="Reverse Currency" onPress={this.handleSwapCurrency} />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

function mapStateToProps({ currencies }) {
  const { baseCurrency, quoteCurrency, amount } = currencies;
  const conversionSelector = currencies.conversions[currencies.baseCurrency] || {};
  const rates = conversionSelector.rates || {};
  const conversionDate = conversionSelector.date ? new Date(conversionSelector.date) : new Date();
  return {
    baseCurrency,
    quoteCurrency,
    amount,
    conversionRate: rates[quoteCurrency] || 0,
    isFetching: conversionSelector.isFetching,
    conversionDate,
  };
}

export default connect(mapStateToProps)(Home);
