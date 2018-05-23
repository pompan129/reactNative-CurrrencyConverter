import React from 'react';
import { StatusBar } from 'react-native';
import { Container } from '../components/container';
import { Logo } from '../components/logo';
import { InputWithButton } from '../components/text-input';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GPB';
const TEMP_BASE_PRICE = '100';
const TEMP_BQUOTE_PRICE = '79.75';

class Home extends React.Component {
  handlePressQuoteCurrency = () => {
    console.log('press quote');
  };
  handlePressBaseCurrency = () => {
    console.log('press base');
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <InputWithButton buttonText={TEMP_BASE_CURRENCY} onPress={this.handlePressBaseCurrency} />
        <InputWithButton
          buttonText={TEMP_QUOTE_CURRENCY}
          onPress={this.handlePressQuoteCurrency}
          editable={false}
        />
      </Container>
    );
  }
}

export default Home;
