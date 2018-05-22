import React from 'react';
import { StatusBar } from 'react-native';
import { Container } from '../components/container';

export default () => (
  <Container>
    <StatusBar translucent={false} barStyle="light-content" />
  </Container>
);
