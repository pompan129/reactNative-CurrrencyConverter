import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Navigator from './config/routes';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#d57a66',
  $primaryGreen: '#00bd9d',
  $primaryPurple: '#9e768f',
  $white: '#fff',
  $border: '#e2e2e2',
  $inputText: '#797979',
  $disabled: '#f2f2f2',
  $darkText: '#343434',

  //  $outline: 1, // // TODO:
});

export default () => <Navigator />;
