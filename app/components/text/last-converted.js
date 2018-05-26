import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import Moment from 'moment';
import Styles from './styles';

const LastConverted = ({
  base, conversionRate, quote, date,
}) => (
  <Text style={Styles.smallText}>
    1 {base} = {conversionRate} {quote} as of {Moment(date).format('MMMM D, YYYY')}
  </Text>
);

export default LastConverted;

LastConverted.propTypes = {
  date: PropTypes.object,
  base: PropTypes.string,
  quote: PropTypes.string,
  conversionRate: PropTypes.number,
};
