import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import CurrencyList from './screens/currency-list';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#fff',
  $border: '#e2e2e2',
  $inputText: '#797979',
  $disabled: '#f2f2f2',

  //  $outline: 1, // // TODO:
});

export default () => <CurrencyList />;
