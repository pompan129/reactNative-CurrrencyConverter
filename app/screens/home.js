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
    primaryColor: PropTypes.string,
  };
  handleTextChange = (amount) => {
    this.props.dispatch(changeCurrencyAmount(amount));
  };
  handlePressQuoteCurrency = () => {
    console.log('press quote'); // // TODO
    this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency', type: 'quote' });
  };
  handlePressBaseCurrency = () => {
    console.log('press base'); // TODO:
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency', type: 'base' });
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
    console.log('home.js props: ', this.props);
    return (
      <Container backgroundColor={this.props.primaryColor}>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo tintColor={this.props.primaryColor} />
          <InputWithButton
            buttonText={this.props.baseCurrency}
            onPress={this.handlePressBaseCurrency}
            defaultValue={this.props.amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
            textColor={this.props.primaryColor}
          />
          <InputWithButton
            buttonText={this.props.quoteCurrency}
            onPress={this.handlePressQuoteCurrency}
            editable={false}
            defaultValue={quotePrice.toString()}
            textColor={this.props.primaryColor}
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

function mapStateToProps(state) {
  const { currencies, theme } = state;
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
    primaryColor: theme.primaryColor,
  };
}

export default connect(mapStateToProps)(Home);
